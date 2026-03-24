/* ============================================================
   DATOM — particles.js
   Infinite-depth particle field representing the DATOM ledger.

   Five layers create a sense of boundless scale:
     Abyss    — hundreds of tiny specks, barely visible, drifting (deep space)
     Deep     — small faint dots, slow drift, faint connections
     Far      — small, slow, subtle connections
     Mid      — medium, moderate, visible connections
     Near     — large, vivid, mouse-responsive (foreground)

   Only the near layer responds to the cursor.
   Far layers drift autonomously to convey infinite living data.
   ============================================================ */

(function () {
  let canvas = document.getElementById('particleCanvas');
  let isFullPage = false;

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;width:100%;height:100%;';
    document.body.prepend(canvas);
    isFullPage = true;
  }

  const ctx = canvas.getContext('2d');

  /* ── Color palette ── */
  const CYAN     = [0, 130, 200];
  const TEAL     = [0, 100, 160];
  const DEEP_CY  = [0, 80, 130];
  const DIM_TEAL = [5, 55, 95];
  const FAINT    = [8, 40, 70];

  /* ── Five depth layers ── */
  const LAYERS = [
    // Abyss: hundreds of specks — the infinite ledger in the deep distance
    {
      count: 200, speed: 0.02, rMin: 0.3, rMax: 0.8,
      alphaMin: 0.04, alphaMax: 0.12,
      connDist: 50, connAlpha: 0.02, lineW: 0.2,
      color: FAINT, mouseAffected: false, atomChance: 0.02,
      twinkle: true
    },
    // Deep: small faint particles
    {
      count: 120, speed: 0.04, rMin: 0.5, rMax: 1.0,
      alphaMin: 0.06, alphaMax: 0.18,
      connDist: 65, connAlpha: 0.04, lineW: 0.3,
      color: DIM_TEAL, mouseAffected: false, atomChance: 0.04,
      twinkle: true
    },
    // Far: subtle presence
    {
      count: 70, speed: 0.08, rMin: 0.8, rMax: 1.5,
      alphaMin: 0.10, alphaMax: 0.25,
      connDist: 90, connAlpha: 0.07, lineW: 0.4,
      color: DEEP_CY, mouseAffected: false, atomChance: 0.06,
      twinkle: false
    },
    // Mid: clear middle ground
    {
      count: 45, speed: 0.16, rMin: 1.3, rMax: 2.6,
      alphaMin: 0.20, alphaMax: 0.42,
      connDist: 130, connAlpha: 0.16, lineW: 0.7,
      color: TEAL, mouseAffected: false, atomChance: 0.08,
      twinkle: false
    },
    // Near: vivid foreground, mouse-responsive
    {
      count: 28, speed: 0.28, rMin: 2.0, rMax: 4.0,
      alphaMin: 0.35, alphaMax: 0.65,
      connDist: 160, connAlpha: 0.30, lineW: 1.1,
      color: CYAN, mouseAffected: true, atomChance: 0.10,
      twinkle: false
    },
  ];

  const MOUSE_RADIUS = 220;
  const MOUSE_FORCE  = 0.018;

  let w, h;
  let mouse = { x: -9999, y: -9999 };
  let layers = [];
  let time = 0;

  function resize() {
    if (isFullPage) {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    } else {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width  = rect.width;
      h = canvas.height = rect.height;
    }
  }

  function createParticles() {
    layers = LAYERS.map(cfg => {
      const arr = [];
      for (let i = 0; i < cfg.count; i++) {
        arr.push({
          x: Math.random() * (w + 200) - 100,
          y: Math.random() * (h + 200) - 100,
          vx: (Math.random() - 0.5) * cfg.speed,
          vy: (Math.random() - 0.5) * cfg.speed,
          r: Math.random() * (cfg.rMax - cfg.rMin) + cfg.rMin,
          baseAlpha: Math.random() * (cfg.alphaMax - cfg.alphaMin) + cfg.alphaMin,
          alpha: 0,
          isAtom: Math.random() < cfg.atomChance,
          orbitPhase: Math.random() * Math.PI * 2,
          // Twinkle params for deep layers
          twinkleSpeed: 0.003 + Math.random() * 0.008,
          twinkleOffset: Math.random() * Math.PI * 2,
          // Gentle drift oscillation for autonomous layers
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.0003 + Math.random() * 0.0008,
        });
      }
      return arr;
    });
  }

  function update() {
    time++;
    LAYERS.forEach((cfg, li) => {
      for (const p of layers[li]) {
        // Mouse influence (near layer only)
        if (cfg.mouseAffected) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 1) {
            p.vx += (dx / dist) * MOUSE_FORCE;
            p.vy += (dy / dist) * MOUSE_FORCE;
          }
        }

        // Autonomous drift — gentle sinusoidal wandering
        p.driftAngle += p.driftSpeed;
        p.vx += Math.cos(p.driftAngle) * 0.001 * cfg.speed;
        p.vy += Math.sin(p.driftAngle) * 0.001 * cfg.speed;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Tiny random perturbation
        p.vx += (Math.random() - 0.5) * 0.002;
        p.vy += (Math.random() - 0.5) * 0.002;

        // Twinkle effect for deep layers
        if (cfg.twinkle) {
          const flicker = 0.5 + 0.5 * Math.sin(time * p.twinkleSpeed + p.twinkleOffset);
          p.alpha = p.baseAlpha * (0.3 + 0.7 * flicker);
        } else {
          p.alpha = p.baseAlpha;
        }

        // Wrap edges with generous buffer
        const buf = 100;
        if (p.x < -buf) p.x = w + buf;
        if (p.x > w + buf) p.x = -buf;
        if (p.y < -buf) p.y = h + buf;
        if (p.y > h + buf) p.y = -buf;

        // Rotate atom orbitals
        if (p.isAtom) p.orbitPhase += 0.004 + cfg.speed * 0.01;
      }
    });
  }

  function drawAtom(x, y, size, alpha, color) {
    const r = size * 3.5;
    ctx.save();
    ctx.globalAlpha = alpha * 0.45;
    ctx.strokeStyle = `rgb(${color.join(',')})`;
    ctx.lineWidth = 0.5;

    // Three orbital ellipses
    for (let angle = 0; angle < Math.PI; angle += Math.PI / 3) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
      ctx.restore();
      ctx.stroke();
    }

    // Glowing nucleus
    ctx.globalAlpha = alpha * 0.9;
    ctx.fillStyle = `rgb(${color.join(',')})`;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Core glow
    const grad = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
    grad.addColorStop(0, `rgba(${color.join(',')}, ${alpha * 0.3})`);
    grad.addColorStop(1, `rgba(${color.join(',')}, 0)`);
    ctx.globalAlpha = 1;
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, size * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawGlow(x, y, r, alpha, color) {
    // Subtle bloom for near-layer particles
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
    grad.addColorStop(0, `rgba(${color.join(',')}, ${alpha * 0.15})`);
    grad.addColorStop(1, `rgba(${color.join(',')}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r * 4, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw each layer back-to-front
    LAYERS.forEach((cfg, li) => {
      const pts = layers[li];
      const [cr, cg, cb] = cfg.color;

      // Connections — skip for abyss layer (too many, too faint)
      if (li > 0) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            const maxSq = cfg.connDist * cfg.connDist;
            if (distSq < maxSq) {
              const dist = Math.sqrt(distSq);
              const opacity = (1 - dist / cfg.connDist) * cfg.connAlpha;
              ctx.strokeStyle = `rgba(${cr},${cg},${cb}, ${opacity})`;
              ctx.lineWidth = cfg.lineW;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // Dots, atoms, and glows
      for (const p of pts) {
        if (p.isAtom) {
          drawAtom(p.x, p.y, p.r, p.alpha, cfg.color);
        } else {
          // Glow for mid and near layers
          if (li >= 3) {
            drawGlow(p.x, p.y, p.r, p.alpha, cfg.color);
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb}, ${p.alpha})`;
          ctx.fill();
        }
      }
    });
  }

  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  // Mouse tracking
  const mouseTarget = isFullPage ? document : canvas.parentElement;
  mouseTarget.addEventListener('mousemove', (e) => {
    if (isFullPage) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    } else {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
  });
  if (!isFullPage) {
    canvas.parentElement.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });
  }

  window.addEventListener('resize', () => {
    resize();
    // Redistribute particles on resize to fill new space
    layers.forEach((pts, li) => {
      const cfg = LAYERS[li];
      for (const p of pts) {
        if (p.x > w + 100 || p.y > h + 100) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
        }
      }
    });
  });

  resize();
  createParticles();
  loop();
})();
