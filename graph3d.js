/**
 * graph3d.js — Vanilla Three.js knowledge graph for datom.science/example.html
 *
 * Mirrors DatomerKnowledgeGraph3D.tsx exactly:
 *   • Amber nucleus at origin
 *   • Orbital shells by relationship (Fibonacci lattice)
 *   • Coloured bond lines + glowing tube layer
 *   • Animated flow particles along spokes
 *   • Background toggle: black / grey / white
 *   • Click-to-info panel (HTML overlay)
 */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.167.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.167.0/examples/jsm/controls/OrbitControls.js';

/* ── Palette ──────────────────────────────────────────────────────────────── */

const COLORS = {
  NUCLEUS:     '#f59e0b',
  SUPPORTS:    '#06b6d4',
  CONTRADICTS: '#ef4444',
  CONDITIONAL: '#3b82f6',
  NEUTRAL:     '#94a3b8',
};

const BOND_COLOR = {
  spoke_supports:    '#06b6d4',
  spoke_contradicts: '#ef4444',
  spoke_conditional: '#3b82f6',
  spoke_neutral:     '#94a3b8',
  corroborate:       '#06b6d4',
  tension:           '#ef4444',
  qualify:           '#3b82f6',
  cosource:          '#94a3b8',
};

const BOND_OPACITY = {
  spoke_supports:    0.45,
  spoke_contradicts: 0.45,
  spoke_conditional: 0.45,
  spoke_neutral:     0.30,
  corroborate:       0.80,
  tension:           0.90,
  qualify:           0.75,
  cosource:          0.55,
};

const SHELL = { SUPPORTS: 2.4, CONDITIONAL: 3.4, CONTRADICTS: 3.4, NEUTRAL: 4.4 };

const BG_SCENE  = { black: '#07070e', grey: '#718096', white: '#eef2f7' };
const BG_OUTER  = {
  black: 'linear-gradient(160deg,#050509 0%,#0e0e1c 100%)',
  grey:  'linear-gradient(160deg,#718096 0%,#4a5568 100%)',
  white: 'linear-gradient(160deg,#e8eef6 0%,#d6e0ec 100%)',
};

const NUCLEUS_R = 0.24;
const NODE_R    = 0.12;

/* ── Fibonacci shell layout ──────────────────────────────────────────────── */

function fibShell(n, r, indexOffset = 0) {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Array.from({ length: n }, (_, k) => {
    const i     = k + indexOffset;
    const total = n + indexOffset * 2;
    const theta = 2 * Math.PI * i / phi;
    const cosP  = 1 - (2 * i + 1) / Math.max(total, 1);
    const sinP  = Math.sqrt(Math.max(0, 1 - cosP * cosP));
    return [r * sinP * Math.cos(theta), r * cosP, r * sinP * Math.sin(theta)];
  });
}

function dist3(a, b) {
  return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2);
}

function nearest(node, pool, n) {
  return pool.filter(c => c.id !== node.id)
             .sort((a, b) => dist3(node, a) - dist3(node, b))
             .slice(0, n);
}

/* ── Relationship classifier (maps example.html direction → rel type) ─────── */

function classifyRel(direction) {
  const d = (direction || '').toLowerCase();
  if (d.includes('supports') || d.includes('↑'))                              return 'SUPPORTS';
  if (d.includes('contrad')  || d.includes('↓'))                              return 'CONTRADICTS';
  if (d.includes('mixed') || d.includes('conditional') || d.includes('moderate')) return 'CONDITIONAL';
  return 'NEUTRAL';
}

/* ── Build node/edge layout from DATOMERS array ───────────────────────────── */

