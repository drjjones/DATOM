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

  /* ── Color palette — dark navy blues, visible on light background ── */
  const CYAN     = [20, 90, 185];
  const TEAL     = [14, 65, 148];
  const DEEP_CY  = [10, 48, 115];
  const DIM_TEAL = [6, 32, 85];
  const FAINT    = [3, 18, 58];

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

  /* ── Molecule formation ──
     Particles in the mid/near layers periodically assemble into
     molecular structures (rings and hubs), hold with visible bonds,
     then dissolve back into the abyss. */
  const MOLECULE_LAYERS   = [3, 4];
  const MAX_MOLECULES     = 3;
  const SPAWN_INTERVAL    = 240;          // frames between spawn attempts
  const FORM_SPRING       = 0.012;        // pull toward target position
  const FORM_DAMPING      = 0.90;         // extra damping while bonded
  const MOLECULE_SHAPES = [
    { type: 'ring', count: 6, radius: 52 },
    { type: 'ring', count: 5, radius: 42 },
    { type: 'hub',  count: 5, radius: 46 },
    { type: 'hub',  count: 7, radius: 58 },
  ];
  let molecules = [];

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

  function spawnMolecule() {
    if (molecules.length >= MAX_MOLECULES) return;
    const li = MOLECULE_LAYERS[Math.floor(Math.random() * MOLECULE_LAYERS.length)];
    const shape = MOLECULE_SHAPES[Math.floor(Math.random() * MOLECULE_SHAPES.length)];
    const free = layers[li].filter(p => !p.molecule && !p.isAtom);
    if (free.length < shape.count) return;

    const cx = w * (0.15 + Math.random() * 0.7);
    const cy = h * (0.15 + Math.random() * 0.7);
    free.sort((a, b) => {
      const da = (a.x - cx) ** 2 + (a.y - cy) ** 2;
      const db = (b.x - cx) ** 2 + (b.y - cy) ** 2;
      return da - db;
    });
    const members = free.slice(0, shape.count);

    // Target offsets and bond pairs for the chosen structure
    const targets = [];
    const bonds = [];
    if (shape.type === 'ring') {
      const phase = Math.random() * Math.PI * 2;
      for (let i = 0; i < shape.count; i++) {
        const a = phase + (i / shape.count) * Math.PI * 2;
        targets.push({ x: Math.cos(a) * shape.radius, y: Math.sin(a) * shape.radius });
        bonds.push([i, (i + 1) % shape.count]);
      }
    } else {
      targets.push({ x: 0, y: 0 });                       // hub center
      const phase = Math.random() * Math.PI * 2;
      for (let i = 1; i < shape.count; i++) {
        const a = phase + ((i - 1) / (shape.count - 1)) * Math.PI * 2;
        targets.push({ x: Math.cos(a) * shape.radius, y: Math.sin(a) * shape.radius });
        bonds.push([0, i]);
      }
    }

    const mol = {
      layer: li, members, targets, bonds,
      cx, cy,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      phase: 'forming', age: 0,
      holdFrames: 420 + Math.random() * 360,
      bondAlpha: 0,
    };
    members.forEach(p => { p.molecule = mol; });
    molecules.push(mol);
  }

  function dissolveMolecule(mol) {
    mol.members.forEach(p => {
      p.molecule = null;
      // Gentle outward impulse so the structure visibly disassembles
      const dx = p.x - mol.cx, dy = p.y - mol.cy;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      p.vx += (dx / d) * 0.5 + (Math.random() - 0.5) * 0.3;
      p.vy += (dy / d) * 0.5 + (Math.random() - 0.5) * 0.3;
    });
  }

  function updateMolecules() {
    if (time % SPAWN_INTERVAL === 0) spawnMolecule();

    for (let m = molecules.length - 1; m >= 0; m--) {
      const mol = molecules[m];
      mol.age++;

      // Slow drift of the whole structure
      mol.cx += mol.vx;
      mol.cy += mol.vy;

      // Dissolve if drifting out of view
      const margin = 80;
      if (mol.cx < margin || mol.cx > w - margin || mol.cy < margin || mol.cy > h - margin) {
        mol.phase = 'dissolving';
      }

      // Spring members toward their slots
      let settled = 0;
      mol.members.forEach((p, i) => {
        const tx = mol.cx + mol.targets[i].x;
        const ty = mol.cy + mol.targets[i].y;
        const dx = tx - p.x, dy = ty - p.y;
        p.vx = (p.vx + dx * FORM_SPRING) * FORM_DAMPING;
        p.vy = (p.vy + dy * FORM_SPRING) * FORM_DAMPING;
        if (dx * dx + dy * dy < 64) settled++;
      });

      if (mol.phase === 'forming') {
        mol.bondAlpha = Math.min(1, mol.bondAlpha + 0.01);
        if (settled === mol.members.length || mol.age > 360) mol.phase = 'holding';
      } else if (mol.phase === 'holding') {
        mol.bondAlpha = Math.min(1, mol.bondAlpha + 0.02);
        if (mol.age > mol.holdFrames) mol.phase = 'dissolving';
      } else {
        mol.bondAlpha -= 0.02;
        if (mol.bondAlpha <= 0) {
          dissolveMolecule(mol);
          molecules.splice(m, 1);
        }
      }
    }
  }

  function drawMolecules() {
    for (const mol of molecules) {
      if (mol.bondAlpha <= 0) continue;
      const [cr, cg, cb] = LAYERS[mol.layer].color;
      const alpha = mol.bondAlpha * (mol.layer === 4 ? 0.35 : 0.22);
      ctx.strokeStyle = `rgba(${cr},${cg},${cb}, ${alpha})`;
      ctx.lineWidth = mol.layer === 4 ? 1.2 : 0.8;
      for (const [i, j] of mol.bonds) {
        const a = mol.members[i], b = mol.members[j];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  /* ── Hero logo materialization ──
     On the homepage, the hero logo assembles from particles converging
     out of the abyss onto the logo's own pixels, then cross-fades to the
     real image. Falls back to simply showing the logo on any failure. */
  let logoAnim = null;

  function initLogoMaterialize() {
    const logo = document.querySelector('.hero-logo');
    if (!logo || !isFullPage) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const reveal = () => {
      logo.style.transition = 'opacity 0.7s ease';
      logo.style.opacity = '1';
    };
    logo.style.opacity = '0';
    const safety = setTimeout(() => { logoAnim = null; reveal(); }, 6000);

    const start = () => {
      try {
        const rect = logo.getBoundingClientRect();
        if (rect.width < 10) { clearTimeout(safety); reveal(); return; }
        const off = document.createElement('canvas');
        off.width = Math.max(1, Math.round(rect.width));
        off.height = Math.max(1, Math.round(rect.height));
        const octx = off.getContext('2d', { willReadFrequently: true });
        octx.drawImage(logo, 0, 0, off.width, off.height);
        const data = octx.getImageData(0, 0, off.width, off.height).data;
        const step = Math.max(2, Math.round(off.width / 120));
        const pts = [];
        for (let y = 0; y < off.height; y += step) {
          for (let x = 0; x < off.width; x += step) {
            const i = (y * off.width + x) * 4;
            if (data[i + 3] > 120) {
              pts.push({
                rx: x, ry: y,
                color: [data[i], data[i + 1], data[i + 2]],
                sx: Math.random() * w, sy: Math.random() * h,
                delay: Math.random() * 500,
                dur: 1000 + Math.random() * 600,
                r: 0.8 + Math.random() * 1.4,
              });
            }
          }
        }
        while (pts.length > 1400) pts.splice(Math.floor(Math.random() * pts.length), 1);
        if (!pts.length) { clearTimeout(safety); reveal(); return; }
        logoAnim = { logo, pts, t0: performance.now(), settle: 2200, fadeDur: 650, fading: false, fadeT0: 0, safety };
      } catch (e) {
        clearTimeout(safety); logoAnim = null; reveal();
      }
    };
    if (logo.complete && logo.naturalWidth) start();
    else {
      logo.addEventListener('load', start, { once: true });
      logo.addEventListener('error', () => { clearTimeout(safety); reveal(); }, { once: true });
    }
  }

  function drawLogoMaterialize() {
    if (!logoAnim) return;
    const a = logoAnim;
    const now = performance.now();
    const rect = a.logo.getBoundingClientRect();
    const el = now - a.t0;
    if (!a.fading && el > a.settle) { a.fading = true; a.fadeT0 = now; }
    const fadeP = a.fading ? Math.min(1, (now - a.fadeT0) / a.fadeDur) : 0;
    if (a.fading) a.logo.style.opacity = String(fadeP);
    for (const p of a.pts) {
      const t = Math.min(1, Math.max(0, (el - p.delay) / p.dur));
      const e = 1 - Math.pow(1 - t, 3);
      const x = p.sx + (rect.left + p.rx - p.sx) * e;
      const y = p.sy + (rect.top + p.ry - p.sy) * e;
      const alpha = (0.25 + 0.65 * e) * (1 - fadeP);
      if (alpha <= 0.01) continue;
      ctx.beginPath();
      ctx.arc(x, y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha})`;
      ctx.fill();
    }
    if (fadeP >= 1) {
      clearTimeout(a.safety);
      a.logo.style.opacity = '1';
      logoAnim = null;
    }
  }

  function update() {
    time++;
    updateMolecules();
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

        // Wrap edges with generous buffer (bonded particles never wrap —
        // their molecule dissolves near the edge instead)
        if (!p.molecule) {
          const buf = 100;
          if (p.x < -buf) p.x = w + buf;
          if (p.x > w + buf) p.x = -buf;
          if (p.y < -buf) p.y = h + buf;
          if (p.y > h + buf) p.y = -buf;
        }

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
            // Bonded particles show only their molecule's structure
            if (a.molecule || b.molecule) continue;
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

      // Molecule bonds render beneath this layer's dots
      if (li === 3) drawMolecules();

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

    drawLogoMaterialize();
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
  initLogoMaterialize();
  loop();
})();
