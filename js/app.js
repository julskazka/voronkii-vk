// js/app.js
import { initIcons } from './utils.js';

// Данные для каждого узла воронки (Подробная информация в модальном окне)
const funnelData = {
  'T1': {
    title: 'Таргетированная реклама',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'target',
    summary: 'Официальная реклама VK Ads, маркет-платформа и контекстные кампании.',
    details: 'Прямой запуск объявлений на целевые аудитории (по интересам, ключевым словам, ретаргетинг). Главная задача — обеспечить максимальный CTR и низкую стоимость клика (CPC).',
    recommendation: 'Используйте динамические креативы и сегментируйте аудитории по боли.'
  },
  'T2': {
    title: 'Блогеры & Инфлюенсеры',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'users',
    summary: 'Прямые интеграции и нативные обзоры у тематических лидеров мнений.',
    details: 'Привлечение тёплого лояльного трафика через рекомендации авторов контента. Высокий уровень доверия и вовлеченности.',
    recommendation: 'Проверяйте вовлеченность (ER) паблика и используйте персональные промокоды.'
  },
  'T3': {
    title: 'Органический трафик',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'sparkles',
    summary: 'VK Клипы, умная лента рекомендаций, виральные статьи и SEO.',
    details: 'Бесплатный охват за счет качественного регулярного контента. Алгоритмы VK продвигают интересные клипы и уникальные лонгриды на новую аудиторию.',
    recommendation: 'Публикуйте от 3 до 5 Клипов в неделю с призывом забрать бонус в шапке профиля.'
  },
  'T4': {
    title: 'Посевы в пабликах',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'share-2',
    summary: 'Публикация рекламных постов в тематических сообществах VK.',
    details: 'Закупка рекламных мест напрямую у администраторов групп или через биржу. Отлично подходит для массовых и нишевых продуктов.',
    recommendation: 'Анализируйте часовой график активности сообществ перед выходом поста.'
  },
  'A': {
    title: 'Центральный хаб Трафика',
    category: 'Точка сбора',
    color: '#10b981',
    badge: 'Главный узел',
    icon: 'zap',
    summary: 'Агрегатор всех входящих потоков целевой аудитории.',
    details: 'Сюда стекаются все рекламные и органические касания. Здесь измеряется суммарный объём входящего потока и средняя стоимость привлечения пользователя (CAC).',
    recommendation: 'Настройте UTМ-метки для каждого источника для точной аналитики.'
  },
  'B': {
    title: 'VK входная оболочка',
    category: 'VK система',
    color: '#0077ff',
    badge: 'VK Экосистема',
    icon: 'layout',
    summary: 'Первое визуальное касание: меню, виджеты, обложка и товары группы.',
    details: 'Упаковка паблика VK. Посетитель за 3 секунды должен понять, чем вы полезны, и увидеть четкий призыв к действию (CTA) в меню или виджете.',
    recommendation: 'Используйте яркие динамические обложки и лаконичные кнопки меню.'
  },
  'C': {
    title: 'Точка входа (Распределение)',
    category: 'Логический шлюз',
    color: '#f59e0b',
    badge: 'Развилка',
    icon: 'git-branch',
    summary: 'Выбор оптимального пути конверсии для пользователя.',
    details: 'Система определяет, отправить пользователя сразу в чат-бот или на полноценный конверсионный мини-лендинг в Senler / Mini App.',
    recommendation: 'Тестируйте A/B сплит для сравнения конверсий обоих путей.'
  },
  'D1': {
    title: 'Прямая модель воронки',
    category: 'Сегментация',
    color: '#f59e0b',
    badge: 'Прямой путь',
    icon: 'arrow-right-circle',
    summary: 'Мгновенный старт диалога с ботом по кодовому слову или кнопке.',
    details: 'Минимальное трение. Пользователь сразу попадает в личные сообщения группы без лишних шагов. Максимальная конверсия из клика в сообщение.',
    recommendation: 'Используйте короткие кодовые слова в рекламе (например, "СТАРТ").'
  },
  'D2': {
    title: 'Через посадочную страницу',
    category: 'Сегментация',
    color: '#f59e0b',
    badge: 'Лендинг',
    icon: 'monitor',
    summary: 'Подписка через подписную страницу Senler / VK Mini App.',
    details: 'Предоставляет больше информации и прогрева перед подпиской. Позволяет собрать дополнительные данные о пользователе и сформировать завышенное ожидание от продукта.',
    recommendation: 'Размещайте отзывы и видео-превью прямо на посадочной странице.'
  },
  'E': {
    title: 'Чат-бот (Ядро воронки)',
    category: 'Автоматизация',
    color: '#8b5cf6',
    badge: 'Ядро системы',
    icon: 'bot',
    summary: 'Автоматический сценарий взаимодействия в личных сообщениях.',
    details: 'Приветствие, выдача первого обещания, вовлечение в диалог через интерактивные кнопки. Бот работает 24/7 без участия менеджера.',
    recommendation: 'Делайте сообщения короткими (до 300 символов) и используйте переменные имени.'
  },
  'F': {
    title: 'Сегментация пользователей',
    category: 'Автоматизация',
    color: '#8b5cf6',
    badge: 'Анализ',
    icon: 'filter',
    summary: 'Квалификация лида через опросы и выбор интересов.',
    details: 'Бот задает 1-3 вопроса для определения потребностей и уровня готовности к покупке. На основе ответов присваиваются метки (теги) в базе.',
    recommendation: 'Не перегружайте вопросами — 2 вопроса с кнопками выбора дают 90%+ прохождений.'
  },
  'G1': {
    title: 'Лёгкий лид-магнит',
    category: 'Продукт',
    color: '#f59e0b',
    badge: 'Быстрая польза',
    icon: 'gift',
    summary: 'Быстрый бонус: гайд, чек-лист, шаблон или шпаргалка.',
    details: 'Идеально для горячей аудитории, которой нужно быстрое решение проблемы. Повышает лояльность и доказывает экспертность.',
    recommendation: 'Давайте материал мгновенно в первом же сообщении после выбора.'
  },
  'G2': {
    title: 'Углублённый продукт',
    category: 'Продукт',
    color: '#f59e0b',
    badge: 'Контент-погружение',
    icon: 'book-open',
    summary: 'Мини-курс, запись вебинара, разбор кейса или тест-драйв.',
    details: 'Предназначен для холодного или сомневающегося трафика. Требует больше времени на изучение, но создает глубокое доверие.',
    recommendation: 'Разбивайте мини-курс на короткие уроки по 5 минут.'
  },
  'H': {
    title: 'Контентный Прогрев',
    category: 'Воронка продаж',
    color: '#f59e0b',
    badge: 'Автоворонка',
    icon: 'flame',
    summary: 'Серия ценностных писем, демонстрация результатов и кейсов.',
    details: 'Последовательная цепочка сообщений, закрывающая основные возражения (дорого, не сработает, нет времени). Формирует острое желание приобрести основной продукт.',
    recommendation: 'Используйте элемент сторителлинга и ограничивайте время действия спецпредложений.'
  },
  'I': {
    title: 'Финал: Продажа & Конверсия',
    category: 'Конверсия',
    color: '#ef4444',
    badge: 'Финальный этап',
    icon: 'shopping-bag',
    summary: 'Прямой оффер, ссылка на оплату, работа менеджера продаж.',
    details: 'Ключевая цель всей воронки. Перевод подогретого потенциального клиента в статус оплатившего покупателя.',
    recommendation: 'Подключите виджет быстрой оплаты VK Pay / эквайринг и автовыдачу доступа.'
  }
};

