
// ═══════════════════════════════════════════════════
// GENETICS ENGINE
// ═══════════════════════════════════════════════════
// Loci: A,B,C = color (3 pairs)
//       D,E   = petal count (2 pairs)
//       T     = petal shape: T_ = round, tt = pointed
//
// Petal count (dominant count in D+E):
//   dd ee (0) → 4-6 petals   | round→罂粟/Poppy      | pointed→Osternglocken
//   1 dom  (1) → 8 petals    | round→木兰/Magnolia    | pointed→铁线莲/Clematis
//   Dd Ee  (both het) → 12   | round→康乃馨/Carnation | pointed→矢车菊/Kornblume
//   DDee / ddEE (pure) → 16  | round→非洲菊/Gerbera   | pointed→星芹/Astrantia
//   3 dom  (1 hom+het) → 24  | round→紫菀/Aster       | pointed→蔷薇/Rose
//   DDEE   (all dom) → 32    | round→向日葵/Sunflower  | pointed→含羞草/Mimosa
//
// Flower rarity:
//   普通(coef 5):  向日葵, 含羞草, 紫菀
//   稀有(coef 12): 非洲菊, 康乃馨, 蔷薇
//   史诗(coef 30): 星芹, 矢车菊, 木兰
//   传说(coef 75): 铁线莲, 罂粟, Osternglocken

function colorPhenotype(g) {
  const A = hasDom(g,'A'), B = hasDom(g,'B'), C = hasDom(g,'C');
  if ( A && !B && !C) return {name:'红色',   nameEn:'Red',    rarity:'epic',   coef:4,  hex:'#ef3047'};
  if (!A &&  B && !C) return {name:'黄色',   nameEn:'Yellow', rarity:'epic',   coef:4,  hex:'#f7f752'};
  if (!A && !B &&  C) return {name:'蓝色',   nameEn:'Blue',   rarity:'epic',   coef:4,  hex:'#82a0ff'};
  if ( A && !B &&  C) return {name:'紫色',   nameEn:'Purple', rarity:'rare',   coef:2,  hex:'#9b69e1'};
  if (!A &&  B &&  C) return {name:'绿色',   nameEn:'Green',  rarity:'rare',   coef:2,  hex:'#b6e84a'};
  if ( A &&  B && !C) return {name:'橙色',   nameEn:'Orange', rarity:'rare',   coef:2,  hex:'#faaf00'};
  if ( A &&  B &&  C) return {name:'黑色',   nameEn:'Black',  rarity:'common', coef:1,  hex:'#494949'};
  /* aabbcc */         return {name:'纯白',   nameEn:'White',  rarity:'legend', coef:12, hex:'#f0e6cc'};
}

// Count dominant alleles across D and E loci
// Returns: {domCount, isAllDom, isAllRec, isMixed}
function petalClass(g) {
  const D = hasDom(g,'D'), E = hasDom(g,'E');
  const Dhom = isHomDom(g,'D'), Ehom = isHomDom(g,'E');
  const Drec = isHomRec(g,'D'), Erec = isHomRec(g,'E');
  const domCount = (D?1:0) + (E?1:0);
  const homDomCount = (Dhom?1:0) + (Ehom?1:0);

  // 0 dominant → 4-6 petals
  if (!D && !E) return 'p4';
  // exactly 1 dominant (het or hom, only one locus shows dom) → 8 petals
  if (domCount === 1) return 'p8';
  // both dom: distinguish Dd×Ee (both het) from DDee/ddEE (one pure)
  // DDee or ddEE: exactly one locus is pure dominant
  if (domCount === 2) {
    if ((Dhom && Erec) || (Drec && Ehom)) return 'p16'; // pure double-dom
    if (Dhom && Ehom) return 'p32'; // DDEE = all dominant
    // Dd and Ee both het → 12
    const DhetEhet = !Dhom && !Drec && !Ehom && !Erec;
    if (DhetEhet) return 'p12';
    // mixed: one hom-dom + one het → 3 dom alleles total = 24 petals
    return 'p24';
  }
  return 'p4';
}

function isHomDom(g, L) {
  const pair = g[L] || '';
  return pair[0] === L.toUpperCase() && pair[1] === L.toUpperCase();
}
function isHomRec(g, L) {
  const pair = g[L] || '';
  return pair[0] === L.toLowerCase() && pair[1] === L.toLowerCase();
}

function flowerPhenotype(g) {
  const pc = petalClass(g);
  const round = hasDom(g,'T'); // T_ = round, tt = pointed

  // Map (petalClass, shape) → flower
  const TABLE = {
    p4:  { round:{name:'虞美人', nameEn:'Poppy',        svgKey:'罂粟',   rarity:'legend', coef:75},
            point:{name:'冰晶花',nameEn:'Ice Crystal',  svgKey:'水仙',   rarity:'legend', coef:75} },
    p8:  { round:{name:'木兰',   nameEn:'Magnolia',    svgKey:'木兰',   rarity:'epic',   coef:30},
            point:{name:'铁线莲', nameEn:'Clematis',    svgKey:'铁线莲', rarity:'legend', coef:75} },
    p12: { round:{name:'康乃馨', nameEn:'Carnation',   svgKey:'康乃馨',   rarity:'rare',   coef:12},
            point:{name:'矢车菊', nameEn:'Cornflower',  svgKey:'矢车菊', rarity:'epic',   coef:30} },
    p16: { round:{name:'非洲菊', nameEn:'Gerbera',     svgKey:'非洲菊', rarity:'rare',   coef:12},
            point:{name:'星芹',   nameEn:'Astrantia',   svgKey:'星芹',   rarity:'epic',   coef:30} },
    p24: { round:{name:'紫菀',   nameEn:'Aster',       svgKey:'紫菀',   rarity:'common', coef:5},
            point:{name:'蔷薇',   nameEn:'Rose',        svgKey:'蔷薇',   rarity:'rare',   coef:12} },
    p32: { round:{name:'向日葵', nameEn:'Sunflower',   svgKey:'向日葵', rarity:'common', coef:5},
            point:{name:'含羞草', nameEn:'Mimosa',      svgKey:'含羞草', rarity:'common', coef:5} },
  };

  const row = TABLE[pc];
  const entry = round ? row.round : row.point;
  return { ...entry };
}

// svgKey for flowerSVG calls
function flowerSvgKey(fp) {
  return fp.svgKey || fp.name;
}

function hasDom(g, locus) {
  const pair = g[locus] || '';
  return pair[0] === locus.toUpperCase() || pair[1] === locus.toUpperCase();
}

function rarityLabel(r, lang) {
  const map = {
    common: {zh:'普通', en:'Common'},
    rare:   {zh:'稀有', en:'Rare'},
    epic:   {zh:'史诗', en:'Epic'},
    legend: {zh:'传说', en:'Legend'},
  };
  return map[r][lang] || r;
}

// Overall rarity (take the higher of color+flower)
function overallRarity(colorP, flowerP) {
  const order = ['common','rare','epic','legend'];
  const ci = order.indexOf(colorP.rarity), fi = order.indexOf(flowerP.rarity);
  return order[Math.max(ci,fi)];
}

// Sell value = color coef × flower coef
function sellValue(colorP, flowerP) { return colorP.coef * flowerP.coef; }

// Grow time (seconds) = color coef × flower coef (halved if nursery upgraded)
function growTime(colorP, flowerP) { return Math.max(1, Math.round(colorP.coef * flowerP.coef * (nurseryUpgraded ? 0.5 : 1))); }

// Random offspring genotype from two parents
function rollOffspringGeno(gA, gB) {
  const loci = ['A','B','C','D','E','T'];
  const g = {};
  loci.forEach(L => {
    const a = gA[L] || (L.toUpperCase() + L.toLowerCase());
    const b = gB[L] || (L.toUpperCase() + L.toLowerCase());
    const ga = Math.random() < .5 ? a[0] : a[1];
    const gb = Math.random() < .5 ? b[0] : b[1];
    g[L] = sortPair(ga + gb, L);
  });
  return g;
}

function sortPair(pair, locus) {
  const up = locus.toUpperCase(), lo = locus.toLowerCase();
  if (pair[0] === up || pair[1] === lo) return pair;
  return pair[1] + pair[0];
}

function genoStr(g) {
  return ['A','B','C','D','E','T'].map(L => g[L] || '').join('');
}

function parseGeno(str) {
  const g = {};
  const pairs = str.match(/[A-Za-z]{2}/g) || [];
  pairs.forEach(p => { g[p[0].toUpperCase()] = p; });
  return g;
}

// ═══════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════
let lang = 'zh';
let difficulty = 'easy';
let gold = 100;

// Plots: array of slot objects
const MAX_PLOTS = 12;
let plots = [];  // filled up to MAX_PLOTS slots

// Seeds: array of {id, geno, parentAName, parentBName, color}
let seeds = [];
let nextSeedId = 1;
let nextPlotId = 1;

// Catalog: discovered set of "colorKey|flowerKey" strings
const discovered = new Set();

// Breed selection
let breedA = null; // plot id
let breedB = null; // plot id

// Timers map: plotId -> interval handle
const growTimers = {};

