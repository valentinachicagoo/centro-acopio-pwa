'use strict';

// ── DEFAULT DATA ──────────────────────────────────────────────────────────────
const DEFAULT_ITEMS = [
  { id: 'u1',  name: 'Papel higiénico', category: 'urgente',  sub: 'Aseo personal', status: 'critico',  needed: null, received: 0, unit: 'paquetes', notes: '' },
  { id: 'u2',  name: 'Toallas',         category: 'urgente',  sub: 'Aseo personal', status: 'critico',  needed: null, received: 0, unit: 'unidades', notes: '' },
  { id: 'u3',  name: 'Jabón',           category: 'urgente',  sub: 'Aseo personal', status: 'critico',  needed: null, received: 0, unit: 'unidades', notes: 'Jabón de manos y de baño' },
  { id: 'u4',  name: 'Crema dental',    category: 'urgente',  sub: 'Aseo personal', status: 'critico',  needed: null, received: 0, unit: 'tubos',    notes: '' },
  { id: 'u5',  name: 'Arroz',           category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: '' },
  { id: 'u6',  name: 'Enlatados',       category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'unidades', notes: 'Atún, sardinas, frijoles…' },
  { id: 'u7',  name: 'Panela',          category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: '' },
  { id: 'u8',  name: 'Galletas',        category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'paquetes', notes: '' },
  { id: 'u9',  name: 'Pasta',           category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: '' },
  { id: 'u10', name: 'Aceite',          category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'litros',   notes: '' },
  { id: 'u11', name: 'Granos',          category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: 'Lentejas, fríjoles, arvejas' },
  { id: 'u12', name: 'Café',            category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'paquetes', notes: '' },
  { id: 'u13', name: 'Chocolate',       category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: '' },
  { id: 'u14', name: 'Sal',             category: 'urgente',  sub: 'Alimentos',     status: 'critico',  needed: null, received: 0, unit: 'kg',       notes: '' },
  { id: 'n1',  name: 'Kits de bebés',   category: 'necesario', sub: 'Bebés',        status: 'necesario', needed: null, received: 0, unit: 'kits',    notes: 'Pañales, leche de fórmula, ropa 0-24M' },
  { id: 'n2',  name: 'Paños húmedos',   category: 'necesario', sub: 'Bebés',        status: 'necesario', needed: null, received: 0, unit: 'paquetes', notes: '' },
  { id: 'n3',  name: 'Medicamentos',    category: 'necesario', sub: 'Salud',        status: 'necesario', needed: null, received: 0, unit: 'unidades', notes: 'Consultar con coordinador médico' },
  { id: 'x1',  name: 'Ropa usada',      category: 'no_traer', sub: null,           status: null, needed: null, received: 0, unit: null, notes: 'No tenemos capacidad de clasificación' },
  { id: 'x2',  name: 'Tapabocas',       category: 'no_traer', sub: null,           status: null, needed: null, received: 0, unit: null, notes: 'Ya contamos con suficiente stock' },
];

