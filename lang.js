// ═══════════════════════════════════════════════════
// MENDEL SIMULATOR — LANGUAGE FILE
// Supported: zh (简体中文), tw (繁體中文), en (English),
//            ru (Русский), pt (Português BR), de (Deutsch),
//            fr (Français), es (Español), ja (日本語), ko (한국어)
// ═══════════════════════════════════════════════════

// ─── Language metadata (for picker UI) ───
const LANG_META = [
  { code:'zh', label:'简体中文',  nativeName:'简体中文' },
  { code:'tw', label:'繁體中文',  nativeName:'繁體中文' },
  { code:'en', label:'English',   nativeName:'English'  },
  { code:'ru', label:'Русский',   nativeName:'Русский'  },
  { code:'pt', label:'Português', nativeName:'Português (BR)' },
  { code:'de', label:'Deutsch',   nativeName:'Deutsch'  },
  { code:'fr', label:'Français',  nativeName:'Français' },
  { code:'es', label:'Español',   nativeName:'Español'  },
  { code:'ja', label:'日本語',    nativeName:'日本語'   },
  { code:'ko', label:'한국어',    nativeName:'한국어'   },
];

// ─── Full i18n table ───
const I18N_ALL = {

  // ── UI strings (used by applyLang / tr) ──
  ui: {
    'seed-bar-title': {
      zh:'种子栏', tw:'種子欄', en:'Seed Tray',
      ru:'Лоток семян', pt:'Bandeja de sementes', de:'Saatgutschale',
      fr:'Tiroir à graines', es:'Bandeja de semillas', ja:'種トレイ', ko:'씨앗 트레이'
    },
    'settings': {
      zh:'设置', tw:'設定', en:'Settings',
      ru:'Настройки', pt:'Configurações', de:'Einstellungen',
      fr:'Paramètres', es:'Ajustes', ja:'設定', ko:'설정'
    },
    'lang': {
      zh:'语言', tw:'語言', en:'Language',
      ru:'Язык', pt:'Idioma', de:'Sprache',
      fr:'Langue', es:'Idioma', ja:'言語', ko:'언어'
    },
    'difficulty': {
      zh:'难度', tw:'難度', en:'Difficulty',
      ru:'Сложность', pt:'Dificuldade', de:'Schwierigkeit',
      fr:'Difficulté', es:'Dificultad', ja:'難易度', ko:'난이도'
    },
    'ref': {
      zh:'参考', tw:'參考', en:'Reference',
      ru:'Справка', pt:'Referência', de:'Referenz',
      fr:'Référence', es:'Referencia', ja:'参考', ko:'참고'
    },
    'diff-easy': {
      zh:'初学者 — 显示基因型与概率', tw:'初學者 — 顯示基因型與概率',
      en:'Easy — show genotype & odds',
      ru:'Легко — показать генотип и шансы', pt:'Fácil — mostrar genótipo e chances',
      de:'Leicht — Genotyp & Chancen anzeigen', fr:'Facile — montrer génotype & chances',
      es:'Fácil — mostrar genotipo y probabilidades', ja:'初心者 — 遺伝子型と確率を表示',
      ko:'쉬움 — 유전자형 및 확률 표시'
    },
    'diff-learner': {
      zh:'进阶 — 显示基因型', tw:'進階 — 顯示基因型',
      en:'Learner — show genotype',
      ru:'Учёба — показать генотип', pt:'Aprendiz — mostrar genótipo',
      de:'Lerner — Genotyp anzeigen', fr:'Apprenti — montrer le génotype',
      es:'Aprendiz — mostrar genotipo', ja:'学習者 — 遺伝子型を表示',
      ko:'학습 — 유전자형 표시'
    },
    'diff-expert': {
      zh:'专家 — 纯观察', tw:'專家 — 純觀察',
      en:'Expert — observe only',
      ru:'Эксперт — только наблюдение', pt:'Especialista — apenas observar',
      de:'Experte — nur beobachten', fr:'Expert — observer seulement',
      es:'Experto — solo observar', ja:'エキスパート — 観察のみ',
      ko:'전문가 — 관찰만'
    },
    'encyc': {
      zh:'遗传学百科', tw:'遺傳學百科',
      en:'Genetics Encyclopedia',
      ru:'Энциклопедия генетики', pt:'Enciclopédia de Genética',
      de:'Genetik-Enzyklopädie', fr:'Encyclopédie de génétique',
      es:'Enciclopedia de genética', ja:'遺伝学百科', ko:'유전학 백과'
    },
    'gold-unit': {
      zh:'金币', tw:'金幣', en:'G',
      ru:'монет', pt:'moedas', de:'Münzen',
      fr:'pièces', es:'monedas', ja:'コイン', ko:'골드'
    },
  },

  // ── Shop strings ──
  shop: {
    upgrades: {
      zh:'升级', tw:'升級', en:'Upgrades',
      ru:'Улучшения', pt:'Melhorias', de:'Upgrades',
      fr:'Améliorations', es:'Mejoras', ja:'アップグレード', ko:'업그레이드'
    },
    boxes: {
      zh:'种子盲盒', tw:'種子盲盒', en:'Blind Boxes',
      ru:'Слепые коробки', pt:'Caixas cegas', de:'Blindboxen',
      fr:'Boîtes surprises', es:'Cajas sorpresa', ja:'シードボックス', ko:'랜덤 박스'
    },
    nurseryName: {
      zh:'苗圃加速', tw:'苗圃加速', en:'Nursery Speed',
      ru:'Ускорение питомника', pt:'Velocidade do viveiro', de:'Baumschule beschleunigen',
      fr:'Accélération pépinière', es:'Velocidad del vivero', ja:'苗床加速', ko:'묘목장 가속'
    },
    nurseryDesc: {
      zh:'生长时间减半', tw:'生長時間減半', en:'Halve all grow times',
      ru:'Вдвое сократить время роста', pt:'Reduzir tempo de crescimento à metade',
      de:'Wachstumszeit halbieren', fr:'Réduire le temps de croissance de moitié',
      es:'Reducir tiempo de crecimiento a la mitad', ja:'成長時間を半分に', ko:'성장 시간 절반'
    },
    bronzeName: {
      zh:'初级盲盒', tw:'初級盲盒', en:'Basic Box',
      ru:'Базовая коробка', pt:'Caixa básica', de:'Basis-Box',
      fr:'Boîte basique', es:'Caja básica', ja:'ベーシックボックス', ko:'기본 박스'
    },
    silverName: {
      zh:'中级盲盒', tw:'中級盲盒', en:'Mid Box',
      ru:'Средняя коробка', pt:'Caixa média', de:'Mittel-Box',
      fr:'Boîte intermédiaire', es:'Caja media', ja:'ミドルボックス', ko:'중급 박스'
    },
    goldName: {
      zh:'高级盲盒', tw:'高級盲盒', en:'Advanced Box',
      ru:'Продвинутая коробка', pt:'Caixa avançada', de:'Profi-Box',
      fr:'Boîte avancée', es:'Caja avanzada', ja:'アドバンスボックス', ko:'고급 박스'
    },
    bronzeDesc: {
      zh:'开局即可购买，基础遗传探索', tw:'開局即可購買，基礎遺傳探索',
      en:'Available from the start, basic genetics',
      ru:'Доступна с начала, базовая генетика', pt:'Disponível no início, genética básica',
      de:'Von Beginn an verfügbar, Grundgenetik', fr:'Disponible dès le départ, génétique de base',
      es:'Disponible desde el inicio, genética básica', ja:'最初から購入可能、基本遺伝学',
      ko:'처음부터 구매 가능, 기본 유전학'
    },
    silverDesc: {
      zh:'稀有隐性组合，繁育潜力强', tw:'稀有隱性組合，繁育潛力強',
      en:'Rare recessives, strong breeding potential',
      ru:'Редкие рецессивные, высокий потенциал', pt:'Recessivos raros, grande potencial',
      de:'Seltene Rezessive, starkes Zuchtpotenzial', fr:'Récessifs rares, fort potentiel de croisement',
      es:'Recesivos raros, gran potencial de cría', ja:'希少劣性、強い育種ポテンシャル',
      ko:'희귀 열성, 강한 번식 가능성'
    },
    goldDesc: {
      zh:'顶级隐性基因，传说级繁育基础', tw:'頂級隱性基因，傳說級繁育基礎',
      en:'Top-tier recessives, legendary breeding',
      ru:'Высшие рецессивные, легендарное разведение', pt:'Recessivos de alto nível, criação lendária',
      de:'Erstklassige Rezessive, legendäre Zucht', fr:'Récessifs haut de gamme, élevage légendaire',
      es:'Recesivos de alto nivel, cría legendaria', ja:'最高級劣性、伝説的な育種',
      ko:'최고급 열성, 전설적인 번식'
    },
    silverLock: {
      zh:'解锁20种花后开放', tw:'解鎖20種花後開放', en:'Unlock 20 flower types first',
      ru:'Откройте 20 видов цветов', pt:'Desbloqueie 20 tipos de flores primeiro',
      de:'Erst 20 Blumenarten freischalten', fr:'Débloquer 20 types de fleurs d\'abord',
      es:'Desbloquea 20 tipos de flores primero', ja:'先に20種類の花を解放', ko:'꽃 20종 해금 후 개방'
    },
    goldLock: {
      zh:'解锁50种花后开放', tw:'解鎖50種花後開放', en:'Unlock 50 flower types first',
      ru:'Откройте 50 видов цветов', pt:'Desbloqueie 50 tipos de flores primeiro',
      de:'Erst 50 Blumenarten freischalten', fr:'Débloquer 50 types de fleurs d\'abord',
      es:'Desbloquea 50 tipos de flores primero', ja:'先に50種類の花を解放', ko:'꽃 50종 해금 후 개방'
    },
    buy: {
      zh:'购买', tw:'購買', en:'Buy',
      ru:'Купить', pt:'Comprar', de:'Kaufen',
      fr:'Acheter', es:'Comprar', ja:'購入', ko:'구매'
    },
    upgraded: {
      zh:'已升级', tw:'已升級', en:'Upgraded',
      ru:'Улучшено', pt:'Melhorado', de:'Verbessert',
      fr:'Amélioré', es:'Mejorado', ja:'アップグレード済み', ko:'업그레이드됨'
    },
    upgradeSuccess: {
      zh:'苗圃已升级！生长时间减半', tw:'苗圃已升級！生長時間減半',
      en:'Nursery upgraded! Growth time halved.',
      ru:'Питомник улучшен! Время роста вдвое меньше.', pt:'Viveiro melhorado! Tempo de crescimento reduzido.',
      de:'Baumschule verbessert! Wachstumszeit halbiert.', fr:'Pépinière améliorée ! Temps de croissance réduit de moitié.',
      es:'¡Vivero mejorado! Tiempo de crecimiento reducido.', ja:'苗床がアップグレードされました！成長時間が半分に。',
      ko:'묘목장이 업그레이드되었습니다! 성장 시간 절반.'
    },
    seedAdded: {
      zh:'已获得 1 颗种子', tw:'已獲得 1 顆種子', en:'1 seed added to tray',
      ru:'1 семя добавлено', pt:'1 semente adicionada', de:'1 Samen hinzugefügt',
      fr:'1 graine ajoutée', es:'1 semilla añadida', ja:'種が1つ追加されました', ko:'씨앗 1개 추가됨'
    },
    boxBasic: {
      zh:'初级盲盒', tw:'初級盲盒', en:'Basic Box',
      ru:'Базовая коробка', pt:'Caixa básica', de:'Basis-Box',
      fr:'Boîte basique', es:'Caja básica', ja:'ベーシックボックス', ko:'기본 박스'
    },
    boxMid: {
      zh:'中级盲盒', tw:'中級盲盒', en:'Mid Box',
      ru:'Средняя коробка', pt:'Caixa média', de:'Mittel-Box',
      fr:'Boîte intermédiaire', es:'Caja media', ja:'ミドルボックス', ko:'중급 박스'
    },
    boxAdv: {
      zh:'高级盲盒', tw:'高級盲盒', en:'Advanced Box',
      ru:'Продвинутая коробка', pt:'Caixa avançada', de:'Profi-Box',
      fr:'Boîte avancée', es:'Caja avanzada', ja:'アドバンスボックス', ko:'고급 박스'
    },
  },

  // ── Odds labels ──
  odds: {
    'bronze-odds-1': {
      zh:'1-2个隐性等位基因 80%', tw:'1-2個隱性等位基因 80%', en:'1-2 rec. alleles 80%',
      ru:'1-2 рецессивных аллеля 80%', pt:'1-2 alelos rec. 80%', de:'1-2 rez. Allele 80%',
      fr:'1-2 allèles réc. 80%', es:'1-2 alelos rec. 80%', ja:'劣性対立遺伝子1-2個 80%', ko:'열성 대립유전자 1-2개 80%'
    },
    'bronze-odds-2': {
      zh:'3个隐性等位基因 20%', tw:'3個隱性等位基因 20%', en:'3 rec. alleles 20%',
      ru:'3 рецессивных аллеля 20%', pt:'3 alelos rec. 20%', de:'3 rez. Allele 20%',
      fr:'3 allèles réc. 20%', es:'3 alelos rec. 20%', ja:'劣性対立遺伝子3個 20%', ko:'열성 대립유전자 3개 20%'
    },
    'silver-odds-1': {
      zh:'3个隐性等位基因 70%', tw:'3個隱性等位基因 70%', en:'3 rec. alleles 70%',
      ru:'3 рецессивных аллеля 70%', pt:'3 alelos rec. 70%', de:'3 rez. Allele 70%',
      fr:'3 allèles réc. 70%', es:'3 alelos rec. 70%', ja:'劣性対立遺伝子3個 70%', ko:'열성 대립유전자 3개 70%'
    },
    'silver-odds-2': {
      zh:'4个隐性等位基因 25%', tw:'4個隱性等位基因 25%', en:'4 rec. alleles 25%',
      ru:'4 рецессивных аллеля 25%', pt:'4 alelos rec. 25%', de:'4 rez. Allele 25%',
      fr:'4 allèles réc. 25%', es:'4 alelos rec. 25%', ja:'劣性対立遺伝子4個 25%', ko:'열성 대립유전자 4개 25%'
    },
    'silver-odds-3': {
      zh:'5个隐性等位基因 5%', tw:'5個隱性等位基因 5%', en:'5 rec. alleles 5%',
      ru:'5 рецессивных аллелей 5%', pt:'5 alelos rec. 5%', de:'5 rez. Allele 5%',
      fr:'5 allèles réc. 5%', es:'5 alelos rec. 5%', ja:'劣性対立遺伝子5個 5%', ko:'열성 대립유전자 5개 5%'
    },
    'gold-odds-1': {
      zh:'5个隐性等位基因 60%', tw:'5個隱性等位基因 60%', en:'5 rec. alleles 60%',
      ru:'5 рецессивных аллелей 60%', pt:'5 alelos rec. 60%', de:'5 rez. Allele 60%',
      fr:'5 allèles réc. 60%', es:'5 alelos rec. 60%', ja:'劣性対立遺伝子5個 60%', ko:'열성 대립유전자 5개 60%'
    },
    'gold-odds-2': {
      zh:'6-7个隐性等位基因 35%', tw:'6-7個隱性等位基因 35%', en:'6-7 rec. alleles 35%',
      ru:'6-7 рецессивных аллелей 35%', pt:'6-7 alelos rec. 35%', de:'6-7 rez. Allele 35%',
      fr:'6-7 allèles réc. 35%', es:'6-7 alelos rec. 35%', ja:'劣性対立遺伝子6-7個 35%', ko:'열성 대립유전자 6-7개 35%'
    },
    'gold-odds-3': {
      zh:'8个隐性等位基因 5%', tw:'8個隱性等位基因 5%', en:'8 rec. alleles 5%',
      ru:'8 рецессивных аллелей 5%', pt:'8 alelos rec. 5%', de:'8 rez. Allele 5%',
      fr:'8 allèles réc. 5%', es:'8 alelos rec. 5%', ja:'劣性対立遺伝子8個 5%', ko:'열성 대립유전자 8개 5%'
    },
  },

  // ── Tab labels ──
  tabs: {
    shop:    { zh:'商店', tw:'商店', en:'Shop',    ru:'Магазин', pt:'Loja',    de:'Shop',    fr:'Boutique', es:'Tienda',  ja:'ショップ', ko:'상점'   },
    nursery: { zh:'苗圃', tw:'苗圃', en:'Nursery', ru:'Питомник',pt:'Viveiro', de:'Baumschule',fr:'Pépinière',es:'Vivero', ja:'苗床',   ko:'묘목장'  },
    storage: { zh:'仓库', tw:'倉庫', en:'Storage', ru:'Склад',   pt:'Armazém', de:'Lager',   fr:'Entrepôt', es:'Almacén',  ja:'倉庫',   ko:'창고'   },
    catalog: { zh:'图鉴', tw:'圖鑑', en:'Catalog', ru:'Каталог', pt:'Catálogo',de:'Katalog', fr:'Catalogue',es:'Catálogo', ja:'図鑑',   ko:'도감'   },
    hints:   { zh:'提示', tw:'提示', en:'Hints',   ru:'Подсказки',pt:'Dicas',  de:'Hinweise', fr:'Indices',  es:'Pistas',  ja:'ヒント', ko:'힌트'   },
  },

  // ── Nursery / plot strings ──
  nursery: {
    growing: {
      zh:'生长中', tw:'生長中', en:'Growing',
      ru:'Растёт', pt:'Crescendo', de:'Wächst',
      fr:'En croissance', es:'Creciendo', ja:'成長中', ko:'성장 중'
    },
    discard: {
      zh:'丢弃', tw:'丟棄', en:'Discard',
      ru:'Выбросить', pt:'Descartar', de:'Verwerfen',
      fr:'Supprimer', es:'Descartar', ja:'破棄', ko:'버리기'
    },
    breed: {
      zh:'配种', tw:'配種', en:'Breed',
      ru:'Скрестить', pt:'Cruzar', de:'Kreuzen',
      fr:'Croiser', es:'Cruzar', ja:'交配', ko:'교배'
    },
    self: {
      zh:'自授粉', tw:'自授粉', en:'Self',
      ru:'Самоопыление', pt:'Auto-polinizar', de:'Selbstbest.',
      fr:'Auto-féconder', es:'Auto-polinizar', ja:'自家受粉', ko:'자가수분'
    },
    harvest: {
      zh:'收获', tw:'收穫', en:'Harvest',
      ru:'Собрать', pt:'Colher', de:'Ernten',
      fr:'Récolter', es:'Cosechar', ja:'収穫', ko:'수확'
    },
    breedCount: {
      zh:'配种', tw:'配種', en:'Bred',
      ru:'Скрещ.', pt:'Cruzado', de:'Gekreuzt',
      fr:'Croisé', es:'Cruzado', ja:'交配', ko:'교배'
    },
    selfDone: {
      zh:'已自交', tw:'已自交', en:'Self ✓',
      ru:'Самооп. ✓', pt:'Auto ✓', de:'Selbst ✓',
      fr:'Auto ✓', es:'Auto ✓', ja:'自交 ✓', ko:'자교 ✓'
    },
    motherLabel: {
      zh:'母本', tw:'母本', en:'♀',
      ru:'♀', pt:'♀', de:'♀', fr:'♀', es:'♀', ja:'♀', ko:'♀'
    },
    fatherLabel: {
      zh:'父本', tw:'父本', en:'♂',
      ru:'♂', pt:'♂', de:'♂', fr:'♂', es:'♂', ja:'♂', ko:'♂'
    },
    moreFlowers: {
      zh:'再发现', tw:'再發現', en:'more flowers to unlock',
      ru:'ещё цветков для разблокировки', pt:'mais flores para desbloquear',
      de:'weitere Blumen zum Freischalten', fr:'flores de plus pour débloquer',
      es:'flores más para desbloquear', ja:'もっと花を発見して解放', ko:'개 더 발견 후 해금'
    },
    plotUnlocked: {
      zh:'苗圃新田块已解锁！', tw:'苗圃新田塊已解鎖！', en:'New plot unlocked!',
      ru:'Новая грядка открыта!', pt:'Nova parcela desbloqueada!', de:'Neues Feld freigeschaltet!',
      fr:'Nouvelle parcelle débloquée !', es:'¡Nueva parcela desbloqueada!', ja:'新しい区画が解放されました！',
      ko:'새 구역이 해금되었습니다!'
    },
    selfOnceOnly: {
      zh:'每株只能自交一次', tw:'每株只能自交一次', en:'Self-pollination allowed once per plant',
      ru:'Самоопыление разрешено один раз', pt:'Auto-polinização permitida uma vez por planta',
      de:'Selbstbestäubung nur einmal erlaubt', fr:'Auto-fécondation permise une fois par plante',
      es:'Auto-polinización permitida una vez por planta', ja:'自家受粉は1株につき1回のみ',
      ko:'자가수분은 식물당 한 번만 허용'
    },
    addedToStorage: {
      zh:'已加入仓库', tw:'已加入倉庫', en:'Added to storage',
      ru:'Добавлено на склад', pt:'Adicionado ao armazém', de:'Zum Lager hinzugefügt',
      fr:'Ajouté à l\'entrepôt', es:'Añadido al almacén', ja:'倉庫に追加されました', ko:'창고에 추가됨'
    },
    renderError: {
      zh:'渲染错误', tw:'渲染錯誤', en:'Render error',
      ru:'Ошибка рендеринга', pt:'Erro de renderização', de:'Renderfehler',
      fr:'Erreur de rendu', es:'Error de renderizado', ja:'レンダリングエラー', ko:'렌더 오류'
    },
    noSeeds: {
      zh:'暂无种子 — 前往商店购买盲盒', tw:'暫無種子 — 前往商店購買盲盒',
      en:'No seeds — visit Shop to buy blind boxes',
      ru:'Нет семян — посетите магазин', pt:'Sem sementes — visite a loja',
      de:'Keine Samen — Shop besuchen', fr:'Pas de graines — visitez la boutique',
      es:'Sin semillas — visita la tienda', ja:'種がありません — ショップで購入',
      ko:'씨앗 없음 — 상점에서 구매하세요'
    },
    selectSeedHint: {
      zh:'← 选择种子，点击空槽种植', tw:'← 選擇種子，點擊空槽種植',
      en:'← Select seed, click empty plot',
      ru:'← Выберите семя, нажмите пустую грядку', pt:'← Selecione semente, clique na parcela vazia',
      de:'← Samen wählen, leeres Feld klicken', fr:'← Choisir graine, cliquer emplacement vide',
      es:'← Selecciona semilla, haz clic en parcela vacía', ja:'← 種を選択して空区画をクリック',
      ko:'← 씨앗 선택 후 빈 구역 클릭'
    },
    seedCount: {
      zh:'颗', tw:'顆', en:'seeds',
      ru:'шт.', pt:'sementes', de:'Samen',
      fr:'graines', es:'semillas', ja:'個', ko:'개'
    },
    sellOne: {
      zh:'卖1颗', tw:'賣1顆', en:'Sell 1',
      ru:'Продать 1', pt:'Vender 1', de:'1 verkaufen',
      fr:'Vendre 1', es:'Vender 1', ja:'1個売る', ko:'1개 팔기'
    },
    sellAll: {
      zh:'全卖', tw:'全賣', en:'Sell all',
      ru:'Продать все', pt:'Vender tudo', de:'Alle verkaufen',
      fr:'Tout vendre', es:'Vender todo', ja:'全部売る', ko:'전부 팔기'
    },
  },

  // ── Popup ──
  popup: {
    confirmBreed: {
      zh:'确认配种', tw:'確認配種', en:'Confirm Breeding',
      ru:'Подтвердить скрещивание', pt:'Confirmar cruzamento', de:'Kreuzung bestätigen',
      fr:'Confirmer le croisement', es:'Confirmar cruce', ja:'交配を確認', ko:'교배 확인'
    },
    confirmSelf: {
      zh:'确认自授粉', tw:'確認自授粉', en:'Confirm Self-Pollination',
      ru:'Подтвердить самоопыление', pt:'Confirmar auto-polinização', de:'Selbstbestäubung bestätigen',
      fr:'Confirmer l\'auto-fécondation', es:'Confirmar auto-polinización', ja:'自家受粉を確認',
      ko:'자가수분 확인'
    },
    selfLabel: {
      zh:'（自身）', tw:'（自身）', en:'(Self)',
      ru:'(Само)', pt:'(Própria)', de:'(Selbst)',
      fr:'(Soi-même)', es:'(Misma)', ja:'（自身）', ko:'(자신)'
    },
    bodyText: {
      zh:'将产生 3–5 颗种子加入种子栏。配种次数 +1（每株最多 3 次）。',
      tw:'將產生 3–5 顆種子加入種子欄。配種次數 +1（每株最多 3 次）。',
      en:'Will produce 3–5 seeds. Breed count +1 (max 3 per plant).',
      ru:'Даст 3–5 семян. Счётчик скрещиваний +1 (макс. 3 на растение).',
      pt:'Produzirá 3–5 sementes. Contagem +1 (máx. 3 por planta).',
      de:'Erzeugt 3–5 Samen. Kreuzungszähler +1 (max. 3 pro Pflanze).',
      fr:'Produira 3–5 graines. Compteur +1 (max. 3 par plante).',
      es:'Producirá 3–5 semillas. Contador +1 (máx. 3 por planta).',
      ja:'種を3〜5個生産します。交配カウント+1（1株最大3回）。',
      ko:'씨앗 3~5개 생산. 교배 횟수 +1 (식물당 최대 3회).'
    },
    cancel: {
      zh:'取消', tw:'取消', en:'Cancel',
      ru:'Отмена', pt:'Cancelar', de:'Abbrechen',
      fr:'Annuler', es:'Cancelar', ja:'キャンセル', ko:'취소'
    },
    breed: {
      zh:'配种', tw:'配種', en:'Breed',
      ru:'Скрестить', pt:'Cruzar', de:'Kreuzen',
      fr:'Croiser', es:'Cruzar', ja:'交配', ko:'교배'
    },
    prediction: {
      zh:'后代预测', tw:'後代預測', en:'Offspring Prediction',
      ru:'Прогноз потомства', pt:'Previsão de descendência', de:'Nachkommenvorhersage',
      fr:'Prédiction de la descendance', es:'Predicción de descendencia', ja:'子孫予測', ko:'후손 예측'
    },
    predSelf: {
      zh:'（自身）', tw:'（自身）', en:'Self',
      ru:'Само', pt:'Própria', de:'Selbst',
      fr:'Soi-même', es:'Misma', ja:'自身', ko:'자신'
    },
    predOther: {
      zh:'其他', tw:'其他', en:'Other',
      ru:'Другие', pt:'Outros', de:'Andere',
      fr:'Autres', es:'Otros', ja:'その他', ko:'기타'
    },
  },

  // ── Storage ──
  storage: {
    flowers: {
      zh:'株', tw:'株', en:'flowers',
      ru:'цветков', pt:'flores', de:'Blumen',
      fr:'fleurs', es:'flores', ja:'株', ko:'주'
    },
    sellAll: {
      zh:'全部出售', tw:'全部出售', en:'Sell All',
      ru:'Продать всё', pt:'Vender tudo', de:'Alle verkaufen',
      fr:'Tout vendre', es:'Vender todo', ja:'全部売る', ko:'전부 팔기'
    },
    favorites: {
      zh:'收藏', tw:'收藏', en:'Favorites',
      ru:'Избранное', pt:'Favoritos', de:'Favoriten',
      fr:'Favoris', es:'Favoritos', ja:'お気に入り', ko:'즐겨찾기'
    },
    noFavorites: {
      zh:'暂无收藏', tw:'暫無收藏', en:'No favorites yet',
      ru:'Пока нет избранного', pt:'Sem favoritos ainda', de:'Noch keine Favoriten',
      fr:'Pas encore de favoris', es:'Sin favoritos aún', ja:'お気に入りなし', ko:'즐겨찾기 없음'
    },
    emptyMain: {
      zh:'仓库空空如也', tw:'倉庫空空如也', en:'Storage is empty',
      ru:'Склад пуст', pt:'Armazém vazio', de:'Lager ist leer',
      fr:'L\'entrepôt est vide', es:'El almacén está vacío', ja:'倉庫が空です', ko:'창고가 비어 있습니다'
    },
    emptySub: {
      zh:'收获苗圃中的花卉加入仓库', tw:'收穫苗圃中的花卉加入倉庫',
      en:'Harvest flowers from the nursery',
      ru:'Соберите цветы в питомнике', pt:'Colha flores do viveiro',
      de:'Blumen aus der Baumschule ernten', fr:'Récoltez des fleurs de la pépinière',
      es:'Cosecha flores del vivero', ja:'苗床から花を収穫してください', ko:'묘목장에서 꽃을 수확하세요'
    },
    sell: {
      zh:'出售', tw:'出售', en:'Sell',
      ru:'Продать', pt:'Vender', de:'Verkaufen',
      fr:'Vendre', es:'Vender', ja:'売る', ko:'팔기'
    },
    fav: {
      zh:'收藏', tw:'收藏', en:'Fav',
      ru:'Избр.', pt:'Fav.', de:'Fav.',
      fr:'Fav.', es:'Fav.', ja:'お気に入り', ko:'즐겨찾기'
    },
    tapToUnpin: {
      zh:'点击返回仓库', tw:'點擊返回倉庫', en:'Tap to unpin',
      ru:'Нажмите для открепления', pt:'Toque para desafixar', de:'Zum Lösen tippen',
      fr:'Appuyer pour désépingler', es:'Toca para desanclar', ja:'タップして外す', ko:'탭하여 고정 해제'
    },
    filterAll:    { zh:'全部', tw:'全部', en:'All',    ru:'Все',    pt:'Tudo',   de:'Alle',  fr:'Tout',   es:'Todo',    ja:'全て',   ko:'전체'   },
    filterCommon: { zh:'普通', tw:'普通', en:'Common', ru:'Обычн.', pt:'Comum',  de:'Norm.',  fr:'Commun', es:'Común',   ja:'普通',   ko:'일반'   },
    filterRare:   { zh:'稀有', tw:'稀有', en:'Rare',   ru:'Редкий', pt:'Raro',   de:'Selten', fr:'Rare',   es:'Raro',    ja:'レア',   ko:'레어'   },
    filterEpic:   { zh:'史诗', tw:'史詩', en:'Epic',   ru:'Эпич.',  pt:'Épico',  de:'Episch', fr:'Épique', es:'Épico',   ja:'エピック',ko:'에픽'   },
    filterLegend: { zh:'传说', tw:'傳說', en:'Legend', ru:'Легенд.',pt:'Lenda',  de:'Legende',fr:'Légende',es:'Leyenda', ja:'伝説',   ko:'전설'   },
  },

  // ── Catalog ──
  catalog: {
    discovered: {
      zh:'已发现', tw:'已發現', en:'Discovered',
      ru:'Открыто', pt:'Descoberto', de:'Entdeckt',
      fr:'Découvert', es:'Descubierto', ja:'発見', ko:'발견'
    },
    species: {
      zh:'种', tw:'種', en:'types',
      ru:'видов', pt:'tipos', de:'Arten',
      fr:'types', es:'tipos', ja:'種', ko:'종'
    },
    value: {
      zh:'售价', tw:'售價', en:'Value',
      ru:'Цена', pt:'Valor', de:'Wert',
      fr:'Valeur', es:'Valor', ja:'売価', ko:'가치'
    },
    unlockHint: {
      zh:'收入仓库后解锁图鉴', tw:'收入倉庫後解鎖圖鑑',
      en:'Store flowers to unlock entries',
      ru:'Сохраните цветы для открытия записей',
      pt:'Armazene flores para desbloquear entradas',
      de:'Blumen einlagern um Einträge freizuschalten',
      fr:'Rangez des fleurs pour débloquer les entrées',
      es:'Almacena flores para desbloquear entradas',
      ja:'花を保管して図鑑を解放', ko:'꽃을 창고에 넣으면 도감이 해금됩니다'
    },
    wikiCol: {
      zh:'简介', tw:'簡介', en:'About',
      ru:'Справка', pt:'Sobre', de:'Info',
      fr:'À propos', es:'Acerca de', ja:'解説', ko:'소개'
    },
  },

  // ── Hints ──
  hints: {
    unlocked: {
      zh:'已解锁', tw:'已解鎖', en:'Hints unlocked:',
      ru:'Подсказок открыто:', pt:'Dicas desbloqueadas:', de:'Hinweise freigeschaltet:',
      fr:'Indices débloqués :', es:'Pistas desbloqueadas:', ja:'解放済みヒント:', ko:'힌트 해금:'
    },
    hints: {
      zh:'条提示', tw:'條提示', en:'',
      ru:'', pt:'', de:'',
      fr:'', es:'', ja:'', ko:''
    },
    every5: {
      zh:'每解锁5种花获得一条提示', tw:'每解鎖5種花獲得一條提示',
      en:'Unlock a hint every 5 flower types discovered',
      ru:'Подсказка за каждые 5 видов цветов', pt:'Uma dica a cada 5 tipos de flores descobertos',
      de:'Ein Hinweis für je 5 entdeckte Blumenarten', fr:'Un indice tous les 5 types de fleurs découverts',
      es:'Una pista por cada 5 tipos de flores descubiertos', ja:'5種の花ごとにヒントを1つ解放',
      ko:'꽃 5종 발견마다 힌트 1개 해금'
    },
    hintUnlocked: {
      zh:'已解锁', tw:'已解鎖', en:'Unlocked',
      ru:'Открыто', pt:'Desbloqueado', de:'Freigeschaltet',
      fr:'Débloqué', es:'Desbloqueado', ja:'解放済み', ko:'해금됨'
    },
    hintFlowerTypes: {
      zh:'种花，获得提示：', tw:'種花，獲得提示：',
      en:'flower types — Hint:',
      ru:'видов цветов — Подсказка:', pt:'tipos de flores — Dica:',
      de:'Blumenarten — Hinweis:', fr:'types de fleurs — Indice :',
      es:'tipos de flores — Pista:', ja:'種の花 — ヒント:', ko:'종 꽃 — 힌트:'
    },
  },

  // ── Hints content (the actual genetics hints) ──
  hintsContent: [
    {
      zh:'基因ABC控制的是花的颜色', tw:'基因ABC控制的是花的顏色',
      en:'Genes ABC control flower color',
      ru:'Гены ABC управляют цветом цветка', pt:'Genes ABC controlam a cor da flor',
      de:'Gene ABC steuern die Blütenfarbe', fr:'Les gènes ABC contrôlent la couleur des fleurs',
      es:'Los genes ABC controlan el color de la flor', ja:'遺伝子ABCが花の色を制御する', ko:'유전자 ABC는 꽃의 색을 제어합니다'
    },
    {
      zh:'基因DE控制的是花瓣的数量', tw:'基因DE控制的是花瓣的數量',
      en:'Genes DE control petal count',
      ru:'Гены DE управляют количеством лепестков', pt:'Genes DE controlam o número de pétalas',
      de:'Gene DE steuern die Anzahl der Blütenblätter', fr:'Les gènes DE contrôlent le nombre de pétales',
      es:'Los genes DE controlan el número de pétalos', ja:'遺伝子DEが花びらの数を制御する', ko:'유전자 DE는 꽃잎 수를 제어합니다'
    },
    {
      zh:'基因A控制红色', tw:'基因A控制紅色',
      en:'Gene A controls red color',
      ru:'Ген A управляет красным цветом', pt:'Gene A controla a cor vermelha',
      de:'Gen A steuert die rote Farbe', fr:'Le gène A contrôle la couleur rouge',
      es:'El gen A controla el color rojo', ja:'遺伝子Aが赤色を制御する', ko:'유전자 A는 빨간색을 제어합니다'
    },
    {
      zh:'基因B控制黄色', tw:'基因B控制黃色',
      en:'Gene B controls yellow color',
      ru:'Ген B управляет жёлтым цветом', pt:'Gene B controla a cor amarela',
      de:'Gen B steuert die gelbe Farbe', fr:'Le gène B contrôle la couleur jaune',
      es:'El gen B controla el color amarillo', ja:'遺伝子Bが黄色を制御する', ko:'유전자 B는 노란색을 제어합니다'
    },
    {
      zh:'基因C控制蓝色', tw:'基因C控制藍色',
      en:'Gene C controls blue color',
      ru:'Ген C управляет синим цветом', pt:'Gene C controla a cor azul',
      de:'Gen C steuert die blaue Farbe', fr:'Le gène C contrôle la couleur bleue',
      es:'El gen C controla el color azul', ja:'遺伝子Cが青色を制御する', ko:'유전자 C는 파란색을 제어합니다'
    },
    {
      zh:'基因T控制瓣尖的形状', tw:'基因T控制瓣尖的形狀',
      en:'Gene T controls petal tip shape',
      ru:'Ген T управляет формой кончика лепестка', pt:'Gene T controla a forma da ponta da pétala',
      de:'Gen T steuert die Form der Blütenblattspitze', fr:'Le gène T contrôle la forme de la pointe du pétale',
      es:'El gen T controla la forma de la punta del pétalo', ja:'遺伝子Tが花びらの先端形状を制御する', ko:'유전자 T는 꽃잎 끝 모양을 제어합니다'
    },
  ],

  // ── Rarity labels ──
  rarity: {
    common: { zh:'普通', tw:'普通', en:'Common', ru:'Обычный', pt:'Comum', de:'Gewöhnlich', fr:'Commun', es:'Común', ja:'普通', ko:'일반' },
    rare:   { zh:'稀有', tw:'稀有', en:'Rare',   ru:'Редкий',  pt:'Raro',  de:'Selten',    fr:'Rare',   es:'Raro',  ja:'レア', ko:'레어' },
    epic:   { zh:'史诗', tw:'史詩', en:'Epic',   ru:'Эпический',pt:'Épico',de:'Episch',    fr:'Épique', es:'Épico', ja:'エピック', ko:'에픽' },
    legend: { zh:'传说', tw:'傳說', en:'Legend', ru:'Легендарный',pt:'Lendário',de:'Legendär',fr:'Légendaire',es:'Legendario',ja:'伝説', ko:'전설' },
  },

  // ── Tooltip / misc ──
  misc: {
    source: { zh:'来源', tw:'來源', en:'Source', ru:'Источник', pt:'Fonte', de:'Quelle', fr:'Source', es:'Fuente', ja:'出所', ko:'출처' },
    from:   { zh:'来自', tw:'來自', en:'From',   ru:'Откуда',  pt:'De',    de:'Von',    fr:'De',     es:'De',     ja:'から', ko:'출처' },
    count:  { zh:'数量', tw:'數量', en:'Count',  ru:'Кол-во',  pt:'Qtd.',  de:'Anzahl', fr:'Nombre', es:'Cantidad', ja:'数量', ko:'수량' },
    unknownUntilGrown: {
      zh:'种出来才知道什么花', tw:'種出來才知道什麼花',
      en:'Unknown until grown',
      ru:'Неизвестно до прорастания', pt:'Desconhecido até crescer', de:'Unbekannt bis zum Wachsen',
      fr:'Inconnu jusqu\'à la pousse', es:'Desconocido hasta que crezca', ja:'育てるまで不明', ko:'자라야 알 수 있음'
    },
    value: { zh:'售价', tw:'售價', en:'Value', ru:'Цена', pt:'Valor', de:'Wert', fr:'Valeur', es:'Valor', ja:'価値', ko:'가치' },
    saveOk: {
      zh:'存档已保存 ✓', tw:'存檔已儲存 ✓', en:'Game saved ✓',
      ru:'Игра сохранена ✓', pt:'Jogo salvo ✓', de:'Spiel gespeichert ✓',
      fr:'Jeu sauvegardé ✓', es:'Partida guardada ✓', ja:'ゲームを保存しました ✓', ko:'게임 저장됨 ✓'
    },
    saveFail: {
      zh:'保存失败', tw:'儲存失敗', en:'Save failed',
      ru:'Ошибка сохранения', pt:'Falha ao salvar', de:'Speichern fehlgeschlagen',
      fr:'Échec de la sauvegarde', es:'Error al guardar', ja:'保存に失敗しました', ko:'저장 실패'
    },
    loadFail: {
      zh:'存档文件无效', tw:'存檔文件無效', en:'Invalid save file',
      ru:'Неверный файл сохранения', pt:'Arquivo de save inválido', de:'Ungültige Speicherdatei',
      fr:'Fichier de sauvegarde invalide', es:'Archivo de guardado inválido', ja:'無効なセーブファイル', ko:'유효하지 않은 저장 파일'
    },
  },

  // ── Home screen ──
  home: {
    newGame: {
      zh:'开始游戏', tw:'開始遊戲', en:'New Game',
      ru:'Новая игра', pt:'Novo jogo', de:'Neues Spiel',
      fr:'Nouvelle partie', es:'Nueva partida', ja:'新しいゲーム', ko:'새 게임'
    },
    continue: {
      zh:'继续游戏', tw:'繼續遊戲', en:'Continue',
      ru:'Продолжить', pt:'Continuar', de:'Weiter',
      fr:'Continuer', es:'Continuar', ja:'続ける', ko:'계속하기'
    },
    titleZh: {
      zh:'孟德尔模拟器', tw:'孟德爾模擬器', en:'Mendel Simulator',
      ru:'Симулятор Менделя', pt:'Simulador Mendel', de:'Mendel-Simulator',
      fr:'Simulateur Mendel', es:'Simulador Mendel', ja:'メンデルシミュレーター', ko:'멘델 시뮬레이터'
    },
    subtitleFlower: {
      zh:'花卉杂交', tw:'花卉雜交', en:'Flower Crossbreeding',
      ru:'Скрещивание цветов', pt:'Cruzamento de flores', de:'Blumenkreuzung',
      fr:'Croisement de fleurs', es:'Cruce de flores', ja:'花の交配', ko:'꽃 교배'
    },
  },

  // ── Flower names (all 12 types, both scripts) ──
  flowers: {
    '虞美人': { tw:'虞美人', en:'Poppy',       ru:'Мак',         pt:'Papoula',    de:'Klatschmohn',  fr:'Coquelicot',    es:'Amapola',     ja:'ヒナゲシ', ko:'양귀비'    },
    '水仙': { tw:'水仙', en:'Daffodil', ru:'Нарцисс', pt:'Narciso', de:'Narzisse', fr:'Narcisse', es:'Narciso', ja:'スイセン', ko:'수선화' },
    '木兰':   { tw:'木蘭',   en:'Magnolia',    ru:'Магнолия',    pt:'Magnólia',   de:'Magnolie',     fr:'Magnolia',      es:'Magnolia',    ja:'モクレン',  ko:'목련'      },
    '铁线莲': { tw:'鐵線蓮', en:'Clematis',    ru:'Клематис',    pt:'Clemátide',  de:'Waldrebe',     fr:'Clématite',     es:'Clemátide',   ja:'クレマチス',ko:'클레마티스' },
    '康乃馨': { tw:'康乃馨', en:'Carnation',   ru:'Гвоздика',    pt:'Cravo',      de:'Nelke',        fr:'Œillet',        es:'Clavel',      ja:'カーネーション',ko:'카네이션' },
    '矢车菊': { tw:'矢車菊', en:'Cornflower',  ru:'Василёк',     pt:'Centáurea',  de:'Kornblume',    fr:'Bleuet',        es:'Aciano',      ja:'ヤグルマギク',ko:'수레국화'  },
    '非洲菊': { tw:'非洲菊', en:'Gerbera',     ru:'Гербера',     pt:'Gérbera',    de:'Gerbera',      fr:'Gerbéra',       es:'Gerbera',     ja:'ガーベラ',  ko:'거베라'    },
    '星芹':   { tw:'星芹',   en:'Astrantia',   ru:'Астранция',   pt:'Astrantia',  de:'Sterndolde',   fr:'Astrance',      es:'Astrantia',   ja:'アストランティア',ko:'아스트란티아' },
    '紫菀':   { tw:'紫菀',   en:'Aster',       ru:'Астра',       pt:'Áster',      de:'Aster',        fr:'Aster',         es:'Áster',       ja:'アスター',  ko:'아스터'    },
    '蔷薇':   { tw:'薔薇',   en:'Rose',        ru:'Роза',        pt:'Rosa',       de:'Rose',         fr:'Rose',          es:'Rosa',        ja:'バラ',      ko:'장미'      },
    '向日葵': { tw:'向日葵', en:'Sunflower',   ru:'Подсолнух',   pt:'Girassol',   de:'Sonnenblume',  fr:'Tournesol',     es:'Girasol',     ja:'ヒマワリ',  ko:'해바라기'  },
    '含羞草': { tw:'含羞草', en:'Mimosa',      ru:'Мимоза',      pt:'Mimosa',     de:'Mimose',       fr:'Mimosa',        es:'Mimosa',      ja:'ミモザ',    ko:'미모사'    },
  },

  // ── Flower wiki descriptions ──
  flowerWiki: {
    '向日葵': {
      zh:'向日葵（Helianthus annuus）是一种大型菊科植物。葵花籽常被用于食用和榨油。幼年向日葵的花头会跟随太阳从东向西移动，成熟后则固定朝向东方。向日葵能吸收放射性物质，常在核事故后被种植用于净化土地。',
      tw:'向日葵（Helianthus annuus）是一種大型菊科植物。葵花籽常被用於食用和榨油。幼年向日葵的花頭會跟隨太陽從東向西移動，成熟後則固定朝向東方。向日葵能吸收放射性物質，常在核事故後被種植用於淨化土地。',
      en:'Sunflower (Helianthus annuus) is a large plant of the daisy family. Seeds are widely used for food and oil. Young sunflowers track the sun from east to west each day; mature flowers face east permanently. As hyperaccumulators, they absorb radioactive substances and are planted after nuclear accidents for soil remediation.',
      ru:'Подсолнух (Helianthus annuus) — крупное растение семейства сложноцветных. Семена используют в пищу и для масла. Молодые цветы следуют за солнцем с востока на запад, зрелые — всегда смотрят на восток. Гиперакопитель радиоактивных веществ; высаживается после ядерных аварий.',
      pt:'O girassol (Helianthus annuus) é uma grande planta da família das margaridas. Sementes usadas em alimentos e óleo. Jovens girassóis seguem o sol; flores maduras ficam voltadas para o leste. São hiperacumuladoras de substâncias radioativas.',
      de:'Die Sonnenblume (Helianthus annuus) ist eine große Korbblütler-Pflanze. Samen für Nahrung und Öl. Junge Blüten folgen der Sonne, reife bleiben ostwärts. Als Hyperakkumulatoren absorbieren sie radioaktive Stoffe.',
      fr:'Le tournesol (Helianthus annuus) est une grande plante des marguerites. Graines utilisées pour l\'alimentation et l\'huile. Jeunes tournesols suivent le soleil ; fleurs matures restent vers l\'est. Hyperaccumulateurs de substances radioactives.',
      es:'El girasol (Helianthus annuus) es una gran planta de las margaritas. Semillas usadas en alimentos y aceite. Jóvenes girasoles siguen al sol; flores maduras se orientan al este permanentemente. Hiperacumuladores de sustancias radiactivas.',
      ja:'ヒマワリ（Helianthus annuus）はキク科の大型植物。種子は食用や油脂に使われる。若い花は太陽を追うが、成熟すると東向きに固定される。放射性物質を吸収する超集積植物として土壌浄化に利用される。',
      ko:'해바라기(Helianthus annuus)는 국화과의 대형 식물이다. 씨앗은 식용 및 기름으로 쓰인다. 어린 해바라기는 태양을 따라 움직이며, 성숙한 꽃은 동쪽을 영구히 향한다. 방사성 물질을 흡수하는 초집적 식물로 토양 정화에 활용된다.',
    },
    '含羞草': {
      zh:'含羞草（Mimosa pudica）是豆科多年生草本植物。受到触碰、摇晃或加热时，小叶会闭合，叶柄下垂，称为触发运动，在光线较弱时尤为敏感。',
      tw:'含羞草（Mimosa pudica）是豆科多年生草本植物。受到觸碰、搖晃或加熱時，小葉會閉合，葉柄下垂，稱為觸發運動，在光線較弱時尤為敏感。',
      en:'Mimosa (Mimosa pudica) is a perennial herb of the legume family. When touched, shaken, or heated, its leaflets fold inward and the stem droops — seismonastic movement — reducing exposure to damage. It is especially sensitive in low light.',
      ru:'Мимоза стыдливая (Mimosa pudica) — многолетнее бобовое растение. При прикосновении или встряхивании листочки складываются (сейсмонастия), уменьшая площадь воздействия. Особенно чувствительна при слабом освещении.',
      pt:'A mimosa (Mimosa pudica) é uma erva perene de leguminosas. Ao ser tocada ou sacudida, seus folíolos se fecham e o caule se inclina (sismonsástia). Especialmente sensível com pouca luz.',
      de:'Die Mimose (Mimosa pudica) ist ein mehrjähriges Hülsenfrüchtler-Kraut. Bei Berührung falten sich die Blättchen und der Stiel senkt sich (Seismonastie). Besonders empfindlich bei schwachem Licht.',
      fr:'La mimosa (Mimosa pudica) est une herbe vivace des légumineuses. Lorsqu\'elle est touchée, ses folioles se referment et la tige s\'incline (sismonnastie). Particulièrement sensible en faible luminosité.',
      es:'La mimosa (Mimosa pudica) es una hierba perenne de leguminosas. Al ser tocada, sus hojuelas se cierran y el tallo se inclina (seismonastia). Especialmente sensible con poca luz.',
      ja:'オジギソウ（Mimosa pudica）はマメ科の多年生草本。触れると小葉が閉じ葉柄が垂れ下がる（地震性運動）。光が弱いときに特に敏感に反応する。',
      ko:'미모사(Mimosa pudica)는 콩과의 다년생 초본 식물이다. 접촉 시 잎이 닫히고 줄기가 처지는 지진성 운동을 보이며, 빛이 약할 때 특히 민감하다.',
    },
    '紫菀': {
      zh:'紫菀（Aster tataricus）是菊科紫菀属植物，原产于东亚，秋季开放紫色小花，是传统中药材之一。',
      tw:'紫菀（Aster tataricus）是菊科紫菀屬植物，原產於東亞，秋季開放紫色小花，是傳統中藥材之一。',
      en:'Aster (Aster tataricus) is a plant of the daisy family native to East Asia. It blooms in autumn with small purple flowers and is a traditional Chinese medicinal herb.',
      ru:'Астра татарская (Aster tataricus) — растение семейства сложноцветных из Восточной Азии. Цветёт осенью мелкими фиолетовыми цветами; применяется в традиционной медицине.',
      pt:'A áster (Aster tataricus) é uma planta nativa do Leste Asiático. Floresce no outono com pequenas flores roxas e é usada na medicina tradicional chinesa.',
      de:'Die Aster (Aster tataricus) stammt aus Ostasien, blüht im Herbst mit kleinen lila Blüten und wird in der traditionellen chinesischen Medizin verwendet.',
      fr:'L\'aster (Aster tataricus) est originaire d\'Asie de l\'Est. Il fleurit en automne avec de petites fleurs violettes et est utilisé en médecine traditionnelle chinoise.',
      es:'La aster (Aster tataricus) es nativa del Este de Asia. Florece en otoño con pequeñas flores púrpuras y se usa en la medicina tradicional china.',
      ja:'シオン（Aster tataricus）はキク科東アジア原産の植物。秋に小さな紫色の花を咲かせ、伝統的な漢方薬として用いられる。',
      ko:'개미취(Aster tataricus)는 동아시아 원산의 국화과 식물이다. 가을에 작은 보라색 꽃을 피우며 전통 한의학에서 약재로 사용된다.',
    },
    '非洲菊': {
      zh:'非洲菊（Gerbera jamesonii）原产于非洲南部的德兰士瓦，喜温暖通风、阳光充足的环境，是世界上最受欢迎的切花之一。',
      tw:'非洲菊（Gerbera jamesonii）原產於非洲南部的德蘭士瓦，喜溫暖通風、陽光充足的環境，是世界上最受歡迎的切花之一。',
      en:'Gerbera (Gerbera jamesonii) is native to the Transvaal region of South Africa and thrives in warm, well-ventilated, sunny conditions. It is one of the world\'s most popular cut flowers.',
      ru:'Гербера (Gerbera jamesonii) родом из Трансвааля, ЮАР. Предпочитает тёплую солнечную среду. Одна из самых популярных срезочных культур в мире.',
      pt:'A gérbera (Gerbera jamesonii) é nativa do Transvaal na África do Sul. Prospera em ambientes quentes e ensolarados. É uma das flores de corte mais populares do mundo.',
      de:'Die Gerbera (Gerbera jamesonii) stammt aus dem Transvaal in Südafrika. Sie gedeiht warm und sonnig und gehört zu den beliebtesten Schnittblumen der Welt.',
      fr:'Le gerbéra (Gerbera jamesonii) est originaire du Transvaal en Afrique du Sud. Il prospère dans des conditions chaudes et ensoleillées et est l\'une des fleurs coupées les plus populaires au monde.',
      es:'La gerbera (Gerbera jamesonii) es originaria del Transvaal en Sudáfrica. Prospera en condiciones cálidas y soleadas. Es una de las flores cortadas más populares del mundo.',
      ja:'ガーベラ（Gerbera jamesonii）は南アフリカのトランスバール原産で、温暖で日当たりの良い環境を好む。世界で最も人気のある切り花の一つ。',
      ko:'거베라(Gerbera jamesonii)는 남아프리카 트란스발 지역 원산으로 따뜻하고 햇볕이 풍부한 환경에서 잘 자란다. 세계에서 가장 인기 있는 절화 중 하나이다.',
    },
    '康乃馨': {
      zh:'康乃馨（Dianthus caryophyllus）为石竹科植物。1907年起以粉红色康乃馨作为母亲节象征。1974年葡萄牙康乃馨革命中，人民将康乃馨插入士兵枪管，和平推翻了长达42年的法西斯独裁统治，实现民主化。',
      tw:'康乃馨（Dianthus caryophyllus）為石竹科植物。1907年起以粉紅色康乃馨作為母親節象徵。1974年葡萄牙康乃馨革命中，人民將康乃馨插入士兵槍管，和平推翻了長達42年的法西斯獨裁統治，實現民主化。',
      en:'Carnation (Dianthus caryophyllus) is a flowering plant of the pink family. Since 1907 the pink carnation has symbolised Mother\'s Day. In Portugal\'s 1974 Carnation Revolution, civilians placed carnations in soldiers\' gun barrels, peacefully ending 42 years of fascist rule.',
      ru:'Гвоздика (Dianthus caryophyllus). С 1907 года розовая гвоздика — символ Дня матери. В ходе Революции гвоздик 1974 года в Португалии граждане вставляли цветы в дула ружей, мирно положив конец 42-летней диктатуре.',
      pt:'O cravo (Dianthus caryophyllus). Desde 1907 o cravo rosa simboliza o Dia das Mães. Na Revolução dos Cravos de 1974 em Portugal, civis colocaram cravos nos canos das armas, encerrando pacificamente 42 anos de ditadura.',
      de:'Die Nelke (Dianthus caryophyllus). Seit 1907 symbolisiert die rosa Nelke den Muttertag. Bei der Nelkenrevolution 1974 in Portugal steckten Bürger Nelken in Gewehrläufe und beendeten friedlich 42 Jahre Diktatur.',
      fr:'L\'œillet (Dianthus caryophyllus). Depuis 1907, l\'œillet rose symbolise la Fête des Mères. Lors de la Révolution des Œillets de 1974, des civils ont placé des œillets dans les canons des fusils, mettant fin à 42 ans de dictature.',
      es:'El clavel (Dianthus caryophyllus). Desde 1907 el clavel rosa simboliza el Día de la Madre. En la Revolución de los Claveles de 1974, los civiles colocaron claveles en los cañones, terminando 42 años de dictadura.',
      ja:'カーネーション（Dianthus caryophyllus）。1907年以来ピンクのカーネーションは母の日の象徴。1974年のポルトガル・カーネーション革命では市民が兵士の銃口に花を差し込み、42年間の独裁を平和的に終わらせた。',
      ko:'카네이션(Dianthus caryophyllus). 1907년부터 분홍 카네이션이 어머니날의 상징이 되었다. 1974년 포르투갈 카네이션 혁명에서 시민들이 군인의 총구에 꽃을 꽂아 42년간의 독재를 평화적으로 끝냈다.',
    },
    '铁线莲': {
      zh:'铁线莲（Clematis florida）是毛茛科草质藤本植物，花大色艳，攀爬能力强，常用于园艺装饰，有"藤本皇后"之称。',
      tw:'鐵線蓮（Clematis florida）是毛茛科草質藤本植物，花大色豔，攀爬能力強，常用於園藝裝飾，有「藤本皇后」之稱。',
      en:'Clematis (Clematis florida) is a herbaceous vine of the buttercup family. With large, showy flowers and vigorous climbing ability, it is widely used in garden decoration and is called the "Queen of Climbers".',
      ru:'Ломонос (Clematis florida) — травянистая лиана семейства лютиковых. Крупные яркие цветы и активное лазание; называют «королевой вьющихся растений».',
      pt:'A clemátide (Clematis florida) é uma videira herbácea das ranunculáceas. Com flores grandes e hábito trepador vigoroso, é chamada de "Rainha das Trepadeiras".',
      de:'Clematis (Clematis florida) ist eine krautige Kletterpflanze der Hahnenfußgewächse. Große Blüten und starkes Klettern; genannt „Königin der Kletterpflanzen".',
      fr:'La clématite (Clematis florida) est une liane herbacée des renonculacées. Grandes fleurs et vigueur d\'escalade ; surnommée « Reine des grimpantes ».',
      es:'La clemátide (Clematis florida) es una enredadera herbácea de ranunculáceas. Grandes flores y vigoroso hábito trepador; llamada "Reina de las trepadoras".',
      ja:'クレマチス（Clematis florida）はキンポウゲ科のつる性草本。大きく華やかな花とたくましい攀登性から「つる植物の女王」と呼ばれる。',
      ko:'클레마티스(Clematis florida)는 미나리아재비과의 덩굴성 초본 식물이다. 크고 화려한 꽃과 강한 등반성으로 "덩굴 식물의 여왕"이라 불린다.',
    },
    '蔷薇': {
      zh:'蔷薇（Rosa）是蔷薇科多年生植物的统称，茎上有刺，象征美丽与爱情。拉丁成语"Sub rosa"（在蔷薇花底下）意指保密。大马士革蔷薇是伊朗、叙利亚、保加利亚等国国花，杂交月季是英格兰、美国等国国花。',
      tw:'薔薇（Rosa）是薔薇科多年生植物的統稱，莖上有刺，象徵美麗與愛情。拉丁成語「Sub rosa」意指保密。大馬士革薔薇是多國國花，雜交月季是英格蘭、美國等國國花。',
      en:'Rose (Rosa) is the collective name for perennial Rosaceae plants with thorned stems. Long a symbol of beauty and love. The Latin phrase Sub rosa ("under the rose") means in secret. The Damascus rose is the national flower of Iran, Syria and Bulgaria; the hybrid tea rose of England and the USA.',
      ru:'Роза (Rosa) — общее название многолетних розоцветных с шипами. Символ красоты и любви. Sub rosa означает секретность. Дамасская роза — государственный цветок Ирана, Сирии и Болгарии.',
      pt:'Rosa (Rosa) é o nome coletivo de plantas perenes com caules espinhosos. Símbolo de beleza e amor. Sub rosa significa em segredo. A rosa de Damasco é flor nacional do Irã, Síria e Bulgária.',
      de:'Rose (Rosa) — Sammelname für mehrjährige Rosengewächse mit Dornen. Symbol für Schönheit und Liebe. Sub rosa bedeutet „im Geheimen". Die Damaszener-Rose ist Nationalblume des Iran, Syriens und Bulgariens.',
      fr:'La rose (Rosa) est le nom collectif des rosacées vivaces épineuses. Symbole de beauté et d\'amour. Sub rosa signifie « en secret ». La rose de Damas est la fleur nationale de l\'Iran, Syrie et Bulgarie.',
      es:'Rosa (Rosa) es el nombre colectivo de plantas perennes espinosas. Símbolo de belleza y amor. Sub rosa significa "en secreto". La rosa de Damasco es flor nacional de Irán, Siria y Bulgaria.',
      ja:'バラ（Rosa）はバラ科多年生植物の総称で茎に棘がある。美と愛の象徴。Sub rosa（薔薇の下で）は秘密を意味する。ダマスカスローズはイラン・シリア・ブルガリアなどの国花。',
      ko:'장미(Rosa)는 장미과 다년생 식물의 총칭으로 줄기에 가시가 있다. 아름다움과 사랑의 상징. Sub rosa는 비밀을 의미한다. 다마스쿠스 장미는 이란, 시리아, 불가리아 등의 국화이다.',
    },
    '星芹': {
      zh:'星芹（Astrantia major）是伞形科多年生草本植物，花序形如星星，由小花密集排列而成，花色多为白色或粉红色，常用于花束装饰。',
      tw:'星芹（Astrantia major）是傘形科多年生草本植物，花序形如星星，由小花密集排列而成，花色多為白色或粉紅色，常用於花束裝飾。',
      en:'Astrantia (Astrantia major) is a perennial herb of the carrot family. Its star-shaped flowerheads are densely packed with tiny florets, usually white or pink, and are popular in floral arrangements.',
      ru:'Астранция (Astrantia major) — многолетнее зонтичное растение. Звёздчатые соцветия из мелких белых или розовых цветочков популярны в флористике.',
      pt:'A astrantia (Astrantia major) é uma erva perene das umbelíferas. Suas cabeças florais estreladas com pequenas flores brancas ou rosas são populares em arranjos florais.',
      de:'Die Sterndolde (Astrantia major) ist ein mehrjähriges Doldenblütler-Kraut. Sternförmige Blütenköpfe mit weißen oder rosa Blüten, beliebt in Blumenarrangements.',
      fr:'L\'astrance (Astrantia major) est une herbe vivace des ombellifères. Ses capitules étoilés aux petites fleurs blanches ou roses sont prisées dans les bouquets.',
      es:'La astrantia (Astrantia major) es una hierba perenne de las umbelíferas. Sus cabezas florales estrelladas con pequeñas flores blancas o rosas son populares en arreglos florales.',
      ja:'アストランティア（Astrantia major）はセリ科の多年生草本。星形の花序は白やピンクの小花が密集し、フラワーアレンジメントとして人気がある。',
      ko:'아스트란티아(Astrantia major)는 산형과의 다년생 초본이다. 별 모양의 꽃차례는 흰색이나 분홍색의 작은 꽃들이 빽빽하게 모여 있어 꽃다발 장식으로 인기가 있다.',
    },
    '矢车菊': {
      zh:'矢车菊（Centaurea cyanus）是菊科植物，在日本因形似风车被称为矢车菊。蓝色矢车菊是爱沙尼亚的国花，自1968年起象征丰衣足食。',
      tw:'矢車菊（Centaurea cyanus）是菊科植物，在日本因形似風車被稱為矢車菊。藍色矢車菊是愛沙尼亞的國花，自1968年起象徵豐衣足食。',
      en:'Cornflower (Centaurea cyanus) is a daisy family plant. In Japan its name comes from its resemblance to a pinwheel. The blue cornflower is Estonia\'s national flower; since 1968 it has symbolised prosperity.',
      ru:'Василёк (Centaurea cyanus). В Японии название от сходства с вертушкой. Синий василёк — национальный цветок Эстонии, с 1968 года символ достатка.',
      pt:'A centáurea (Centaurea cyanus). No Japão, o nome vem da semelhança com um cata-vento. O ciano azul é a flor nacional da Estônia; desde 1968 simboliza prosperidade.',
      de:'Die Kornblume (Centaurea cyanus). In Japan erinnert ihr Name an ein Windrad. Die blaue Kornblume ist Estlands Nationalblume; seit 1968 Wohlstandssymbol.',
      fr:'Le bleuet (Centaurea cyanus). Au Japon, son nom vient de sa ressemblance avec un moulin à vent. Fleur nationale de l\'Estonie depuis 1968, symbolisant la prospérité.',
      es:'El aciano (Centaurea cyanus). En Japón, el nombre viene de su parecido con un molinillo. Flor nacional de Estonia desde 1968, símbolo de prosperidad.',
      ja:'ヤグルマギク（Centaurea cyanus）はキク科の植物。日本では矢車に似ることからその名がついた。青いヤグルマギクはエストニアの国花で1968年以降は豊かさの象徴。',
      ko:'수레국화(Centaurea cyanus)는 국화과 식물이다. 일본에서는 바람개비를 닮았다 하여 그 이름이 붙었다. 파란 수레국화는 에스토니아의 국화로 1968년부터 풍요를 상징한다.',
    },
    '木兰': {
      zh:'木兰花（Magnolia liliflora）是落叶灌木，其名正是迪士尼公主花木兰（Mulan）名字的来源。先秦楚辞中象征高洁孤傲，南北朝民歌《木兰辞》又赋予其女性英雄色彩，将"耐寒、坚韧"的自然属性与英雄精神融为一体。',
      tw:'木蘭花（Magnolia liliflora）是落葉灌木，其名正是迪士尼公主花木蘭名字的來源。先秦楚辭中象徵高潔孤傲，南北朝民歌《木蘭辭》又賦予其女性英雄色彩。',
      en:'Magnolia (Magnolia liliflora) is a deciduous shrub whose name inspired Disney\'s princess Mulan. In pre-Qin Chu poetry it symbolised noble purity. The Northern Dynasties ballad "Ode to Mulan" then fused its cold-resistant nature with feminine heroism.',
      ru:'Магнолия (Magnolia liliflora) — листопадный кустарник, давший имя принцессе Мулан. В поэзии Чу символизировала благородную чистоту; «Сказ о Мулан» соединил стойкость растения с женским героизмом.',
      pt:'A magnólia (Magnolia liliflora) é um arbusto decíduo que inspirou a princesa Mulan. Na poesia Chu pré-Qin simbolizava pureza nobre; a "Ode a Mulan" fundiu sua resiliência com heroísmo feminino.',
      de:'Die Magnolie (Magnolia liliflora) inspirierte Disneys Prinzessin Mulan. In der vorqinischen Chu-Poesie symbolisierte sie edle Reinheit; die Ballade verband ihre Widerstandsfähigkeit mit weiblichem Heroismus.',
      fr:'Le magnolia (Magnolia liliflora) a inspiré la princesse Mulan. Dans la poésie Chu, il symbolisait la pureté noble ; la ballade a fusionné sa résilience avec l\'héroïsme féminin.',
      es:'La magnolia (Magnolia liliflora) inspiró la princesa Mulan. En la poesía Chu simbolizaba la pureza noble; la balada fusionó su resiliencia con el heroísmo femenino.',
      ja:'モクレン（Magnolia liliflora）は落葉低木で、ディズニーの花木蘭の名前の由来。先秦・楚辞では高潔さの象徴であり、「木蘭辞」が耐寒・堅靭な属性に女性英雄の意味を加えた。',
      ko:'목련(Magnolia liliflora)은 낙엽 관목으로 디즈니 공주 뮬란의 이름 유래가 되었다. 선진 초사에서는 고결함의 상징이었으며, 「목란사」는 내한성과 강인함에 여성 영웅의 의미를 더했다.',
    },
    '虞美人': {
      zh:'虞美人（Papaver rhoeas）是罂粟科草本植物，比利时国花。在英国与加拿大国殇纪念日中佩戴，纪念一战阵亡士兵。中文名得自项羽宠妃虞姬，相传垓下之战后她殉情自尽，鲜血染红的土地上绽放出这种血红色花朵。',
      tw:'虞美人（Papaver rhoeas）是罌粟科草本植物，比利時國花。英國與加拿大在國殤紀念日佩戴，紀念一戰阵亡士兵。中文名得自項羽寵妃虞姬，相傳垓下之戰後她殉情，鮮血染紅的土地上綻放此花。',
      en:'Poppy (Papaver rhoeas) is a herbaceous plant and Belgium\'s national flower. In the UK and Canada poppies are worn on Remembrance Day to honour WWI soldiers. In Chinese it is named after Consort Yu; legend says this red flower bloomed where her blood fell after the Battle of Gaixia.',
      ru:'Мак полевой (Papaver rhoeas) — национальный цветок Бельгии. В Великобритании и Канаде носят на День памяти в честь павших в ПМВ. По-китайски назван в честь наложницы Юй; по преданию, цветок вырос из её крови после битвы при Гайся.',
      pt:'A papoula (Papaver rhoeas) é a flor nacional da Bélgica. No Reino Unido e Canadá é usada no Dia da Lembrança. Em chinês homenageia a Consorte Yu; a lenda diz que esta flor brotou onde seu sangue caiu após a Batalha de Gaixia.',
      de:'Der Klatschmohn (Papaver rhoeas) ist Nationalblume Belgiens. In GB und Kanada für den Remembrance Day. Chinesisch nach Konkubine Yu; die Blume soll nach der Schlacht von Gaixia aus ihrem Blut gewachsen sein.',
      fr:'Le coquelicot (Papaver rhoeas) est fleur nationale de Belgique. Porté le jour du Souvenir au Royaume-Uni et au Canada. En chinois, porte le nom de la concubine Yu ; la légende dit que cette fleur poussa de son sang après la bataille de Gaixia.',
      es:'La amapola (Papaver rhoeas) es flor nacional de Bélgica. Usada el Día del Recuerdo. En chino lleva el nombre de la Consorte Yu; la leyenda dice que esta flor brotó de su sangre tras la Batalla de Gaixia.',
      ja:'ヒナゲシ（Papaver rhoeas）はベルギーの国花。英国・カナダでは戦没者記念日に着用。中国語名は項羽の寵妃虞姫に由来し、垓下の戦いで彼女が命を落とした場所にこの赤い花が咲いたという伝説がある。',
      ko:'개양귀비(Papaver rhoeas)는 벨기에의 국화이다. 영국과 캐나다에서는 현충일에 착용하여 전사자를 기린다. 중국어 이름 "우미인"은 항우의 애첩 우희에서 유래하며, 해하 전투 후 그녀의 피가 스민 땅에서 이 꽃이 피었다는 전설이 있다.',
    },
    '水仙': {
      zh:'水仙属（Narcissus）是多年生单子叶草本植物。英文名"Narcissus"来自希腊神话中的美少年那耳喀索斯，他因深爱自己的水中倒影，扑向水中时化为了一株水仙。自恋（narcissism）一词也源于这个故事。',
      tw:'水仙屬（Narcissus）是多年生單子葉草本植物。英文名"Narcissus"來自希臘神話中的美少年，他因深愛自己的水中倒影，撲向水中時化為了一株水仙。自戀（narcissism）一詞也源於這個故事。',
      en:'Daffodil (Narcissus) is a perennial monocot herb. Its name comes from Narcissus in Greek mythology — a beautiful youth who fell in love with his own reflection in a pool. When he leapt in to embrace it, he was transformed into this flower, giving us the word "narcissism".',
      ru:'Нарцисс (Narcissus) — многолетнее однодольное растение. Название от греческого мифа о прекрасном юноше Нарциссе, влюбившемся в своё отражение в воде; бросившись к нему, он превратился в цветок — отсюда «нарциссизм».',
      pt:'O narciso (Narcissus) é uma erva monocotiledônea perene. Seu nome vem do mito grego de Narciso, que se apaixonou pelo próprio reflexo; ao mergulhar, transformou-se nesta flor — originando "narcisismo".',
      de:'Die Narzisse (Narcissus) ist ein mehrjähriges einkeimblättriges Kraut. Der Name stammt vom Mythos des Narziss, der sich in sein Spiegelbild verliebte; er verwandelte sich in die Blume — daher „Narzissmus".',
      fr:'Le narcisse (Narcissus) est une herbe monocotylédone vivace. Son nom vient du mythe de Narcisse amoureux de son reflet ; en plongeant, il fut transformé en cette fleur — donnant le mot « narcissisme ».',
      es:'El narciso (Narcissus) es una hierba monocotiledónea perenne. Su nombre viene del mito de Narciso, enamorado de su reflejo; al saltar, se transformó en esta flor — dando origen a "narcisismo".',
      ja:'スイセン（Narcissus）は多年生単子葉草本植物。名称はギリシャ神話のナルキッソスに由来し、水面に映る自分の姿に恋をして水中に飛び込んだとき花に変わったとされる。ここから「ナルシシズム」が生まれた。',
      ko:'수선화(Narcissus)는 다년생 단자엽 초본 식물이다. 이름은 그리스 신화의 나르키소스에서 유래하며, 연못에 비친 자신의 모습에 반하여 물에 뛰어들었을 때 이 꽃으로 변했다. 여기서 "나르시시즘"이라는 말이 생겨났다.',
    },
  },

  // ── Color names ──
  colors: {
    '红色': { tw:'紅色', en:'Red',    ru:'Красный', pt:'Vermelho', de:'Rot',    fr:'Rouge',  es:'Rojo',     ja:'赤',  ko:'빨간색' },
    '黄色': { tw:'黃色', en:'Yellow', ru:'Жёлтый',  pt:'Amarelo',  de:'Gelb',   fr:'Jaune',  es:'Amarillo', ja:'黄',  ko:'노란색' },
    '蓝色': { tw:'藍色', en:'Blue',   ru:'Синий',   pt:'Azul',     de:'Blau',   fr:'Bleu',   es:'Azul',     ja:'青',  ko:'파란색' },
    '紫色': { tw:'紫色', en:'Purple', ru:'Фиолетовый',pt:'Roxo',  de:'Lila',   fr:'Violet', es:'Morado',   ja:'紫',  ko:'보라색' },
    '绿色': { tw:'綠色', en:'Green',  ru:'Зелёный', pt:'Verde',    de:'Grün',   fr:'Vert',   es:'Verde',    ja:'緑',  ko:'초록색' },
    '橙色': { tw:'橙色', en:'Orange', ru:'Оранжевый',pt:'Laranja', de:'Orange', fr:'Orange', es:'Naranja',  ja:'橙',  ko:'주황색' },
    '黑色': { tw:'黑色', en:'Black',  ru:'Чёрный',  pt:'Preto',    de:'Schwarz',fr:'Noir',   es:'Negro',    ja:'黒',  ko:'검은색' },
    '纯白': { tw:'純白', en:'White',  ru:'Белый',   pt:'Branco',   de:'Weiß',   fr:'Blanc',  es:'Blanco',   ja:'白',  ko:'흰색'   },
  },
};