/**
 * Рендер главного интерфейса на всю ширину с модальным окном
 */
function renderDashboard() {
  const appEl = document.getElementById('app');
  
  appEl.innerHTML = `
    <!-- Top Bar Navigation -->
    <header class="border-b border-white/10 bg-[#0d1322]/90 backdrop-blur-md sticky top-0 z-40">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-vk-blue p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div class="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <i data-lucide="workflow" class="w-5 h-5 text-indigo-400"></i>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-base sm:text-xl font-extrabold tracking-tight text-white font-heading">VK-ВОРОНКА</h1>
              <span class="px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">Interactive Fullscreen Map</span>
            </div>
            <p class="text-xs text-slate-400 hidden sm:block">Интерактивная карта воронки конверсии • Нажмите на любой блок для детальной информации</p>
          </div>
        </div>

        <!-- Toolbar Buttons -->
        <div class="flex items-center gap-2">
          <button id="btn-zoom-in" title="Увеличить" class="btn-press p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition">
            <i data-lucide="zoom-in" class="w-5 h-5"></i>
          </button>
          <button id="btn-zoom-out" title="Уменьшить" class="btn-press p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition">
            <i data-lucide="zoom-out" class="w-5 h-5"></i>
          </button>
          <button id="btn-reset-zoom" title="Сбросить масштаб" class="btn-press px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition flex items-center gap-2">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            <span>Сбросить масштаб</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Fullwidth Container -->
    <main class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <!-- Legend Bar -->
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-card">
        <div class="flex items-center gap-2">
          <i data-lucide="layers" class="w-4 h-4 text-indigo-400"></i>
          <span class="text-xs font-bold uppercase text-slate-300 tracking-wider">Легенда схемы:</span>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> Источники Трафика
          </span>
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span> VK Входная Оболочка
          </span>
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Чат-бот & Ядро
          </span>
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Сегментация & Прогрев
          </span>
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30 shadow-sm shadow-rose-500/20">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span> Финальные Продажи
          </span>
        </div>
      </div>

      <!-- Large Diagram Canvas -->
      <section class="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[750px] flex flex-col justify-between border border-white/10 shadow-2xl">
        
        <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            <h2 class="text-base font-bold text-slate-100 font-heading">Карта Воронки Конверсии (Крупный вид)</h2>
          </div>
          <div class="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-300 text-xs font-medium flex items-center gap-2">
            <i data-lucide="pointer" class="w-4 h-4 animate-bounce text-indigo-400"></i>
            <span>Нажмите на любой узел для просмотра информации</span>
          </div>
        </div>

        <!-- Mermaid Render Viewport -->
        <div id="diagram-viewport" class="mermaid-wrapper flex-1 flex items-center justify-center transition-transform duration-300 origin-center py-8">
          <div class="mermaid">
flowchart TD

subgraph T[Источники трафика]
T1[Реклама]
T2[Блогеры]
T3[Органика]
T4[Посевы]
end

A[Трафик]
B[VK входная оболочка]
C{Вход}
D1[Прямая модель]
D2[Через посадочную]

subgraph BOT[Ядро]
E[Бот]
F[Сегментация]
end

G1[Лёгкий лид-магнит]
G2[Углублённый продукт]
H[Прогрев]
I[Продажа]

subgraph VK[VK система]
B
end

T1 --> A
T2 --> A
T3 --> A
T4 --> A

A --> B
B --> C
C --> D1
C --> D2

D1 --> E
D2 --> E

E --> F
F --> G1
F --> G2

G1 --> H
G2 --> H

H --> I

classDef trafficStyle fill:#064e3b,stroke:#10b981,stroke-width:2.5px,color:#fff;
classDef vkStyle fill:#1e3a8a,stroke:#0077ff,stroke-width:2.5px,color:#fff;
classDef botStyle fill:#4c1d95,stroke:#8b5cf6,stroke-width:2.5px,color:#fff;
classDef segStyle fill:#78350f,stroke:#f59e0b,stroke-width:2.5px,color:#fff;
classDef saleStyle fill:#831843,stroke:#ef4444,stroke-width:3px,color:#fff;

class T1,T2,T3,T4,A trafficStyle;
class B,VK vkStyle;
class E,F,BOT botStyle;
class C,D1,D2,G1,G2,H segStyle;
class I saleStyle;
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Логика и структура воронки полностью сохранены</span>
          <span class="font-mono text-slate-500">100% Flowchart Compatibility</span>
        </div>
      </section>
    </main>

    <!-- Modal Dialog Popup (Show information on node click) -->
    <div id="node-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="node-modal-card" class="glass-card bg-[#0f172a]/95 border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
        
        <!-- Close Button -->
        <button id="modal-close-btn" class="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <!-- Header info -->
        <div class="flex items-center justify-between mb-4 pr-8">
          <span id="modal-badge" class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Категория
          </span>
          <span id="modal-id-tag" class="text-xs font-mono text-slate-400 font-bold bg-white/5 px-2 py-1 rounded-md">NODE_ID</span>
        </div>

        <div class="flex items-start gap-4 mb-6">
          <div id="modal-icon-wrapper" class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-black/40">
            <i id="modal-icon" data-lucide="info" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 id="modal-title" class="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">Название блока</h3>
            <p id="modal-category" class="text-xs font-medium text-slate-400 mt-0.5">Подкатегория</p>
          </div>
        </div>

        <!-- Body Details -->
        <div class="space-y-4 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl bg-white/5 border border-white/5">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Краткая суть:</span>
            <p id="modal-summary" class="text-slate-200 leading-relaxed font-normal">Пояснение блока</p>
          </div>

          <div class="p-4 rounded-2xl bg-white/5 border border-white/5">
            <span class="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block mb-1">Детали и UX-роль:</span>
            <p id="modal-details" class="text-slate-300 leading-relaxed">Подробная информация о работе данного узла воронки.</p>
          </div>

          <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
            <div class="flex items-center gap-2 font-bold text-emerald-400 mb-1">
              <i data-lucide="lightbulb" class="w-4 h-4"></i>
              <span>Рекомендация эксперта:</span>
            </div>
            <p id="modal-recommendation" class="leading-relaxed">Практический совет по настройке конверсии.</p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button id="modal-ok-btn" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition">
            Понятно
          </button>
        </div>

      </div>
    </div>
  `;

  initIcons();
  setupDiagramInteractivity();
  setupModalEvents();
}