const DEFAULT_REQUERIMIENTOS = [
  { id:'s1',  consecutivo:1,  fecha:'2026-08-16', ciudad:'Pereira',       barrio:'',                           nombre:'Leningrado 2',                  patrocinador:'Mafe Botero',   solarum:'Zairina 1601',  telefono:'',           direccion:'',           kitsAseo:0,  kitsBebe:1,  mercado:0,  animales:'', material:'Ropa bebé 4 meses, 5 cobijas, 1 almohada', pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-16', kitsAseoE:0,  kitsBebeE:1,  mercadoE:0,  notasEntrega:'' },
  { id:'s2',  consecutivo:2,  fecha:'2026-08-17', ciudad:'Dosquebradas',  barrio:'',                           nombre:'Liliana Sanchez',               patrocinador:'',              solarum:'',              telefono:'3126591398', direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:1,  animales:'', material:'',                                         pax:3,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:0,  kitsBebeE:0,  mercadoE:1,  notasEntrega:'' },
  { id:'s3',  consecutivo:3,  fecha:'2026-08-17', ciudad:'Dosquebradas',  barrio:'',                           nombre:'Edison Leandro Gomez Santana',  patrocinador:'',              solarum:'',              telefono:'3137393342', direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:1,  animales:'', material:'',                                         pax:0,  ayuda:'Moto',   estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:0,  kitsBebeE:0,  mercadoE:1,  notasEntrega:'' },
  { id:'s4',  consecutivo:4,  fecha:'2026-08-17', ciudad:'',              barrio:'El Remanso',                 nombre:'Paola',                         patrocinador:'',              solarum:'Zairina 702',   telefono:'',           direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:0,  animales:'', material:'',                                         pax:60, ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:0,  kitsBebeE:0,  mercadoE:0,  notasEntrega:'' },
  { id:'s5',  consecutivo:5,  fecha:'2026-08-17', ciudad:'Pereira',       barrio:'',                           nombre:'Empleada doméstica',            patrocinador:'',              solarum:'',              telefono:'',           direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:0,  animales:'', material:'',                                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:0,  kitsBebeE:0,  mercadoE:0,  notasEntrega:'' },
  { id:'s6',  consecutivo:6,  fecha:'2026-08-17', ciudad:'Pereira',       barrio:'Leningrado 2',               nombre:'Leningrado 2',                  patrocinador:'Mafe Botero',   solarum:'Zairina 1601',  telefono:'',           direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:0,  animales:'', material:'Juguetes',                                 pax:60, ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:0,  kitsBebeE:0,  mercadoE:0,  notasEntrega:'' },
  { id:'s7',  consecutivo:7,  fecha:'2026-08-17', ciudad:'Pereira',       barrio:'Finca Condina',              nombre:'Finca Condina',                 patrocinador:'Mafe Botero',   solarum:'Zairina 1601',  telefono:'',           direccion:'',           kitsAseo:1,  kitsBebe:0,  mercado:1,  animales:'', material:'Cobija, colchoneta, toalla',               pax:1,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:1,  kitsBebeE:0,  mercadoE:1,  notasEntrega:'' },
  { id:'s8',  consecutivo:8,  fecha:'2026-08-17', ciudad:'',              barrio:'',                           nombre:'Sin identificar',               patrocinador:'',              solarum:'',              telefono:'',           direccion:'',           kitsAseo:1,  kitsBebe:0,  mercado:1,  animales:'', material:'',                                         pax:1,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:1,  kitsBebeE:0,  mercadoE:1,  notasEntrega:'' },
  { id:'s9',  consecutivo:9,  fecha:'2026-08-17', ciudad:'',              barrio:'Banderas',                   nombre:'Olla comunitaria Banderas',     patrocinador:'',              solarum:'',              telefono:'',           direccion:'',           kitsAseo:10, kitsBebe:10, mercado:0,  animales:'', material:'3 palas, 4 picas',                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:10, kitsBebeE:10, mercadoE:0,  notasEntrega:'' },
  { id:'s10', consecutivo:10, fecha:'2026-08-17', ciudad:'Pereira',       barrio:'Villa Santana',              nombre:'Luz Mary Villada',              patrocinador:'Laura Mesas',   solarum:'Akore 1202',    telefono:'',           direccion:'',           kitsAseo:13, kitsBebe:3,  mercado:13, animales:'3',material:'Juguetes',                                 pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:13, kitsBebeE:3,  mercadoE:13, notasEntrega:'' },
  { id:'s11', consecutivo:11, fecha:'2026-08-17', ciudad:'',              barrio:'Solarum',                    nombre:'Personal vigilancia',           patrocinador:'',              solarum:'Colaboradores', telefono:'',           direccion:'',           kitsAseo:7,  kitsBebe:0,  mercado:7,  animales:'', material:'',                                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:7,  kitsBebeE:0,  mercadoE:7,  notasEntrega:'' },
  { id:'s12', consecutivo:12, fecha:'2026-08-17', ciudad:'',              barrio:'Solarum',                    nombre:'Valentina - chica salvavidas',  patrocinador:'',              solarum:'Colaboradores', telefono:'',           direccion:'',           kitsAseo:1,  kitsBebe:0,  mercado:1,  animales:'', material:'',                                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-17', kitsAseoE:1,  kitsBebeE:0,  mercadoE:1,  notasEntrega:'' },
  { id:'s13', consecutivo:13, fecha:'2026-08-18', ciudad:'Pereira',       barrio:'Hospital San Jorge',         nombre:'Jose Leonardo',                 patrocinador:'Sofia',         solarum:'Ivan Gonzalez', telefono:'3233246794', direccion:'Anemoi 808-3',kitsAseo:0,  kitsBebe:0,  mercado:0,  animales:'', material:'',                                         pax:0,  ayuda:'2 niños', estado:'entregado', fechaEntrega:'2026-08-18', kitsAseoE:0,  kitsBebeE:0,  mercadoE:0,  notasEntrega:'' },
  { id:'s14', consecutivo:14, fecha:'2026-08-18', ciudad:'',              barrio:'',                           nombre:'Claudia',                       patrocinador:'',              solarum:'',              telefono:'',           direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:2,  animales:'', material:'',                                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-18', kitsAseoE:0,  kitsBebeE:0,  mercadoE:2,  notasEntrega:'' },
  { id:'s15', consecutivo:15, fecha:'2026-08-18', ciudad:'',              barrio:'Torres del Campos Sn Joaquín',nombre:'Marlyn Loaiza',                patrocinador:'',              solarum:'',              telefono:'3156592653', direccion:'',           kitsAseo:0,  kitsBebe:0,  mercado:0,  animales:'', material:'',                                         pax:0,  ayuda:'',       estado:'entregado', fechaEntrega:'2026-08-18', kitsAseoE:0,  kitsBebeE:0,  mercadoE:0,  notasEntrega:'' },
];

const SERVICIOS = {
  transporte:      '🚗 Transporte',
  administrativo:  '📁 Administrativo',
  compras:         '🛒 Compras',
  empaque:         '📦 Empaque',
  computador:      '💻 Computador',
  aliados:         '🤝 Aliados',
};

const STATUS_LABELS = { critico: 'Crítico', necesario: 'Necesario', parcial: 'Parcial', cubierto: 'Cubierto' };

// ── STATE ─────────────────────────────────────────────────────────────────────
let state = {
  isAdmin: false,
  currentScreen: 'home',
  items: [],
  voluntarios: [],
  requerimientos: [],
  announcement: '',
  adminUsername: 'solarum',
  adminPassword: 'centrodeacopio',
  nextConsecutivo: 1,
  updatedAt: null,
  collapsed: { urgente: false, necesario: false, no_traer: false },
};

let editingVolId = null;
let editingItemId = null;
let addingItemCat = null;
let editingReqId = null;

// ── PERSISTENCE ───────────────────────────────────────────────────────────────
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem('acopio-v4'));
    if (saved) {
      state = { ...state, ...saved, isAdmin: false, currentScreen: 'home' };
    } else {
      state.items = [];
      state.requerimientos = JSON.parse(JSON.stringify(DEFAULT_REQUERIMIENTOS));
      state.nextConsecutivo = 16;
    }
  } catch {
    state.items = [];
    state.requerimientos = JSON.parse(JSON.stringify(DEFAULT_REQUERIMIENTOS));
    state.nextConsecutivo = 16;
  }
}