function buildLayout(datomers) {
  const flat = [];
  datomers.forEach(domer =>
    domer.datoms.forEach(d => flat.push({
      id:     d.id,
      claim:  d.claim || '',
      rel:    classifyRel(d.direction),
      source: d.source || '',
    }))
  );

  const byRel = { SUPPORTS: [], CONTRADICTS: [], CONDITIONAL: [], NEUTRAL: [] };
  flat.forEach(d => byRel[d.rel].push(d));

  const nodes = [];
  const edges = [];
  const edgeSet = new Set();

  function addEdge(a, b, type) {
    const key = a < b ? `${a}::${b}` : `${b}::${a}`;
    if (!edgeSet.has(key)) { edgeSet.add(key); edges.push({ source: a, target: b, type }); }
  }

  // Nucleus
  nodes.push({ id: '__nucleus__', rel: 'NUCLEUS', x: 0, y: 0, z: 0,
               isNucleus: true, claim: 'Remote work reduces employee productivity.',
               weight: flat.length });

  function placeGroup(members, relKey, positions) {
    members.forEach((d, i) => {
      const [x, y, z] = positions[i] ?? [0, 0, SHELL[relKey] ?? 3];
      nodes.push({ id: d.id, rel: relKey, x, y, z, isNucleus: false, claim: d.claim, weight: 1 });
      addEdge('__nucleus__', d.id, `spoke_${relKey.toLowerCase()}`);
    });
  }

  placeGroup(byRel.SUPPORTS, 'SUPPORTS', fibShell(byRel.SUPPORTS.length, SHELL.SUPPORTS));
  placeGroup(byRel.NEUTRAL,  'NEUTRAL',  fibShell(byRel.NEUTRAL.length,  SHELL.NEUTRAL));

  const condCount = byRel.CONDITIONAL.length;
  const contCount = byRel.CONTRADICTS.length;
  const sharedTotal = condCount + contCount;
  if (sharedTotal > 0) {
    const allPos  = fibShell(sharedTotal, SHELL.CONDITIONAL);
    const condPos = allPos.filter((_, i) => i % 2 === 0).slice(0, condCount);
    const contPos = allPos.filter((_, i) => i % 2 === 1).slice(0, contCount);
    while (condPos.length < condCount) condPos.push(allPos[condPos.length] ?? [0,0,SHELL.CONDITIONAL]);
    while (contPos.length < contCount) contPos.push(allPos[contPos.length] ?? [0,0,SHELL.CONDITIONAL]);
    placeGroup(byRel.CONDITIONAL, 'CONDITIONAL', condPos);
    placeGroup(byRel.CONTRADICTS, 'CONTRADICTS', contPos);
  }

  // Inter-datom bonds
  const sup = nodes.filter(n => n.rel === 'SUPPORTS');
  const con = nodes.filter(n => n.rel === 'CONTRADICTS');
  const cnd = nodes.filter(n => n.rel === 'CONDITIONAL');
  const neu = nodes.filter(n => n.rel === 'NEUTRAL');
  const evi = nodes.filter(n => !n.isNucleus);

  if (sup.length <= 6) {
    for (let i = 0; i < sup.length; i++)
      for (let j = i+1; j < sup.length; j++)
        addEdge(sup[i].id, sup[j].id, 'corroborate');
  } else {
    sup.forEach(n => nearest(n, sup, 3).forEach(nb => addEdge(n.id, nb.id, 'corroborate')));
  }

  const supOrEvi = sup.length ? sup : evi;
  con.forEach(n => nearest(n, supOrEvi, 2).forEach(nb => addEdge(n.id, nb.id, 'tension')));

  const qualPool = [...sup, ...con];
  const qp = qualPool.length ? qualPool : evi;
  cnd.forEach(n => nearest(n, qp, 2).forEach(nb => addEdge(n.id, nb.id, 'qualify')));

  neu.forEach(n => nearest(n, evi, 2).forEach(nb => addEdge(n.id, nb.id, 'cosource')));

  // Update weights
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  edges.forEach(e => {
    const s = nodeMap.get(e.source); if (s) s.weight++;
    const t = nodeMap.get(e.target); if (t) t.weight++;
  });

  return { nodes, edges, nodeMap };
}

/* ── Three.js renderer ───────────────────────────────────────────────────── */

