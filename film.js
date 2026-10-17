/* film.js: the page films (styles in film.css). Founder, 2026-10-17: make better use of the space;
   on the homepage, "a large video whose thumbnail looks just like the hero logo ... when the video
   ends it will display the hero again ... making the video look like it is appearing from the hero".

   Two shapes, one behaviour: a FILM CARD (the film's poster frame, beside or under a page heading)
   or the HERO STAGE (the DATOM logo itself) grows into a large player when played, and returns to
   what it was when the film ends or Close (or Esc) is pressed. No autoplay.

   Phones get the 720p file (data-src-720). It is set on the <source> before anything loads, and the
   click that plays re-runs the browser's choice if it had already picked the 1080p file (a race
   seen 2026-10-16): never a request on page load. */
(function () {
  var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var small = mq('(max-width: 700px)');
  var reduce = mq('(prefers-reduced-motion: reduce)');

  function prepareSource(v) {
    var alt = v.getAttribute('data-src-720');
    var s = v.querySelector('source');
    if (small && alt && s) s.src = alt;
  }
  function ensureSource(v) {
    var alt = v.getAttribute('data-src-720');
    if (small && alt && v.currentSrc.indexOf(alt.split('/').pop()) === -1) v.load();
  }
  function play(v) {
    v.controls = true;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }
  function intoView(el) {
    window.setTimeout(function () {
      var r = el.getBoundingClientRect();
      if (r.top < 64 || r.bottom > window.innerHeight) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    }, reduce ? 0 : 620);
  }
  /* FLIP: from where the element was to where layout puts it now */
  function flip(el, before) {
    if (reduce || !el.animate) return;
    var after = el.getBoundingClientRect();
    if (!after.width || !after.height) return;
    el.animate([
      { transformOrigin: '0 0', transform: 'translate(' + (before.left - after.left) + 'px,' + (before.top - after.top) + 'px) scale(' + before.width / after.width + ',' + before.height / after.height + ')' },
      { transformOrigin: '0 0', transform: 'none' }
    ], { duration: 560, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  }

  /* ---- film cards (the inner pages) ---- */
  Array.prototype.forEach.call(document.querySelectorAll('.film-card[data-film]'), function (card) {
    var v = card.querySelector('video');
    var btn = card.querySelector('.film-card-play');
    var close = card.querySelector('.film-card-close');
    var head = card.closest ? card.closest('.film-head') : null;
    if (!v || !btn) return;
    prepareSource(v);
    var open = false;
    function grow() {
      if (open) return;
      open = true;
      ensureSource(v);
      var before = card.getBoundingClientRect();
      card.classList.add('is-open');
      if (head) head.classList.add('film-playing');
      flip(card, before);
      play(v);
      intoView(card);
    }
    function shrink() {
      if (!open) return;
      open = false;
      v.pause();
      v.controls = false;
      var before = card.getBoundingClientRect();
      card.classList.remove('is-open');
      if (head) head.classList.remove('film-playing');
      flip(card, before);
      v.load(); // back to the poster frame; with preload none nothing downloads
      btn.focus({ preventScroll: true });
    }
    btn.addEventListener('click', grow);
    v.addEventListener('click', function (e) { if (!open) { e.preventDefault(); grow(); } });
    if (close) close.addEventListener('click', shrink);
    v.addEventListener('ended', shrink);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shrink(); });
  });

  /* ---- the hero stage (the homepage): the logo becomes the film, and the film the logo ---- */
  var stage = document.querySelector('[data-film-hero]');
  if (stage) {
    var v = stage.querySelector('video');
    var logo = stage.querySelector('.hero-logo');
    var close = stage.querySelector('.film-card-close');
    var btn = document.getElementById(stage.getAttribute('data-film-hero'));
    if (v && logo) {
      prepareSource(v);
      var open = false;
      var timer = 0;
      var rest = null; // the logo's box before it grew, to return to
      var targetWidth = function () {
        var host = stage.parentElement;
        var cs = window.getComputedStyle(host);
        var inner = host.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        return Math.min(1120, inner);
      };
      var setBox = function (w, h) { stage.style.width = w + 'px'; stage.style.height = h + 'px'; };
      var grow = function () {
        if (open) return;
        open = true;
        window.clearTimeout(timer);
        ensureSource(v);
        var r = stage.getBoundingClientRect();
        rest = { w: r.width, h: r.height };
        setBox(r.width, r.height);
        void stage.offsetWidth; // commit the starting size so the change below transitions
        var w = targetWidth();
        stage.classList.add('is-open');
        setBox(w, Math.round(w * 9 / 16));
        if (btn) btn.hidden = true;
        play(v);
        intoView(stage);
      };
      var shrink = function () {
        if (!open) return;
        open = false;
        v.pause();
        v.controls = false;
        stage.classList.remove('is-open');
        if (rest) setBox(rest.w, rest.h);
        timer = window.setTimeout(function () {
          stage.style.width = '';
          stage.style.height = '';
          v.load(); // back to the (transparent) poster; nothing downloads
        }, reduce ? 0 : 700);
        if (btn) { btn.hidden = false; btn.focus({ preventScroll: true }); }
      };
      logo.addEventListener('click', grow);
      if (btn) btn.addEventListener('click', grow);
      if (close) close.addEventListener('click', shrink);
      v.addEventListener('ended', shrink);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shrink(); });
    }
  }
})();