function save() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem('acopio-v4', JSON.stringify(state));
}


function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' }) +
    ' ' + d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(str) {
  if (!str) return '—';
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function navigateTo(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screen + '-screen').classList.add('active');
  state.currentScreen = screen;
  if (screen === 'home') renderHome();
  else if (screen === 'voluntarios') renderVoluntarios();
  else if (screen === 'donaciones') renderDonaciones();
  else if (screen === 'requerimientos') renderRequerimientos();
}

// ── AUTH ──────────────────────────────────────────────────────────────────────
function showLogin() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('login-screen').classList.add('active');
}

function loginViewer() {
  state.isAdmin = false;
  navigateTo('home');
}

function loginAdmin() {
  const field = document.getElementById('admin-password-field');
  const input = document.getElementById('admin-password-input');
  const error = document.getElementById('login-error');
  if (field.style.display !== 'block') {
    field.style.display = 'block';
    input.focus();
    return;
  }
  const usernameInput = document.getElementById('admin-username-input');
  if (usernameInput.value.trim() === state.adminUsername && input.value === state.adminPassword) {
    state.isAdmin = true;
    error.style.display = 'none';
    input.value = '';
    usernameInput.value = '';
    field.style.display = 'none';
    navigateTo('home');
  } else {
    error.style.display = 'block';
    input.focus();
  }
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const badge = document.getElementById('home-role-badge');
  badge.className = 'role-badge ' + (state.isAdmin ? 'admin' : 'viewer');
  badge.textContent = state.isAdmin ? '⚙ Admin' : '👁 Vista';
  document.getElementById('home-logout-btn').style.display = state.isAdmin ? 'flex' : 'none';
  document.getElementById('home-ann-edit-btn').style.display = state.isAdmin ? 'inline-flex' : 'none';

  const annBar = document.getElementById('home-announcement');
  const annText = document.getElementById('home-announcement-text');
  if (state.announcement?.trim()) {
    annBar.classList.remove('hidden');
    annText.textContent = state.announcement;
  } else {
    annBar.classList.add('hidden');
  }

  document.getElementById('vol-count').textContent = state.voluntarios.length + ' registrados';
  const donCovered = state.items.filter(i => i.category !== 'no_traer' && i.status === 'cubierto').length;
  const donTotal = state.items.filter(i => i.category !== 'no_traer').length;
  document.getElementById('don-count').textContent = donCovered + '/' + donTotal + ' cubiertos';
  document.getElementById('req-count').textContent = state.requerimientos.length + ' solicitudes';
}

// ── VOLUNTARIOS ───────────────────────────────────────────────────────────────
function renderVoluntarios() {
  const badge = document.getElementById('vol-role-badge');
  badge.className = 'role-badge ' + (state.isAdmin ? 'admin' : 'viewer');
  badge.textContent = state.isAdmin ? '⚙ Admin' : '👁 Vista';
  document.getElementById('vol-fab').classList.toggle('hidden', !state.isAdmin);
  document.getElementById('vol-header-count').textContent = state.voluntarios.length + ' voluntarios';

  const list = document.getElementById('vol-list');
  if (state.voluntarios.length === 0) {
    list.innerHTML = '<div class="empty-state">No hay voluntarios registrados aún.</div>';
    return;
  }

  const byServicio = {};
  const dinero = [];
  state.voluntarios.forEach(v => {
    if (v.tipoAporte === 'dinero') {
      dinero.push(v);
    } else {
      const key = v.servicio || 'otro';
      if (!byServicio[key]) byServicio[key] = [];
      byServicio[key].push(v);
    }
  });

  let html = '';
  for (const [key, vols] of Object.entries(byServicio)) {
    html += `<div class="vol-group-header">${SERVICIOS[key] || key}</div>`;
    html += vols.map(v => renderVolCard(v)).join('');
  }
  if (dinero.length > 0) {
    html += `<div class="vol-group-header">💰 Donación en Dinero</div>`;
    html += dinero.map(v => renderVolCard(v)).join('');
  }
  list.innerHTML = html;

  if (state.isAdmin) {
    list.querySelectorAll('[data-edit-vol]').forEach(btn => {
      btn.addEventListener('click', () => openVolModal(btn.dataset.editVol));
    });
  }
}

