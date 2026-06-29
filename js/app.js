// js/app.js
import { initIcons } from './utils.js';

// База данных для каждого блока воронки
const funnelData = {
  'T1': {
    title: 'Реклама',
    subtitle: 'Таргет VK Ads',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'target',
    summary: 'Официальная реклама VK Ads, маркет-платформа и контекстные кампании.',
    details: 'Прямой запуск объявлений на целевые аудитории (по интересам, ключевым словам, ретаргетинг). Главная задача — обеспечить максимальный CTR и низкую стоимость клика (CPC).',
    recommendation: 'Используйте динамические креативы и сегментируйте аудитории по боли.'
  },
  'T2': {
    title: 'Блогеры',
    subtitle: 'Инфлюенс-маркетинг',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'users',
    summary: 'Прямые интеграции и нативные обзоры у тематических лидеров мнений.',
    details: 'Привлечение тёплого лояльного трафика через рекомендации авторов контента. Высокий уровень доверия и вовлеченности.',
    recommendation: 'Проверяйте вовлеченность (ER) паблика и используйте персональные промокоды.'
  },
  'T3': {
    title: 'Органика',
    subtitle: 'SEO & VK Клипы',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'sparkles',
    summary: 'VK Клипы, умная лента рекомендаций, виральные статьи и SEO.',
    details: 'Бесплатный охват за счет качественного регулярного контента. Алгоритмы VK продвигают интересные клипы и уникальные лонгриды на новую аудиторию.',
    recommendation: 'Публикуйте от 3 до 5 Клипов в неделю с призывом забрать бонус в шапке профиля.'
  },
  'T4': {
    title: 'Посевы',
    subtitle: 'Посты в пабликах',
    category: 'Источники трафика',
    color: '#10b981',
    badge: 'Трафик',
    icon: 'share-2',
    summary: 'Публикация рекламных постов в тематических сообществах VK.',
    details: 'Закупка рекламных мест напрямую у администраторов групп или через биржу. Отлично подходит для массовых и нишевых продуктов.',
    recommendation: 'Анализируйте часовой график активности сообществ перед выходом поста.'
  },
  'A': {
    title: 'Трафик',
    subtitle: 'Центральный хаб',
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
    subtitle: 'Упаковка группы',
    category: 'VK система',
    color: '#0077ff',
    badge: 'VK Экосистема',
    icon: 'layout',
    summary: 'Первое визуальное касание: меню, виджеты, обложка и товары группы.',
    details: 'Упаковка паблика VK. Посетитель за 3 секунды должен понять, чем вы полезны, и увидеть четкий призыв к действию (CTA) в меню или виджете.',
    recommendation: 'Используйте яркие динамические обложки и лаконичные кнопки меню.'
  },
  'C': {
    title: 'Вход',
    subtitle: 'Точка распределения',
    category: 'Логический шлюз',
    color: '#f59e0b',
    badge: 'Развилка',
    icon: 'git-branch',
    summary: 'Выбор оптимального пути конверсии для пользователя.',
    details: 'Система определяет, отправить пользователя сразу в чат-бот или на полноценный конверсионный мини-лендинг в Senler / Mini App.',
    recommendation: 'Тестируйте A/B сплит для сравнения конверсий обоих путей.'
  },
  'D1': {
    title: 'Прямая модель',
    subtitle: 'Прямой чат с ботом',
    category: 'Сегментация',
    color: '#f59e0b',
    badge: 'Прямой путь',
    icon: 'arrow-right-circle',
    summary: 'Мгновенный старт диалога с ботом по кодовому слову или кнопке.',
    details: 'Минимальное трение. Пользователь сразу попадает в личные сообщения группы без лишних шагов. Максимальная конверсия из клика в сообщение.',
    recommendation: 'Используйте короткие кодовые слова в рекламе (например, "СТАРТ").'
  },
  'D2': {
    title: 'Через посадочную',
    subtitle: 'Подписная Senler / Mini App',
    category: 'Сегментация',
    color: '#f59e0b',
    badge: 'Лендинг',
    icon: 'monitor',
    summary: 'Подписка через подписную страницу Senler / VK Mini App.',
    details: 'Предоставляет больше информации и прогрева перед подпиской. Позволяет собрать дополнительные данные о пользователе и сформировать завышенное ожидание от продукта.',
    recommendation: 'Размещайте отзывы и видео-превью прямо на посадочной странице.'
  },
  'E': {
    title: 'Бот',
    subtitle: 'Приветственный сценарий',
    category: 'Автоматизация',
    color: '#8b5cf6',
    badge: 'Ядро системы',
    icon: 'bot',
    summary: 'Автоматический сценарий взаимодействия в личных сообщениях.',
    details: 'Приветствие, выдача первого обещания, вовлечение в диалог через интерактивные кнопки. Бот работает 24/7 без участия менеджера.',
    recommendation: 'Делайте сообщения короткими (до 300 символов) и используйте переменные имени.'
  },
  'F': {
    title: 'Сегментация',
    subtitle: 'Квалификация лида',
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
    subtitle: 'Быстрый бонус / Чек-лист',
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
    subtitle: 'Мини-курс / Вебинар',
    category: 'Продукт',
    color: '#f59e0b',
    badge: 'Контент-погружение',
    icon: 'book-open',
    summary: 'Мини-курс, запись вебинара, разбор кейса или тест-драйв.',
    details: 'Предназначен для холодного или сомневающегося трафика. Требует больше времени на изучение, но создает глубокое доверие.',
    recommendation: 'Разбивайте мини-курс на короткие уроки по 5 минут.'
  },
  'H': {
    title: 'Прогрев',
    subtitle: 'Автоворонка писем',
    category: 'Воронка продаж',
    color: '#f59e0b',
    badge: 'Автоворонка',
    icon: 'flame',
    summary: 'Серия ценностных писем, демонстрация результатов и кейсов.',
    details: 'Последовательная цепочка сообщений, закрывающая основные возражения (дорого, не сработает, нет времени). Формирует острое желание приобрести основной продукт.',
    recommendation: 'Используйте элемент сторителлинга и ограничивайте время действия спецпредложений.'
  },
  'I': {
    title: 'Продажа',
    subtitle: 'Конверсия & Оплата',
    color: '#ef4444',
    badge: 'Финальный этап',
    icon: 'shopping-bag',
    summary: 'Прямой оффер, ссылка на оплату, работа менеджера продаж.',
    details: 'Ключевая цель всей воронки. Перевод подогретого потенциального клиента в статус оплатившего покупателя.',
    recommendation: 'Подключите виджет быстрой оплаты VK Pay / эквайринг и автовыдачу доступа.'
  }
};

