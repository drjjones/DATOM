/* ============================================================
   DATOM, sketch-bg.js
   Background "dynamic drawing" for design-language-v1.1 pages.

   Concept: the same chain-spine motif used elsewhere for provenance
   (hairline connections, small square nodes, a live node in --signal)
   scaled up into a quiet full-page backdrop. Nodes drift slowly.
   Connections sketch themselves in one at a time, flash briefly as
   "just recorded," settle to a faint hairline, then after a while
   break apart at a random point and recede back to their nodes before
   a new connection takes their place. Nothing ever sits still for long.

   Hard rules carried over from the design language: no blur, no glow,
   no gradients, no shadow, colors from tokens only. This is NOT the
   old particles.js (dark, glowing, colored dots): do not reintroduce
   any of that here. particles.js is untouched and still used by
   example.html/research.html, which this file does not touch or load.
   ============================================================ */

(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'sketchBgCanvas';
  canvas.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;width:100%;height:100%;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- read live tokens so this stays in sync with tokens.css ---- */
  function readTokens() {
    const cs = getComputedStyle(document.documentElement);
    return {
      line: (cs.getPropertyValue('--line') || '#CAD5E1').trim(),
      line2: (cs.getPropertyValue('--line-2') || '#9FB0C4').trim(),
      signal: (cs.getPropertyValue('--signal') || '#0B6E84').trim(),
    };
  }
  let TOK = readTokens();

  const NODE_SIZE = 6;
  const MAX_LINES = 22;
  const DRAW_MS = 900;
  const FLASH_MS = 700;
  const BREAK_MS = 650;
  const SETTLED_MIN_LIFE_MS = 6000;
  const SETTLED_MAX_LIFE_MS = 13000;
  const SPAWN_MIN_MS = 500;
  const SPAWN_MAX_MS = 1100;
  const NEIGHBOR_RADIUS = 220;
  const DRIFT_SPEED = 6; // px/sec, deliberately slow: a drift, not a scatter

  let W = 0, H = 0, DPR = 1;
  let nodes = [];
  let lines = []; // { a, b, start, state: 'drawing'|'flash'|'settled'|'breaking', ... }
  let nextSpawnAt = 0;
  let lastFrame = 0;
  let rafId = null;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildNodes();
  }

  function buildNodes() {
    // Jittered grid: evenly distributed but not mechanically regular.
    const cell = 130;
    const cols = Math.ceil(W / cell) + 1;
    const rows = Math.ceil(H / cell) + 1;
    nodes = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const jitterX = (Math.random() - 0.5) * cell * 0.6;
        const jitterY = (Math.random() - 0.5) * cell * 0.6;
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x: c * cell + jitterX,
          y: r * cell + jitterY,
          vx: Math.cos(angle) * DRIFT_SPEED * (0.4 + Math.random() * 0.6),
          vy: Math.sin(angle) * DRIFT_SPEED * (0.4 + Math.random() * 0.6),
        });
      }
    }
    lines = [];
  }

  function updateNodes(dt) {
    const margin = 24;
    nodes.forEach(n => {
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      // Gentle bounce off the viewport edges, keeps the field on-screen
      // indefinitely instead of drifting off into nowhere.
      if (n.x < margin || n.x > W - margin) { n.vx *= -1; n.x = Math.max(margin, Math.min(W - margin, n.x)); }
      if (n.y < margin || n.y > H - margin) { n.vy *= -1; n.y = Math.max(margin, Math.min(H - margin, n.y)); }
    });
  }

  function nearestNeighbors(node, radius) {
    return nodes.filter(n => {
      if (n === node) return false;
      const d = Math.hypot(n.x - node.x, n.y - node.y);
      return d > 20 && d < radius;
    });
  }

  function retire(line, now) {
    line.state = 'breaking';
    line.breakStart = now;
    line.breakPoint = 0.25 + Math.random() * 0.5; // where along the line it snaps
  }

  function spawnLine(now) {
    const live = lines.filter(l => l.state !== 'gone');
    if (live.length >= MAX_LINES) {
      const oldestSettled = lines.find(l => l.state === 'settled');
      if (oldestSettled) retire(oldestSettled, now);
      else return; // everything's mid-animation already, wait for the next tick
    }
    const a = nodes[Math.floor(Math.random() * nodes.length)];
    const candidates = nearestNeighbors(a, NEIGHBOR_RADIUS);
    if (!candidates.length) return;
    const b = candidates[Math.floor(Math.random() * candidates.length)];
    lines.push({ a, b, start: now, state: 'drawing' });
  }

  function draw(now) {
    ctx.clearRect(0, 0, W, H);

    // Idle nodes: square marks, the field the drawing lives on.
    ctx.fillStyle = TOK.line2;
    ctx.globalAlpha = 0.8;
    nodes.forEach(n => {
      ctx.fillRect(n.x - NODE_SIZE / 2, n.y - NODE_SIZE / 2, NODE_SIZE, NODE_SIZE);
    });

    lines = lines.filter(l => l.state !== 'gone');

    lines.forEach(l => {
      const elapsed = now - l.start;

      if (l.state === 'drawing') {
        const t = Math.min(1, elapsed / DRAW_MS);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        const x = l.a.x + (l.b.x - l.a.x) * eased;
        const y = l.a.y + (l.b.y - l.a.y) * eased;
        ctx.strokeStyle = TOK.signal;
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(l.a.x, l.a.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        // leading node flashes signal while the line is live
        ctx.fillStyle = TOK.signal;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(l.a.x - NODE_SIZE / 2, l.a.y - NODE_SIZE / 2, NODE_SIZE, NODE_SIZE);
        if (t >= 1) { l.state = 'flash'; l.flashStart = now; }

      } else if (l.state === 'flash') {
        const t = Math.min(1, (now - l.flashStart) / FLASH_MS);
        ctx.strokeStyle = TOK.signal;
        ctx.globalAlpha = 0.85 * (1 - t) + 0.18 * t;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(l.a.x, l.a.y);
        ctx.lineTo(l.b.x, l.b.y);
        ctx.stroke();
        if (t >= 1) {
          l.state = 'settled';
          l.settledAt = now;
          l.lifespan = SETTLED_MIN_LIFE_MS + Math.random() * (SETTLED_MAX_LIFE_MS - SETTLED_MIN_LIFE_MS);
        }

      } else if (l.state === 'settled') {
        ctx.strokeStyle = TOK.line2;
        ctx.globalAlpha = 0.65;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(l.a.x, l.a.y);
        ctx.lineTo(l.b.x, l.b.y);
        ctx.stroke();
        // settled nodes read a touch stronger than idle ones, marking
        // "this junction has recorded evidence"
        ctx.fillStyle = TOK.line2;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(l.a.x - NODE_SIZE / 2, l.a.y - NODE_SIZE / 2, NODE_SIZE, NODE_SIZE);
        ctx.fillRect(l.b.x - NODE_SIZE / 2, l.b.y - NODE_SIZE / 2, NODE_SIZE, NODE_SIZE);
        // Every settled connection has a finite life; once it's up, it
        // breaks apart on its own rather than waiting to be evicted.
        if (now - l.settledAt > l.lifespan) retire(l, now);

      } else if (l.state === 'breaking') {
        // The line snaps at breakPoint and both halves recede back to
        // their own node, fading out, an evidence link being retired.
        const t = Math.min(1, (now - l.breakStart) / BREAK_MS);
        const snapX = l.a.x + (l.b.x - l.a.x) * l.breakPoint;
        const snapY = l.a.y + (l.b.y - l.a.y) * l.breakPoint;
        const alpha = 0.65 * (1 - t);
        ctx.strokeStyle = TOK.line2;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1;
        // segment still attached to node A, shrinking toward A
        ctx.beginPath();
        ctx.moveTo(l.a.x, l.a.y);
        ctx.lineTo(l.a.x + (snapX - l.a.x) * (1 - t), l.a.y + (snapY - l.a.y) * (1 - t));
        ctx.stroke();
        // segment still attached to node B, shrinking toward B
        ctx.beginPath();
        ctx.moveTo(l.b.x, l.b.y);
        ctx.lineTo(l.b.x + (snapX - l.b.x) * (1 - t), l.b.y + (snapY - l.b.y) * (1 - t));
        ctx.stroke();
        if (t >= 1) l.state = 'gone';
      }
    });

    ctx.globalAlpha = 1;
  }

  function drawStaticFrame() {
    // prefers-reduced-motion: render one calm, permanent diagram, no loop,
    // no drift, no breaking. Nodes stay put; a static frame doesn't move.
    resize();
    const now = performance.now();
    for (let i = 0; i < Math.min(16, nodes.length / 3); i++) spawnLine(now);
    lines.forEach(l => { l.state = 'settled'; l.settledAt = now; l.lifespan = Infinity; });
    draw(now);
  }

  function loop(now) {
    const dt = lastFrame ? Math.min(0.1, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    updateNodes(dt);
    if (now >= nextSpawnAt) {
      spawnLine(now);
      nextSpawnAt = now + SPAWN_MIN_MS + Math.random() * (SPAWN_MAX_MS - SPAWN_MIN_MS);
    }
    draw(now);
    rafId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => {
    if (reduceMotion) { drawStaticFrame(); return; }
    resize();
  });

  resize();

  if (reduceMotion) {
    drawStaticFrame();
  } else {
    // Seed a handful of already-settled connections so the page doesn't
    // open on an empty canvas; the rest draw in live from here.
    const seedNow = performance.now();
    for (let i = 0; i < 9; i++) spawnLine(seedNow - DRAW_MS - FLASH_MS - 1);
    lines.forEach(l => {
      l.state = 'settled';
      l.settledAt = seedNow;
      l.lifespan = SETTLED_MIN_LIFE_MS + Math.random() * (SETTLED_MAX_LIFE_MS - SETTLED_MIN_LIFE_MS);
    });
    nextSpawnAt = seedNow + 200;
    rafId = requestAnimationFrame(loop);
  }
})();