function renderVolCard(v) {
  const aporte = v.tipoAporte === 'dinero'
    ? '💰 Dinero' + (v.monto ? ` — $${Number(v.monto).toLocaleString('es-CO')}` : '')
    : (SERVICIOS[v.servicio] || v.servicio);
  const ubicacion = [v.torre, v.apto ? 'Apto ' + v.apto : ''].filter(Boolean).join(' · ');
  const editBtn = state.isAdmin
    ? `<button class="btn-sm" style="background:#eff6ff;color:#1e40af" data-edit-vol="${v.id}">✏ Editar</button>` : '';
  return `
    <div class="vol-card">
      <div class="vol-info">
        <div class="vol-name">${v.nombre}</div>
        ${ubicacion ? `<div class="vol-meta">${ubicacion}</div>` : ''}
        ${v.telefono ? `<div class="vol-meta">📞 ${v.telefono}</div>` : ''}
        <div class="vol-aporte">${aporte}</div>
      </div>
      ${editBtn}
    </div>`;
}

function openVolModal(id) {
  editingVolId = id || null;
  const modal = document.getElementById('vol-modal');
  document.getElementById('vol-modal-title').textContent = id ? 'Editar voluntario' : 'Registrar voluntario';
  document.getElementById('vol-delete-btn').style.display = id ? 'block' : 'none';

  if (id) {
    const v = state.voluntarios.find(x => x.id === id);
    if (!v) return;
    document.getElementById('vf-nombre').value = v.nombre || '';
    document.getElementById('vf-torre').value = v.torre || '';
    document.getElementById('vf-apto').value = v.apto || '';
    document.getElementById('vf-telefono').value = v.telefono || '';
    document.getElementById('vf-servicio').value = v.servicio || 'transporte';
    document.getElementById('vf-monto').value = v.monto || '';
    document.querySelectorAll('[name="tipo-aporte"]').forEach(r => {
      r.checked = r.value === v.tipoAporte;
    });
    toggleAporteFields(v.tipoAporte);
  } else {
    document.getElementById('vf-nombre').value = '';
    document.getElementById('vf-torre').value = '';
    document.getElementById('vf-apto').value = '';
    document.getElementById('vf-telefono').value = '';
    document.getElementById('vf-servicio').value = 'transporte';
    document.getElementById('vf-monto').value = '';
    document.querySelectorAll('[name="tipo-aporte"]').forEach(r => { r.checked = r.value === 'servicio'; });
    toggleAporteFields('servicio');
  }
  openModal('vol-modal');
}

function toggleAporteFields(tipo) {
  document.getElementById('servicio-field').style.display = tipo === 'servicio' ? '' : 'none';
  document.getElementById('dinero-field').style.display = tipo === 'dinero' ? '' : 'none';
}

function saveVoluntario() {
  const nombre = document.getElementById('vf-nombre').value.trim();
  if (!nombre) { alert('El nombre es obligatorio'); return; }
  const tipo = document.querySelector('[name="tipo-aporte"]:checked').value;
  const data = {
    nombre,
    torre: document.getElementById('vf-torre').value.trim(),
    apto: document.getElementById('vf-apto').value.trim(),
    telefono: document.getElementById('vf-telefono').value.trim(),
    tipoAporte: tipo,
    servicio: tipo === 'servicio' ? document.getElementById('vf-servicio').value : null,
    monto: tipo === 'dinero' ? document.getElementById('vf-monto').value : null,
    fecha: new Date().toISOString(),
  };
  if (editingVolId) {
    const idx = state.voluntarios.findIndex(v => v.id === editingVolId);
    if (idx > -1) state.voluntarios[idx] = { ...state.voluntarios[idx], ...data };
  } else {
    state.voluntarios.push({ id: uid(), ...data });
  }
  save();
  closeModal('vol-modal');
  renderVoluntarios();
  renderHome();
}

function deleteVoluntario() {
  if (!editingVolId || !confirm('¿Eliminar este voluntario?')) return;
  state.voluntarios = state.voluntarios.filter(v => v.id !== editingVolId);
  save();
  closeModal('vol-modal');
  renderVoluntarios();
  renderHome();
}

// ── DONACIONES ────────────────────────────────────────────────────────────────
function renderDonaciones() {
  const badge = document.getElementById('don-role-badge');
  badge.className = 'role-badge ' + (state.isAdmin ? 'admin' : 'viewer');
  badge.textContent = state.isAdmin ? '⚙ Admin' : '👁 Vista';
  document.getElementById('don-fab').classList.toggle('hidden', !state.isAdmin);
  document.getElementById('don-updated-time').textContent = formatDate(state.updatedAt);
  renderCategory('urgente');
  renderCategory('necesario');
  renderCategory('no_traer');
}

function renderCategory(cat) {
  const items = state.items.filter(i => i.category === cat);
  const el = document.getElementById('cat-' + cat);
  const body = el.querySelector('.category-body');
  const countEl = el.querySelector('.category-count');
  el.classList.toggle('collapsed', !!state.collapsed[cat]);

  if (cat === 'no_traer') {
    countEl.textContent = items.length + ' ítems — Por favor NO traer';
    body.innerHTML = (items.length === 0 ? '<div class="empty-state">Sin ítems</div>' : items.map(renderNoTraerItem).join(''))
      + (state.isAdmin ? adminAddBtn(cat) : '');
  } else {
    const covered = items.filter(i => i.status === 'cubierto').length;
    countEl.textContent = covered + '/' + items.length + ' cubiertos';
    const subs = [...new Set(items.map(i => i.sub))];
    let html = items.length === 0 ? '<div class="empty-state">Sin ítems</div>' : '';
    for (const sub of subs) {
      html += `<div class="subcategory-label">${sub}</div>`;
      html += items.filter(i => i.sub === sub).map(renderItem).join('');
    }
    body.innerHTML = html + (state.isAdmin ? adminAddBtn(cat) : '');
  }

  body.querySelectorAll('[data-edit-item]').forEach(btn =>
    btn.addEventListener('click', () => openItemModal(btn.dataset.editItem)));
  body.querySelectorAll('[data-delete-item]').forEach(btn =>
    btn.addEventListener('click', () => deleteItem(btn.dataset.deleteItem)));
  if (state.isAdmin) {
    body.querySelector('[data-add]')?.addEventListener('click', () => openItemModal(null, cat));
  }
}