function initGraph(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const datomers = window.DATOMERS;
  if (!datomers || !datomers.length) return;

  const { nodes, edges, nodeMap } = buildLayout(datomers);

  /* -- DOM wrapper -------------------------------------------------------- */
  container.style.position = 'relative';
  container.style.borderRadius = '10px';
  container.style.overflow = 'hidden';
  container.style.background = BG_OUTER.black;
  container.style.border = '1px solid #1f2937';
  container.style.height = '480px';

  /* -- Renderer ----------------------------------------------------------- */
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth || 800, container.clientHeight || 480);
  renderer.setClearColor(0x07070e, 1);
  container.appendChild(renderer.domElement);

  const scene  = new THREE.Scene();
  scene.background = new THREE.Color(BG_SCENE.black);

  const W = container.clientWidth  || 800;
  const H = container.clientHeight || 480;
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.set(0, 1.8, 9);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 0.6;
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.07;
  controls.minDistance     = 3;
  controls.maxDistance     = 28;

  let autoRotate = true;
  controls.addEventListener('start', () => { autoRotate = false; });
  controls.addEventListener('end',   () => { setTimeout(() => { autoRotate = true; }, 2000); });

  /* -- Lights ------------------------------------------------------------- */
  scene.add(new THREE.AmbientLight(0xffffff, 0.28));
  const dLight1 = new THREE.DirectionalLight(0xffffff, 0.65);
  dLight1.position.set(8, 12, 8); scene.add(dLight1);
  const dLight2 = new THREE.DirectionalLight(0x6080ff, 0.18);
  dLight2.position.set(-6, -4, -8); scene.add(dLight2);
  const pLight = new THREE.PointLight(0xffffff, 0.45, 24);
  pLight.position.set(0, 0, 0); scene.add(pLight);

  /* -- Bond lines --------------------------------------------------------- */
  const bondTypes = Object.keys(BOND_COLOR);
  bondTypes.forEach(bt => {
    const grp = edges.filter(e => e.type === bt);
    if (!grp.length) return;

    const pos = new Float32Array(grp.length * 6);
    grp.forEach((e, i) => {
      const a = nodeMap.get(e.source), b = nodeMap.get(e.target);
      if (!a || !b) return;
      pos[i*6+0]=a.x; pos[i*6+1]=a.y; pos[i*6+2]=a.z;
      pos[i*6+3]=b.x; pos[i*6+4]=b.y; pos[i*6+5]=b.z;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(BOND_COLOR[bt]),
      transparent: true,
      opacity: Math.min(1, BOND_OPACITY[bt] * 1.4),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.LineSegments(geo, mat));

    // Glowing tube layer
    grp.forEach(e => {
      const a = nodeMap.get(e.source), b = nodeMap.get(e.target);
      if (!a || !b) return;
      const start = new THREE.Vector3(a.x, a.y, a.z);
      const end   = new THREE.Vector3(b.x, b.y, b.z);
      const dir   = new THREE.Vector3().subVectors(end, start);
      const len   = dir.length();
      const mid   = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const quat  = new THREE.Quaternion();
      quat.setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize());
      const tubeMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, len, 5, 1),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(BOND_COLOR[bt]),
          transparent: true, opacity: BOND_OPACITY[bt] * 0.55,
          blending: THREE.AdditiveBlending, depthWrite: false,
        })
      );
      tubeMesh.position.copy(mid);
      tubeMesh.quaternion.copy(quat);
      scene.add(tubeMesh);
    });
  });

  /* -- Flow particles ----------------------------------------------------- */
  const spokes = edges.filter(e => e.type.startsWith('spoke_'));
  const particles = [];
  const particleGeo = new THREE.SphereGeometry(0.013, 5, 5);

  spokes.forEach((e, idx) => {
    const evidenceId = e.source === '__nucleus__' ? e.target : e.source;
    const node = nodeMap.get(evidenceId);
    if (!node) return;
    const color  = new THREE.Color(COLORS[node.rel] ?? COLORS.NEUTRAL);
    const speed  = 0.28 + (idx % 7) * 0.04;
    const total  = spokes.length;
    const from   = [node.x, node.y, node.z];

    [0, 0.33, 0.66].forEach(phaseOffset => {
      const phase = idx / total + phaseOffset;
      const mat   = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const mesh = new THREE.Mesh(particleGeo, mat);
      scene.add(mesh);
      particles.push({ mesh, mat, from, speed, phase });
    });
  });

  /* -- Node spheres ------------------------------------------------------- */
  const icoGeoNucleus = new THREE.IcosahedronGeometry(NUCLEUS_R, 3);
  const icoGeoNode    = new THREE.IcosahedronGeometry(NODE_R,    2);

  const nodeMeshes = [];
  nodes.forEach(node => {
    const color  = new THREE.Color(COLORS[node.rel] ?? COLORS.NEUTRAL);
    const geo    = node.isNucleus ? icoGeoNucleus : icoGeoNode;
    const mat    = new THREE.MeshStandardMaterial({
      color, emissive: color,
      emissiveIntensity: node.isNucleus ? 0.65 : 0.40,
      metalness: 0.3, roughness: 0.4,
    });
    const mesh = new THREE.Mesh(geo, mat);
    const baseScale = node.isNucleus ? 1.0 : (node.weight >= 5 ? 1.4 : node.weight >= 3 ? 1.2 : 1.0);
    mesh.position.set(node.x, node.y, node.z);
    mesh.scale.setScalar(baseScale);
    mesh.userData = { node, baseScale, targetOpacity: 1.0, targetScale: baseScale, targetEm: node.isNucleus ? 0.65 : 0.40 };
    scene.add(mesh);
    nodeMeshes.push(mesh);
  });

  /* -- Info panel (HTML overlay) ----------------------------------------- */
  const infoPanel = document.createElement('div');
  infoPanel.style.cssText = `
    display:none; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
    background:rgba(8,8,20,0.94); border:1px solid #06b6d4; border-radius:8px;
    padding:12px 16px; min-width:220px; max-width:280px; color:#e5e7eb;
    font-size:11px; line-height:1.6; box-shadow:0 0 24px #06b6d444;
    pointer-events:auto; z-index:20; font-family:var(--body,'system-ui');
  `;
  container.appendChild(infoPanel);

  let selectedNode = null;

  function showInfo(node) {
    selectedNode = node;
    const accent = COLORS[node.rel] ?? COLORS.NEUTRAL;
    const label = { SUPPORTS:'Supports', CONTRADICTS:'Contradicts', CONDITIONAL:'Conditional', NEUTRAL:'Neutral', NUCLEUS:'Nucleus' }[node.rel] ?? node.rel;
    infoPanel.style.display = 'block';
    infoPanel.style.borderColor = accent;
    infoPanel.style.boxShadow = `0 0 24px ${accent}44`;
    infoPanel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:9px;font-weight:700;color:${accent};text-transform:uppercase;letter-spacing:.08em">${label}</span>
        <button id="closeInfoPanel" style="background:none;border:none;color:#9ca3af;cursor:pointer;font-size:14px;line-height:1">✕</button>
      </div>
      <p style="margin:0 0 8px;font-size:11px;color:#d1d5db;line-height:1.55">${(node.claim || '').slice(0,140)}${(node.claim||'').length>140?'…':''}</p>
      <div style="display:flex;justify-content:space-between;border-top:1px solid #1f2937;padding-top:6px;">
        <span style="color:#6b7280">Connections</span>
        <span style="font-weight:700">${node.weight}</span>
      </div>
    `;
    document.getElementById('closeInfoPanel')?.addEventListener('click', e => { e.stopPropagation(); hideInfo(); });
  }

  function hideInfo() {
    selectedNode = null;
    infoPanel.style.display = 'none';
    nodeMeshes.forEach(m => { m.userData.targetOpacity = 1.0; m.userData.targetEm = m.userData.node.isNucleus ? 0.65 : 0.40; });
  }

  /* -- Raycasting --------------------------------------------------------- */
  const raycaster = new THREE.Raycaster();
  const mouse     = new THREE.Vector2();
  let   hoveredNode = null;

  function getConnectedIds(nodeId) {
    const s = new Set([nodeId]);
    edges.forEach(e => {
      if (e.source === nodeId) s.add(e.target);
      if (e.target === nodeId) s.add(e.source);
    });
    return s;
  }

  renderer.domElement.addEventListener('pointermove', e => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(nodeMeshes);
    const hit  = hits.length ? hits[0].object : null;
    hoveredNode = hit ? hit.userData.node : null;
    renderer.domElement.style.cursor = hoveredNode ? 'pointer' : 'grab';

    const focus = selectedNode ?? hoveredNode;
    const connected = focus ? getConnectedIds(focus.id) : null;
    nodeMeshes.forEach(m => {
      const dim = connected && !connected.has(m.userData.node.id);
      m.userData.targetOpacity = dim ? 0.08 : 1.0;
      m.userData.targetEm = dim ? 0.02 : (m.userData.node.isNucleus ? 0.65 : 0.40);
    });
  });

  renderer.domElement.addEventListener('click', () => {
    if (hoveredNode) { showInfo(hoveredNode); }
    else { hideInfo(); }
  });

  /* -- Background toggle -------------------------------------------------- */
  let currentBg = 'black';

  const bgToggle = document.createElement('div');
  bgToggle.style.cssText = 'position:absolute;top:10px;right:12px;display:flex;gap:5px;z-index:10;';
  const swatches = { black: '#07070e', grey: '#718096', white: '#eef2f7' };
  ['black', 'grey', 'white'].forEach(mode => {
    const btn = document.createElement('button');
    btn.style.cssText = `width:22px;height:22px;border-radius:5px;background:${swatches[mode]};padding:0;cursor:pointer;border:${mode==='black'?'2px solid #06b6d4':'1px solid rgba(148,163,184,0.45)'};box-shadow:${mode==='black'?'0 0 6px #06b6d488':'none'};`;
    btn.title = mode;
    btn.dataset.mode = mode;
    btn.addEventListener('click', () => {
      currentBg = mode;
      scene.background = new THREE.Color(BG_SCENE[mode]);
      container.style.background = BG_OUTER[mode];
      bgToggle.querySelectorAll('button').forEach(b => {
        const active = b.dataset.mode === mode;
        b.style.border = active ? '2px solid #06b6d4' : '1px solid rgba(148,163,184,0.45)';
        b.style.boxShadow = active ? '0 0 6px #06b6d488' : 'none';
      });
    });
    bgToggle.appendChild(btn);
  });
  container.appendChild(bgToggle);

  /* -- Legend ------------------------------------------------------------- */
  const legend = document.createElement('div');
  legend.style.cssText = 'position:absolute;bottom:12px;left:14px;display:flex;flex-direction:column;gap:4px;pointer-events:none;z-index:10;';
  [['NUCLEUS','Nucleus'],['SUPPORTS','Supports'],['CONTRADICTS','Contradicts'],['CONDITIONAL','Conditional'],['NEUTRAL','Neutral']].forEach(([rel, label]) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:6px;';
    row.innerHTML = `<div style="width:8px;height:8px;border-radius:50%;background:${COLORS[rel]};flex-shrink:0;box-shadow:0 0 4px ${COLORS[rel]}99;"></div><span style="font-size:9.5px;color:#94a3b8;letter-spacing:.03em;">${label}</span>`;
    legend.appendChild(row);
  });
  const hint = document.createElement('div');
  hint.style.cssText = 'font-size:9px;color:#4b5563;margin-top:2px;';
  hint.textContent = 'Drag · Scroll · Click node';
  legend.appendChild(hint);
  container.appendChild(legend);

  /* -- Resize handler ------------------------------------------------------ */
  const ro = new ResizeObserver(() => {
    const w = container.clientWidth, h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  ro.observe(container);

  /* -- Animation loop ----------------------------------------------------- */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    controls.autoRotate = autoRotate;
    controls.update();

    // Flow particles
    particles.forEach(({ mesh, mat, from, speed, phase }) => {
      const p = ((t * speed + phase) % 1.0);
      const tPos = p * 0.85;
      mesh.position.set(from[0]*(1-tPos), from[1]*(1-tPos), from[2]*(1-tPos));
      mat.opacity = Math.sin(p * Math.PI) * (1 - p * 0.8) * 0.35;
    });

    // Node animation (smooth opacity + emissive transitions)
    nodeMeshes.forEach(m => {
      const ud  = m.userData;
      const mat = m.material;
      mat.opacity     = mat.opacity + (ud.targetOpacity - mat.opacity) * 0.09;
      mat.transparent = mat.opacity < 0.99;
      mat.emissiveIntensity += (ud.targetEm - mat.emissiveIntensity) * 0.1;

      // Scale pulse for nucleus
      if (ud.node.isNucleus) {
        m.scale.setScalar(ud.baseScale * (1 + Math.sin(t * 1.2) * 0.04));
      }
    });

    renderer.render(scene, camera);
  }

  animate();
}

/* ── Boot after DOM ready ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initGraph('graph3dContainer');
});