// ─── Helper: translate a key from a category ───
// Usage: t('ui', 'seed-bar-title')  or  t('tabs', 'shop')
function t(cat, key) {
  const entry = I18N_ALL[cat] && I18N_ALL[cat][key];
  if (!entry) return key;
  return entry[lang] || entry['en'] || key;
}

// ─── Flower/color name lookup for current lang ───
function flowerName(zhKey) {
  if (lang === 'zh') return zhKey;
  const entry = I18N_ALL.flowers[zhKey];
  if (!entry) return zhKey;
  if (lang === 'tw') return entry.tw || zhKey;
  return entry[lang] || entry['en'] || zhKey;
}
function colorName(zhKey) {
  if (lang === 'zh') return zhKey;
  const entry = I18N_ALL.colors[zhKey];
  if (!entry) return zhKey;
  if (lang === 'tw') return entry.tw || zhKey;
  return entry[lang] || entry['en'] || zhKey;
}

// ─── Rarity label ───
function rarityLabelL10n(r) {
  return t('rarity', r);
}

// ═══════════════════════════════════════════════════
// SAVE / LOAD — localStorage (for packaged app)
// Key: 'mendel_save'
// ═══════════════════════════════════════════════════
const SAVE_KEY = 'mendel_save';

function saveGame() {
  try {
    const state = {
      version: 2,
      lang, difficulty, gold, seeds, plots,
      storageItems,
      discovered: [...discovered],
      nurseryUpgraded, unlockedHints
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    showGoldToast(t('misc', 'saveOk'));
  } catch(e) {
    showGoldToast(t('misc', 'saveFail'));
    console.error('Save failed:', e);
  }
}

function loadGame(jsonString) {
  try {
    const s = JSON.parse(jsonString);
    if (s.lang)                        lang = s.lang;
    if (s.difficulty)                  difficulty = s.difficulty;
    if (typeof s.gold === 'number')    gold = s.gold;
    if (Array.isArray(s.seeds)) {
      seeds = s.seeds;
      nextSeedId = (seeds.reduce((m, x) => Math.max(m, x.id || 0), 0)) + 1;
    }
    if (Array.isArray(s.plots)) {
      plots = s.plots;
      nextPlotId = (plots.reduce((m, x) => Math.max(m, x.id || 0), 0)) + 1;
    }
    if (Array.isArray(s.storageItems)) {
      storageItems = s.storageItems;
      nextStorageId = (storageItems.reduce((m, x) => Math.max(m, x.id || 0), 0)) + 1;
    }
    if (Array.isArray(s.discovered))   s.discovered.forEach(k => discovered.add(k));
    if (typeof s.nurseryUpgraded === 'boolean') nurseryUpgraded = s.nurseryUpgraded;
    if (typeof s.unlockedHints === 'number')    unlockedHints = s.unlockedHints;
    return true;
  } catch(e) {
    console.error('Load failed:', e);
    return false;
  }
}

function hasSavedGame() {
  try {
    return !!localStorage.getItem(SAVE_KEY);
  } catch(e) { return false; }
}

function getSavedGame() {
  try {
    return localStorage.getItem(SAVE_KEY);
  } catch(e) { return null; }
}

function deleteSave() {
  try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
}

// ─── Language bar renderer ───
// Renders "简体中文 | 繁體中文 | English | …" inline bars.
// Call after any lang change. Targets both #home-lang-bar and #topbar-lang-bar.
function renderLangPicker() {
  _renderLangBar('home-lang-bar');
}

function _renderLangBar(containerId) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const items = LANG_META.map((m, i) => {
    const isActive = lang === m.code;
    const sep = i < LANG_META.length - 1
      ? `<span class="lang-sep"> | </span>`
      : '';
    return `<span class="lang-item${isActive ? ' active' : ''}" onclick="setLang('${m.code}')">${m.label}</span>${sep}`;
  }).join('');
  wrap.innerHTML = items;
}