function renderItem(item) {
  const p = item.needed ? Math.min(100, Math.round(item.received / item.needed * 100)) : null;
  const barColors = { critico: '#dc2626', necesario: '#d97706', parcial: '#3b82f6', cubierto: '#16a34a' };
  const chip = `<span class="status-chip status-${item.status}">${STATUS_LABELS[item.status] || ''}</span>`;
  const progress = p !== null ? `
    <div class="item-progress-row">
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${p}%;background:${barColors[item.status]}"></div></div>
      <span class="progress-label">${item.received}/${item.needed} ${item.unit || ''}</span>
    </div>` : '';
  const adminBtns = state.isAdmin ? `
    <div class="item-actions">
      <button class="btn-sm" style="background:#eff6ff;color:#1e40af" data-edit-item="${item.id}">✏ Editar</button>
      <button class="btn-sm" style="background:#fff1f2;color:#dc2626" data-delete-item="${item.id}">✕</button>
    </div>` : '';
  return `<div class="item-card">
    <div class="item-info">
      <div class="item-name">${item.name}</div>
      ${item.notes ? `<div class="item-notes">${item.notes}</div>` : ''}
      ${chip}${progress}
    </div>${adminBtns}
  </div>`;
}

function renderNoTraerItem(item) {
  const adminBtns = state.isAdmin ? `
    <button class="btn-sm" style="background:#eff6ff;color:#1e40af" data-edit-item="${item.id}">✏</button>
    <button class="btn-sm" style="background:#fff1f2;color:#dc2626" data-delete-item="${item.id}">✕</button>` : '';
  return `<div class="no-traer-item">
    <span style="font-size:20px">🚫</span>
    <div class="item-name" style="flex:1">${item.name}</div>
    <span class="no-traer-badge">No traer</span>${adminBtns}
  </div>`;
}

function adminAddBtn(cat) {
  return `<div style="padding:12px 16px;border-top:1px solid var(--gray-border)">
    <button class="btn-sm" style="background:#f0fdf4;color:#16a34a;width:100%;justify-content:center" data-add="${cat}">+ Agregar ítem</button>
  </div>`;
}

