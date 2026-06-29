// js/app.js
import { initIcons } from './utils.js';

// База данных для каждого блока воронки (Спокойные классические цвета VK)
const funnelData = {
  'T1': {
    title: 'Реклама',
    subtitle: 'Таргет VK Ads',
    category: 'Источники трафика',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#059669',
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
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#059669',
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
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#059669',
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
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#059669',
    badge: 'Трафик',
    icon: 'share-2',
    summary: 'Публикация рекламных постов в тематических сообществах VK.',
    details: 'Закупка рекламных мест напрямую у администраторов групп или через биржу. Отлично подходит для массовых и нишевых продуктов.',
    recommendation: 'Анализируйте часовой график активности сообществ перед выходом поста.'
  },
  'A': {
    title: 'Трафик',
    subtitle: 'Центральный хаб сбора',
    category: 'Точка сбора',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: '#10b981',
    badge: 'Главный узел',
    icon: 'zap',
    summary: 'Агрегатор всех входящих потоков целевой аудитории.',
    details: 'Сюда стекаются все рекламные и органические касания. Здесь измеряется суммарный объём входящего потока и средняя стоимость привлечения пользователя (CAC).',
    recommendation: 'Настройте UTМ-метки для каждого источника для точной аналитики.'
  },
  'B': {
    title: 'VK входная оболочка',
    subtitle: 'Оформление группы VK',
    category: 'VK система',
    color: '#0077ff',
    bgColor: 'rgba(0, 119, 255, 0.15)',
    borderColor: '#0077ff',
    badge: 'VK Экосистема',
    icon: 'layout',
    summary: 'Первое визуальное касание: меню, виджеты, обложка и товары группы.',
    details: 'Упаковка паблика VK. Посетитель за 3 секунды должен понять, чем вы полезны, и увидеть четкий призыв к действию (CTA) в меню или виджете.',
    recommendation: 'Используйте яркие динамические обложки и лаконичные кнопки меню.'
  },
  'C': {
    title: 'Вход',
    subtitle: 'Логический шлюз развилки',
    category: 'Логический шлюз',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.15)',
    borderColor: '#d97706',
    badge: 'Развилка',
    icon: 'git-branch',
    summary: 'Выбор оптимального пути конверсии для пользователя.',
    details: 'Система определяет, отправить пользователя сразу в чат-бот или на полноценный конверсионный мини-лендинг в Senler / Mini App.',
    recommendation: 'Тестируйте A/B сплит для сравнения конверсий обоих путей.'
  },
  'D1': {
    title: 'Прямая модель',
    subtitle: 'Старт диалога в боте',
    category: 'Сегментация',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.1)',
    borderColor: '#d97706',
    badge: 'Прямой путь',
    icon: 'arrow-right-circle',
    summary: 'Мгновенный старт диалога с ботом по кодовому слову или кнопке.',
    details: 'Минимальное трение. Пользователь сразу попадает в личные сообщения группы без лишних шагов. Максимальная конверсия из клика в сообщение.',
    recommendation: 'Используйте короткие кодовые слова в рекламе (например, "СТАРТ").'
  },
  'D2': {
    title: 'Через посадочную',
    subtitle: 'Лендинг Senler / Mini App',
    category: 'Сегментация',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.1)',
    borderColor: '#d97706',
    badge: 'Лендинг',
    icon: 'monitor',
    summary: 'Подписка через подписную страницу Senler / VK Mini App.',
    details: 'Предоставляет больше информации и прогрева перед подпиской. Позволяет собрать дополнительные данные о пользователе и сформировать завышенное ожидание от продукта.',
    recommendation: 'Размещайте отзывы и видео-превью прямо на посадочной странице.'
  },
  'E': {
    title: 'Бот',
    subtitle: 'Приветствие и автоответы',
    category: 'Автоматизация',
    color: '#7c3aed',
    bgColor: 'rgba(124, 58, 237, 0.15)',
    borderColor: '#7c3aed',
    badge: 'Ядро системы',
    icon: 'bot',
    summary: 'Автоматический сценарий взаимодействия в личных сообщениях.',
    details: 'Приветствие, выдача первого обещания, вовлечение в диалог через интерактивные кнопки. Бот работает 24/7 без участия менеджера.',
    recommendation: 'Делайте сообщения короткими (до 300 символов) и используйте переменные имени.'
  },
  'F': {
    title: 'Сегментация',
    subtitle: 'Квалификация и опросы',
    category: 'Автоматизация',
    color: '#7c3aed',
    bgColor: 'rgba(124, 58, 237, 0.15)',
    borderColor: '#7c3aed',
    badge: 'Анализ',
    icon: 'filter',
    summary: 'Квалификация лида через опросы и выбор интересов.',
    details: 'Бот задает 1-3 вопроса для определения потребностей и уровня готовности к покупке. На основе ответов присваиваются метки (теги) в базе.',
    recommendation: 'Не перегружайте вопросами — 2 вопроса с кнопками выбора дают 90%+ прохождений.'
  },
  'G1': {
    title: 'Лёгкий лид-магнит',
    subtitle: 'Чек-лист / Шпаргалка',
    category: 'Продукт',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.1)',
    borderColor: '#d97706',
    badge: 'Быстрая польза',
    icon: 'gift',
    summary: 'Быстрый бонус: гайд, чек-лист, шаблон или шпаргалка.',
    details: 'Идеально для горячей аудитории, которой нужно быстрое решение проблемы. Повышает лояльность и доказывает экспертность.',
    recommendation: 'Давайте материал мгновенно в первом же сообщении после выбора.'
  },
  'G2': {
    title: 'Углублённый продукт',
    subtitle: 'Мини-курс / Тест-драйв',
    category: 'Продукт',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.1)',
    borderColor: '#d97706',
    badge: 'Контент-погружение',
    icon: 'book-open',
    summary: 'Мини-курс, запись вебинара, разбор кейса или тест-драйв.',
    details: 'Предназначен для холодного или сомневающегося трафика. Требует больше времени на изучение, но создает глубокое доверие.',
    recommendation: 'Разбивайте мини-курс на короткие уроки по 5 минут.'
  },
  'H': {
    title: 'Прогрев',
    subtitle: 'Контентная автоворонка',
    category: 'Воронка продаж',
    color: '#d97706',
    bgColor: 'rgba(217, 119, 6, 0.15)',
    borderColor: '#d97706',
    badge: 'Автоворонка',
    icon: 'flame',
    summary: 'Серия ценностных писем, демонстрация результатов и кейсов.',
    details: 'Последовательная цепочка сообщений, закрывающая основные возражения (дорого, не сработает, нет времени). Формирует острое желание приобрести основной продукт.',
    recommendation: 'Используйте элемент сторителлинга и ограничивайте время действия спецпредложений.'
  },
  'I': {
    title: 'Продажа',
    subtitle: 'Финал & Оплата',
    category: 'Конверсия',
    color: '#e11d48',
    bgColor: 'rgba(225, 29, 72, 0.15)',
    borderColor: '#e11d48',
    badge: 'Финальный этап',
    icon: 'shopping-bag',
    summary: 'Прямой оффер, ссылка на оплату, работа менеджера продаж.',
    details: 'Ключевая цель всей воронки. Перевод подогретого потенциального клиента в статус оплатившего покупателя.',
    recommendation: 'Подключите виджет быстрой оплаты VK Pay / эквайринг и автовыдачу доступа.'
  }
};