// ─── Init: 4 empty plots, no starter seeds ───
function initGame() {
  for (let i = 0; i < 4; i++) plots.push(makePlot());

  renderAll();
  startAllTimers();
  updateShopState();
  renderStorage();
  renderCatalog();
  renderHints();
}

function makePlot(state='empty') {
  return {id: nextPlotId++, state, flower: null, growStart: null, growDuration: null, breedCount: 0, selfBreedCount: 0, parentAName:'', parentBName:''};
}

// ═══════════════════════════════════════════════════
// RENDERING
// ═══════════════════════════════════════════════════
function renderAll() {
  renderPlots();
  renderSeedBar();
  updateGoldDisplay();
}

function renderPlots() {
  const grid = document.getElementById('plots-grid');
  grid.innerHTML = '';
  plots.forEach(plot => {
    try {
      grid.appendChild(makePlotEl(plot));
    } catch(err) {
      console.warn('Failed to render plot', plot.id, err);
      const fallback = document.createElement('div');
      fallback.className = 'plot ready';
      fallback.innerHTML = `<div class="plot-flower"><div class="flower-name" style="color:var(--muted);font-size:12px;">⚠ 渲染错误</div><div class="plot-actions"><button class="plot-btn" onclick="harvestPlot(${plot.id},event)">${lang==='zh'?'收获':'Harvest'}</button></div></div>`;
      grid.appendChild(fallback);
    }
  });
  // Show next locked slot with unlock hint
  if (plots.length < MAX_PLOTS) {
    const disc = discoveredCount();
    const nextUnlockAt = (plots.length - 4 + 1) * 10;
    const needed = nextUnlockAt - disc;
    const hintText = needed > 0
      ? (lang === 'zh' ? `再发现 ${needed} 种花解锁` : `${needed} more flowers to unlock`)
      : '';
    const btn = document.createElement('div');
    btn.className = 'plot empty';
    btn.style.opacity = '.35';
    btn.style.cursor = 'default';
    btn.innerHTML = `<div class="plot-empty-hint"><b>+</b><span style="font-size:11px;display:block;margin-top:6px;">${hintText}</span></div>`;
    grid.appendChild(btn);
  }
}

function makePlotEl(plot) {
  const div = document.createElement('div');
  div.dataset.plotId = plot.id;

  if (plot.state === 'empty') {
    div.className = 'plot empty';
    div.onclick = () => plantSeedOnPlot(plot.id);
    div.innerHTML = `<div class="plot-empty-hint">
      <b>·</b>
    </div>`;

  } else if (plot.state === 'growing') {
    div.className = 'plot growing';
    const elapsed = (Date.now() - plot.growStart) / 1000;
    const remaining = Math.max(0, plot.growDuration - elapsed);
    const pct = Math.min(100, (elapsed / plot.growDuration) * 100);
    div.innerHTML = `
      <div class="plot-question">?</div>
      <div class="plot-grow-label">${lang==='zh'?'生长中':'Growing'}</div>
      <div class="plot-timer" id="timer-${plot.id}">${formatTime(remaining)}</div>
      <div class="plot-progress-bg"><div class="plot-progress-fill" id="prog-${plot.id}" style="width:${pct}%"></div></div>
      <div class="plot-parents">${plot.parentAName} × ${plot.parentBName}</div>
      <button class="plot-discard" onclick="discardPlot(${plot.id},event)">${lang==='zh'?'丢弃':'Discard'}</button>`;

  } else if (plot.state === 'ready') {
    try {
      const cp = colorPhenotype(plot.flower);
      const fp = flowerPhenotype(plot.flower);
      const val = sellValue(cp, fp);
      const infertile = plot.breedCount >= 3;
      const selfUsed = (plot.selfBreedCount || 0) >= 1;
      const isA = breedA === plot.id;
      const isB = breedB === plot.id;

      div.className = 'plot ready' + (infertile?' infertile':'') + (isA?' selected-a':'') + (isB?' selected-b':'');

      const showGeno = difficulty !== 'expert';
      const genoDisplay = showGeno ? `<div class="flower-genotype">${genoStr(plot.flower)}</div>` : '';
      const badgeA = isA ? `<div class="plot-badge badge-a">${lang==='zh'?'母本':'♀'}</div>` : '';
      const badgeB = isB ? `<div class="plot-badge badge-b">${lang==='zh'?'父本':'♂'}</div>` : '';
      const breedDisabled = infertile ? 'disabled style="opacity:.3;cursor:not-allowed;"' : '';
      const selfDisabled = selfUsed ? 'disabled style="opacity:.3;cursor:not-allowed;"' : '';

      div.innerHTML = `
        ${badgeA}${badgeB}
        <div class="plot-flower">
          <div class="flower-visual">
            ${flowerSVG(flowerSvgKey(fp), cp.hex, 120)}
          </div>
          <div class="flower-name">${lang==='zh'?cp.name:cp.nameEn} ${lang==='zh'?fp.name:fp.nameEn}</div>
          <div class="flower-sell-val"><span class="plot-coin"></span>${val}</div>
          ${genoDisplay}
          <div class="flower-breed-count">${lang==='zh'?`配种 ${plot.breedCount}/3`:`Bred ${plot.breedCount}/3`}${(plot.selfBreedCount||0)>=1 ? (lang==='zh'?' · 已自交':' · Self ✓') : ''}</div>
          <div class="plot-actions">
            <button class="plot-btn primary" ${breedDisabled} onclick="selectForBreed(${plot.id},event)">${lang==='zh'?'配种':'Breed'}</button>
            <button class="plot-btn" ${selfDisabled} onclick="selfPollinate(${plot.id},event)">${lang==='zh'?'自授粉':'Self'}</button>
            <button class="plot-btn" onclick="harvestPlot(${plot.id},event)">${lang==='zh'?'收获':'Harvest'}</button>
          </div>
        </div>`;
    } catch(err) {
      console.warn('Plot render error for plot', plot.id, err);
      // DO NOT reset plot.state — only show a visual fallback, keep data intact
      div.className = 'plot ready';
      div.innerHTML = `
        <div class="plot-flower">
          <div class="flower-name" style="color:var(--muted);font-size:12px;">⚠ 渲染错误</div>
          <div class="plot-actions">
            <button class="plot-btn" onclick="harvestPlot(${plot.id},event)">${lang==='zh'?'收获':'Harvest'}</button>
          </div>
        </div>`;
    }
  }
  return div;
}

function renderSeedBar() {
  const scroll = document.getElementById('seed-bar-scroll');
  document.getElementById('seed-total-label').textContent =
    `${seeds.length} ${lang==='zh'?'颗':'seeds'}`;

  if (seeds.length === 0) {
    scroll.innerHTML = `<span class="seed-empty">${lang==='zh'?'暂无种子 — 前往商店购买盲盒':'No seeds — visit Shop to buy blind boxes'}</span>`;
    return;
  }

  // Group by geno string
  const groups = {};
  seeds.forEach(s => {
    const key = genoStr(s.geno);
    if (!groups[key]) groups[key] = {seeds:[],color:s.color,geno:s.geno,parentAName:s.parentAName,parentBName:s.parentBName};
    groups[key].seeds.push(s);
  });

  scroll.innerHTML = '';
  Object.values(groups).forEach(g => {
    const chip = document.createElement('div');
    chip.className = 'seed-chip';
    chip.dataset.genoKey = genoStr(g.geno);
    chip.innerHTML = `
      <div class="seed-dot" style="background:${g.color};">
        ${g.seeds.length > 1 ? '' : ''}
      </div>
      ${g.seeds.length > 1 ? `<div class="seed-count">${g.seeds.length}</div>` : ''}`;
    chip.onmouseenter = (e) => showSeedTooltip(e, g);
    chip.onmouseleave = hideTooltip;
    chip.onclick = () => selectSeedGroup(g.genoKey || genoStr(g.geno));
    scroll.appendChild(chip);
  });

  // hint if any empty plot exists
  if (plots.some(p => p.state==='empty')) {
    const hint = document.createElement('span');
    hint.className = 'plant-seed-hint';
    hint.textContent = lang==='zh' ? '← 选择种子，点击空槽种植' : '← Select seed, click empty plot';
    scroll.appendChild(hint);
  }
  updateSeedSellBtns();
}

function updateGoldDisplay() {
  document.getElementById('gold-amount').textContent = gold.toLocaleString();
}

// ═══════════════════════════════════════════════════
// SEED SELECTION
// ═══════════════════════════════════════════════════
let selectedSeedGenoKey = null;

function selectSeedGroup(genoKey) {
  selectedSeedGenoKey = selectedSeedGenoKey === genoKey ? null : genoKey;
  document.querySelectorAll('.seed-chip').forEach(chip => {
    chip.classList.toggle('selected', chip.dataset.genoKey === selectedSeedGenoKey);
  });
  updateSeedSellBtns();
}

function seedSellPrice(geno) {
  const cp = colorPhenotype(geno);
  const fp = flowerPhenotype(geno);
  return Math.max(1, Math.floor(sellValue(cp, fp) * 0.5));
}

