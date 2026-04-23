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

/* THREE and OrbitControls loaded as classic <script> tags before this file.
   Accessed via window.THREE and THREE.OrbitControls. */

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
  // Match on words only — the ↑/↓ symbols in the data describe the outcome
  // (e.g. "productivity ↑"), NOT the relationship direction, so ignore them.
  if (d.includes('supports'))                                                   return 'SUPPORTS';
  if (d.includes('contrad'))                                                    return 'CONTRADICTS';
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
  const W = container.offsetWidth  || 800;
  const H = container.offsetHeight || 480;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x07070e, 1);
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  // CSS2DRenderer — same as drei's <Html> component; renders DOM labels in 3D space
  const labelRenderer = new THREE.CSS2DRenderer();
  labelRenderer.setSize(W, H);
  labelRenderer.domElement.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;z-index:1;';
  container.appendChild(labelRenderer.domElement);

  const scene  = new THREE.Scene();
  scene.background = new THREE.Color(BG_SCENE.black);

  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.set(0, 1.8, 9);
  camera.lookAt(0, 0, 0);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
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

  /* -- Nucleus pulse (outer halo + mid glow + animated point light) --------- */
  const nucleusColor = new THREE.Color(COLORS.NUCLEUS);
  const nucleusOuter = new THREE.Mesh(
    new THREE.SphereGeometry(NUCLEUS_R * 4.5, 20, 20),
    new THREE.MeshBasicMaterial({ color: nucleusColor, transparent: true, opacity: 0.10,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide })
  );
  scene.add(nucleusOuter);
  const nucleusMid = new THREE.Mesh(
    new THREE.SphereGeometry(NUCLEUS_R * 2.2, 16, 16),
    new THREE.MeshBasicMaterial({ color: nucleusColor, transparent: true, opacity: 0.15,
      blending: THREE.AdditiveBlending, depthWrite: false })
  );
  scene.add(nucleusMid);
  const nucleusPulseLight = new THREE.PointLight(nucleusColor, 0.6, 7, 2);
  nucleusPulseLight.position.set(0, 0, 0);
  scene.add(nucleusPulseLight);

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

  /* -- Node spheres + CSS2D labels + electron shells ----------------------- */
  const icoGeoNucleus = new THREE.IcosahedronGeometry(NUCLEUS_R, 3);
  const icoGeoNode    = new THREE.IcosahedronGeometry(NODE_R,    2);
  const electronGeo   = new THREE.SphereGeometry(0.015, 5, 5);

  const nodeMeshes  = [];
  const labelDivs   = [];   // { div, node } — CSS2DObject label elements
  const allElectrons = [];  // { mesh, mat, node, speed, tilt, phase, r }

  // Electron orbital configs — exact match to dashboard ElectronShell
  const ELECTRON_CONFIGS = [
    { speed: 90,  tilt: 0,              phase: 0 },
    { speed: 110, tilt: Math.PI / 2.5,  phase: Math.PI * 0.67 },
    { speed: 130, tilt: -Math.PI / 3.2, phase: Math.PI * 1.35 },
  ];

  nodes.forEach(node => {
    const color     = new THREE.Color(COLORS[node.rel] ?? COLORS.NEUTRAL);
    const geo       = node.isNucleus ? icoGeoNucleus : icoGeoNode;
    // Glass opacity — translucent to show depth through the sphere
    const baseOp    = node.isNucleus ? 0.68 : 0.55;
    const baseEm    = node.isNucleus ? 0.30 : 0.18;
    const baseGlowOp = 0.28;
    // MeshPhysicalMaterial — clearcoat gives a specular glass highlight layer
    const mat       = new THREE.MeshPhysicalMaterial({
      color, emissive: color,
      emissiveIntensity: baseEm,
      metalness: 0.0, roughness: 0.08,
      clearcoat: 1.0, clearcoatRoughness: 0.05,
      transparent: true, opacity: baseOp,
      depthWrite: false,
    });
    const mesh      = new THREE.Mesh(geo, mat);
    const baseScale = node.isNucleus ? 1.0 : (node.weight >= 5 ? 1.4 : node.weight >= 3 ? 1.2 : 1.0);
    mesh.position.set(node.x, node.y, node.z);
    mesh.scale.setScalar(baseScale);

    // Inner glow core — additive blending blooms color from inside the glass
    const innerGlowGeo = node.isNucleus
      ? new THREE.IcosahedronGeometry(NUCLEUS_R, 2)
      : new THREE.IcosahedronGeometry(NODE_R, 1);
    const innerGlowMat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: baseGlowOp,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const innerGlow = new THREE.Mesh(innerGlowGeo, innerGlowMat);
    innerGlow.scale.setScalar(0.62); // 62% of parent — sits inside the glass shell
    mesh.add(innerGlow); // child inherits parent position + scale automatically

    mesh.userData = { node, baseScale, targetOpacity: baseOp, targetScale: baseScale, targetEm: baseEm, baseOp, baseEm, innerGlowMat, baseGlowOp };
    scene.add(mesh);
    nodeMeshes.push(mesh);

    // CSS2DObject label — identical style to dashboard NodeLabel Html component
    const shortLabel = node.isNucleus ? 'N' : (node.id ?? '').slice(0, 4);
    const accent     = COLORS[node.rel] ?? COLORS.NEUTRAL;
    const div = document.createElement('div');
    div.textContent = shortLabel;
    div.style.cssText = [
      'color:#ffffff',
      `font-size:${node.isNucleus ? '12px' : '10px'}`,
      'font-family:"Inter","SF Mono",monospace',
      'font-weight:700',
      'text-align:center',
      'letter-spacing:0.06em',
      `text-shadow:0 0 8px ${accent},0 0 3px rgba(0,0,0,1)`,
      'white-space:nowrap',
      'line-height:1',
      'opacity:0.95',
      'pointer-events:none',
      'user-select:none',
    ].join(';');
    const css2dLabel = new THREE.CSS2DObject(div);
    css2dLabel.position.set(node.x, node.y, node.z);
    scene.add(css2dLabel);
    labelDivs.push({ div, node, css2dLabel });

    // Pre-create electron shells (hidden until hover/select)
    const r = (node.isNucleus ? NUCLEUS_R : NODE_R) * 2.0;
    ELECTRON_CONFIGS.forEach(cfg => {
      const eMat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 2.0,
        metalness: 0.1, roughness: 0.1,
        transparent: true, opacity: 0,
      });
      const eMesh = new THREE.Mesh(electronGeo, eMat);
      scene.add(eMesh);
      allElectrons.push({ mesh: eMesh, mat: eMat, node, r, ...cfg, active: false });
    });
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
    nodeMeshes.forEach(m => { m.userData.targetOpacity = m.userData.baseOp; m.userData.targetEm = m.userData.baseEm; });
    allElectrons.forEach(e => { e.active = false; });
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
      m.userData.targetOpacity = dim ? 0.08 : m.userData.baseOp;
      m.userData.targetEm = dim ? 0.02 : m.userData.baseEm;
    });
    // Activate electrons for hovered node
    allElectrons.forEach(e => {
      e.active = hoveredNode ? e.node.id === hoveredNode.id
               : selectedNode ? e.node.id === selectedNode.id
               : false;
    });
  });

  renderer.domElement.addEventListener('click', () => {
    if (hoveredNode) {
      showInfo(hoveredNode);
      allElectrons.forEach(e => { e.active = e.node.id === hoveredNode.id; });
    } else { hideInfo(); }
  });

  /* -- Background toggle -------------------------------------------------- */
  let currentBg = 'black';

  const bgToggle = document.createElement('div');
  bgToggle.style.cssText = 'position:absolute;top:10px;right:12px;display:flex;gap:5px;z-index:9000;';
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
  legend.style.cssText = 'position:absolute;bottom:12px;left:14px;display:flex;flex-direction:column;gap:5px;pointer-events:none;z-index:9000;background:rgba(8,8,20,0.72);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.10);border-radius:8px;padding:7px 10px;';
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
    const w = container.offsetWidth || 800, h = container.offsetHeight || 480;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    labelRenderer.setSize(w, h);
  });
  ro.observe(container);

  /* -- Animation loop ----------------------------------------------------- */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    controls.autoRotate = autoRotate;
    controls.update();

    // NucleusPulse — breath (~2.4s) + flicker (fast), matching dashboard
    const breath  = Math.sin(t * 2.6) * 0.5 + 0.5;
    const flicker = Math.sin(t * 7.8) * 0.5 + 0.5;
    nucleusOuter.material.opacity = 0.02 + breath * 0.06;
    nucleusOuter.scale.setScalar(1.0 + breath * 0.25);
    nucleusMid.material.opacity   = 0.04 + flicker * 0.08;
    nucleusMid.scale.setScalar(1.0 + flicker * 0.10);
    nucleusPulseLight.intensity   = 0.10 + breath * 0.25 + flicker * 0.10;

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
      mat.opacity           += (ud.targetOpacity - mat.opacity) * 0.09;
      mat.transparent        = true;
      mat.emissiveIntensity += (ud.targetEm - mat.emissiveIntensity) * 0.1;
      // Inner glow fades proportionally so dimmed nodes don't leave glowing cores
      if (ud.innerGlowMat) {
        const ratio = ud.baseOp > 0 ? mat.opacity / ud.baseOp : 0;
        ud.innerGlowMat.opacity = ud.baseGlowOp * ratio;
      }
      if (ud.node.isNucleus) {
        m.scale.setScalar(ud.baseScale * (1 + Math.sin(t * 1.2) * 0.04));
      }
    });

    // Electron shells — orbit when active (hovered/selected), fade out otherwise
    allElectrons.forEach(({ mesh, mat, node, r, speed, tilt, phase, active }) => {
      const tOp  = active ? 0.72 : 0.0;
      mat.opacity    += (tOp - mat.opacity) * 0.1;
      mat.transparent = true;
      if (active || mat.opacity > 0.01) {
        const angle = t * speed + phase;
        const x  = r * Math.cos(angle);
        const z  = r * Math.sin(angle);
        const y  = z * Math.sin(tilt);
        const zp = z * Math.cos(tilt);
        mesh.position.set(node.x + x, node.y + y, node.z + zp);
      }
    });

    // CSS2D label opacity: fade when node is dimmed, hide when very dim
    labelDivs.forEach(({ div, node }) => {
      const m = nodeMeshes.find(nm => nm.userData.node.id === node.id);
      if (m) {
        const op = m.material.opacity;
        div.style.opacity = op > 0.15 ? String(Math.min(0.95, op)) : '0';
      }
    });

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }

  animate();
}

/* ── Boot ─────────────────────────────────────────────────────────────────── */
// This script is loaded with defer — DOM is ready when it runs.
// Use requestAnimationFrame to let the browser complete layout first.
requestAnimationFrame(() => {
  try {
    initGraph('graph3dContainer');
  } catch (err) {
    console.error('[graph3d] init failed:', err);
  }
});