/**
 * Рендер спокойного интерфейса в строгом стиле VK
 */
function renderDashboard() {
  const appEl = document.getElementById('app');
  
  appEl.innerHTML = `
    <!-- Header в стиле VK -->
    <header class="border-b border-white/10 bg-[#0077ff] text-white shrink-0 shadow">
      <div class="max-w-6xl mx-auto px-4 h-13 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-white text-[#0077ff] font-extrabold text-base flex items-center justify-center shadow-sm tracking-tighter">
            VK
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-sm sm:text-base font-bold tracking-tight text-white font-heading">ВОРОНКА КОНВЕРСИИ</h1>
            <span class="px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase bg-white/20 text-white rounded-md border border-white/20">VK Style</span>
          </div>
        </div>

        <div class="text-xs text-white/90 font-medium flex items-center gap-2 bg-black/15 px-3 py-1 rounded-lg border border-white/10">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Нажмите на любой блок для пояснений</span>
        </div>
      </div>
    </header>

    <!-- Main Workspace -->
    <main class="flex-1 max-w-5xl w-full mx-auto px-4 py-5 flex flex-col items-center justify-start overflow-y-auto">
      
      <!-- Legend Bar -->
      <div class="w-full max-w-3xl mb-5 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl glass-card text-xs">
        <div class="flex items-center gap-2 font-bold uppercase text-slate-300 tracking-wider">
          <i data-lucide="layers" class="w-4 h-4 text-[#0077ff]"></i>
          <span>Категории:</span>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Трафик
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-[#0077ff]/15 text-[#38bdf8] border border-[#0077ff]/30 font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#0077ff]"></span> VK Система
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30 font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span> Бот / Ядро
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span> Сегментация
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span> Продажи
          </span>
        </div>
      </div>

      <!-- Funnel Board Flow -->
      <div class="w-full max-w-3xl flex flex-col items-center gap-2 relative py-1">
        
        <!-- LEVEL 1: Источники Трафика Subgraph Group -->
        <div class="w-full rounded-2xl p-4 border border-emerald-500/30 bg-slate-900/50 backdrop-blur-md relative shadow-md">
          <span class="absolute -top-3 left-5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#0077ff] text-white rounded-md shadow flex items-center gap-1.5">
            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Источники трафика
          </span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            ${renderCard('T1')}
            ${renderCard('T2')}
            ${renderCard('T3')}
            ${renderCard('T4')}
          </div>
        </div>

        <!-- STYLED DOWN ARROW (WITH GUARANTEED SVG ICON) -->
        ${renderCleanArrow('#10b981')}

        <!-- LEVEL 2: Трафик -->
        <div class="w-full sm:w-64">
          ${renderCard('A')}
        </div>

        <!-- STYLED DOWN ARROW -->
        ${renderCleanArrow('#0077ff')}

        <!-- LEVEL 3: VK система Subgraph Group -->
        <div class="w-full max-w-sm rounded-2xl p-4 border border-[#0077ff]/40 bg-slate-900/50 backdrop-blur-md relative shadow-md">
          <span class="absolute -top-3 left-5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#0077ff] text-white rounded-md shadow flex items-center gap-1.5">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> VK система
          </span>
          <div class="w-full pt-1">
            ${renderCard('B')}
          </div>
        </div>

        <!-- STYLED DOWN ARROW -->
        ${renderCleanArrow('#d97706')}

        <!-- LEVEL 4: Вход (Развилка) -->
        <div class="w-full sm:w-56">
          ${renderCard('C')}
        </div>

        <!-- STYLED SPLIT ARROW -->
        ${renderCleanSplitArrow('#d97706')}

        <!-- LEVEL 5: Прямая модель & Через посадочную -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
          ${renderCard('D1')}
          ${renderCard('D2')}
        </div>

        <!-- STYLED DOWN ARROW -->
        ${renderCleanArrow('#7c3aed')}

        <!-- LEVEL 6: Ядро Subgraph Group (Бот & Сегментация) -->
        <div class="w-full max-w-sm rounded-2xl p-4 border border-purple-500/40 bg-slate-900/50 backdrop-blur-md relative flex flex-col gap-2.5 shadow-md">
          <span class="absolute -top-3 left-5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#0077ff] text-white rounded-md shadow flex items-center gap-1.5">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i> Ядро системы
          </span>
          <div class="pt-1">${renderCard('E')}</div>
          ${renderCleanArrow('#7c3aed')}
          <div>${renderCard('F')}</div>
        </div>

        <!-- STYLED SPLIT ARROW -->
        ${renderCleanSplitArrow('#d97706')}

        <!-- LEVEL 7: Лёгкий лид-магнит & Углублённый продукт -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
          ${renderCard('G1')}
          ${renderCard('G2')}
        </div>

        <!-- STYLED DOWN ARROW -->
        ${renderCleanArrow('#d97706')}

        <!-- LEVEL 8: Прогрев -->
        <div class="w-full sm:w-64">
          ${renderCard('H')}
        </div>

        <!-- STYLED DOWN ARROW -->
        ${renderCleanArrow('#e11d48')}

        <!-- LEVEL 9: Продажа -->
        <div class="w-full sm:w-64">
          ${renderCard('I')}
        </div>

      </div>
    </main>

    <!-- MODAL DIALOG -->
    <div id="node-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="node-modal-card" class="glass-card bg-[#1e293b]/98 border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
        
        <button id="modal-close-btn" class="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="flex items-center justify-between mb-4 pr-10">
          <span id="modal-badge" class="px-3.5 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-lg bg-[#0077ff]/30 text-white border border-[#0077ff]/50 shadow">
            Категория
          </span>
          <span id="modal-id-tag" class="text-xs sm:text-sm font-mono text-slate-300 font-bold bg-white/10 px-3 py-1 rounded-md">NODE_ID</span>
        </div>

        <div class="flex items-center gap-4 mb-5 pb-4 border-b border-white/10">
          <div id="modal-icon-wrapper" class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-xl">
            <i id="modal-icon" data-lucide="info" class="w-7 h-7 sm:w-8 sm:h-8"></i>
          </div>
          <div>
            <h3 id="modal-title" class="text-xl sm:text-2xl font-black text-white font-heading leading-tight">Название блока</h3>
            <p id="modal-category" class="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-0.5">Подкатегория</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-4 sm:p-4.5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1 font-heading">КРАТКАЯ СУТЬ:</span>
            <p id="modal-summary" class="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">Пояснение блока</p>
          </div>

          <div class="p-4 sm:p-4.5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-[#38bdf8] uppercase tracking-wider block mb-1 font-heading">ДЕТАЛИ И UX-РОЛЬ:</span>
            <p id="modal-details" class="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">Подробная информация о работе данного узла воронки.</p>
          </div>

          <div class="p-4 sm:p-4.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-100 shadow-lg">
            <div class="flex items-center gap-2 font-black text-emerald-400 mb-1 text-xs sm:text-sm uppercase tracking-wider font-heading">
              <i data-lucide="lightbulb" class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400"></i>
              <span>Рекомендация эксперта:</span>
            </div>
            <p id="modal-recommendation" class="text-sm sm:text-base font-medium leading-relaxed text-emerald-100">Практический совет по настройке конверсии.</p>
          </div>
        </div>

        <div class="mt-6 pt-3.5 border-t border-white/10 flex justify-end">
          <button id="modal-ok-btn" class="px-7 py-2.5 sm:py-3 bg-[#0077ff] hover:bg-[#2688eb] text-white text-sm font-extrabold rounded-xl shadow-lg transition">
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
 * Рендер ЧЕТКОЙ АКТУАЛЬНОЙ СТРЕЛКИ ВНИЗ БЕЗ ПУСТЫХ КВАДРАТОВ
 */
function renderCleanArrow(color) {
  return `
    <div class="my-1 flex flex-col items-center justify-center">
      <div class="w-0.5 h-2.5 opacity-40 mb-0.5" style="background-color: ${color};"></div>
      <div class="w-8 h-8 rounded-lg border shadow-sm flex items-center justify-center backdrop-blur-md" style="border-color: ${color}; background-color: #1e293b; color: ${color};">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  `;
}

/**
 * Рендер ЧЕТКОЙ СТРЕЛКИ РАЗВИЛКИ
 */
function renderCleanSplitArrow(color) {
  return `
    <div class="my-1 flex flex-col items-center justify-center">
      <div class="w-0.5 h-2.5 opacity-40 mb-0.5" style="background-color: ${color};"></div>
      <div class="w-8 h-8 rounded-lg border shadow-sm flex items-center justify-center backdrop-blur-md" style="border-color: ${color}; background-color: #1e293b; color: ${color};">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8m0 0l-4-4m4 4l-4 4m0 6v-6" transform="rotate(90 12 12)" />
        </svg>
      </div>
    </div>
  `;
}

/**
 * Рендер карточки блока воронки
 */
function renderCard(id) {
  const data = funnelData[id];
  if (!data) return '';

  return `
    <div data-node-id="${id}" class="funnel-card group relative cursor-pointer p-3 sm:p-3.5 rounded-xl border transition-all duration-150 text-center flex flex-col items-center justify-center gap-1 shadow-md select-none" style="border-color: ${data.borderColor}; background: linear-gradient(135deg, ${data.bgColor} 0%, #1e293b 100%);">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-sm mb-0.5" style="background-color: ${data.color};">
        <i data-lucide="${data.icon}" class="w-3.5 h-3.5"></i>
      </div>
      <div class="font-bold text-white text-sm sm:text-base tracking-tight font-heading leading-tight group-hover:text-[#38bdf8] transition-colors">
        ${data.title}
      </div>
      <div class="text-[11px] text-slate-400 font-medium">
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