/**
 * Настройка событий модального окна
 */
function setupModalEvents() {
  const backdrop = document.getElementById('node-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const okBtn = document.getElementById('modal-ok-btn');

  const closeModal = () => {
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('node-modal-card')?.classList.add('scale-95');
  };

  closeBtn?.addEventListener('click', closeModal);
  okBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });
}

/**
 * Открытие модального окна с данными узла при клике
 */
function openNodeModal(nodeId) {
  const data = funnelData[nodeId];
  if (!data) return;

  const backdrop = document.getElementById('node-modal-backdrop');
  const card = document.getElementById('node-modal-card');

  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-id-tag').textContent = `Узел: ${nodeId}`;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-summary').textContent = data.summary;
  document.getElementById('modal-details').textContent = data.details;
  document.getElementById('modal-recommendation').textContent = data.recommendation;

  const iconWrapper = document.getElementById('modal-icon-wrapper');
  const iconEl = document.getElementById('modal-icon');

  if (iconWrapper && iconEl) {
    iconWrapper.style.backgroundColor = data.color;
    iconEl.setAttribute('data-lucide', data.icon);
    initIcons();
  }

  backdrop?.classList.remove('opacity-0', 'pointer-events-none');
  card?.classList.remove('scale-95');
}

/**
 * Настройка взаимодействия со схемой Mermaid
 */