function updateSeedSellBtns() {
  const btns = document.getElementById('seed-sell-btns');
  const oneBtn = document.getElementById('seed-sell-one-btn');
  const allBtn = document.getElementById('seed-sell-all-btn');
  if (!btns) return;
  if (!selectedSeedGenoKey) { btns.style.display = 'none'; return; }
  const group = seeds.filter(s => genoStr(s.geno) === selectedSeedGenoKey);
  if (group.length === 0) { btns.style.display = 'none'; return; }
  const price = seedSellPrice(group[0].geno);
  const totalPrice = price * group.length;
  btns.style.display = 'flex';
  oneBtn.textContent = lang === 'zh' ? `卖1颗 +${price}` : `Sell 1 +${price}`;
  allBtn.textContent = lang === 'zh' ? `全卖 +${totalPrice}` : `Sell all +${totalPrice}`;
}

function sellSelectedSeedOne() {
  if (!selectedSeedGenoKey) return;
  const idx = seeds.findIndex(s => genoStr(s.geno) === selectedSeedGenoKey);
  if (idx === -1) return;
  const price = seedSellPrice(seeds[idx].geno);
  seeds.splice(idx, 1);
  gold += price;
  updateGoldDisplay();
  updateShopState();
  if (typeof SFX !== 'undefined') SFX.gold();
  showGoldToast('+' + price);
  // deselect if none left
  if (!seeds.some(s => genoStr(s.geno) === selectedSeedGenoKey)) selectedSeedGenoKey = null;
  renderSeedBar();
  updateSeedSellBtns();
}

function sellSelectedSeedAll() {
  if (!selectedSeedGenoKey) return;
  const toSell = seeds.filter(s => genoStr(s.geno) === selectedSeedGenoKey);
  if (toSell.length === 0) return;
  const price = seedSellPrice(toSell[0].geno);
  const total = price * toSell.length;
  seeds = seeds.filter(s => genoStr(s.geno) !== selectedSeedGenoKey);
  gold += total;
  selectedSeedGenoKey = null;
  updateGoldDisplay();
  updateShopState();
  if (typeof SFX !== 'undefined') SFX.gold();
  showGoldToast('+' + total);
  renderSeedBar();
  updateSeedSellBtns();
}

// Plant on empty plot
function plantSeedOnPlot(plotId) {
  if (!selectedSeedGenoKey) {
    // prompt to pick a seed
    flashSeedBar();
    return;
  }
  // Find one seed of this type
  const idx = seeds.findIndex(s => genoStr(s.geno) === selectedSeedGenoKey);
  if (idx === -1) return;
  const seed = seeds.splice(idx, 1)[0];

  const plot = plots.find(p => p.id === plotId);
  if (!plot || plot.state !== 'empty') return;

  const cp = colorPhenotype(seed.geno);
  const fp = flowerPhenotype(seed.geno);
  const duration = growTime(cp, fp);

  plot.state = 'growing';
  plot.flower = seed.geno;
  plot.growStart = Date.now();
  plot.growDuration = duration;
  plot.breedCount = 0;
  plot.selfBreedCount = 0;
  plot.parentAName = seed.parentAName;
  plot.parentBName = seed.parentBName;

  selectedSeedGenoKey = null;
  startGrowTimer(plot);
  renderAll();
}

function flashSeedBar() {
  const bar = document.querySelector('.seed-bar');
  bar.style.borderTopColor = 'var(--gold)';
  setTimeout(() => bar.style.borderTopColor = '', 600);
}

// ═══════════════════════════════════════════════════
// GROW TIMERS
// ═══════════════════════════════════════════════════
function startGrowTimer(plot) {
  if (growTimers[plot.id]) clearInterval(growTimers[plot.id]);
  growTimers[plot.id] = setInterval(() => tickPlot(plot.id), 500);
}

function startAllTimers() {
  plots.forEach(p => { if (p.state === 'growing') startGrowTimer(p); });
}

function tickPlot(plotId) {
  const plot = plots.find(p => p.id === plotId);
  if (!plot || plot.state !== 'growing') { clearInterval(growTimers[plotId]); return; }

  const elapsed = (Date.now() - plot.growStart) / 1000;
  const remaining = Math.max(0, plot.growDuration - elapsed);
  const pct = Math.min(100, (elapsed / plot.growDuration) * 100);

  const timerEl = document.getElementById('timer-' + plotId);
  const progEl  = document.getElementById('prog-' + plotId);
  if (timerEl) timerEl.textContent = formatTime(remaining);
  if (progEl)  progEl.style.width  = pct + '%';

  if (remaining <= 0) {
    clearInterval(growTimers[plotId]);
    plot.state = 'ready';
    if (typeof SFX !== 'undefined') SFX.grow();
    renderAll();
  }
}

function formatTime(s) {
  s = Math.ceil(s);
  if (s <= 0) return '0s';
  if (s < 60) return s + 's';
  const m = Math.floor(s/60), sec = s%60;
  return sec > 0 ? `${m}m ${sec}s` : `${m}m`;
}

// ═══════════════════════════════════════════════════
// PLOT ACTIONS
// ═══════════════════════════════════════════════════
function discardPlot(plotId, event) {
  event.stopPropagation();
  const plot = plots.find(p => p.id === plotId);
  if (!plot) return;
  clearInterval(growTimers[plotId]);
  plot.state = 'empty';
  plot.flower = null;
  if (breedA === plotId) breedA = null;
  if (breedB === plotId) breedB = null;
  renderAll();
}

function harvestPlot(plotId, event) {
  event.stopPropagation();
  const plot = plots.find(p => p.id === plotId);
  if (!plot || plot.state !== 'ready') return;
  // TODO: move to storage
  // For now: sell immediately
  const cp = colorPhenotype(plot.flower);
  const fp = flowerPhenotype(plot.flower);
  // Track discovery for catalog
  discovered.add(cp.name + '|' + fp.name);
  checkHintUnlock();
  checkPlotUnlock();
  // Add to storage
  addToStorage(plot.flower);
  plot.state = 'empty';
  plot.flower = null;
  if (breedA === plotId) breedA = null;
  if (breedB === plotId) breedB = null;
  renderAll();
  renderStorage();
  renderCatalog();
  updateShopState();
  showGoldToast(lang==='zh'?'已加入仓库':'Added to storage');
}

// ─── BREEDING ───
function selectForBreed(plotId, event) {
  event.stopPropagation();
  const plot = plots.find(p => p.id === plotId);
  if (!plot || plot.state !== 'ready' || plot.breedCount >= 3) return;

  if (breedA === null || (breedA !== plotId && breedB !== null)) {
    // reset
    breedA = plotId; breedB = null;
  } else if (breedA === plotId) {
    breedA = null;
  } else {
    breedB = plotId;
    openBreedPopup();
  }
  renderAll();
}

function selfPollinate(plotId, event) {
  event.stopPropagation();
  const plot = plots.find(p => p.id === plotId);
  if (!plot || plot.state !== 'ready') return;
  if ((plot.selfBreedCount || 0) >= 1) {
    showGoldToast(lang==='zh' ? '每株只能自交一次' : 'Self-pollination allowed once per plant');
    return;
  }
  breedA = plotId; breedB = plotId;
  openBreedPopup();
}

function computeBreedOdds(gA, gB) {
  // Returns a map of phenotype-key -> {prob, colorP, flowerP}
  // Uses 3-state (homDom/het/homRec) enumeration per locus so petalClass works correctly.
  const loci = ['A','B','C','D','E','T'];

  // For one locus, compute P(homDom), P(het), P(homRec) from two parent pairs
  function locusTriProbs(pairA, pairB) {
    const gaOpts = [pairA[0], pairA[1]];
    const gbOpts = [pairB[0], pairB[1]];
    let homDom = 0, het = 0, homRec = 0;
    for (const ga of gaOpts) for (const gb of gbOpts) {
      const isADom = ga === ga.toUpperCase();
      const isBDom = gb === gb.toUpperCase();
      if (isADom && isBDom) homDom += 0.25;
      else if (!isADom && !isBDom) homRec += 0.25;
      else het += 0.25;
    }
    return [homDom, het, homRec]; // [P(DD), P(Dd), P(dd)]
  }

  // Precompute tri-probs for each locus
  const triProbs = {};
  loci.forEach(L => {
    const pairA = gA[L] || (L.toUpperCase()+L.toLowerCase());
    const pairB = gB[L] || (L.toUpperCase()+L.toLowerCase());
    triProbs[L] = locusTriProbs(pairA, pairB); // [homDom, het, homRec]
  });

  // Build mock geno from state array (0=homDom, 1=het, 2=homRec)
  function mockGeno(locusList, states) {
    const g = {};
    locusList.forEach((L, i) => {
      if (states[i] === 0) g[L] = L.toUpperCase()+L.toUpperCase();
      else if (states[i] === 1) g[L] = L.toUpperCase()+L.toLowerCase();
      else g[L] = L.toLowerCase()+L.toLowerCase();
    });
    return g;
  }

  const colorLoci  = ['A','B','C'];
  const flowerLoci = ['D','E','T'];
  const phenoProbs = {};

  // Enumerate 3^3=27 color combos × 3^3=27 flower combos = 729 total
  const states3 = [0,1,2];
  for (const cA of states3) for (const cB of states3) for (const cC of states3) {
    const cp_prob = triProbs['A'][cA] * triProbs['B'][cB] * triProbs['C'][cC];
    if (cp_prob < 1e-9) continue;
    const colorGeno = mockGeno(colorLoci, [cA, cB, cC]);
    const colorP = colorPhenotype(colorGeno);

    for (const fD of states3) for (const fE of states3) for (const fT of states3) {
      const fp_prob = triProbs['D'][fD] * triProbs['E'][fE] * triProbs['T'][fT];
      if (fp_prob < 1e-9) continue;
      const flowerGeno = mockGeno(flowerLoci, [fD, fE, fT]);
      const flowerP = flowerPhenotype(flowerGeno);

      const key = colorP.name + '|' + flowerP.name;
      const prob = cp_prob * fp_prob;
      if (!phenoProbs[key]) phenoProbs[key] = {prob:0, colorP, flowerP};
      phenoProbs[key].prob += prob;
    }
  }

  return phenoProbs;
}

