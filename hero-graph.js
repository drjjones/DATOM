/* ============================================================
   DATOM, hero-graph.js: the homepage hero.

   Each featured claim's own knowledge graph, staged, one claim after another:
   the claim is asked, the fog parts (fog-bg.js), the real graph assembles
   (embed/record-graph.js, the dashboard's DatomerKnowledgeGraph3D, the same one
   record.html draws), the findings that test the claim directly leave the graph
   for the scale, the count is weighed into a range, the graph's nucleus comes
   down as the weighted point, and the range lands on a verdict.

   Rules this file keeps:
   - Every number comes from the page's generated #featured-entries list (the
     same data the record card prints, checked by featuredRecordGate.test.ts) or
     from the graph's own counts. Nothing is typed here.
   - The raw share is printed as a count and never plotted on the scale (founder,
     2026-10-21). Only the weighted range and the weighted point are positioned.
     carouselEntriesBindings.test.ts fails if this file ever reads the raw share.
   - The static record card (#featured-entry) stays in the page. It shows when
     this cannot run (no script, no WebGL, no graph built for a claim).
   - The answer box belongs to the visitor: the example types into a layer over
     it, never into the input, and stops the moment the box is used.
   ============================================================ */
(function () {
  'use strict';
  var host = document.getElementById('hero-ev'), dataEl = document.getElementById('featured-entries'),
      form = document.getElementById('hero-ask'), input = document.getElementById('hero-ask-input');
  if (!host || !dataEl || !form || !input || !window.requestAnimationFrame || !window.fetch || !window.Promise || !window.IntersectionObserver) return;
  var all; try { all = JSON.parse(dataEl.textContent); } catch (e) { return; }
  if (!all || !all.length) return;

  var VERSION = '20261118a';                               // bump with the graphs and the embed
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  function srcOf(e) { return 'graphs/' + e.entryId + '.json?v=' + VERSION; }

  // Only claims whose graph is built take part.
  Promise.all(all.map(function (e) {
    return fetch(srcOf(e), { method: 'HEAD' }).then(function (res) { return res.ok ? e : null; }).catch(function () { return null; });
  })).then(function (found) {
    var recs = found.filter(Boolean);
    if (recs.length) start(recs);
  });

  var SKELETON =
    '<canvas id="ev-canvas" aria-hidden="true"></canvas>' +
    '<p class="ev-claim" id="ev-claim" aria-hidden="true"></p>' +
    '<div class="ev-stage" id="ev-stage" aria-hidden="true"><div class="rg" id="record-graph" data-hero data-defer></div></div>' +
    '<p class="ev-cap" id="ev-cap" aria-hidden="true">&nbsp;</p>' +
    '<div class="ev-track" id="ev-track" aria-hidden="true">' +
      '<div class="ev-zone z-u">Unsupported</div><div class="ev-zone z-c">Contested</div><div class="ev-zone z-s">Supported</div>' +
      '<div class="ev-range" id="ev-range"></div><div class="ev-tick" id="ev-tick"></div>' +
    '</div>' +
    '<div class="ev-scale" aria-hidden="true"><span>0% agree</span><span>100%</span></div>' +
    '<p class="ev-verdict" id="ev-verdict"><span class="v" aria-hidden="true"></span><span class="g" aria-hidden="true"></span><a href="record.html">Read the record &rarr;</a></p>' +
    '<p class="sr" id="ev-sr" aria-live="polite"></p>' +
    '<div class="ev-ctl" id="ev-ctl"></div>';

  function start(recs) {
    var $ = function (id) { return document.getElementById(id); };
    host.innerHTML = SKELETON; host.hidden = false;
    document.documentElement.classList.add('hero-live');
    var field = document.createElement('span'); field.className = 'ab-field';
    input.parentNode.insertBefore(field, input); field.appendChild(input);
    var demo = document.createElement('span'); demo.className = 'ab-demo'; demo.setAttribute('aria-hidden', 'true'); field.appendChild(demo);

    var ev = host, claim = $('ev-claim'), cap = $('ev-cap'), stage = $('ev-stage'), track = $('ev-track'), graphEl = $('record-graph'),
        range = $('ev-range'), tick = $('ev-tick'), verdict = $('ev-verdict'), sr = $('ev-sr'), ctl = $('ev-ctl'),
        cv = $('ev-canvas'), ctx = cv.getContext('2d'), btn = form.querySelector('button');
    var zones = { Unsupported: ev.querySelector('.z-u'), Contested: ev.querySelector('.z-c'), Supported: ev.querySelector('.z-s') };
    var zoneSpan = { Unsupported: [0, 45], Contested: [45, 55], Supported: [55, 100] };
    var tokenOf = { Supported: '--signal', Contested: '--verdict-mixed', Unsupported: '--verdict-contra' };
    var idx = 0, r = recs[0], n = 0, T = null, run = 0, scene = null, raf = 0, apiP = null, mountedId = null,
        paused = false, userTyping = false, inView = false, waiting = false, started = false, pp = null;

    /* ── small helpers ─────────────────────────────────────────────── */
    function pct(v) { return v + '%'; }
    function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
    function tok(name) { return getComputedStyle(ev).getPropertyValue(name).trim(); }
    function rgbOf(css) {                                   // any CSS colour to [r,g,b], so the canvas follows the tokens
      var c = document.createElement('canvas'); c.width = c.height = 1;
      var x = c.getContext('2d'); x.fillStyle = css || '#888'; x.fillRect(0, 0, 1, 1);
      var d = x.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2]];
    }
    function sprite(c) {                                    // one finding on its way to the scale: a crisp core in a soft halo
      var s = document.createElement('canvas'); s.width = s.height = 64; var x = s.getContext('2d');
      var g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, rgba(c, 0.42)); g.addColorStop(0.45, rgba(c, 0.12)); g.addColorStop(1, rgba(c, 0));
      x.fillStyle = g; x.fillRect(0, 0, 64, 64);
      x.fillStyle = rgba(c, 1); x.beginPath(); x.arc(32, 32, 9, 0, Math.PI * 2); x.fill();
      return s;
    }
    var C = { agree: rgbOf(tok('--signal')), dis: rgbOf(tok('--verdict-contra')), ink: rgbOf(tok('--ink')), light: rgbOf(tok('--accent') || '#06b6d4'), vc: [0, 0, 0] };
    C.sprite = { agree: sprite(C.agree), dis: sprite(C.dis) };

    /* ── the real knowledge graph ──────────────────────────────────── */
    function loadApi() {                                    // about a megabyte with three.js: fetched once, after the page is up
      if (!apiP) {
        apiP = import('./embed/record-graph.js?v=' + VERSION).then(function () {
          return new Promise(function (res) {
            var t0 = Date.now();
            (function wait() { if (window.datomRecordGraph) return res(window.datomRecordGraph); if (Date.now() - t0 > 6000) return res(null); setTimeout(wait, 50); })();
          });
        }).catch(function () { return null; });
      }
      return apiP;
    }
    function mountGraph(rec) {                              // mounting again replays the graph's own assembly
      return loadApi().then(function (api) {
        if (!api) return null;
        graphEl.setAttribute('data-src', srcOf(rec));
        return api.mount();
      }).then(function (c) {
        if (c) { mountedId = rec.entryId; graphEl.classList.add('on'); }
        return c;
      });
    }
    function tell(name, detail) { graphEl.dispatchEvent(detail ? new CustomEvent(name, { detail: detail }) : new Event(name)); }

    /* ── the canvas over it: the claim's seed, the pour onto the scale, the bloom ── */
    var T_FALL = 4300, F_STAG = 13, F_DUR = 850;             // ms after the claim is sent; the graph has assembled by T_FALL
    function select(i) {
      idx = i; r = recs[i]; n = r.supports + r.contradicts;
      var weigh = T_FALL + n * F_STAG + F_DUR + 700;
      T = { direct: T_FALL - 600, count: T_FALL + 450, weigh: weigh, verdict: weigh + 1350, back: weigh + 2550, end: weigh + 5550 };
      var vt = tokenOf[r.verdictLabel] || '--faint';
      ev.style.setProperty('--vc', 'var(' + vt + ')'); C.vc = rgbOf(tok(vt));
      [].forEach.call(ctl.querySelectorAll('.pick'), function (b, k) { b.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    }
    function build() {
      var parts = [];
      for (var i = 0; i < n; i++) {
        var ang = Math.random() * Math.PI * 2, dist = Math.sqrt(Math.random());
        parts.push({ dis: i >= r.supports,                   // agree first, then against
                     ox: Math.cos(ang) * dist, oy: Math.sin(ang) * dist * 0.7, s: 2.3 + Math.random() * 1.1 });
      }
      parts.map(function (_, j) { return j; })
        .sort(function (a, b) { return Math.abs(a - (n - 1) / 2) - Math.abs(b - (n - 1) / 2); })
        .forEach(function (j, rank) { parts[j].rank = rank; });   // they pour from the middle outward
      return parts;
    }
    function geom() {
      var c = cv.getBoundingClientRect(), s = stage.getBoundingClientRect(), t = track.getBoundingClientRect(), b = btn.getBoundingClientRect();
      return { w: c.width, h: c.height, cx: s.left + s.width / 2 - c.left, cy: s.top + s.height / 2 - c.top, rx: Math.min(s.width * 0.34, s.height * 0.5),
               tx: t.left - c.left, ty: t.top - c.top, tw: t.width, th: t.height, vx: s.left + s.width / 2, vy: s.top + s.height / 2,
               bx: b.left + b.width / 2 - c.left, by: b.top + b.height / 2 - c.top };
    }
    // The findings wait above the scale as a counted group, centred, NOT spread along its axis:
    // a count is printed, never plotted as a position on the scale.
    function slot(i, g) {
      var pitch = g.tw < 420 ? 7 : 9, rows = Math.max(1, Math.ceil(n * pitch / (g.tw * 0.6))), cols = Math.ceil(n / rows);
      return { x: g.tx + g.tw / 2 + (Math.floor(i / rows) - (cols - 1) / 2) * pitch, y: g.ty - 9 - (i % rows) * pitch };
    }
    function posAt(p, i, el, g) {                           // a pure function of time, so trails cost nothing to keep
      var fx = g.cx + (p.dx !== undefined ? p.dx : p.ox * g.rx * 0.5), fy = g.cy + (p.dy !== undefined ? p.dy : p.oy * g.rx * 0.5);   // where it was in the graph
      if (el < T_FALL) return { x: fx, y: fy, a: 0, moving: false };
      var tf = T_FALL + p.rank * F_STAG;
      if (el < tf) return { x: fx, y: fy, a: 1, moving: false };                        // it has left the graph and waits its turn
      var s = slot(i, g), f = clamp((el - tf) / F_DUR);
      if (f < 1) {
        var k = easeInOut(f), u = 1 - k;
        var ax = g.cx + (fx - g.cx) * 0.25, ay = fy + (s.y - fy) * 0.45;                // drawn in toward the axis,
        var bx = g.cx + (s.x - g.cx) * 0.4, by = s.y - 44;                              // then fanned out over the scale: a pour
        var c0 = u * u * u, c1 = 3 * u * u * k, c2 = 3 * u * k * k, c3 = k * k * k;
        return { x: c0 * fx + c1 * ax + c2 * bx + c3 * s.x, y: c0 * fy + c1 * ay + c2 * by + c3 * s.y, a: 1, moving: true };
      }
      var w = clamp((el - T.weigh - p.rank * 6) / 900);
      if (w <= 0) return { x: s.x, y: s.y, a: 1, moving: false };
      var kw = easeInOut(w);                                 // weighed: each one sinks into the range and becomes part of it
      var ex = g.tx + (r.rangeLoPct + (r.rangeHiPct - r.rangeLoPct) * (i + 0.5) / n) / 100 * g.tw, ey = g.ty + g.th / 2;
      return { x: s.x + (ex - s.x) * kw, y: s.y + (ey - s.y) * kw, a: 1 - kw, moving: w < 1 };
    }
    function drawDot(p, i, q, el, g) {
      if (q.a < 0.01) return;
      var size = p.s * (g.tw < 420 ? 0.82 : 1), col = p.dis ? C.dis : C.agree;
      if (q.moving) {
        var px = q.x, py = q.y; ctx.lineCap = 'round';
        for (var t = 1; t <= 4; t++) {                       // a short tail that thins and fades
          var qq = posAt(p, i, el - t * 22, g);
          if (qq.a === 0) break;
          ctx.strokeStyle = rgba(col, 0.3 * q.a * (1 - t / 5)); ctx.lineWidth = size * (0.9 - t * 0.17);
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(qq.x, qq.y); ctx.stroke(); px = qq.x; py = qq.y;
        }
      }
      var R = size * 3.56;
      ctx.globalAlpha = q.a; ctx.drawImage(C.sprite[p.dis ? 'dis' : 'agree'], q.x - R, q.y - R, R * 2, R * 2); ctx.globalAlpha = 1;
      var since = el - (T_FALL + p.rank * F_STAG + F_DUR);   // a ripple where it lands
      if (since >= 0 && since < 420) {
        ctx.strokeStyle = rgba(col, 0.5 * (1 - since / 420)); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(q.x, q.y, size + since / 420 * 9, 0, Math.PI * 2); ctx.stroke();
      }
    }
    function draw() {
      var g = geom(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (cv.width !== Math.round(g.w * dpr) || cv.height !== Math.round(g.h * dpr)) { cv.width = Math.round(g.w * dpr); cv.height = Math.round(g.h * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, g.w, g.h);
      if (!scene) return;
      if (window.datomFog) { if (inView) window.datomFog.clear(g.vx, g.vy, Math.max(250, g.rx * 2.5)); else window.datomFog.release(); }   // the fog stays parted around the graph
      if (scene.rest) return;
      var el = scene.el, parts = scene.parts, i;

      var seed = easeOut(clamp(el / 450));                   // the claim drops out of the box to where the graph's nucleus forms
      var hx = g.bx + (g.cx - g.bx) * seed, hy = g.by + (g.cy - g.by) * seed;
      var nk = easeInOut(clamp((el - T.weigh) / 900));       // and later comes down as the weighted point
      var nx = hx + (g.tx + r.weightedPct / 100 * g.tw - hx) * nk, ny = hy + (g.ty + g.th / 2 - hy) * nk;
      var nucA = Math.max(clamp(el / 160) * (1 - clamp((el - 550) / 500)), clamp((el - T.weigh + 200) / 250) * (1 - clamp((el - T.weigh - 900) / 250)));
      if (nucA > 0.01) {
        var gl = ctx.createRadialGradient(nx, ny, 0, nx, ny, 30);
        gl.addColorStop(0, rgba(C.light, 0.42 * nucA)); gl.addColorStop(1, rgba(C.light, 0));
        ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(nx, ny, 30, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = rgba(nk > 0 ? C.vc : C.ink, nucA); ctx.beginPath(); ctx.arc(nx, ny, 5.5 - 0.5 * nk, 0, Math.PI * 2); ctx.fill();
      }
      for (i = 0; i < parts.length; i++) drawDot(parts[i], i, posAt(parts[i], i, el, g), el, g);

      var bloom = (el - T.verdict) / 1000;                   // one soft bloom where the range lands
      if (bloom >= 0 && bloom < 1) {
        var z = zoneSpan[r.verdictLabel] || [0, 100], x0 = g.tx + z[0] / 100 * g.tw, x1 = g.tx + z[1] / 100 * g.tw;
        ctx.save(); ctx.shadowColor = rgba(C.vc, 0.5 * (1 - bloom)); ctx.shadowBlur = 28;
        ctx.fillStyle = rgba(C.vc, 0.2 * (1 - bloom)); ctx.fillRect(x0, g.ty - 10 * bloom, x1 - x0, g.th + 20 * bloom); ctx.restore();
      }
    }
    // One clock for the picture and the words: the cues fire off the same elapsed time the
    // canvas is drawn from, and a background tab pauses both together instead of skipping ahead.
    function loop(now) {
      raf = 0; if (!scene || scene.rest) return;
      scene.el += Math.min(now - scene.last, 60); scene.last = now;
      while (scene && !scene.rest && scene.cues.length && scene.el >= scene.cues[0].t) scene.cues.shift().fn();
      if (!scene || scene.rest) return;
      draw(); raf = requestAnimationFrame(loop);
    }
    function startScene(cues) { cancelAnimationFrame(raf); scene = { parts: build(), el: 0, last: performance.now(), cues: cues }; raf = requestAnimationFrame(loop); }
    function restScene() { cancelAnimationFrame(raf); raf = 0; scene = { rest: true }; draw(); }
    function stopScene() { cancelAnimationFrame(raf); raf = 0; scene = null; if (window.datomFog) window.datomFog.release(); draw(); }

    /* ── the page around it ────────────────────────────────────────── */
    function reset() {
      [range, tick, verdict, claim, graphEl].forEach(function (el) { el.classList.remove('on'); });
      Object.keys(zones).forEach(function (k) { zones[k].classList.remove('active'); });
      cap.innerHTML = '&nbsp;'; form.classList.remove('sending');
    }
    function setDemo(text, caret) {
      if (userTyping) { demo.classList.add('off'); form.classList.remove('demoing'); return; }
      demo.classList.remove('off'); form.classList.add('demoing');
      demo.textContent = '';
      var b = document.createElement('b'); b.textContent = text; demo.appendChild(b);
      if (caret) demo.appendChild(document.createElement('i'));
      demo.classList.toggle('done', !caret);
      demo.classList.toggle('fits', b.scrollWidth <= demo.clientWidth - 4);   // a long claim keeps its newest words in view
    }
    function finalState() {
      claim.textContent = r.plainQuestion; claim.classList.add('on');
      range.style.left = pct(r.rangeLoPct); range.style.width = pct(r.rangeHiPct - r.rangeLoPct); range.classList.add('on');
      tick.style.left = pct(r.weightedPct); tick.classList.add('on');
      if (zones[r.verdictLabel]) zones[r.verdictLabel].classList.add('active');
      verdict.querySelector('.v').textContent = r.verdictLabel;
      verdict.querySelector('.g').textContent = 'Evidence grade ' + r.gradeAbsolute;
      verdict.querySelector('a').href = r.href;
      verdict.classList.add('on');
      cap.textContent = 'Weighted range ' + r.rangeLoPct + ' to ' + r.rangeHiPct + '%';
      sr.textContent = r.plainQuestion + ' Of ' + n + ' findings from ' + r.studies + ' studies that test it directly, ' + r.supports +
        ' agree. Weighted range ' + r.rangeLoPct + ' to ' + r.rangeHiPct + ' percent. ' + r.verdictLabel + ', evidence grade ' + r.gradeAbsolute + '.';
    }
    function drop(rec) {                                    // a claim whose graph cannot be drawn leaves the cycle
      recs = recs.filter(function (e) { return e !== rec; });
      if (!recs.length) { teardown(); return; }
      buildControls();
      if (reduce) settle(0); else play(idx % recs.length);
    }
    function teardown() {                                   // nothing can be drawn: the static record card takes over
      run++; stopScene();
      document.documentElement.classList.remove('hero-live'); host.hidden = true;
      demo.classList.add('off'); form.classList.remove('demoing');
    }
    function settle(i) {                                    // straight to the finished picture for one claim
      run++; waiting = false; select(i); reset(); setDemo(r.plainQuestion, false); finalState(); restScene();
      var rec = r, token = run;
      if (mountedId === rec.entryId) { graphEl.classList.add('on'); tell('rg:return'); tell('rg:counted'); return; }
      mountGraph(rec).then(function (c) {
        if (token !== run) return;
        if (!c) return drop(rec);
        setTimeout(function () { if (token === run) tell('rg:counted'); }, 400);
      });
    }
    function advance() {
      if (paused || userTyping || !inView) { restScene(); waiting = !userTyping; return; }
      play((idx + 1) % recs.length);
    }

    function play(i) {
      var token = ++run; waiting = false; select(i); reset(); stopScene();
      var q = r.plainQuestion, step = Math.max(1, Math.ceil(q.length / 80)), k = 0;
      (function type() {                                    // 1. the claim is asked
        if (token !== run) return;
        k += step; setDemo(q.slice(0, k), true);
        if (k < q.length) { setTimeout(type, 20); return; }
        form.classList.add('sending');
        setTimeout(function () { if (token === run) { form.classList.remove('sending'); send(token); } }, 260);
      })();
    }
    function send(token) {
      var rec = r;
      mountGraph(rec).then(function (c) {                   // 2. the fog parts and the knowledge graph assembles around the claim
        if (token !== run) return;
        if (!c) { drop(rec); return; }
        if (scene && !scene.rest && scene.el < T.direct) cap.textContent = c.findings + ' findings from ' + c.sources + ' sources';
      });
      startScene([
        { t: 0, fn: function () { claim.textContent = rec.plainQuestion; claim.classList.add('on'); } },
        { t: T.direct, fn: function () { cap.textContent = n + ' of them test the claim directly'; tell('rg:counted'); } },   // the rest recede
        { t: T_FALL, fn: function () {        // 3. the graph turns into the scale: its counted findings leave it, each from where it is
            var pts = null;
            tell('rg:pour', { take: function (p) { pts = p; } });
            if (pts && pts.length === n && scene && scene.parts) {
              var c = cv.getBoundingClientRect(), g = geom();
              pts.sort(function (a, b) { return (a.r === 'S' ? 0 : 1) - (b.r === 'S' ? 0 : 1); });   // agree first
              scene.parts.forEach(function (p, i) { p.dx = pts[i].x - c.left - g.cx; p.dy = pts[i].y - c.top - g.cy; });
            } } },
        { t: T.count, fn: function () { cap.textContent = rec.supports + ' of the ' + n + ' agree'; } },   // printed as a count
        { t: T.weigh, fn: function () {       // 4. the count is weighed: the range opens out from the weighted point
            range.style.transition = 'none'; range.style.left = pct(rec.weightedPct); range.style.width = '0%';
            void range.offsetWidth; range.style.transition = '';
            range.classList.add('on');
            range.style.left = pct(rec.rangeLoPct); range.style.width = pct(rec.rangeHiPct - rec.rangeLoPct); tick.style.left = pct(rec.weightedPct);
            cap.textContent = 'Weighed for how independent they are';
            tell('rg:nucleus'); } },                                             // the graph's nucleus comes down as that point
        { t: T.weigh + 1000, fn: function () { tick.classList.add('on'); } },
        { t: T.verdict, fn: function () { finalState(); } },                     // 5. the range lands on a verdict
        { t: T.back, fn: function () { tell('rg:return'); } },                   // the graph is whole again
        { t: T.end, fn: function () { advance(); } }                             // 6. on to the next claim
      ]);
    }

    /* ── controls: one dot per claim, and pause (auto-advancing content can always be stopped) ── */
    function buildControls() {
      ctl.textContent = '';
      recs.forEach(function (rec, i) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'pick';
        b.setAttribute('aria-label', 'Show claim ' + (i + 1) + ' of ' + recs.length);
        b.addEventListener('click', function () { if (reduce) settle(i); else play(i); });
        ctl.appendChild(b);
      });
      if (reduce) return;
      pp = document.createElement('button'); pp.type = 'button'; pp.className = 'pp'; pp.textContent = paused ? 'Play' : 'Pause';
      pp.addEventListener('click', function () {
        paused = !paused; pp.textContent = paused ? 'Play' : 'Pause';
        if (!paused && (waiting || (scene && scene.rest))) play((idx + 1) % recs.length);
      });
      ctl.appendChild(pp);
    }
    buildControls();

    input.addEventListener('focus', function () { userTyping = true; setDemo('', false); if (started) settle(idx); });
    input.addEventListener('blur', function () {
      if (input.value) return;
      userTyping = false; setDemo(r.plainQuestion, false);
      if (started && !paused && !reduce) { if (inView) play((idx + 1) % recs.length); else waiting = true; }
    });
    window.addEventListener('resize', function () { if (scene && scene.rest) draw(); });
    window.addEventListener('scroll', function () { if (scene && scene.rest) draw(); }, { passive: true });   // the clearing follows the graph

    // It starts when the answer box or the stage is on screen (the box is, on arrival, so the first
    // claim plays at once and its graph forms at the fold), and it only moves on to the next claim
    // while the stage itself can be seen, so nothing plays to nobody.
    var boxInView = false;
    function sight() {
      if (!started) { if (inView || boxInView) { started = true; if (reduce) settle(0); else play(0); } return; }
      if (inView && waiting && !paused && !userTyping && !reduce) play((idx + 1) % recs.length);
      else if (scene && scene.rest) draw();
    }
    new IntersectionObserver(function (entries) { inView = entries[entries.length - 1].isIntersecting; sight(); }, { threshold: 0.3 }).observe(host);
    new IntersectionObserver(function (entries) { boxInView = entries[entries.length - 1].isIntersecting; sight(); }, { threshold: 0.6 }).observe(form);

    // The graph code is fetched once the page itself has finished loading.
    if (document.readyState === 'complete') loadApi(); else window.addEventListener('load', function () { loadApi(); });
  }
})();