function openItemModal(id, cat) {
  editingItemId = id;
  addingItemCat = cat;
  document.getElementById('item-modal-title').textContent = id ? 'Editar ítem' : 'Agregar ítem';
  document.getElementById('item-delete-btn').style.display = id ? 'block' : 'none';
  document.getElementById('status-fields').style.display = cat === 'no_traer' || (id && state.items.find(i=>i.id===id)?.category === 'no_traer') ? 'none' : '';

  if (id) {
    const item = state.items.find(i => i.id === id);
    if (!item) return;
    document.getElementById('f-name').value = item.name;
    document.getElementById('f-sub').value = item.sub || '';
    document.getElementById('f-status').value = item.status || 'critico';
    document.getElementById('f-needed').value = item.needed || '';
    document.getElementById('f-received').value = item.received || '';
    document.getElementById('f-unit').value = item.unit || '';
    document.getElementById('f-notes').value = item.notes || '';
  } else {
    ['f-name','f-sub','f-needed','f-received','f-unit','f-notes'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('f-status').value = cat === 'urgente' ? 'critico' : 'necesario';
  }
  openModal('item-modal');
}

function saveItem() {
  const name = document.getElementById('f-name').value.trim();
  if (!name) { alert('El nombre es obligatorio'); return; }
  if (editingItemId) {
    const item = state.items.find(i => i.id === editingItemId);
    if (!item) return;
    item.name = name;
    item.sub = document.getElementById('f-sub').value.trim() || null;
    item.status = document.getElementById('f-status').value || null;
    item.needed = parseFloat(document.getElementById('f-needed').value) || null;
    item.received = parseFloat(document.getElementById('f-received').value) || 0;
    item.unit = document.getElementById('f-unit').value.trim() || null;
    item.notes = document.getElementById('f-notes').value.trim();
  } else {
    state.items.push({
      id: uid(), name, category: addingItemCat,
      sub: document.getElementById('f-sub').value.trim() || null,
      status: document.getElementById('f-status').value || null,
      needed: parseFloat(document.getElementById('f-needed').value) || null,
      received: parseFloat(document.getElementById('f-received').value) || 0,
      unit: document.getElementById('f-unit').value.trim() || null,
      notes: document.getElementById('f-notes').value.trim(),
    });
  }
  save();
  closeModal('item-modal');
  renderDonaciones();
}

function deleteItem(id) {
  if (!id) id = editingItemId;
  if (!id || !confirm('¿Eliminar este ítem?')) return;
  state.items = state.items.filter(i => i.id !== id);
  save();
  closeModal('item-modal');
  renderDonaciones();
}

// ── REQUERIMIENTOS ────────────────────────────────────────────────────────────
let reqView = 'lista'; // 'lista' | 'comunidad'

const ESTADO_CONFIG = {
  pendiente:  { label: '⏳ Pendiente',  cls: 'estado-pendiente' },
  parcial:    { label: '🔵 Parcial',    cls: 'estado-parcial'   },
  entregado:  { label: '✅ Entregado',  cls: 'estado-entregado' },
};

function consecutivoLabel(n) {
  return '#' + String(n).padStart(3, '0');
}

function renderRequerimientos() {
  const badge = document.getElementById('req-role-badge');
  badge.className = 'role-badge ' + (state.isAdmin ? 'admin' : 'viewer');
  badge.textContent = state.isAdmin ? '⚙ Admin' : '👁 Vista';
  document.getElementById('req-fab').classList.toggle('hidden', !state.isAdmin);
  document.getElementById('req-header-count').textContent = state.requerimientos.length + ' solicitudes';

  document.querySelectorAll('.req-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.view === reqView));

  if (reqView === 'comunidad') renderReqPorComunidad();
  else renderReqLista();
}

function renderReqLista() {
  const list = document.getElementById('req-list');
  if (state.requerimientos.length === 0) {
    list.innerHTML = '<div class="empty-state">No hay requerimientos registrados aún.</div>';
    return;
  }
  list.innerHTML = state.requerimientos.map(r => {
    const estado = ESTADO_CONFIG[r.estado || 'pendiente'];
    const editBtn = state.isAdmin
      ? `<button class="btn-sm" style="background:#eff6ff;color:#1e40af" data-edit-req="${r.id}">✏ Editar</button>` : '';
    const checkin = buildCheckinBar(r);
    return `
    <div class="req-card">
      <div class="req-header-row">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span class="req-consecutivo">${consecutivoLabel(r.consecutivo)}</span>
          <span class="req-estado ${estado.cls}">${estado.label}</span>
        </div>
        ${editBtn}
      </div>
      <div class="req-nombre">${r.nombre}</div>
      <div class="req-meta">${[formatDateShort(r.fecha), r.ciudad, r.barrio].filter(Boolean).join(' · ')}</div>
      <div class="req-tags" style="margin-top:6px">
        ${r.pax ? `<span class="req-tag">👥 ${r.pax} PAX</span>` : ''}
        ${r.kitsAseo ? `<span class="req-tag">🧴 ${r.kitsAseo} Aseo</span>` : ''}
        ${r.kitsBebe ? `<span class="req-tag">👶 ${r.kitsBebe} Bebé</span>` : ''}
        ${r.mercado ? `<span class="req-tag">🛒 ${r.mercado} Mercado</span>` : ''}
        ${r.animales ? `<span class="req-tag">🐾 ${r.animales}</span>` : ''}
      </div>
      ${checkin}
      ${r.telefono ? `<div class="req-meta" style="margin-top:6px">📞 ${r.telefono}${r.direccion ? ' · 📍 ' + r.direccion : ''}</div>` : ''}
      ${r.ayuda ? `<div class="req-ayuda">${r.ayuda}</div>` : ''}
      ${r.notasEntrega ? `<div class="req-ayuda" style="background:#f0fdf4;border-left:3px solid #16a34a">📦 ${r.notasEntrega}</div>` : ''}
    </div>`;
  }).join('');

  list.querySelectorAll('[data-edit-req]').forEach(btn =>
    btn.addEventListener('click', () => openReqModal(btn.dataset.editReq)));
}

function buildCheckinBar(r) {
  const items = [
    { label: 'Aseo', pedido: r.kitsAseo, entregado: r.kitsAseoE },
    { label: 'Bebé', pedido: r.kitsBebe, entregado: r.kitsBebeE },
    { label: 'Mercado', pedido: r.mercado, entregado: r.mercadoE },
  ].filter(i => i.pedido > 0);
  if (items.length === 0 || r.estado === 'pendiente') return '';
  return `<div class="checkin-bar">${items.map(i => {
    const pct = i.pedido > 0 ? Math.min(100, Math.round((i.entregado || 0) / i.pedido * 100)) : 0;
    const color = pct >= 100 ? '#16a34a' : pct > 0 ? '#3b82f6' : '#d97706';
    return `<div class="checkin-bar-item">
      <div class="checkin-bar-label">${i.label}: ${i.entregado || 0}/${i.pedido}</div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }).join('')}</div>`;
}

function renderReqPorComunidad() {
  const list = document.getElementById('req-list');
  if (state.requerimientos.length === 0) {
    list.innerHTML = '<div class="empty-state">No hay requerimientos registrados aún.</div>';
    return;
  }
  const groups = {};
  state.requerimientos.forEach(r => {
    const key = [r.ciudad, r.barrio].filter(Boolean).join(' — ') || 'Sin ubicación';
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });
  list.innerHTML = Object.entries(groups).map(([lugar, reqs]) => {
    const totales = reqs.reduce((acc, r) => ({
      pax: acc.pax + (r.pax || 0),
      kitsAseo: acc.kitsAseo + (r.kitsAseo || 0),
      kitsAseoE: acc.kitsAseoE + (r.kitsAseoE || 0),
      kitsBebe: acc.kitsBebe + (r.kitsBebe || 0),
      kitsBebeE: acc.kitsBebeE + (r.kitsBebeE || 0),
      mercado: acc.mercado + (r.mercado || 0),
      mercadoE: acc.mercadoE + (r.mercadoE || 0),
    }), { pax:0, kitsAseo:0, kitsAseoE:0, kitsBebe:0, kitsBebeE:0, mercado:0, mercadoE:0 });

    const entregados = reqs.filter(r => r.estado === 'entregado').length;
    return `
    <div class="req-card">
      <div class="req-comunidad-title">📍 ${lugar}</div>
      <div class="req-meta">${reqs.length} solicitudes · ${entregados} entregadas · ${totales.pax} PAX</div>
      <table class="comunidad-table">
        <thead><tr><th>Item</th><th>Pedido</th><th>Entregado</th></tr></thead>
        <tbody>
          <tr><td>🧴 Kits Aseo</td><td>${totales.kitsAseo}</td><td>${totales.kitsAseoE}</td></tr>
          <tr><td>👶 Kits Bebé</td><td>${totales.kitsBebe}</td><td>${totales.kitsBebeE}</td></tr>
          <tr><td>🛒 Mercado</td><td>${totales.mercado}</td><td>${totales.mercadoE}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:10px">${reqs.map(r => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid #f3f4f6;font-size:13px">
          <span>${consecutivoLabel(r.consecutivo)} ${r.nombre}</span>
          <span class="req-estado ${(ESTADO_CONFIG[r.estado||'pendiente']).cls}" style="font-size:11px">${(ESTADO_CONFIG[r.estado||'pendiente']).label}</span>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function openReqModal(id) {
  editingReqId = id || null;
  document.getElementById('req-modal-title').textContent = id
    ? `Editar ${consecutivoLabel(state.requerimientos.find(r=>r.id===id)?.consecutivo || 0)}`
    : 'Nuevo requerimiento';
  document.getElementById('req-delete-btn').style.display = id ? 'block' : 'none';
  switchModalTab('solicitud');

  if (id) {
    const r = state.requerimientos.find(x => x.id === id);
    if (!r) return;
    document.getElementById('rf-fecha').value = r.fecha || '';
    document.getElementById('rf-ciudad').value = r.ciudad || '';
    document.getElementById('rf-barrio').value = r.barrio || '';
    document.getElementById('rf-nombre').value = r.nombre || '';
    document.getElementById('rf-patrocinador').value = r.patrocinador || '';
    document.getElementById('rf-solarum').value = r.solarum || '';
    document.getElementById('rf-telefono').value = r.telefono || '';
    document.getElementById('rf-direccion').value = r.direccion || '';
    document.getElementById('rf-kits-aseo').value = r.kitsAseo || '';
    document.getElementById('rf-kits-bebe').value = r.kitsBebe || '';
    document.getElementById('rf-mercado').value = r.mercado || '';
    document.getElementById('rf-animales').value = r.animales || '';
    document.getElementById('rf-material').value = r.material || '';
    document.getElementById('rf-pax').value = r.pax || '';
    document.getElementById('rf-ayuda').value = r.ayuda || '';
    document.getElementById('rf-estado').value = r.estado || 'pendiente';
    document.getElementById('rf-fecha-entrega').value = r.fechaEntrega || '';
    document.getElementById('rf-kits-aseo-e').value = r.kitsAseoE || '';
    document.getElementById('rf-kits-bebe-e').value = r.kitsBebeE || '';
    document.getElementById('rf-mercado-e').value = r.mercadoE || '';
    document.getElementById('rf-notas-entrega').value = r.notasEntrega || '';
    document.getElementById('re-kits-aseo-pedido').textContent = r.kitsAseo || '0';
    document.getElementById('re-kits-bebe-pedido').textContent = r.kitsBebe || '0';
    document.getElementById('re-mercado-pedido').textContent = r.mercado || '0';
  } else {
    ['rf-ciudad','rf-barrio','rf-nombre','rf-patrocinador','rf-solarum','rf-telefono',
     'rf-direccion','rf-animales','rf-material','rf-ayuda','rf-notas-entrega'].forEach(f => {
      document.getElementById(f).value = '';
    });
    ['rf-kits-aseo','rf-kits-bebe','rf-mercado','rf-pax','rf-kits-aseo-e','rf-kits-bebe-e','rf-mercado-e'].forEach(f => {
      document.getElementById(f).value = '';
    });
    document.getElementById('rf-fecha').value = new Date().toISOString().split('T')[0];
    document.getElementById('rf-fecha-entrega').value = '';
    document.getElementById('rf-estado').value = 'pendiente';
    ['re-kits-aseo-pedido','re-kits-bebe-pedido','re-mercado-pedido'].forEach(f => {
      document.getElementById(f).textContent = '—';
    });
  }
  openModal('req-modal');
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('tab-solicitud').style.display = tab === 'solicitud' ? '' : 'none';
  document.getElementById('tab-entrega').style.display = tab === 'entrega' ? '' : 'none';
}