function renderBreedPredictions(gA, gB, cpA, fpA, cpB, fpB, isSelf) {
  const predsEl = document.getElementById('breed-predictions');
  if (difficulty === 'expert') { predsEl.classList.remove('show'); return; }

  const odds = computeBreedOdds(gA, gB);
  const entries = Object.values(odds).sort((a,b) => b.prob - a.prob);

  const showProbs = difficulty === 'easy';

  // Top entries to show (≥1%)；其余合并为"其他"
  const significant = entries.filter(e => e.prob >= 0.01);
  const unknownProb = entries.filter(e => e.prob < 0.01).reduce((s, e) => s + e.prob, 0);

  // 归一化：把所有要显示的条目（含"其他"）的概率统一缩放到总和=100%，
  // 避免各自独立四舍五入后叠加超过100%
  const displayEntries = significant.slice(); // 浅拷贝，不改原数据
  const hasOther = unknownProb > 0.001;
  const totalShown = displayEntries.reduce((s, e) => s + e.prob, 0) + (hasOther ? unknownProb : 0);
  // totalShown 理论上已等于1，但浮点误差可能导致轻微偏差，归一化修正
  const scale = totalShown > 0 ? 1 / totalShown : 1;

  // 用"最大余数法"分配整数百分比，确保总和恰好为100
  const rawPcts = displayEntries.map(e => e.prob * scale * 100);
  const floors  = rawPcts.map(v => Math.floor(v));
  const remainders = rawPcts.map((v, i) => ({ i, r: v - floors[i] }));
  const totalFloor = floors.reduce((s, v) => s + v, 0);
  let toDistribute = Math.round(100 - totalFloor - (hasOther ? Math.floor(unknownProb * scale * 100) : 0));
  remainders.sort((a, b) => b.r - a.r);
  const finalPcts = [...floors];
  for (let k = 0; k < toDistribute && k < remainders.length; k++) {
    finalPcts[remainders[k].i]++;
  }

  let html = `<div class="breed-pred-title">${lang==='zh'?'后代预测':'Offspring Prediction'}</div>`;
  html += `<div class="breed-pred-parents">
    <span>${lang==='zh'?cpA.name+fpA.name:cpA.nameEn+' '+fpA.nameEn}</span>
    <span class="breed-pred-arrow">×</span>
    <span>${isSelf?(lang==='zh'?'（自身）':'Self'):(lang==='zh'?cpB.name+fpB.name:cpB.nameEn+' '+fpB.nameEn)}</span>
  </div>`;
  html += `<div class="breed-pred-list">`;

  displayEntries.forEach((e, idx) => {
    const pct = finalPcts[idx];
    const pctStr = pct + '%';
    const discKey = e.colorP.name + '|' + e.flowerP.name;
    const isKnown = discovered.has(discKey);
    const barColor = isKnown ? e.colorP.hex : '#666';
    const name = isKnown
      ? (lang==='zh' ? e.flowerP.name+'×'+e.colorP.name : e.colorP.nameEn+' '+e.flowerP.nameEn)
      : '？？？';
    const flowerIcon = isKnown
      ? flowerSVG(flowerSvgKey(e.flowerP), e.colorP.hex, 28)
      : `<div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:18px;opacity:.45;">？</div>`;
    html += `<div class="breed-pred-row">
      <div class="breed-pred-flower">${flowerIcon}</div>
      <div class="breed-pred-bar-wrap"><div class="breed-pred-bar" style="width:${pct}%;background:${barColor};opacity:.85;"></div></div>
      <div class="breed-pred-label">${name}</div>
      ${showProbs ? `<div class="breed-pred-pct">${pctStr}</div>` : ''}
    </div>`;
  });

  if (hasOther) {
    const otherPct = Math.round(unknownProb * scale * 100);
    html += `<div class="breed-pred-row breed-pred-unknown">
      <div class="breed-pred-unk-icon">？</div>
      <div class="breed-pred-bar-wrap"><div class="breed-pred-bar" style="width:${otherPct}%;background:#888;opacity:.5;"></div></div>
      <div class="breed-pred-label">${lang==='zh'?'其他':'Other'}</div>
      ${showProbs ? `<div class="breed-pred-pct">${otherPct}%</div>` : ''}
    </div>`;
  }

  html += `</div>`;
  predsEl.innerHTML = html;
  predsEl.classList.add('show');
}

function openBreedPopup() {
  const pA = plots.find(p => p.id === breedA);
  const pB = plots.find(p => p.id === breedB);
  if (!pA || !pB) return;
  const isSelf = breedA === breedB;

  const cpA = colorPhenotype(pA.flower), fpA = flowerPhenotype(pA.flower);
  const cpB = colorPhenotype(pB.flower), fpB = flowerPhenotype(pB.flower);

  document.getElementById('popup-title').textContent = isSelf
    ? (lang==='zh'?'确认自授粉':'Confirm Self-Pollination')
    : (lang==='zh'?'确认配种':'Confirm Breeding');

  document.getElementById('popup-parents').innerHTML = isSelf ? `
    <div class="popup-parent">
      <div class="popup-flower-dot">${flowerSVG(flowerSvgKey(fpA), cpA.hex, 44)}</div>
      <div class="popup-parent-name">${lang==='zh'?cpA.name:cpA.nameEn} ${lang==='zh'?fpA.name:fpA.nameEn}</div>
    </div>
    <div class="popup-cross">×</div>
    <div class="popup-parent">
      <div class="popup-flower-dot">${flowerSVG(flowerSvgKey(fpA), cpA.hex, 44)}</div>
      <div class="popup-parent-name">${lang==='zh'?'（自身）':'(Self)'}</div>
    </div>` : `
    <div class="popup-parent">
      <div class="popup-flower-dot">${flowerSVG(flowerSvgKey(fpA), cpA.hex, 44)}</div>
      <div class="popup-parent-name">${lang==='zh'?cpA.name:cpA.nameEn} ${lang==='zh'?fpA.name:fpA.nameEn}</div>
    </div>
    <div class="popup-cross">×</div>
    <div class="popup-parent">
      <div class="popup-flower-dot">${flowerSVG(flowerSvgKey(fpB), cpB.hex, 44)}</div>
      <div class="popup-parent-name">${lang==='zh'?cpB.name:cpB.nameEn} ${lang==='zh'?fpB.name:fpB.nameEn}</div>
    </div>`;

  const count = 3 + Math.floor(Math.random() * 3); // 3-5, lock it for display
  document.getElementById('popup-body').textContent = lang==='zh'
    ? `将产生 3–5 颗种子加入种子栏。配种次数 +1（每株最多 3 次）。`
    : `Will produce 3–5 seeds. Breed count +1 (max 3 per plant).`;

  document.getElementById('popup-confirm-btn').textContent = lang==='zh'?'配种':'Breed';
  document.getElementById('popup-cancel-btn').textContent  = lang==='zh'?'取消':'Cancel';
  document.getElementById('breed-popup').dataset.pendingCount = count;
  document.getElementById('breed-popup').classList.add('open');
  renderBreedPredictions(pA.flower, pB.flower, cpA, fpA, cpB, fpB, isSelf);
}

function closeBreedPopup() {
  document.getElementById('breed-popup').classList.remove('open');
  breedA = null; breedB = null;
  renderAll();
}

function confirmBreed() {
  const pA = plots.find(p => p.id === breedA);
  const pB = plots.find(p => p.id === breedB);
  if (!pA || !pB) { closeBreedPopup(); return; }

  const isSelf = breedA === breedB;
  const count = parseInt(document.getElementById('breed-popup').dataset.pendingCount) || 3;

  const nameA = lang==='zh'
    ? colorPhenotype(pA.flower).name + flowerPhenotype(pA.flower).name
    : colorPhenotype(pA.flower).nameEn + ' ' + flowerPhenotype(pA.flower).nameEn;
  const nameB = isSelf ? (lang==='zh'?'（自身）':'Self') : (lang==='zh'
    ? colorPhenotype(pB.flower).name + flowerPhenotype(pB.flower).name
    : colorPhenotype(pB.flower).nameEn + ' ' + flowerPhenotype(pB.flower).nameEn);

  for (let i = 0; i < count; i++) {
    const geno = rollOffspringGeno(pA.flower, pB.flower);
    seeds.push({id: nextSeedId++, geno, source: null, parentAName: nameA, parentBName: nameB, color: flowerDotColor(geno)});
  }

  pA.breedCount++;
  if (isSelf) {
    pA.selfBreedCount = (pA.selfBreedCount || 0) + 1;
  } else {
    pB.breedCount++;
  }

  document.getElementById('breed-popup').classList.remove('open');
  breedA = null; breedB = null;
  renderAll();
}