function setupDiagramInteractivity() {
  let zoomLevel = 1.6; // Крупный базовый масштаб
  const viewport = document.getElementById('diagram-viewport');
  if (viewport) viewport.style.transform = `scale(${zoomLevel})`;
  
  document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
    if (zoomLevel < 2.5) {
      zoomLevel += 0.25;
      viewport.style.transform = `scale(${zoomLevel})`;
    }
  });

  document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
    if (zoomLevel > 0.8) {
      zoomLevel -= 0.25;
      viewport.style.transform = `scale(${zoomLevel})`;
    }
  });

  document.getElementById('btn-reset-zoom')?.addEventListener('click', () => {
    zoomLevel = 1.6;
    viewport.style.transform = `scale(1.6)`;
  });

  const attemptBind = () => {
    bindMermaidNodeEvents();
  };
  setTimeout(attemptBind, 300);
  setTimeout(attemptBind, 800);
}

/**
 * Извлечение оригинального ID узлаиз DOM элемента Mermaid
 */
function extractNodeId(nodeEl) {
  const fullId = nodeEl.id || '';
  const textContent = nodeEl.textContent ? nodeEl.textContent.trim() : '';

  for (const key of Object.keys(funnelData)) {
    const parts = fullId.split('-');
    if (parts.includes(key)) {
      return key;
    }
  }

  for (const [key, item] of Object.entries(funnelData)) {
    if (textContent.includes(item.title) || textContent.includes(key)) {
      return key;
    }
  }

  if (textContent.includes('Трафик') && !textContent.includes('Источники')) return 'A';
  if (textContent.includes('оболочка')) return 'B';
  if (textContent.includes('Вход')) return 'C';
  if (textContent.includes('Прямая модель')) return 'D1';
  if (textContent.includes('посадочную')) return 'D2';
  if (textContent.includes('Бот') && !textContent.includes('Блогеры')) return 'E';
  if (textContent.includes('Сегментация')) return 'F';
  if (textContent.includes('Лёгкий')) return 'G1';
  if (textContent.includes('Углублённый')) return 'G2';
  if (textContent.includes('Прогрев')) return 'H';
  if (textContent.includes('Продажа')) return 'I';
  if (textContent.includes('Реклама')) return 'T1';
  if (textContent.includes('Блогеры')) return 'T2';
  if (textContent.includes('Органика')) return 'T3';
  if (textContent.includes('Посевы')) return 'T4';

  return null;
}

/**
 * Привязка событий клика к узлам Mermaid SVG (Вызов модального окна)
 */
function bindMermaidNodeEvents() {
  const nodes = document.querySelectorAll('.mermaid .node, .mermaid .nodeGroup');
  
  nodes.forEach(node => {
    const nodeId = extractNodeId(node);
    if (!nodeId || !funnelData[nodeId]) return;

    node.style.cursor = 'pointer';

    node.removeEventListener('click', node._clickHandler);
    node._clickHandler = () => openNodeModal(nodeId);
    node.addEventListener('click', node._clickHandler);
  });
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      flowchart: {
        curve: 'basis',
        htmlLabels: true,
        useMaxWidth: false // Позволяет делать схему крупной
      }
    });
  }
  renderDashboard();
});
