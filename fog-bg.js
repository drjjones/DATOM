/* ============================================================
   DATOM, fog-bg.js
   The original infinite-depth particle field (particles.js),
   restored for the v1.1 pages and wrapped in photorealistic fog.

   Concept: the ledger's particle network is always present, but a
   bank of soft, drifting fog sits over it, evidence obscured by
   noise. Clearings move through the fog (one follows the reader's
   cursor; two wander on their own) and inside them the network
   shows crisp and connected. DATOM clears the fog.

   Structure:
     1. Particle field, ported from particles.js (five depth layers,
        connections, molecule formation, orbital atoms). The hero-logo
        materialization from the original is dropped: that element no
        longer exists on these pages.
     2. Fog: two pre-baked periodic fBm noise tiles composited as two
        parallax strata (large slow billows behind, finer faster wisps
        in front), crossfading between tiles so the fog churns rather
        than just slides. Clear zones are punched out with soft radial
        masks via destination-out.

   particles.js itself is untouched and still serves example.html and
   research.html; this file must not be loaded on those pages.
   ============================================================ */

(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'fogBgCanvas';
  canvas.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;width:100%;height:100%;';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= particle field (from particles.js) ============ */

  const CYAN     = [20, 90, 185];
  const TEAL     = [14, 65, 148];
  const DEEP_CY  = [10, 48, 115];
  const DIM_TEAL = [6, 32, 85];
  const FAINT    = [3, 18, 58];

  const LAYERS = [
    { count: 200, speed: 0.02, rMin: 0.3, rMax: 0.8,
      alphaMin: 0.04, alphaMax: 0.12,
      connDist: 50, connAlpha: 0.02, lineW: 0.2,
      color: FAINT, mouseAffected: false, atomChance: 0.02, twinkle: true },
    { count: 120, speed: 0.04, rMin: 0.5, rMax: 1.0,
      alphaMin: 0.06, alphaMax: 0.18,
      connDist: 65, connAlpha: 0.04, lineW: 0.3,
      color: DIM_TEAL, mouseAffected: false, atomChance: 0.04, twinkle: true },
    { count: 70, speed: 0.08, rMin: 0.8, rMax: 1.5,
      alphaMin: 0.10, alphaMax: 0.25,
      connDist: 90, connAlpha: 0.07, lineW: 0.4,
      color: DEEP_CY, mouseAffected: false, atomChance: 0.06, twinkle: false },
    { count: 45, speed: 0.16, rMin: 1.3, rMax: 2.6,
      alphaMin: 0.20, alphaMax: 0.42,
      connDist: 130, connAlpha: 0.16, lineW: 0.7,
      color: TEAL, mouseAffected: false, atomChance: 0.08, twinkle: false },
    { count: 28, speed: 0.28, rMin: 2.0, rMax: 4.0,
      alphaMin: 0.35, alphaMax: 0.65,
      connDist: 160, connAlpha: 0.30, lineW: 1.1,
      color: CYAN, mouseAffected: true, atomChance: 0.10, twinkle: false },
  ];

  const MOUSE_RADIUS = 220;
  const MOUSE_FORCE  = 0.018;

  const MOLECULE_LAYERS = [3, 4];
  const MAX_MOLECULES   = 3;
  const SPAWN_INTERVAL  = 240;
  const FORM_SPRING     = 0.012;
  const FORM_DAMPING    = 0.90;
  const MOLECULE_SHAPES = [
    { type: 'ring', count: 6, radius: 52 },
    { type: 'ring', count: 5, radius: 42 },
    { type: 'hub',  count: 5, radius: 46 },
    { type: 'hub',  count: 7, radius: 58 },
  ];
  let molecules = [];

  let w = 0, h = 0, DPR = 1;
  let mouse = { x: -9999, y: -9999 };
  let layers = [];
  let time = 0;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    resizeFog();
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
          twinkleSpeed: 0.003 + Math.random() * 0.008,
          twinkleOffset: Math.random() * Math.PI * 2,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.0003 + Math.random() * 0.0008,
        });
      }
      return arr;
    });
    molecules = [];
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
      targets.push({ x: 0, y: 0 });
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
      mol.cx += mol.vx;
      mol.cy += mol.vy;

      const margin = 80;
      if (mol.cx < margin || mol.cx > w - margin || mol.cy < margin || mol.cy > h - margin) {
        mol.phase = 'dissolving';
      }

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

  function update() {
    time++;
    updateMolecules();
    LAYERS.forEach((cfg, li) => {
      for (const p of layers[li]) {
        if (cfg.mouseAffected) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 1) {
            p.vx += (dx / dist) * MOUSE_FORCE;
            p.vy += (dy / dist) * MOUSE_FORCE;
          }
        }

        p.driftAngle += p.driftSpeed;
        p.vx += Math.cos(p.driftAngle) * 0.001 * cfg.speed;
        p.vy += Math.sin(p.driftAngle) * 0.001 * cfg.speed;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.vy *= 0.998;

        p.vx += (Math.random() - 0.5) * 0.002;
        p.vy += (Math.random() - 0.5) * 0.002;

        if (cfg.twinkle) {
          const flicker = 0.5 + 0.5 * Math.sin(time * p.twinkleSpeed + p.twinkleOffset);
          p.alpha = p.baseAlpha * (0.3 + 0.7 * flicker);
        } else {
          p.alpha = p.baseAlpha;
        }

        if (!p.molecule) {
          const buf = 100;
          if (p.x < -buf) p.x = w + buf;
          if (p.x > w + buf) p.x = -buf;
          if (p.y < -buf) p.y = h + buf;
          if (p.y > h + buf) p.y = -buf;
        }

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

    for (let angle = 0; angle < Math.PI; angle += Math.PI / 3) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
      ctx.restore();
      ctx.stroke();
    }

    ctx.globalAlpha = alpha * 0.9;
    ctx.fillStyle = `rgb(${color.join(',')})`;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
    ctx.fill();

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
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
    grad.addColorStop(0, `rgba(${color.join(',')}, ${alpha * 0.15})`);
    grad.addColorStop(1, `rgba(${color.join(',')}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r * 4, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawParticles() {
    LAYERS.forEach((cfg, li) => {
      const pts = layers[li];
      const [cr, cg, cb] = cfg.color;

      if (li > 0) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j];
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

      if (li === 3) drawMolecules();

      for (const p of pts) {
        if (p.isAtom) {
          drawAtom(p.x, p.y, p.r, p.alpha, cfg.color);
        } else {
          if (li >= 3) drawGlow(p.x, p.y, p.r, p.alpha, cfg.color);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb}, ${p.alpha})`;
          ctx.fill();
        }
      }
    });
  }

  /* ============================ fog ================================ */

  const FOG_TILE = 512;       // baked noise tile edge, px
  const FOG_SCALE_BACK = 2.4; // tile draw scale: big slow billows
  const FOG_SCALE_FRONT = 1.2;// finer, faster wisps
  const FOG_ALPHA_BACK = 0.98;
  const FOG_ALPHA_FRONT = 0.72;
  const HAZE_ALPHA = 0.34;   // uniform veil in "clear air" between banks
  const FOG_WIND_BACK = { x: 9, y: -2.5 };   // px/sec at fog-buffer scale
  const FOG_WIND_FRONT = { x: 19, y: -6 };
  const FOG_CHURN_S = 26;     // seconds per tile crossfade cycle
  const POINTER_CLEAR_R = 300;

  let fogCanvas = null, fctx = null, fw = 0, fh = 0;
  let fogTiles = [];

  /* Pointer clearing eases toward the cursor rather than snapping,
     so the fog reads as parting, not as a stencil glued to the mouse. */
  const pointerClear = { x: -9999, y: -9999, strength: 0 };

  /* Two autonomous clearings wander on lissajous paths so the network
     keeps being revealed even with no cursor (touch devices). */
  const wanderers = [
    { rx: 0.30, ry: 0.26, sx: 0.021, sy: 0.017, px: 0.0, py: 1.7, r: 320 },
    { rx: 0.34, ry: 0.30, sx: 0.013, sy: 0.023, px: 3.1, py: 0.6, r: 250 },
  ];

  function smoothstepN(e0, e1, x) {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  }

  /* Periodic fBm value-noise tile: wraps seamlessly in both axes so it
     can drift forever without seams. Density and a slight cool-grey
     darkening ride together, which is what makes it read as vapor with
     depth instead of a flat alpha wash. */
  function bakeFogTile() {
    const size = FOG_TILE;
    const tile = document.createElement('canvas');
    tile.width = size;
    tile.height = size;
    const tctx = tile.getContext('2d');
    const img = tctx.createImageData(size, size);

    const octaves = [];
    let f = 3;
    for (let o = 0; o < 5; o++) {
      const g = new Float32Array(f * f);
      for (let i = 0; i < g.length; i++) g[i] = Math.random();
      octaves.push({ f, g });
      f *= 2;
    }

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let n = 0, amp = 1, norm = 0;
        for (const { f, g } of octaves) {
          const u = (x / size) * f;
          const v = (y / size) * f;
          const i0 = Math.floor(u) % f, j0 = Math.floor(v) % f;
          const i1 = (i0 + 1) % f, j1 = (j0 + 1) % f;
          let tx = u - Math.floor(u), ty = v - Math.floor(v);
          tx = tx * tx * (3 - 2 * tx);
          ty = ty * ty * (3 - 2 * ty);
          const a = g[j0 * f + i0], b = g[j0 * f + i1];
          const c = g[j1 * f + i0], d = g[j1 * f + i1];
          const val = a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty;
          n += amp * val;
          norm += amp;
          amp *= 0.55;
        }
        n /= norm;

        // Carve cloud bodies out of the noise: below the low edge is
        // clear air, above the high edge is full vapor. Wider coverage
        // and a deeper grey-blue body make the fog read as a real bank,
        // yet the densest tone stays light enough that dark ink text
        // floating on top of it remains legible.
        const d2 = smoothstepN(0.28, 0.70, n);
        const idx = (y * size + x) * 4;
        img.data[idx]     = Math.round(239 - 47 * d2);
        img.data[idx + 1] = Math.round(242 - 39 * d2);
        img.data[idx + 2] = Math.round(248 - 28 * d2);
        img.data[idx + 3] = Math.round(d2 * 255);
      }
    }
    tctx.putImageData(img, 0, 0);
    return tile;
  }

  function resizeFog() {
    if (!fogCanvas) {
      fogCanvas = document.createElement('canvas');
      fctx = fogCanvas.getContext('2d');
    }
    // Fog is composited from a half-resolution buffer; the upscale is
    // free extra softness and keeps per-frame fill cost low.
    fw = Math.max(1, Math.ceil(w / 2));
    fh = Math.max(1, Math.ceil(h / 2));
    fogCanvas.width = fw;
    fogCanvas.height = fh;
  }

  function drawTiled(tile, scale, ox, oy, alpha) {
    const ts = FOG_TILE * scale;
    ox = ((ox % ts) + ts) % ts;
    oy = ((oy % ts) + ts) % ts;
    fctx.globalAlpha = alpha;
    for (let x = -ox; x < fw; x += ts) {
      for (let y = -oy; y < fh; y += ts) {
        fctx.drawImage(tile, x, y, ts, ts);
      }
    }
  }

  function punchClear(cx, cy, r, strength) {
    if (strength <= 0.01) return;
    // Fog-buffer coordinates are half-resolution.
    const x = cx / 2, y = cy / 2, rad = r / 2;
    const grad = fctx.createRadialGradient(x, y, 0, x, y, rad);
    grad.addColorStop(0, `rgba(0,0,0,${strength})`);
    grad.addColorStop(0.55, `rgba(0,0,0,${strength * 0.85})`);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    fctx.fillStyle = grad;
    fctx.beginPath();
    fctx.arc(x, y, rad, 0, Math.PI * 2);
    fctx.fill();
  }

  function drawFog(tSec) {
    fctx.clearRect(0, 0, fw, fh);

    // Uniform haze so even the air between fog banks is not paper-clear;
    // the punched clearings below are what read as truly clear.
    fctx.globalAlpha = HAZE_ALPHA;
    fctx.fillStyle = 'rgb(213, 221, 232)';
    fctx.fillRect(0, 0, fw, fh);

    // Crossfade weight cycles slowly so each stratum churns between its
    // two baked tiles instead of only translating.
    const churn = 0.5 + 0.5 * Math.sin((tSec / FOG_CHURN_S) * Math.PI * 2);

    // Back stratum: big soft billows.
    drawTiled(fogTiles[0], FOG_SCALE_BACK, tSec * FOG_WIND_BACK.x, tSec * FOG_WIND_BACK.y, FOG_ALPHA_BACK * churn);
    drawTiled(fogTiles[1], FOG_SCALE_BACK, tSec * FOG_WIND_BACK.x * 0.8 + 137, tSec * FOG_WIND_BACK.y * 1.2 + 61, FOG_ALPHA_BACK * (1 - churn));

    // Front stratum: finer, faster wisps.
    drawTiled(fogTiles[1], FOG_SCALE_FRONT, tSec * FOG_WIND_FRONT.x, tSec * FOG_WIND_FRONT.y, FOG_ALPHA_FRONT * (1 - churn * 0.5));
    drawTiled(fogTiles[0], FOG_SCALE_FRONT, tSec * FOG_WIND_FRONT.x * 1.15 + 251, tSec * FOG_WIND_FRONT.y * 0.9 + 89, FOG_ALPHA_FRONT * (0.5 + churn * 0.5));

    // Clearings.
    fctx.globalAlpha = 1;
    fctx.globalCompositeOperation = 'destination-out';

    // Very slight thinning right at the top edge so the header (frosted
    // glass) has a touch of breathing room; kept small so the fog stays
    // visibly present across the whole page.
    const topThin = fctx.createLinearGradient(0, 0, 0, fh * 0.26);
    topThin.addColorStop(0, 'rgba(0,0,0,0.18)');
    topThin.addColorStop(1, 'rgba(0,0,0,0)');
    fctx.fillStyle = topThin;
    fctx.fillRect(0, 0, fw, fh * 0.26);

    for (const z of wanderers) {
      const cx = w * (0.5 + z.rx * Math.sin(tSec * z.sx * Math.PI * 2 + z.px));
      const cy = h * (0.5 + z.ry * Math.sin(tSec * z.sy * Math.PI * 2 + z.py));
      punchClear(cx, cy, z.r, 0.92);
    }
    punchClear(pointerClear.x, pointerClear.y, POINTER_CLEAR_R, pointerClear.strength);

    fctx.globalCompositeOperation = 'source-over';
  }

  function updatePointerClear() {
    const hasMouse = mouse.x > -9000;
    if (hasMouse) {
      if (pointerClear.strength === 0) {
        // First contact: appear where the cursor is, don't fly in.
        pointerClear.x = mouse.x;
        pointerClear.y = mouse.y;
      }
      pointerClear.x += (mouse.x - pointerClear.x) * 0.08;
      pointerClear.y += (mouse.y - pointerClear.y) * 0.08;
      pointerClear.strength = Math.min(1, pointerClear.strength + 0.03);
    } else {
      pointerClear.strength = Math.max(0, pointerClear.strength - 0.02);
    }
  }

  /* ========================== main loop ============================ */

  function drawFrame(tSec) {
    ctx.clearRect(0, 0, w, h);
    drawParticles();
    drawFog(tSec);
    ctx.drawImage(fogCanvas, 0, 0, w, h);
  }

  function loop(now) {
    update();
    updatePointerClear();
    drawFrame(now / 1000);
    requestAnimationFrame(loop);
  }

  function drawStaticFrame() {
    // prefers-reduced-motion: one still image. Particles placed, fog laid
    // over, both wanderer clearings open so the network is visible; no
    // animation loop, no pointer response.
    update();
    ctx.clearRect(0, 0, w, h);
    drawParticles();
    drawFog(40); // arbitrary fixed instant; puts wanderers mid-path
    ctx.drawImage(fogCanvas, 0, 0, w, h);
  }

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', () => {
    resize();
    layers.forEach(pts => {
      for (const p of pts) {
        if (p.x > w + 100 || p.y > h + 100) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
        }
      }
    });
    if (reduceMotion) drawStaticFrame();
  });

  resize();
  createParticles();
  fogTiles = [bakeFogTile(), bakeFogTile()];

  if (reduceMotion) {
    drawStaticFrame();
  } else {
    requestAnimationFrame(loop);
  }
})();