function saveRequerimiento() {
  const nombre = document.getElementById('rf-nombre').value.trim();
  if (!nombre) { alert('El nombre del beneficiario es obligatorio'); return; }
  const data = {
    fecha: document.getElementById('rf-fecha').value,
    ciudad: document.getElementById('rf-ciudad').value.trim(),
    barrio: document.getElementById('rf-barrio').value.trim(),
    nombre,
    patrocinador: document.getElementById('rf-patrocinador').value.trim(),
    solarum: document.getElementById('rf-solarum').value.trim(),
    telefono: document.getElementById('rf-telefono').value.trim(),
    direccion: document.getElementById('rf-direccion').value.trim(),
    kitsAseo: parseInt(document.getElementById('rf-kits-aseo').value) || 0,
    kitsBebe: parseInt(document.getElementById('rf-kits-bebe').value) || 0,
    mercado: parseInt(document.getElementById('rf-mercado').value) || 0,
    animales: document.getElementById('rf-animales').value.trim(),
    material: document.getElementById('rf-material').value.trim(),
    pax: parseInt(document.getElementById('rf-pax').value) || 0,
    ayuda: document.getElementById('rf-ayuda').value.trim(),
    estado: document.getElementById('rf-estado').value,
    fechaEntrega: document.getElementById('rf-fecha-entrega').value,
    kitsAseoE: parseInt(document.getElementById('rf-kits-aseo-e').value) || 0,
    kitsBebeE: parseInt(document.getElementById('rf-kits-bebe-e').value) || 0,
    mercadoE: parseInt(document.getElementById('rf-mercado-e').value) || 0,
    notasEntrega: document.getElementById('rf-notas-entrega').value.trim(),
  };
  if (editingReqId) {
    const idx = state.requerimientos.findIndex(r => r.id === editingReqId);
    if (idx > -1) state.requerimientos[idx] = { ...state.requerimientos[idx], ...data };
  } else {
    state.requerimientos.push({ id: uid(), consecutivo: state.nextConsecutivo++, ...data });
  }
  save();
  closeModal('req-modal');
  renderRequerimientos();
  renderHome();
}