/**
 * Рендер интерфейса воронки с помощью чистых аккуратных HTML-карточек
 */
function renderDashboard() {
  const appEl = document.getElementById('app');
  
  appEl.innerHTML = `
    <!-- Header -->
    <header class="border-b border-white/10 bg-[#0d1322]/90 backdrop-blur-md shrink-0">
      <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-vk-blue p-0.5 flex items-center justify-center shadow">
            <div class="w-full h-full bg-[#090d16] rounded-[6px] flex items-center justify-center">
              <i data-lucide="workflow" class="w-4 h-4 text-indigo-400"></i>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-base font-extrabold tracking-tight text-white font-heading">VK-ВОРОНКА</h1>
            <span class="px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">Neat Pixel-Perfect Board</span>
          </div>
        </div>

        <div class="text-xs text-slate-400 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Нажмите на любой блок для просмотра пояснений</span>
        </div>
      </div>
    </header>

    <!-- Main Board Workspace -->
    <main class="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col items-center justify-start overflow-y-auto">
      
      <!-- Legend -->
      <div class="w-full max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl glass-card text-xs">
        <div class="flex items-center gap-2 font-bold uppercase text-slate-300 tracking-wider">
          <i data-lucide="layers" class="w-4 h-4 text-indigo-400"></i>
          <span>Легенда:</span>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Трафик
          </span>
          <span class="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-blue-400"></span> VK Оболочка
          </span>
          <span class="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-purple-400"></span> Бот / Ядро
          </span>
          <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span> Сегментация
          </span>
          <span class="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span> Продажи
          </span>
        </div>
      </div>

      <!-- Funnel Board Flow -->
      <div class="w-full max-w-4xl flex flex-col items-center gap-5 relative py-2">
        
        <!-- LEVEL 1: Источники Трафика Subgraph Group -->
        <div class="w-full rounded-3xl p-5 border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-md relative">
          <span class="absolute -top-3 left-6 px-3 py-0.5 text-xs font-black uppercase tracking-widest bg-[#090d16] text-emerald-400 border border-emerald-500/30 rounded-md">
            Источники трафика
          </span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${renderCard('T1')}
            ${renderCard('T2')}
            ${renderCard('T3')}
            ${renderCard('T4')}
          </div>
        </div>

        <!-- Arrow down -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-emerald-400"></i></div>

        <!-- LEVEL 2: Трафик -->
        <div class="w-full sm:w-72">
          ${renderCard('A')}
        </div>

        <!-- Arrow down -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-blue-400"></i></div>

        <!-- LEVEL 3: VK система Subgraph Group -->
        <div class="w-full max-w-md rounded-3xl p-5 border border-blue-500/20 bg-blue-950/10 backdrop-blur-md relative">
          <span class="absolute -top-3 left-6 px-3 py-0.5 text-xs font-black uppercase tracking-widest bg-[#090d16] text-blue-400 border border-blue-500/30 rounded-md">
            VK система
          </span>
          <div class="w-full">
            ${renderCard('B')}
          </div>
        </div>

        <!-- Arrow down -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-amber-400"></i></div>

        <!-- LEVEL 4: Вход (Развилка) -->
        <div class="w-full sm:w-64">
          ${renderCard('C')}
        </div>

        <!-- Arrow down split -->
        <div class="arrow-down"><i data-lucide="git-fork" class="w-5 h-5 text-amber-400 rotate-180"></i></div>

        <!-- LEVEL 5: Прямая модель & Через посадочную -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
          ${renderCard('D1')}
          ${renderCard('D2')}
        </div>

        <!-- Arrow down merge -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-purple-400"></i></div>

        <!-- LEVEL 6: Ядро Subgraph Group (Бот & Сегментация) -->
        <div class="w-full max-w-md rounded-3xl p-5 border border-purple-500/20 bg-purple-950/10 backdrop-blur-md relative flex flex-col gap-4">
          <span class="absolute -top-3 left-6 px-3 py-0.5 text-xs font-black uppercase tracking-widest bg-[#090d16] text-purple-400 border border-purple-500/30 rounded-md">
            Ядро
          </span>
          ${renderCard('E')}
          <div class="arrow-down flex justify-center"><i data-lucide="arrow-down" class="w-4 h-4 text-purple-400"></i></div>
          ${renderCard('F')}
        </div>

        <!-- Arrow down split -->
        <div class="arrow-down"><i data-lucide="git-fork" class="w-5 h-5 text-amber-400 rotate-180"></i></div>

        <!-- LEVEL 7: Лёгкий лид-магнит & Углублённый продукт -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
          ${renderCard('G1')}
          ${renderCard('G2')}
        </div>

        <!-- Arrow down merge -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-amber-400"></i></div>

        <!-- LEVEL 8: Прогрев -->
        <div class="w-full sm:w-72">
          ${renderCard('H')}
        </div>

        <!-- Arrow down -->
        <div class="arrow-down"><i data-lucide="arrow-down" class="w-5 h-5 text-rose-500"></i></div>

        <!-- LEVEL 9: Продажа -->
        <div class="w-full sm:w-72">
          ${renderCard('I')}
        </div>

      </div>
    </main>

    <!-- LARGE EXPLANATION MODAL DIALOG (Readability guaranteed) -->
    <div id="node-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="node-modal-card" class="glass-card bg-[#0f172a]/98 border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
        
        <button id="modal-close-btn" class="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <div class="flex items-center justify-between mb-4 pr-10">
          <span id="modal-badge" class="px-3.5 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-lg bg-indigo-500/25 text-indigo-300 border border-indigo-500/40">
            Категория
          </span>
          <span id="modal-id-tag" class="text-xs sm:text-sm font-mono text-slate-300 font-bold bg-white/10 px-3 py-1 rounded-md">NODE_ID</span>
        </div>

        <div class="flex items-center gap-4 mb-6 pb-5 border-b border-white/10">
          <div id="modal-icon-wrapper" class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-xl">
            <i id="modal-icon" data-lucide="info" class="w-7 h-7 sm:w-8 sm:h-8"></i>
          </div>
          <div>
            <h3 id="modal-title" class="text-xl sm:text-2xl font-black text-white font-heading leading-tight">Название блока</h3>
            <p id="modal-category" class="text-xs sm:text-sm font-semibold text-indigo-400 mt-1">Подкатегория</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5 font-heading">КРАТКАЯ СУТЬ:</span>
            <p id="modal-summary" class="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">Пояснение блока</p>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-indigo-300 uppercase tracking-wider block mb-1.5 font-heading">ДЕТАЛИ И UX-РОЛЬ:</span>
            <p id="modal-details" class="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">Подробная информация о работе данного узла воронки.</p>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-100 shadow-lg">
            <div class="flex items-center gap-2 font-black text-emerald-400 mb-1.5 text-xs sm:text-sm uppercase tracking-wider font-heading">
              <i data-lucide="lightbulb" class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400"></i>
              <span>Рекомендация эксперта:</span>
            </div>
            <p id="modal-recommendation" class="text-sm sm:text-base font-medium leading-relaxed text-emerald-100">Практический совет по настройке конверсии.</p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button id="modal-ok-btn" class="px-7 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-extrabold rounded-xl shadow-lg transition">
            Закрыть
          </button>
        </div>

      </div>
    </div>
  `;

  initIcons();
  setupModalEvents();
  setupCardClickEvents();
}

/**
 * Рендер акуратной чистой HTML-карточки для блока воронки
 */
function renderCard(id) {
  const data = funnelData[id];
  if (!data) return '';

  return `
    <div data-node-id="${id}" class="funnel-card group relative cursor-pointer p-4 rounded-2xl border transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5 shadow-lg select-none" style="border-color: ${data.color}; background: linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%);">
      <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md mb-0.5" style="background-color: ${data.color};">
        <i data-lucide="${data.icon}" class="w-4 h-4"></i>
      </div>
      <div class="font-extrabold text-white text-base sm:text-lg tracking-tight font-heading leading-snug group-hover:text-indigo-300 transition-colors">
        ${data.title}
      </div>
      <div class="text-xs text-slate-400 font-medium">
        ${data.subtitle}
      </div>
    </div>
  `;
}

function setupCardClickEvents() {
  document.querySelectorAll('.funnel-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-node-id');
      if (id) openNodeModal(id);
    });
  });
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

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
});