// ═══════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════
function flowerDotColor(geno) {
  return colorPhenotype(geno).hex;
}

// SVG renderer and color helpers have been moved to svg.js


function showSeedTooltip(event, group) {
  const tt = document.getElementById('tooltip');
  const seed0 = group.seeds[0];
  const fromLine = seed0.source
    ? `${lang==='zh'?'来源':'Source'}: ${seed0.source}`
    : `${lang==='zh'?'来自':'From'}: ${seed0.parentAName} × ${seed0.parentBName}`;
  document.getElementById('tooltip-content').innerHTML =
    `<div>${fromLine}</div>
     <div class="tooltip-line">${lang==='zh'?'数量':'Count'}: ${group.seeds.length}</div>
     <div class="tooltip-line" style="font-style:italic;margin-top:2px;">${lang==='zh'?'种出来才知道什么花':'Unknown until grown'}</div>`;
  tt.classList.add('show');
  moveTt(event);
}

function moveTt(e) {
  const tt = document.getElementById('tooltip');
  tt.style.left = (e.clientX + 12) + 'px';
  tt.style.top  = (e.clientY - 8)  + 'px';
}
document.addEventListener('mousemove', e => {
  if (document.getElementById('tooltip').classList.contains('show')) moveTt(e);
});
function hideTooltip() { document.getElementById('tooltip').classList.remove('show'); }

let goldToastTimer;
function showGoldToast(msg) {
  let t = document.getElementById('gold-toast');
  if (!t) { t = document.createElement('div'); t.id='gold-toast';
    t.style.cssText='position:fixed;top:60px;right:20px;background:var(--bg2);border:1px solid var(--gold-dim);padding:8px 16px;font-size:13px;color:var(--gold2);z-index:400;transition:opacity .3s;pointer-events:none;';
    document.body.appendChild(t); }
  t.textContent = msg; t.style.opacity = '1';
  clearTimeout(goldToastTimer);
  goldToastTimer = setTimeout(() => t.style.opacity = '0', 2000);
}

// ═══════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════
const TAB_LABELS = {shop:{zh:'商店',en:'Shop'},nursery:{zh:'苗圃',en:'Nursery'},storage:{zh:'仓库',en:'Storage'},catalog:{zh:'图鉴',en:'Catalog'},hints:{zh:'提示',en:'Hints'}};

function switchTab(tabId, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + tabId).classList.add('active');
  if (tabId === 'catalog') renderCatalog();
  if (tabId === 'hints') renderHints();
}

// ═══════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════
const I18N = {
  zh:{
    'seed-bar-title':'种子栏','settings':'设置','lang':'语言','difficulty':'难度','ref':'参考',
    'diff-easy':'初学者 — 显示基因型与概率','diff-learner':'进阶 — 显示基因型','diff-expert':'专家 — 纯观察',
    'encyc':'遗传学百科','gold-unit':'金币',
  },
  en:{
    'seed-bar-title':'Seed Tray','settings':'Settings','lang':'Language','difficulty':'Difficulty','ref':'Reference',
    'diff-easy':'Easy — show genotype & odds','diff-learner':'Learner — show genotype','diff-expert':'Expert — observe only',
    'encyc':'Genetics Encyclopedia','gold-unit':'G',
  }
};
function tr(k){ return I18N[lang][k]||k; }

function applyLang() {
  const se = (id,txt) => { const el=document.getElementById(id); if(el) el.textContent=txt; };
  se('seed-bar-title-label', tr('seed-bar-title'));
  se('settings-title-label', tr('settings'));
  se('lang-label',           tr('lang'));
  se('diff-label',           tr('difficulty'));
  se('ref-label',            tr('ref'));
  se('diff-easy-label',      tr('diff-easy'));
  se('diff-learner-label',   tr('diff-learner'));
  se('diff-expert-label',    tr('diff-expert'));
  se('encyc-label',          tr('encyc'));
  // Shop labels
  const shopTr = {
    zh:{ upgrades:'升级', boxes:'盲盒', nurseryName:'苗圃加速', nurseryDesc:'生长时间减半',
         bronzeName:'初级盲盒', silverName:'中级盲盒', goldName:'高级盲盒',
         bronzeDesc:'开局即可购买，基础遗传探索', silverDesc:'稀有隐性组合，繁育潜力强', goldDesc:'顶级隐性基因，传说级繁育基础',
         silverLock:'解锁20种花后开放', goldLock:'解锁50种花后开放',
         buy:'购买' },
    en:{ upgrades:'Upgrades', boxes:'Blind Boxes', nurseryName:'Nursery Speed', nurseryDesc:'Halve all grow times',
         bronzeName:'Basic Box', silverName:'Mid Box', goldName:'Advanced Box',
         bronzeDesc:'Available from the start, basic genetics', silverDesc:'Rare recessives, strong breeding potential', goldDesc:'Top-tier recessives, legendary breeding',
         silverLock:'Unlock 20 flower types first', goldLock:'Unlock 50 flower types first',
         buy:'Buy' },
  };
  const s = shopTr[lang];
  se('shop-upgrades-label', s.upgrades); se('shop-boxes-label', s.boxes);
  se('upgrade-nursery-name', s.nurseryName); se('upgrade-nursery-desc', s.nurseryDesc);
  se('box-bronze-name', s.bronzeName); se('box-silver-name', s.silverName); se('box-gold-name', s.goldName);
  se('box-bronze-desc', s.bronzeDesc); se('box-silver-desc', s.silverDesc); se('box-gold-desc', s.goldDesc);
  se('box-silver-lock', s.silverLock); se('box-gold-lock', s.goldLock);
  ['bronze','silver','gold'].forEach(t => se('box-'+t+'-btn-label', s.buy));
  // Odds labels
  const oddsZh = {
    'bronze-odds-1':'1-2个隐性等位基因 80%','bronze-odds-2':'3个隐性等位基因 20%',
    'silver-odds-1':'3个隐性等位基因 70%','silver-odds-2':'4个隐性等位基因 25%','silver-odds-3':'5个隐性等位基因 5%',
    'gold-odds-1':'5个隐性等位基因 60%','gold-odds-2':'6-7个隐性等位基因 35%','gold-odds-3':'8个隐性等位基因 5%',
  };
  const oddsEn = {
    'bronze-odds-1':'1-2 rec. alleles 80%','bronze-odds-2':'3 rec. alleles 20%',
    'silver-odds-1':'3 rec. alleles 70%','silver-odds-2':'4 rec. alleles 25%','silver-odds-3':'5 rec. alleles 5%',
    'gold-odds-1':'5 rec. alleles 60%','gold-odds-2':'6-7 rec. alleles 35%','gold-odds-3':'8 rec. alleles 5%',
  };
  const oddsMap = lang==='zh' ? oddsZh : oddsEn;
  Object.entries(oddsMap).forEach(([id,txt]) => se(id,txt));
  // Badge labels
  const badgeZh = {bronze:'初级',silver:'中级',gold:'高级'};
  const badgeEn = {bronze:'Basic',silver:'Mid',gold:'Adv.'};
  const badgeMap = lang==='zh' ? badgeZh : badgeEn;
  Object.entries(badgeMap).forEach(([t,txt]) => se('box-'+t+'-badge',txt));
  document.querySelectorAll('.tab').forEach(t => { t.textContent = TAB_LABELS[t.dataset.tab][lang]; });
  const tlb = document.getElementById('topbar-lang-btn');
  if (tlb) tlb.textContent = getLangBtnLabel();
  document.querySelectorAll('.lang-opt').forEach(b => {
    b.classList.toggle('active', (lang==='zh' && b.textContent==='中文') || (lang==='en' && b.textContent==='English'));
  });
  renderAll();
  renderStorage();
  renderCatalog();
  renderHints();
  updateShopState();
}

function setLang(l) { lang = l; applyLang(); }

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  applyLang();
  applyHomeLang();
}

function getLangBtnLabel() {
  // Always show the OTHER language so user knows what clicking does
  // Written in both scripts so either user recognises it
  return lang === 'zh' ? 'EN / English' : '中文';
}

function saveGame() {
  try {
    const state = { lang, difficulty, gold, seeds, plots, storageItems, discovered: [...discovered], nurseryUpgraded, unlockedHints };
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mendel_save.json';
    a.click();
    URL.revokeObjectURL(url);
    showGoldToast(lang==='zh' ? '存档已下载 ✓' : 'Save downloaded ✓');
  } catch(e) { showGoldToast(lang==='zh' ? '保存失败' : 'Save failed'); }
}

function setDiff(d, el) {
  difficulty = d;
  document.querySelectorAll('.diff-opt').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderAll();
}

function openSettings() { document.getElementById('settings-overlay').classList.add('open'); }
function closeSettings() { document.getElementById('settings-overlay').classList.remove('open'); }
function openEncyclopedia() { alert(lang==='zh'?'遗传学百科（待实现）':'Encyclopedia — coming soon'); }

// ═══════════════════════════════════════════════════
// SHOP
// ═══════════════════════════════════════════════════

let nurseryUpgraded = false;

