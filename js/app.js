// js/app.js
import { initIcons } from './utils.js';

// Данные для каждого узла воронки (Информация в модальном окне)
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
 * Рендер 1-страничного веб-приложения
 */
function renderDashboard() {
  const appEl = document.getElementById('app');
  
  appEl.innerHTML = `
    <!-- Header -->
    <header class="border-b border-white/10 bg-[#0d1322]/90 backdrop-blur-md shrink-0">
      <div class="max-w-[1600px] mx-auto px-4 h-12 flex items-center justify-between">
        <div class="flex items-center space-x-2.5">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-vk-blue p-0.5 flex items-center justify-center shadow">
            <div class="w-full h-full bg-[#090d16] rounded-[5px] flex items-center justify-center">
              <i data-lucide="workflow" class="w-3.5 h-3.5 text-indigo-400"></i>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-sm font-extrabold tracking-tight text-white font-heading">VK-ВОРОНКА</h1>
            <span class="px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">Compact View</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-1">
          <button id="btn-zoom-in" title="Увеличить" class="btn-press p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition">
            <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
          </button>
          <button id="btn-zoom-out" title="Уменьшить" class="btn-press p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition">
            <i data-lucide="zoom-out" class="w-3.5 h-3.5"></i>
          </button>
          <button id="btn-reset-zoom" title="Сбросить масштаб" class="btn-press px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow transition flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
            <span>Сброс</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="flex-1 max-w-[1600px] w-full mx-auto px-4 py-2.5 flex flex-col overflow-hidden gap-2.5">
      
      <!-- Compact Legend Bar -->
      <div class="shrink-0 flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl glass-card">
        <div class="flex items-center gap-1 text-[11px] font-bold uppercase text-slate-300 tracking-wider">
          <i data-lucide="layers" class="w-3.5 h-3.5 text-indigo-400"></i>
          <span>Легенда:</span>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Трафик
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> VK Оболочка
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Бот / Ядро
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Сегментация
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/30 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Продажи
          </span>
        </div>
      </div>

      <!-- Diagram Card -->
      <section class="flex-1 glass-card rounded-xl p-3 relative overflow-hidden flex flex-col justify-between border border-white/10 min-h-0">
        
        <div class="shrink-0 flex items-center justify-between mb-1.5 pb-1.5 border-b border-white/10">
          <div class="flex items-center gap-1.5 text-xs font-bold text-slate-200 font-heading">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Схема Воронки VK</span>
          </div>
          <span class="text-[10px] text-slate-400 flex items-center gap-1">
            <i data-lucide="pointer" class="w-3 h-3 text-indigo-400"></i>
            Нажмите на блок для подробностей
          </span>
        </div>

        <!-- Mermaid Viewport Container -->
        <div id="diagram-viewport" class="mermaid-wrapper flex-1 overflow-hidden transition-transform duration-200">
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

classDef trafficStyle fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff;
classDef vkStyle fill:#1e3a8a,stroke:#0077ff,stroke-width:2px,color:#fff;
classDef botStyle fill:#4c1d95,stroke:#8b5cf6,stroke-width:2px,color:#fff;
classDef segStyle fill:#78350f,stroke:#f59e0b,stroke-width:2px,color:#fff;
classDef saleStyle fill:#831843,stroke:#ef4444,stroke-width:2.5px,color:#fff;

class T1,T2,T3,T4,A trafficStyle;
class B,VK vkStyle;
class E,F,BOT botStyle;
class C,D1,D2,G1,G2,H segStyle;
class I saleStyle;
          </div>
        </div>

        <!-- Footer status -->
        <div class="shrink-0 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
          <span>Логика воронки 100% сохранена</span>
          <span class="font-mono text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">v9.0 CLEAN COMPACT</span>
        </div>
      </section>
    </main>

    <!-- Modal Dialog Popup -->
    <div id="node-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="node-modal-card" class="glass-card bg-[#0f172a]/95 border border-white/15 rounded-2xl max-w-md w-full p-5 shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
        
        <button id="modal-close-btn" class="absolute top-3.5 right-3.5 p-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>

        <div class="flex items-center justify-between mb-2.5 pr-6">
          <span id="modal-badge" class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Категория
          </span>
          <span id="modal-id-tag" class="text-[10px] font-mono text-slate-400 font-bold bg-white/5 px-2 py-0.5 rounded">NODE_ID</span>
        </div>

        <div class="flex items-start gap-3 mb-3.5">
          <div id="modal-icon-wrapper" class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow">
            <i id="modal-icon" data-lucide="info" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 id="modal-title" class="text-base font-bold text-white font-heading leading-tight">Название блока</h3>
            <p id="modal-category" class="text-[11px] font-medium text-slate-400 mt-0.5">Подкатегория</p>
          </div>
        </div>

        <div class="space-y-2.5 text-xs">
          <div class="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Краткая суть:</span>
            <p id="modal-summary" class="text-slate-200 leading-relaxed font-normal">Пояснение блока</p>
          </div>

          <div class="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block mb-0.5">Детали и UX-роль:</span>
            <p id="modal-details" class="text-slate-300 leading-relaxed">Подробная информация о работе данного узла воронки.</p>
          </div>

          <div class="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
            <div class="flex items-center gap-1 font-bold text-emerald-400 mb-0.5">
              <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i>
              <span>Рекомендация:</span>
            </div>
            <p id="modal-recommendation" class="leading-relaxed">Практический совет по настройке конверсии.</p>
          </div>
        </div>

        <div class="mt-3.5 pt-2.5 border-t border-white/10 flex justify-end">
          <button id="modal-ok-btn" class="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg shadow transition">
            Закрыть
          </button>
        </div>

      </div>
    </div>
  `;

  initIcons();
  setupDiagramInteractivity();
  setupModalEvents();
}

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

function setupDiagramInteractivity() {
  let zoomLevel = 0.85; // Идеально компактный масштаб
  const viewport = document.getElementById('diagram-viewport');
  if (viewport) viewport.style.transform = `scale(${zoomLevel})`;
  
  document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
    if (zoomLevel < 2.0) {
      zoomLevel += 0.15;
      viewport.style.transform = `scale(${zoomLevel})`;
    }
  });

  document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
    if (zoomLevel > 0.4) {
      zoomLevel -= 0.15;
      viewport.style.transform = `scale(${zoomLevel})`;
    }
  });

  document.getElementById('btn-reset-zoom')?.addEventListener('click', () => {
    zoomLevel = 0.85;
    viewport.style.transform = `scale(0.85)`;
  });

  const attemptBind = () => {
    bindMermaidNodeEvents();
  };
  setTimeout(attemptBind, 250);
  setTimeout(attemptBind, 600);
}

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

document.addEventListener('DOMContentLoaded', () => {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        fontSize: '14px',
        fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
        nodePadding: '10px'
      },
      flowchart: {
        curve: 'basis',
        htmlLabels: true, // Идеально центрирует надписи без выпадания
        useMaxWidth: true
      }
    });
  }
  renderDashboard();
});