function deleteRequerimiento() {
  if (!editingReqId || !confirm('¿Eliminar este requerimiento?')) return;
  state.requerimientos = state.requerimientos.filter(r => r.id !== editingReqId);
  save();
  closeModal('req-modal');
  renderRequerimientos();
  renderHome();
}

// ── ANUNCIO ───────────────────────────────────────────────────────────────────
function saveAnnouncement() {
  state.announcement = document.getElementById('f-announcement').value.trim();
  save();
  closeModal('announcement-modal');
  renderHome();
}

// ── MODALS ────────────────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// ── BOOT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  load();
  showLogin();

  // Login
  document.getElementById('btn-viewer').addEventListener('click', loginViewer);
  document.getElementById('btn-admin').addEventListener('click', loginAdmin);
  document.getElementById('btn-ingresar').addEventListener('click', loginAdmin);
  document.getElementById('admin-password-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') loginAdmin();
  });
  document.getElementById('home-logout-btn').addEventListener('click', () => {
    state.isAdmin = false;
    renderHome();
  });

  // Navigation — module cards
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.nav));
  });

  // Donaciones — category collapse
  ['urgente','necesario','no_traer'].forEach(cat => {
    document.getElementById('cat-' + cat).querySelector('.category-header')
      .addEventListener('click', () => {
        state.collapsed[cat] = !state.collapsed[cat];
        document.getElementById('cat-' + cat).classList.toggle('collapsed', state.collapsed[cat]);
      });
  });

  // FABs
  document.getElementById('vol-fab').addEventListener('click', () => openVolModal(null));
  document.getElementById('don-fab').addEventListener('click', () => openItemModal(null, 'urgente'));
  document.getElementById('req-fab').addEventListener('click', () => openReqModal(null));

  // Voluntarios modal
  document.querySelectorAll('[name="tipo-aporte"]').forEach(r =>
    r.addEventListener('change', () => toggleAporteFields(r.value)));
  document.getElementById('vol-save-btn').addEventListener('click', saveVoluntario);
  document.getElementById('vol-delete-btn').addEventListener('click', deleteVoluntario);

  // Items modal
  document.getElementById('item-save-btn').addEventListener('click', saveItem);
  document.getElementById('item-delete-btn').addEventListener('click', () => deleteItem(null));

  // Requerimientos tabs
  document.querySelectorAll('.req-tab').forEach(t =>
    t.addEventListener('click', () => { reqView = t.dataset.view; renderRequerimientos(); }));
  document.querySelectorAll('.modal-tab').forEach(t =>
    t.addEventListener('click', () => switchModalTab(t.dataset.tab)));

  // Requerimientos modal
  document.getElementById('req-save-btn').addEventListener('click', saveRequerimiento);
  document.getElementById('req-delete-btn').addEventListener('click', deleteRequerimiento);

  // Anuncio
  document.getElementById('home-ann-edit-btn').addEventListener('click', () => {
    document.getElementById('f-announcement').value = state.announcement;
    openModal('announcement-modal');
  });
  document.getElementById('ann-save-btn').addEventListener('click', saveAnnouncement);

  // Close modals
  document.querySelectorAll('.modal-close').forEach(btn =>
    btn.addEventListener('click', () => closeModal(btn.dataset.close)));
  document.querySelectorAll('.modal-overlay').forEach(overlay =>
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); }));

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