// Box configs — unlock by discovered flower count
const BOX_CONFIGS = {
  bronze: { price: 50,   unlockDisc: 0  },
  silver: { price: 350,  unlockDisc: 20 },
  gold:   { price: 1200, unlockDisc: 50 },
};

function updateShopState() {
  const disc = discoveredCount();
  const silverUnlocked = disc >= 20;
  const goldUnlocked   = disc >= 50;

  ['silver','gold'].forEach(tier => {
    const card = document.getElementById('box-' + tier);
    const btn  = document.getElementById('box-' + tier + '-btn');
    const lock = document.getElementById('box-' + tier + '-lock');
    const unlocked = tier === 'silver' ? silverUnlocked : goldUnlocked;
    if (unlocked) {
      card.classList.remove('locked'); card.classList.add('unlocked');
      if (lock) lock.style.display = 'none';
      btn.disabled = false;
    }
  });

  // Disable buy if not enough gold
  Object.entries(BOX_CONFIGS).forEach(([tier, cfg]) => {
    const tierKey = tier === 'gold' ? 'gold' : tier;
    const btn = document.getElementById('box-' + tierKey + '-btn');
    const unlocked = tier === 'bronze' ? true : tier === 'silver' ? silverUnlocked : goldUnlocked;
    if (btn) btn.disabled = !unlocked || gold < cfg.price;
  });

  // Upgrade button
  const upBtn = document.getElementById('upgrade-nursery-btn');
  const upName = document.getElementById('upgrade-nursery-name');
  if (nurseryUpgraded) {
    upBtn.disabled = true;
    upName.classList.add('done');
    upBtn.innerHTML = `<span>${lang==='zh'?'已升级':'Upgraded'}</span>`;
  } else {
    upBtn.disabled = gold < 2500;
  }
}

function buyUpgrade(type) {
  if (type === 'nursery') {
    if (gold < 2500 || nurseryUpgraded) return;
    gold -= 2500;
    nurseryUpgraded = true;
    updateGoldDisplay();
    updateShopState();
    if (typeof SFX !== 'undefined') SFX.coin();
    showGoldToast(lang==='zh'?'苗圃已升级！生长时间减半':'Nursery upgraded! Growth time halved.');
  }
}

function buyBox(tier) {
  const cfg = BOX_CONFIGS[tier];
  if (gold < cfg.price) return;
  gold -= cfg.price;
  updateGoldDisplay();

  const seed = rollBoxSeed(tier);
  seeds.push(seed);
  renderSeedBar();
  updateShopState();
  if (typeof SFX !== 'undefined') SFX.coin();
  showGoldToast(lang==='zh' ? `已获得 1 颗种子` : `1 seed added to tray`);
}

function rollBoxSeed(tier) {
  const r = Math.random();
  let geno;

  if (tier === 'bronze') {
    // 80%: 1-2 recessive alleles; 20%: 3 recessive alleles
    if (r < 0.80) geno = rollByRecCount(pickFrom([1,2]));
    else           geno = rollByRecCount(3);
  } else if (tier === 'silver') {
    // 70%: 3 rec alleles; 25%: 4 rec alleles; 5%: 5 rec alleles
    if (r < 0.70)      geno = rollByRecCount(3);
    else if (r < 0.95) geno = rollByRecCount(4);
    else               geno = rollByRecCount(5);
  } else {
    // 60%: 5 rec alleles; 35%: 6-7 rec alleles; 5%: 8 rec alleles
    if (r < 0.60)      geno = rollByRecCount(5);
    else if (r < 0.95) geno = rollByRecCount(pickFrom([6,7]));
    else               geno = rollByRecCount(8);
  }

  return {id: nextSeedId++, geno, source: boxName(tier), parentAName: null, parentBName: null, color: colorPhenotype(geno).hex};
}

// Roll a genotype where exactly `recAlleles` recessive alleles are distributed across loci.
// Each locus can contribute 0 (AA), 1 (Aa), or 2 (aa) recessive alleles.
// recAlleles is the total count of recessive alleles (max 12 across 6 loci).
function rollByRecCount(recAlleles) {
  const loci = ['A','B','C','D','E','T'];
  const n = loci.length; // 6
  recAlleles = Math.max(0, Math.min(recAlleles, n * 2)); // clamp 0–12

  // Distribute recAlleles randomly across loci:
  // Start all loci at 0 recessive alleles (AA).
  // Shuffle a pool of n*2 slots, mark recAlleles of them as recessive.
  // Each locus gets 0, 1, or 2 recessive alleles based on its slots.
  const pool = Array(n * 2).fill(0).map((_, i) => Math.floor(i / 2)); // [0,0,1,1,2,2,3,3,4,4,5,5]
  // Fisher-Yates shuffle then take first recAlleles as "recessive"
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const recSlots = pool.slice(0, recAlleles);
  const recPerLocus = Array(n).fill(0);
  recSlots.forEach(idx => recPerLocus[idx]++);

  const g = {};
  loci.forEach((L, i) => {
    const r = recPerLocus[i];
    if (r === 2) g[L] = recPair(L);       // aa
    else if (r === 1) g[L] = hetPair(L);  // Aa
    else g[L] = domPair(L);               // AA
  });
  return g;
}

function pickFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function boxName(tier) {
  const n = {
    bronze:{zh:'初级盲盒',en:'Basic Box'},
    silver:{zh:'中级盲盒',en:'Mid Box'},
    gold:  {zh:'高级盲盒',en:'Advanced Box'}
  };
  return n[tier][lang];
}

// Helpers for genotype construction
function domPair(L){ return L.toUpperCase()+L.toUpperCase(); }
function recPair(L){ return L.toLowerCase()+L.toLowerCase(); }
function hetPair(L){ return L.toUpperCase()+L.toLowerCase(); }
function randPair(L){ const r=Math.random(); return r<.25?domPair(L):r<.5?recPair(L):hetPair(L); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function parseGeno2(obj) {
  // obj keys are locus letters, values are pair strings like 'AA','Aa','aa'
  const g = {};
  Object.entries(obj).forEach(([L,pair]) => { g[L.toUpperCase()] = pair; });
  return g;
}

function discoveredCount() { return discovered.size; }

// u2550u2550u2550 PLOT UNLOCK u2550u2550u2550
function checkPlotUnlock() {
  if (plots.length >= MAX_PLOTS) return;
  var disc = discoveredCount();
  var shouldHave = Math.min(4 + Math.floor(disc / 10), MAX_PLOTS);
  while (plots.length < shouldHave) {
    plots.push(makePlot());
    var n = plots.length;
    showGoldToast(lang === 'zh' ? '苗圃新田块已解锁！（' + n + '/12）' : 'New plot unlocked! (' + n + '/12)');
  }
}


// ═══════════════════════════════════════════════════
// HINTS SYSTEM
// ═══════════════════════════════════════════════════
const HINTS = [
  { zh: '基因ABC控制的是花的颜色', en: 'Genes ABC control flower color' },
  { zh: '基因DE控制的是花瓣的数量', en: 'Genes DE control petal count' },
  { zh: '基因A控制红色', en: 'Gene A controls red color' },
  { zh: '基因B控制黄色', en: 'Gene B controls yellow color' },
  { zh: '基因C控制蓝色', en: 'Gene C controls blue color' },
  { zh: '基因T控制瓣尖的形状', en: 'Gene T controls petal tip shape' },
];

let unlockedHints = 0; // how many hints have been unlocked so far

function checkHintUnlock() {
  const disc = discoveredCount();
  const shouldHave = Math.min(Math.floor(disc / 5), HINTS.length);
  if (shouldHave > unlockedHints) {
    const newCount = shouldHave;
    for (let i = unlockedHints; i < newCount; i++) {
      showHintToast(disc, HINTS[i]);
    }
    unlockedHints = newCount;
    renderHints();
  }
}

let hintToastTimer;
function showHintToast(discCount, hint) {
  let t = document.getElementById('hint-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'hint-toast';
    t.style.cssText = [
      'position:fixed','bottom:100px','left:50%','transform:translateX(-50%)',
      'background:var(--bg2,#2a2a2a)','border:1px solid var(--gold-dim,#6a5a30)',
      'padding:10px 18px','font-size:13px','color:var(--gold2,#c8a84a)',
      'z-index:500','transition:opacity .4s','pointer-events:none',
      'border-radius:8px','text-align:center','max-width:320px','line-height:1.5',
      'box-shadow:0 4px 20px rgba(0,0,0,.35)'
    ].join(';');
    document.body.appendChild(t);
  }
  const line1 = lang === 'zh'
    ? '已解锁 ' + discCount + ' 种花，获得提示：'
    : 'Unlocked ' + discCount + ' flower types — Hint:';
  const line2 = lang === 'zh' ? hint.zh : hint.en;
  t.innerHTML = '<div style="font-size:11px;opacity:.7;margin-bottom:3px;">' + line1 + '</div><div>' + line2 + '</div>';
  t.style.opacity = '1';
  clearTimeout(hintToastTimer);
  hintToastTimer = setTimeout(function(){ t.style.opacity = '0'; }, 4000);
}

function renderHints() {
  const list = document.getElementById('hints-list');
  if (!list) return;
  const totalLabel = document.getElementById('hints-total-label');
  if (totalLabel) {
    totalLabel.textContent = lang === 'zh'
      ? '已解锁 ' + unlockedHints + ' / ' + HINTS.length + ' 条提示'
      : 'Hints unlocked: ' + unlockedHints + ' / ' + HINTS.length;
  }
  if (unlockedHints === 0) {
    list.innerHTML = '<div class="hint-empty">' + (lang === 'zh' ? '每解锁5种花获得一条提示' : 'Unlock a hint every 5 flower types discovered') + '</div>';
    return;
  }
  list.innerHTML = HINTS.slice(0, unlockedHints).map(function(h, i) {
    return '<div class="hint-row"><span class="hint-num">' + (i+1) + '</span><span class="hint-text">' + (lang === 'zh' ? h.zh : h.en) + '</span></div>';
  }).join('');
}

function showBoxOpen(seed) {
  const cp = colorPhenotype(seed.geno);
  const fp = flowerPhenotype(seed.geno);
  const rar = overallRarity(cp, fp);
  const rarCol = {common:'var(--muted)',rare:'#6a9fd8',epic:'#a06abf',legend:'var(--gold2)'}[rar];
  const showGeno = difficulty !== 'expert';

  document.getElementById('box-open-dot').style.background = cp.hex;
  document.getElementById('box-open-name').textContent =
    (lang==='zh' ? cp.name + fp.name : cp.nameEn + ' ' + fp.nameEn);
  document.getElementById('box-open-rarity').textContent = rarityLabel(rar, lang);
  document.getElementById('box-open-rarity').style.color = rarCol;
  document.getElementById('box-open-geno').textContent = showGeno ? genoStr(seed.geno) : '';
  document.getElementById('box-open-desc').textContent =
    lang==='zh'
      ? `售价：${sellValue(cp,fp)}  |  生长：${growTime(cp,fp)}s`
      : `Sell: ${sellValue(cp,fp)}  |  Grow: ${growTime(cp,fp)}s`;
  document.getElementById('box-open-close-btn').textContent =
    lang==='zh' ? '种子已入种子栏' : 'Seed added to tray';

  // shimmer color by rarity
  const shimmerCol = {common:'#ffffff06',rare:'#6a9fd820',epic:'#a06abf20',legend:'#c8973a20'}[rar];
  document.querySelector('.box-open-shimmer').style.background =
    `linear-gradient(135deg,transparent 40%,${shimmerCol} 50%,transparent 60%)`;

  document.getElementById('box-open-overlay').classList.add('open');
}

function closeBoxOpen() {
  document.getElementById('box-open-overlay').classList.remove('open');
  renderSeedBar();
}

// ═══════════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════════

// storage: array of {id, geno, cp, fp, favorite}
let storageItems = [];
let nextStorageId = 1;
let storageFilter = 'all';

function addToStorage(geno) {
  const cp = colorPhenotype(geno);
  const fp = flowerPhenotype(geno);
  storageItems.push({id: nextStorageId++, geno, cp, fp, favorite: false});
}

function setStorageFilter(f, el) {
  storageFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderStorage();
}

function renderStorage() {
  const grid = document.getElementById('storage-grid');
  const empty = document.getElementById('storage-empty');
  const sellAllBtn = document.getElementById('storage-sell-all-btn');
  const countLabel = document.getElementById('storage-count-label');

  // Main grid: non-favorite items only
  const nonFavItems = storageItems.filter(item => {
    if (item.favorite) return false;
    if (storageFilter === 'all') return true;
    return overallRarity(item.cp, item.fp) === storageFilter;
  });

  countLabel.textContent = `${nonFavItems.length} ${lang==='zh'?'株':'flowers'}`;
  sellAllBtn.disabled = nonFavItems.length === 0;

  if (nonFavItems.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = nonFavItems.map(item => makeFlowerCardHTML(item)).join('');
  }

  renderFavStrip();
  updateStorageLang();
}

function makeFlowerCardHTML(item) {
  const showGeno = difficulty !== 'expert';
  const val = sellValue(item.cp, item.fp);
  const genoLine = showGeno ? `<div class="fc-geno">${genoStr(item.geno)}</div>` : '';
  const favActive = item.favorite ? 'active' : '';
  const flowerName = lang==='zh'
    ? item.cp.name + item.fp.name
    : item.cp.nameEn + ' ' + item.fp.nameEn;
  return `<div class="flower-card${item.favorite?' fav':''}" id="fc-${item.id}">
    <div class="fc-dot">${flowerSVG(flowerSvgKey(item.fp), item.cp.hex, 52)}</div>
    <div class="fc-name">${flowerName}</div>
    ${genoLine}
    <div class="fc-value"><span class="shop-coin"></span>${val}</div>
    <div class="fc-actions">
      <button class="fc-btn sell" onclick="sellFromStorage(${item.id})">${lang==='zh'?'出售':'Sell'}</button>
      <button class="fc-btn fav-btn ${favActive}" onclick="toggleFav(${item.id})">${lang==='zh'?'收藏':'Fav'}</button>
    </div>
  </div>`;
}

function renderFavStrip() {
  const scroll = document.getElementById('fav-strip-scroll');
  const favItems = storageItems.filter(i => i.favorite);
  document.getElementById('fav-count-label').textContent =
    favItems.length > 0 ? `${favItems.length}` : '';

  if (favItems.length === 0) {
    scroll.innerHTML = `<span class="fav-empty" id="fav-empty-label">${lang==='zh'?'暂无收藏':'No favorites yet'}</span>`;
    return;
  }
  scroll.innerHTML = favItems.map(item => {
    const name = lang==='zh' ? item.cp.name+item.fp.name : item.cp.nameEn+' '+item.fp.nameEn;
    const tip = lang==='zh' ? '点击返回仓库' : 'Tap to unpin';
    return `<div class="fav-chip" onclick="toggleFav(${item.id})" title="${tip}" style="cursor:pointer;">
      <div class="fav-chip-dot">${flowerSVG(flowerSvgKey(item.fp), item.cp.hex, 38)}</div>
      <div class="fav-chip-name">${name}</div>
      <div style="font-size:9px;color:var(--muted);margin-top:1px;opacity:.7;">${tip}</div>
    </div>`;
  }).join('');
}

function sellFromStorage(id) {
  const item = storageItems.find(i => i.id === id);
  if (!item) return;
  const val = sellValue(item.cp, item.fp);
  gold += val;
  storageItems = storageItems.filter(i => i.id !== id);
  updateGoldDisplay();
  updateShopState();
  showGoldToast(`+${val}`);
  if (typeof SFX !== 'undefined') SFX.gold();
  renderStorage();
}

function sellAll() {
  const toSell = storageItems.filter(i => {
    const matchFilter = storageFilter === 'all' || overallRarity(i.cp,i.fp) === storageFilter;
    return matchFilter && !i.favorite;
  });
  const total = toSell.reduce((sum, i) => sum + sellValue(i.cp, i.fp), 0);
  storageItems = storageItems.filter(i => !toSell.includes(i));
  gold += total;
  updateGoldDisplay();
  updateShopState();
  showGoldToast(`+${total}`);
  if (typeof SFX !== 'undefined') SFX.gold();
  renderStorage();
}

function toggleFav(id) {
  const item = storageItems.find(i => i.id === id);
  if (!item) return;
  item.favorite = !item.favorite;
  renderStorage();
}

function rarityHex(r) {
  return {common:'var(--muted)',rare:'#6a9fd8',epic:'#a06abf',legend:'var(--gold2)'}[r];
}

function updateStorageLang() {
  const se = (id,txt) => { const el=document.getElementById(id); if(el) el.textContent=txt; };
  se('filter-all',   lang==='zh'?'全部':'All');
  se('filter-common',lang==='zh'?'普通':'Common');
  se('filter-rare',  lang==='zh'?'稀有':'Rare');
  se('filter-epic',  lang==='zh'?'史诗':'Epic');
  se('filter-legend',lang==='zh'?'传说':'Legend');
  se('storage-sell-all-btn', lang==='zh'?'全部出售':'Sell All');
  se('fav-title-label', lang==='zh'?'收藏':'Favorites');
  se('storage-empty-label', lang==='zh'?'仓库空空如也':'Storage is empty');
  se('storage-empty-sub', lang==='zh'?'收获苗圃中的花卉加入仓库':'Harvest flowers from the nursery');
}

// ═══════════════════════════════════════════════════
// CATALOG
// ═══════════════════════════════════════════════════

// Axis definitions — rows: flower types top→bottom (common→legend)
// cols: colors left→right (common→legend)
const CAT_FLOWERS = [
  // 普通 coef:5
  { key:'向日葵', keyEn:'Sunflower',    svgKey:'向日葵', coef:5,  hex:'#7a6030' },
  { key:'含羞草', keyEn:'Mimosa',       svgKey:'含羞草', coef:5,  hex:'#4a6030' },
  { key:'紫菀',   keyEn:'Aster',        svgKey:'紫菀',   coef:5,  hex:'#504060' },
  // 稀有 coef:12
  { key:'非洲菊', keyEn:'Gerbera',      svgKey:'非洲菊', coef:12, hex:'#6a5040' },
  { key:'康乃馨', keyEn:'Carnation',    svgKey:'康乃馨',   coef:12, hex:'#5a4030' },
  { key:'蔷薇',   keyEn:'Rose',         svgKey:'蔷薇',   coef:12, hex:'#5a3040' },
  // 史诗 coef:30
  { key:'星芹',   keyEn:'Astrantia',    svgKey:'星芹',   coef:30, hex:'#405060' },
  { key:'矢车菊', keyEn:'Cornflower',   svgKey:'矢车菊', coef:30, hex:'#304060' },
  { key:'木兰',   keyEn:'Magnolia',     svgKey:'木兰',   coef:30, hex:'#604050' },
  // 传说 coef:75
  { key:'铁线莲', keyEn:'Clematis',     svgKey:'铁线莲', coef:75, hex:'#303050' },
  { key:'虞美人', keyEn:'Poppy',        svgKey:'罂粟',   coef:75, hex:'#5a2020' },
  { key:'冰晶花', keyEn:'Ice Crystal',  svgKey:'水仙',   coef:75, hex:'#304060' },
];

const CAT_COLORS = [
  { key:'黑色', keyEn:'Black',  hex:'#494949', coef:1  },
  { key:'橙色', keyEn:'Orange', hex:'#ffa449', coef:2  },
  { key:'紫色', keyEn:'Purple', hex:'#ac79f4', coef:2  },
  { key:'绿色', keyEn:'Green',  hex:'#b0df49', coef:2  },
  { key:'红色', keyEn:'Red',    hex:'#ef3047', coef:4  },
  { key:'黄色', keyEn:'Yellow', hex:'#efd95b', coef:4  },
  { key:'蓝色', keyEn:'Blue',   hex:'#82a0ff', coef:4  },
  { key:'纯白', keyEn:'White',  hex:'#f2ead6', coef:12 },
];

// Tier separator indices (after these indices, draw a thicker border)
// colors: after idx 0 (common), after idx 3 (rare→epic), after idx 6 (epic→legend)
// flowers: after idx 0 (common), after idx 3 (rare→epic), after idx 6 (epic→legend)
const COLOR_TIER_SEP = [1, 4, 7]; // before these cols draw sep (colors unchanged)
const FLOWER_TIER_SEP = [3, 6, 9]; // before these rows draw sep (3 flowers per tier)

function renderCatalog() {
  const total = CAT_FLOWERS.length * CAT_COLORS.length;
  const found = discovered.size;
  document.getElementById('catalog-discovered-label').textContent =
    lang === 'zh'
      ? `已发现 ${found} / ${total} 种`
      : `Discovered ${found} / ${total}`;

  // Grid: (rows = flowers + 1 header) × (cols = colors + 1 header)
  const nCols = CAT_COLORS.length + 1;
  const nRows = CAT_FLOWERS.length + 1;
  const table = document.getElementById('catalog-table');
  table.style.gridTemplateColumns = `80px repeat(${CAT_COLORS.length}, 84px)`;
  table.style.gridTemplateRows    = `40px repeat(${CAT_FLOWERS.length}, 84px)`;

  let html = '';

  // Top-left corner
  html += `<div class="cat-corner"></div>`;

  // Column headers (colors)
  CAT_COLORS.forEach((col, ci) => {
    const sepClass = COLOR_TIER_SEP.includes(ci) ? ' style="border-left:1px solid var(--border2);padding-left:8px;"' : '';
    html += `<div class="cat-col-header"${sepClass}>
      <div class="cat-col-dot" style="background:${col.hex};border-radius:50%;width:12px;height:12px;"></div>
      <span>${lang==='zh' ? col.key : col.keyEn}</span>
    </div>`;
  });

  // Rows
  CAT_FLOWERS.forEach((fl, ri) => {
    const rowSep = FLOWER_TIER_SEP.includes(ri) ? 'border-top:1px solid var(--border2);' : '';
    // Row header
    html += `<div class="cat-row-header" style="${rowSep}">${lang==='zh' ? fl.key : fl.keyEn}</div>`;

    // Cells
    // 【图鉴全开开关】将下方 CATALOG_SHOW_ALL 改为 false 可恢复正常（只显示已发现的花）
    const CATALOG_SHOW_ALL = false;
    CAT_COLORS.forEach((col, ci) => {
      const discKey = col.key + '|' + fl.key;
      const isFound = CATALOG_SHOW_ALL || discovered.has(discKey);
      const colSep = COLOR_TIER_SEP.includes(ci) ? 'border-left:1px solid var(--border2);' : '';
      const val = col.coef * fl.coef;

      if (isFound) {
        const name = lang==='zh' ? col.key+fl.key : col.keyEn+' '+fl.keyEn;
        html += `<div class="cat-cell discovered" style="${rowSep}${colSep}"
          onmouseenter="showCatTooltip(event,'${name}',${val})"
          onmouseleave="hideTooltip()">
          ${flowerSVG(fl.svgKey||fl.key, col.hex, 48)}
          <div class="cat-val"><div class="cat-val-coin"></div>${val}</div>
        </div>`;
      } else {
        html += `<div class="cat-cell undiscovered" style="${rowSep}${colSep}"></div>`;
      }
    });
  });

  table.innerHTML = html;
}

function showCatTooltip(event, name, val) {
  document.getElementById('tooltip-content').innerHTML =
    `<div>${name}</div>
     <div class="tooltip-line">${lang==='zh'?'售价':'Value'}: ${val}</div>`;
  document.getElementById('tooltip').classList.add('show');
}

// ═══════════════════════════════════════════════════
// HOME SCREEN
// ═══════════════════════════════════════════════════
let gameStarted = false;
let homeLang = 'zh'; // home screen can toggle lang independently before game starts

function renderHomeFlowers() {
  const wrap = document.getElementById('home-flowers-deco');
  if (!wrap) return;
  // Render a decorative row of sample flowers
  const samples = [
    {flower:'向日葵', hex:'#e67e22'},
    {flower:'矢车菊', hex:'#7d3c98'},
    {flower:'蔷薇',   hex:'#c0392b'},
    {flower:'含羞草', hex:'#27ae60'},
    {flower:'铁线莲', hex:'#2e6da4'},
    {flower:'木兰',   hex:'#d4a017'},
  ];
  wrap.innerHTML = samples.map(s => `
    <div class="home-flower-item">
      ${flowerSVG(s.flower, s.hex, 54)}
    </div>`).join('');
}

function toggleHomeLang() {
  homeLang = homeLang === 'zh' ? 'en' : 'zh';
  lang = homeLang;
  applyHomeLang();
}

function applyHomeLang() {
  const isZh = lang === 'zh';
  document.getElementById('home-lang-label').textContent = isZh ? '中文 ↔ EN' : 'EN ↔ 中文';
  // Update button text based on current lang
  const startBtn = document.getElementById('home-start-btn');
  const contBtn  = document.getElementById('home-continue-btn');
  if (startBtn) startBtn.textContent = isZh ? '开始游戏' : 'New Game';
  if (contBtn)  contBtn.textContent  = isZh ? '继续游戏' : 'Continue';
  // sync settings lang buttons
  document.querySelectorAll('.lang-opt').forEach(b => {
    b.classList.toggle('active', (lang==='zh' && b.textContent==='中文') || (lang==='en' && b.textContent==='English'));
  });
  // sync topbar lang button
  const tlb = document.getElementById('topbar-lang-btn');
  if (tlb) tlb.textContent = getLangBtnLabel();
}

function homeStart() {
  gameStarted = true;
  document.getElementById('home-overlay').classList.add('fade-out');
  setTimeout(() => { document.getElementById('home-overlay').style.display = 'none'; }, 600);
  initGame();
  applyLang();
}

function homeContinue() {
  // Trigger file picker to load a save JSON
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const s = JSON.parse(ev.target.result);
        if (s.lang) lang = s.lang;
        if (s.difficulty) difficulty = s.difficulty;
        if (typeof s.gold === 'number') gold = s.gold;
        if (Array.isArray(s.seeds)) { seeds = s.seeds; nextSeedId = (seeds.reduce((m,x)=>Math.max(m,x.id||0),0))+1; }
        if (Array.isArray(s.plots)) { plots = s.plots; nextPlotId = (plots.reduce((m,x)=>Math.max(m,x.id||0),0))+1; }
        if (Array.isArray(s.storageItems)) { storageItems = s.storageItems; nextStorageId = (storageItems.reduce((m,x)=>Math.max(m,x.id||0),0))+1; }
        if (Array.isArray(s.discovered)) s.discovered.forEach(k => discovered.add(k));
        if (typeof s.nurseryUpgraded === 'boolean') nurseryUpgraded = s.nurseryUpgraded;
        if (typeof s.unlockedHints === 'number') unlockedHints = s.unlockedHints;
        gameStarted = true;
        document.getElementById('home-overlay').classList.add('fade-out');
        setTimeout(() => { document.getElementById('home-overlay').style.display = 'none'; }, 600);
        renderAll(); startAllTimers(); updateShopState(); renderStorage(); renderCatalog(); renderHints(); applyLang();
      } catch(err) {
        alert(lang==='zh' ? '存档文件无效' : 'Invalid save file');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function checkHomeContinue() {
  // Always show continue button — player picks their save file
  document.getElementById('home-continue-btn').style.display = '';
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
// Boot: show home screen (game starts when player presses Start)
checkHomeContinue();
renderHomeFlowers();
applyHomeLang();
