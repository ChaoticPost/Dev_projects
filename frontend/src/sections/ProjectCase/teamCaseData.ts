import type { ProjectCase } from './projectCaseData';
import onco1 from '../../assets/images/team/onco-1.webp';
import onco2 from '../../assets/images/team/onco-2.webp';
import onco3 from '../../assets/images/team/onco-3.webp';
import mostransportLogin from '../../assets/images/team/mostransport-login.webp';
import mostransportRepo from '../../assets/images/team/mostransport-repo.webp';
import mostransportB from '../../assets/images/team/mostransport-b.webp';
import sechhackCover from '../../assets/images/team/sechhack-cover.webp';
import sechhackDoctor from '../../assets/images/team/sechhack-doctor.webp';
import sechhackWeb from '../../assets/images/team/sechhack-web.webp';
import lctAuthHero from '../../assets/images/team/lct-auth-hero.webp';
import lctResRepo from '../../assets/images/team/lct-resonance-repo.webp';
import lctResB from '../../assets/images/team/lct-res-b.webp';
import phystech from '../../assets/images/team/phystech.webp';
import phystechB from '../../assets/images/team/phystech-b.webp';
import phystechC from '../../assets/images/team/phystech-c.webp';
import sortCenter from '../../assets/images/team/sort-center.webp';
import sortCenterB from '../../assets/images/team/sort-center-b.webp';
import sortCenterC from '../../assets/images/team/sort-center-c.webp';
import maxHack from '../../assets/images/team/max-hack.webp';
import maxHackB from '../../assets/images/team/max-hack-b.webp';
import maxHackC from '../../assets/images/team/max-hack-c.webp';
import medai from '../../assets/images/team/medai.webp';
import medaiB from '../../assets/images/team/medai-b.webp';
import medaiC from '../../assets/images/team/medai-c.webp';
import energy from '../../assets/images/team/energy.webp';
import energyB from '../../assets/images/team/energy-b.webp';
import energyC from '../../assets/images/team/energy-c.webp';
import copilotRepo from '../../assets/images/team/copilot-repo.webp';
import copilot4 from '../../assets/images/team/copilot-4.webp';
import copilot5 from '../../assets/images/team/copilot-5.webp';
import maxVk from '../../assets/images/team/max-vk.webp';
import maxVkB from '../../assets/images/team/max-vk-b.webp';
import maxVkC from '../../assets/images/team/max-vk-c.webp';
import projectlabOutput from '../../assets/images/team/projectlab-output.webp';
import projectlab from '../../assets/images/team/projectlab.webp';
import projectlabB from '../../assets/images/team/projectlab-b.webp';
import lctFront from '../../assets/images/team/lct-front.webp';
import lctBack from '../../assets/images/team/lct-back.webp';
import lctFrontB from '../../assets/images/team/lct-front-b.webp';

const frontendTools = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'vite', label: 'Vite' },
  { id: 'python', label: 'Python' },
  { id: 'figma', label: 'Figma' },
  { id: 'git', label: 'Git' },
];

export const teamProjectCases: ProjectCase[] = [
  {
    id: 'onco',
    title: { ru: 'ОнкоПротокол+', en: 'OncoProtocol+' },
    subtitle: { ru: 'Медицинский AI-сервис', en: 'Medical AI service' },
    company: { ru: 'SechHack 2026', en: 'SechHack 2026' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'AI-инструмент для проверки онкологических протоколов по клиническим рекомендациям.',
      en: 'An AI tool that verifies oncology treatment protocols against clinical guidelines.',
    },
    context: {
      ru: 'Сервис сверяет план лечения с актуальными клиническими рекомендациями Минздрава РФ, NCCN и ESMO за секунды — без передачи персональных данных пациента. Результат оформляется как понятный список соответствий и замечаний со ссылками на источники.',
      en: 'The service checks a treatment plan against up-to-date clinical guidelines from the Russian Ministry of Health, NCCN, and ESMO within seconds — without transferring patient personal data. The result is a clear list of matches and remarks with source references.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/Onco_SechHack',
    languages: [
      { name: 'TypeScript', share: 73.4 },
      { name: 'Python', share: 25.5 },
      { name: 'Other', share: 1.1 },
    ],
    heroImage: onco1,
    problem: {
      ru: 'Онкологу приходится вручную сверять схему лечения с десятками страниц рекомендаций: это долго, и замечания легко пропустить. Ошибка в протоколе напрямую влияет на качество терапии.',
      en: 'An oncologist has to manually check a treatment protocol against dozens of guideline pages: it is slow and easy to miss remarks. A protocol error directly affects therapy quality.',
    },
    problemImage: onco2,
    processIntro: {
      ru: 'За время хакатона команда прошла путь от разбора клинических сценариев до работающего прототипа верификации.',
      en: 'During the hackathon the team went from analyzing clinical scenarios to a working verification prototype.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Сценарии', text: 'Разобрали реальные кейсы верификации: схемы ХТ, дозировки, обследования.' },
        { icon: 'design', title: 'Прототип', text: 'Спроектировали лендинг и интерфейс проверки с понятным вердиктом.' },
        { icon: 'journey', title: 'Демо', text: 'Собрали флоу «протокол → проверка → замечания» с источниками.' },
      ],
      en: [
        { icon: 'research', title: 'Scenarios', text: 'Analyzed real verification cases: chemo regimens, dosages, required tests.' },
        { icon: 'design', title: 'Prototype', text: 'Designed the landing and a verification interface with a clear verdict.' },
        { icon: 'journey', title: 'Demo', text: 'Built the "protocol → check → remarks" flow with source references.' },
      ],
    },
    solution: {
      ru: 'Пользователь загружает или вводит протокол, а система возвращает структурированный результат: что соответствует рекомендациям, а что нет — например, отсутствие ЭхоКГ перед курсом антрациклинов или пропущенное генетическое тестирование BRCA. Каждое замечание снабжено ссылкой на конкретный источник.',
      en: 'The user uploads or enters a protocol, and the system returns a structured result: what matches the guidelines and what does not — for example, a missing EchoCG before an anthracycline course or a skipped BRCA test. Every remark references a specific source.',
    },
    metrics: {
      ru: ['Время проверки одного протокола', 'Доля найденных несоответствий', 'Покрытие клинических рекомендаций', 'Количество ложных замечаний'],
      en: ['Time to verify one protocol', 'Share of detected mismatches', 'Guideline coverage', 'False-positive remark rate'],
    },
    insights: {
      ru: 'Главная ценность — скорость и прозрачность: врач видит не просто вердикт, а конкретные замечания со ссылками на рекомендации. Это превращает проверку протокола из рутинной сверки в инструмент второго мнения.',
      en: 'The main value is speed and transparency: the doctor sees not just a verdict but specific remarks with guideline references. It turns protocol checking from a routine chore into a second-opinion tool.',
    },
    showcaseMain: onco3,
  },
  {
    id: 'mostransport',
    title: { ru: 'MosTransport', en: 'MosTransport' },
    subtitle: { ru: 'Транспортная аналитика', en: 'Transport analytics' },
    company: { ru: 'Хакатон МосТранспорт 2026', en: 'MosTransport 2026 hackathon' },
    role: { ru: 'Frontend Developer, капитан команды', en: 'Frontend Developer, team captain' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Веб-приложение для прогноза пассажиропотока трамваев и оптимизации расписания.',
      en: 'A web app for forecasting tram passenger flow and optimizing schedules.',
    },
    context: {
      ru: 'Монорепозиторий решения для Мосгортранса: backend на Python, frontend на TypeScript, слой данных и инфраструктура. Система анализирует исторические данные о поездках и строит прогноз загрузки маршрутов по часам.',
      en: 'A monorepo solution for Mosgortrans: Python backend, TypeScript frontend, data layer, and infrastructure. The system analyzes historical trip data and forecasts route load by hour.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/MosTransport_hack26',
    languages: [
      { name: 'TypeScript', share: 61.4 },
      { name: 'Python', share: 30.7 },
      { name: 'Other', share: 7.9 },
    ],
    heroImage: mostransportLogin,
    problem: {
      ru: 'Перевозчику нужно планировать выпуск и интервалы движения по реальному спросу, а не «на глаз». Без прогноза пассажиропотока трамваи либо едут переполненными, либо тратят ресурсы впустую.',
      en: 'The transit operator needs to plan fleet deployment and headways by real demand rather than guesswork. Without a passenger-flow forecast, trams run either overcrowded or half-empty.',
    },
    problemImage: mostransportRepo,
    processIntro: {
      ru: 'Команда разделилась на data- и frontend-направления и собрала полный цикл: от данных к интерфейсу диспетчера.',
      en: 'The team split into data and frontend tracks and built the full cycle: from data to the dispatcher interface.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Данные', text: 'Разобрали выгрузки по поездкам и остановкам, выбрали признаки для прогноза.' },
        { icon: 'roles', title: 'Модель', text: 'Построили прогноз пассажиропотока по маршрутам и часам суток.' },
        { icon: 'design', title: 'Интерфейс', text: 'Спроектировали дашборд с картой загрузки и рекомендациями по расписанию.' },
      ],
      en: [
        { icon: 'research', title: 'Data', text: 'Explored trip and stop datasets, selected features for the forecast.' },
        { icon: 'roles', title: 'Model', text: 'Built a passenger-flow forecast per route and hour of day.' },
        { icon: 'design', title: 'Interface', text: 'Designed a dashboard with a load map and schedule recommendations.' },
      ],
    },
    solution: {
      ru: 'Диспетчер видит прогноз пассажиропотока по маршрутам и времени суток, сравнивает его с текущим расписанием и получает рекомендации: где усилить выпуск, а где можно сократить интервалы без потери качества.',
      en: 'The dispatcher sees the passenger-flow forecast per route and hour, compares it with the current schedule, and gets recommendations: where to add runs and where headways can be safely reduced.',
    },
    metrics: {
      ru: ['Точность прогноза пассажиропотока', 'Покрытие маршрутной сети', 'Время построения прогноза'],
      en: ['Passenger-flow forecast accuracy', 'Route network coverage', 'Forecast computation time'],
    },
    insights: {
      ru: 'Ценность продукта — в связке модели и интерфейса: прогноз сам по себе не помогает диспетчеру, пока не превращён в понятные рекомендации по расписанию.',
      en: 'The product value is in the model–interface pairing: a forecast alone does not help a dispatcher until it becomes clear schedule recommendations.',
    },
    showcaseMain: mostransportB,
  },
  {
    id: 'sechhack',
    title: { ru: 'Клинический компас', en: 'Clinical Compass' },
    subtitle: { ru: 'Цифровой клинический ассистент', en: 'Digital clinical assistant' },
    company: { ru: 'Sechenov×MIPT хакатон', en: 'Sechenov×MIPT hackathon' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Цифровой ассистент для врачей и пациентов с тревожно-депрессивными симптомами.',
      en: 'A digital assistant for doctors and patients with anxiety and depressive symptoms.',
    },
    context: {
      ru: 'Экосистема из трёх частей: веб-кабинет врача, мобильное приложение пациента и экраны клиники. В прототипе — 56 экранов пациента, 12 экранов врача и кликабельные сценарии: трекинг настроения и сна, опросники, чат с врачом, экран срочной помощи.',
      en: 'A three-part ecosystem: a doctor web cabinet, a patient mobile app, and clinic screens. The prototype includes 56 patient screens, 12 doctor screens, and clickable flows: mood and sleep tracking, questionnaires, doctor chat, and an emergency screen.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/SechHack_26',
    languages: [
      { name: 'TypeScript', share: 55.7 },
      { name: 'Python', share: 31.2 },
      { name: 'CSS', share: 13.8 },
      { name: 'Other', share: 0.4 },
    ],
    heroImage: sechhackCover,
    problem: {
      ru: 'Пациенту с тревожно-депрессивными симптомами трудно описать состояние словами — а врач между визитами не видит динамику. Опросники существуют отдельно от дневника состояния, и кризисные сигналы легко пропускаются.',
      en: 'A patient with anxiety or depressive symptoms struggles to describe their state in words — and the doctor sees no dynamics between visits. Questionnaires exist separately from the condition diary, so crisis signals get missed.',
    },
    problemImage: sechhackDoctor,
    processIntro: {
      ru: 'Прототип строился вокруг правила «один экран — одно действие» и сценариев реальных визитов.',
      en: 'The prototype was built around a "one screen — one action" rule and real visit scenarios.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Клинические сценарии', text: 'Разобрали путь пациента: от первичной оценки до повторных опросников и кризисных сигналов.' },
        { icon: 'design', title: 'Прототип v2', text: 'Отметка состояния в 3 шага, симптомы кнопками, шкала настроения с пояснениями.' },
        { icon: 'journey', title: 'Связка ролей', flow: ['Пациент', 'Отметка', 'Алерт', 'Врач', 'Решение'] },
      ],
      en: [
        { icon: 'research', title: 'Clinical scenarios', text: 'Mapped the patient journey: from first assessment to repeat questionnaires and crisis signals.' },
        { icon: 'design', title: 'Prototype v2', text: 'Three-step check-in, symptom buttons, mood scale with explanations.' },
        { icon: 'journey', title: 'Role flow', flow: ['Patient', 'Check-in', 'Alert', 'Doctor', 'Decision'] },
      ],
    },
    solution: {
      ru: 'Пациент отмечает состояние за три коротких шага, выбирает симптомы кнопками — это помогает при алекситимии, когда сложно формулировать. Врач перед визитом получает выдержки из дневника, ОХЛП и анамнеза, а критические ответы (например, вопрос 9 PHQ-9) сразу уходят в алерты.',
      en: 'The patient marks their state in three short steps and picks symptoms via buttons — helpful for alexithymia, when wording is hard. Before a visit the doctor gets excerpts from the diary, lab results, and history, while critical answers (e.g. PHQ-9 question 9) go straight to alerts.',
    },
    metrics: {
      ru: ['Время ежедневной отметки', 'Регулярность заполнения дневника', 'Время реакции врача на алерт', 'Полнота отчёта перед визитом'],
      en: ['Daily check-in time', 'Diary completion regularity', 'Doctor alert response time', 'Pre-visit report completeness'],
    },
    insights: {
      ru: 'Ключевой инсайт — отделить опросники от дневника и сделать отметку максимально короткой: три шага вместо длинной анкеты. Чем меньше трения на стороне пациента, тем больше данных получает врач.',
      en: 'Key insight — separate questionnaires from the diary and make check-ins as short as possible: three steps instead of a long form. The less friction on the patient side, the more data the doctor gets.',
    },
    showcaseMain: sechhackWeb,
  },
  {
    id: 'lct-resonance',
    title: { ru: 'LCT Resonance', en: 'LCT Resonance' },
    subtitle: { ru: 'Платформа стройконтроля', en: 'Construction control platform' },
    company: { ru: 'ЛЦТ — Лидеры цифровой трансформации', en: 'LCT — Digital Transformation Leaders' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Платформа для контроля хода строительных проектов.',
      en: 'A platform for monitoring construction project progress.',
    },
    context: {
      ru: 'Решение для трека стройконтроля: мониторинг объектов, этапы работ, отчётность и роли участников. Команда подготовила архитектуру сервиса и интерфейсные экраны — от авторизации до рабочих дашбордов.',
      en: 'A construction-control track solution: site monitoring, work stages, reporting, and participant roles. The team produced the service architecture and UI screens — from sign-in to working dashboards.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/LCT_Resonance',
    languages: [
      { name: 'Python', share: 44.8 },
      { name: 'TypeScript', share: 44.7 },
      { name: 'CSS', share: 9.2 },
      { name: 'Other', share: 1.3 },
    ],
    heroImage: lctAuthHero,
    problem: {
      ru: 'Контроль стройки размазан по отчётам, таблицам и мессенджерам: статус объекта и отставания по этапам сложно увидеть вовремя, а ответственность теряется между участниками.',
      en: 'Construction control is scattered across reports, spreadsheets, and messengers: site status and stage delays are hard to see in time, and responsibility gets lost between participants.',
    },
    problemImage: lctResRepo,
    processIntro: {
      ru: 'Работа шла от предметной области — как устроен контроль объекта — к архитектуре и экранам сервиса.',
      en: 'Work went from the domain — how site control actually works — to service architecture and screens.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Предметка', text: 'Изучили процессы стройконтроля: этапы, отчёты, роли заказчика и подрядчика.' },
        { icon: 'roles', title: 'Архитектура', text: 'Спроектировали структуру сервиса и модель данных объектов и этапов.' },
        { icon: 'design', title: 'Экраны', text: 'Собрали интерфейсы кабинета, карточек объектов и отчётности.' },
      ],
      en: [
        { icon: 'research', title: 'Domain', text: 'Studied construction-control processes: stages, reports, client and contractor roles.' },
        { icon: 'roles', title: 'Architecture', text: 'Designed the service structure and data model for sites and stages.' },
        { icon: 'design', title: 'Screens', text: 'Built cabinet, site-card, and reporting interfaces.' },
      ],
    },
    solution: {
      ru: 'Единый кабинет: карточки объектов со статусами этапов, отчётность по ходу работ и понятное распределение ролей. Контролирующий видит отставания до того, как они станут проблемой.',
      en: 'A single cabinet: site cards with stage statuses, work progress reporting, and a clear role distribution. The inspector sees delays before they become a problem.',
    },
    insights: {
      ru: 'В стройконтроле ценность даёт не отдельный отчёт, а единая картина по всем объектам: статусы этапов и ответственные в одном месте сокращают время реакции на отставания.',
      en: 'In construction control the value is not a single report but a unified picture across all sites: stage statuses and owners in one place shorten reaction time to delays.',
    },
    showcaseMain: lctResB,
  },
  {
    id: 'phystech',
    title: { ru: 'Phystech.Answer', en: 'Phystech.Answer' },
    subtitle: { ru: 'RAG-ассистент', en: 'RAG assistant' },
    company: { ru: 'Внутренний проект команды', en: 'Internal team project' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'python', label: 'Python' },
      { id: 'git', label: 'Git' },
    ],
    timeline: '2025',
    description: {
      ru: 'RAG-ассистент по внутренним регламентам МФТИ, работающий в закрытом контуре.',
      en: 'A RAG assistant for MIPT internal regulations, running fully on-premise.',
    },
    context: {
      ru: 'Система отвечает на вопросы сотрудников по внутренним документам института. Backend на Go, PostgreSQL, OCR для документов, гибридный поиск с реранкингом и валидацией цитат; локальная LLM через Ollama и развёртывание через Docker Compose — без внешних API.',
      en: 'The system answers staff questions using the institute’s internal documents. Go backend, PostgreSQL, document OCR, hybrid search with reranking and citation validation; local LLM via Ollama, deployed with Docker Compose — no external APIs.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/Phystech.Answer',
    languages: [
      { name: 'Go', share: 48.4 },
      { name: 'TypeScript', share: 44.2 },
      { name: 'CSS', share: 5.8 },
      { name: 'Other', share: 1.6 },
    ],
    heroImage: phystech,
    problem: {
      ru: 'Сотруднику сложно найти точный ответ в сотнях страниц регламентов и приказов. Облачные LLM использовать нельзя — внутренние документы нельзя отправлять во внешние сервисы.',
      en: 'Staff struggle to find precise answers across hundreds of pages of regulations and orders. Cloud LLMs are off-limits — internal documents cannot leave the perimeter.',
    },
    problemImage: phystechB,
    processIntro: {
      ru: 'Проект строился вокруг конвейера «документ → ответ с цитатой» и требования полной локальности.',
      en: 'The project was built around a "document → cited answer" pipeline and the full on-premise requirement.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Корпус документов', text: 'Собрали регламенты и приказы, настроили OCR и разметку чанков.' },
        { icon: 'roles', title: 'Поиск', flow: ['Вопрос', 'Гибридный поиск', 'Реранкер', 'LLM', 'Цитата'] },
        { icon: 'design', title: 'Интерфейс', text: 'Чат с ответами и ссылками на конкретные пункты документов.' },
      ],
      en: [
        { icon: 'research', title: 'Document corpus', text: 'Collected regulations and orders, set up OCR and chunk markup.' },
        { icon: 'roles', title: 'Search', flow: ['Question', 'Hybrid search', 'Reranker', 'LLM', 'Citation'] },
        { icon: 'design', title: 'Interface', text: 'Chat with answers linked to exact document clauses.' },
      ],
    },
    solution: {
      ru: 'Локальный RAG-конвейер: документы проходят OCR и чанкинг, запрос идёт через гибридный поиск и реранкер, а LLM формирует ответ только по найденным фрагментам с обязательными цитатами. Валидация цитат отсекает выдуманные ссылки на регламенты.',
      en: 'A local RAG pipeline: documents go through OCR and chunking, the query passes hybrid search and a reranker, and the LLM composes an answer strictly from retrieved fragments with mandatory citations. Citation validation filters out invented references.',
    },
    metrics: {
      ru: ['Доля ответов с валидными цитатами', 'Точность попадания в нужный пункт регламента', 'Время ответа на вопрос'],
      en: ['Share of answers with valid citations', 'Accuracy of hitting the right clause', 'Answer latency'],
    },
    insights: {
      ru: 'В закрытом контуре главное — доверие к ответу: обязательные цитаты и их валидация важнее «умности» модели. Пользователь принимает ответ только когда может проверить источник.',
      en: 'On-premise, the key is answer trust: mandatory citations and their validation matter more than model cleverness. Users accept an answer only when they can verify the source.',
    },
    showcaseMain: phystechC,
  },
  {
    id: 'sort-center',
    title: { ru: 'Sort Center Simulator', en: 'Sort Center Simulator' },
    subtitle: { ru: 'Симулятор + SCM-платформа', en: 'Simulator + SCM platform' },
    company: { ru: 'Внутренний продукт Resonance', en: 'Resonance internal product' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Монорепозиторий двух связанных продуктов: симулятор сортировочного центра и SCM-платформа.',
      en: 'A monorepo of two related products: a sorting-center simulator and an SCM platform.',
    },
    context: {
      ru: 'Визуальная инженерная платформа: React-frontend, FastAPI-backend, PostgreSQL и движок симуляции. SCM-часть покрывает организации, семь ролей с permissions и демо-поставки — от планирования до исполнения.',
      en: 'A visual engineering platform: React frontend, FastAPI backend, PostgreSQL, and a simulation engine. The SCM part covers organizations, seven permissioned roles, and demo shipments — from planning to execution.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/sort-center-simulator',
    languages: [
      { name: 'TypeScript', share: 74.1 },
      { name: 'Python', share: 23.4 },
      { name: 'Other', share: 2.5 },
    ],
    heroImage: sortCenter,
    problem: {
      ru: 'Инженеру нужно быстро проверять конфигурации сортцентра и управлять цепочками поставок. Без единого инструмента расчёты и документооборот живут в разрозненных таблицах и ломаются на стыках.',
      en: 'An engineer needs to quickly validate sorting-center configurations and manage supply chains. Without a single tool, calculations and paperwork live in scattered spreadsheets and break at the seams.',
    },
    problemImage: sortCenterB,
    processIntro: {
      ru: 'Платформа развивалась вокруг двух сценариев: моделирование сортцентра и управление поставками.',
      en: 'The platform evolved around two scenarios: sorting-center modeling and shipment management.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Домен', text: 'Разобрали технологические цепочки сортировки и процессы SCM.' },
        { icon: 'roles', title: 'Платформа', text: 'Спроектировали проекты, схемы, организации и ролевую модель доступа.' },
        { icon: 'journey', title: 'Симуляция', flow: ['Схема', 'Параметры', 'Запуск', 'Результаты'] },
      ],
      en: [
        { icon: 'research', title: 'Domain', text: 'Mapped sorting process chains and SCM workflows.' },
        { icon: 'roles', title: 'Platform', text: 'Designed projects, schemes, organizations, and the role access model.' },
        { icon: 'journey', title: 'Simulation', flow: ['Scheme', 'Parameters', 'Run', 'Results'] },
      ],
    },
    solution: {
      ru: 'Пользователь собирает схему сортцентра из блоков, настраивает параметры и запускает симуляцию — система показывает пропускную способность и узкие места. Рядом работает SCM-модуль: поставки, планирование и роли внутри организаций.',
      en: 'The user assembles a sorting-center scheme from blocks, tunes parameters, and runs the simulation — the system shows throughput and bottlenecks. Next to it runs the SCM module: shipments, planning, and roles inside organizations.',
    },
    metrics: {
      ru: ['Время сборки схемы', 'Время расчёта сценария', 'Количество сценариев на проект'],
      en: ['Scheme assembly time', 'Scenario computation time', 'Scenarios per project'],
    },
    insights: {
      ru: 'Связка «симулятор + SCM» в одном монорепозитории оказалась удачной: модель сортцентра и данные поставок естественно дополняют друг друга в одном интерфейсе.',
      en: 'The “simulator + SCM” pairing in one monorepo worked well: the sorting-center model and shipment data naturally complement each other in a single interface.',
    },
    showcaseMain: sortCenterC,
  },
  {
    id: 'max-hack',
    title: { ru: 'B2B Match', en: 'B2B Match' },
    subtitle: { ru: 'Мини-приложение в MAX', en: 'Mini-app in MAX' },
    company: { ru: 'MAX hack26', en: 'MAX hack26' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'B2B-платформа для поиска деловых контактов внутри мессенджера MAX.',
      en: 'A B2B platform for finding business contacts inside the MAX messenger.',
    },
    context: {
      ru: 'Мини-приложение для экосистемы MAX: FastAPI + PostgreSQL backend, React-frontend и бот. Компании заводят профили, ищут партнёров и подрядчиков и выходят на контакт, не покидая мессенджер.',
      en: 'A mini-app for the MAX ecosystem: FastAPI + PostgreSQL backend, React frontend, and a bot. Companies create profiles, find partners and contractors, and make contact without leaving the messenger.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/MAX_hack26',
    languages: [
      { name: 'TypeScript', share: 76.9 },
      { name: 'Python', share: 22.7 },
      { name: 'Other', share: 0.4 },
    ],
    heroImage: maxHack,
    problem: {
      ru: 'Малому и среднему бизнесу сложно находить партнёров и подрядчиков: нетворкинг хаотичен, а специализированные площадки требуют отдельной регистрации и привычки.',
      en: 'SMBs struggle to find partners and contractors: networking is chaotic, and dedicated platforms require separate registration and habits.',
    },
    problemImage: maxHackB,
    processIntro: {
      ru: 'Команда собрала полный стек мини-приложения за время хакатона: backend, frontend и бот-вход.',
      en: 'The team shipped a full mini-app stack during the hackathon: backend, frontend, and a bot entry point.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Сценарий', text: 'Определили путь компании: профиль → поиск → матч → контакт в чате.' },
        { icon: 'roles', title: 'Матчинг', text: 'Модель рекомендаций по потребностям и компетенциям компаний.' },
        { icon: 'design', title: 'Приложение', text: 'Интерфейс каталога, карточки компании и переход в чат MAX.' },
      ],
      en: [
        { icon: 'research', title: 'Scenario', text: 'Defined the company journey: profile → search → match → chat contact.' },
        { icon: 'roles', title: 'Matching', text: 'Recommendation model based on company needs and competencies.' },
        { icon: 'design', title: 'App', text: 'Catalog interface, company card, and hand-off into MAX chat.' },
      ],
    },
    solution: {
      ru: 'Компания заводит профиль с потребностями и предложением, система подбирает релевантные контакты, а переговоры начинаются прямо в чате мессенджера — без отдельной платформы и новых аккаунтов.',
      en: 'A company creates a profile with needs and offerings, the system picks relevant contacts, and negotiations start right in the messenger chat — no separate platform or new accounts.',
    },
    insights: {
      ru: 'Размещение B2B-сервиса внутри мессенджера снимает главный барьер — вход: пользователь уже авторизован, а переход от карточки к диалогу занимает один тап.',
      en: 'Hosting a B2B service inside a messenger removes the main barrier — entry: the user is already authenticated, and going from a card to a conversation takes one tap.',
    },
    showcaseMain: maxHackC,
  },
  {
    id: 'medai',
    title: { ru: 'MedAI', en: 'MedAI' },
    subtitle: { ru: 'Рекомендательная система', en: 'Recommendation system' },
    company: { ru: 'AI Hack', en: 'AI Hack' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2024',
    description: {
      ru: 'Система рекомендаций медикаментов для врачей на основе искусственного интеллекта.',
      en: 'An AI-based medication recommendation system for doctors.',
    },
    context: {
      ru: 'Веб-сервис: React 18 + TypeScript + FastAPI + PostgreSQL в Docker. Система строит персонализированные рекомендации лекарств на основе комплексного анализа медицинских данных пациента.',
      en: 'A web service: React 18 + TypeScript + FastAPI + PostgreSQL in Docker. The system builds personalized medication recommendations from a comprehensive analysis of patient medical data.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/AIHack_recommendation_system',
    languages: [
      { name: 'TypeScript', share: 79.3 },
      { name: 'Python', share: 12.3 },
      { name: 'CSS', share: 6.6 },
      { name: 'Other', share: 1.8 },
    ],
    heroImage: medai,
    problem: {
      ru: 'Выбор препарата требует учёта множества факторов: диагноз, анамнез, текущие назначения, противопоказания. Врачу нужен «второй взгляд», который быстро проверяет варианты по данным пациента.',
      en: 'Choosing a medication requires weighing many factors: diagnosis, history, current prescriptions, contraindications. A doctor needs a “second look” that quickly checks options against patient data.',
    },
    problemImage: medaiB,
    processIntro: {
      ru: 'Фокус — на воспроизводимом пайплайне: от данных пациента к обоснованной рекомендации.',
      en: 'The focus is a reproducible pipeline: from patient data to a justified recommendation.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Данные', text: 'Структура карты пациента и входных признаков для рекомендаций.' },
        { icon: 'roles', title: 'Модель', text: 'Анализ медданных и формирование списка рекомендуемых препаратов.' },
        { icon: 'design', title: 'Кабинет', text: 'Интерфейс врача: карта пациента, рекомендации, обоснование.' },
      ],
      en: [
        { icon: 'research', title: 'Data', text: 'Patient-card structure and input features for recommendations.' },
        { icon: 'roles', title: 'Model', text: 'Medical data analysis producing a recommended medication list.' },
        { icon: 'design', title: 'Cabinet', text: 'Doctor interface: patient card, recommendations, rationale.' },
      ],
    },
    solution: {
      ru: 'Врач открывает карту пациента, система анализирует данные и выдаёт рекомендации препаратов с обоснованием — как вспомогательный инструмент при выборе терапии. Всё разворачивается одной командой через Docker Compose.',
      en: 'The doctor opens a patient card, the system analyzes the data, and returns medication recommendations with rationale — a decision-support tool for therapy choice. Everything deploys with a single Docker Compose command.',
    },
    insights: {
      ru: 'Рекомендательная система в медицине работает только как «второе мнение»: обоснование важнее самой рекомендации — врач должен видеть, почему система предложила препарат.',
      en: 'A medical recommendation system only works as a second opinion: rationale matters more than the recommendation itself — the doctor must see why a drug was suggested.',
    },
    showcaseMain: medaiC,
  },
  {
    id: 'energy',
    title: { ru: 'ЭнергоМаршрут', en: 'EnergoMarshrut' },
    subtitle: { ru: 'Планировщик энергопотоков', en: 'Energy flow planner' },
    company: { ru: 'Хакатон · кейс Транснефть', en: 'Hackathon · Transneft case' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Интегрированное решение для импорта таблиц и схемы графа, расчёта энергопотоков и выгрузки отчётности.',
      en: 'An integrated solution for importing tables and the network graph, computing energy flows, and exporting reports.',
    },
    context: {
      ru: 'MVP для инженеров-энергетиков: FastAPI backend, отдельный ML-сервис расчёта на графах (NetworkX), PostgreSQL для истории запусков и React/TypeScript/Vite-дашборд — импорт CSV/XLSX и JSON-графа, визуальный редактор схемы, панель результатов и экспорт.',
      en: 'An MVP for power engineers: FastAPI backend, a dedicated ML computation service on graphs (NetworkX), PostgreSQL for run history, and a React/TypeScript/Vite dashboard — CSV/XLSX and JSON-graph import, a visual scheme editor, results panel, and export.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/energy',
    languages: [
      { name: 'TypeScript', share: 48.6 },
      { name: 'Jupyter Notebook', share: 19.1 },
      { name: 'Python', share: 18.0 },
      { name: 'CSS', share: 13.5 },
      { name: 'Other', share: 0.8 },
    ],
    heroImage: energy,
    problem: {
      ru: 'Входные данные энергосети фрагментированы: таблицы нагрузок и топология сети живут отдельно. Нет единой точки, где можно проверить схему, получить численный результат расчёта потоков и зафиксировать его в отчёте.',
      en: 'Energy-network inputs are fragmented: load tables and network topology live separately. There is no single place to validate a scheme, get a numeric flow result, and record it in a report.',
    },
    problemImage: energyB,
    processIntro: {
      ru: 'Архитектура вынесла расчёт в отдельный микросервис с таймаутом и резервным результатом — чтобы демо не ломалось при сбое.',
      en: 'The architecture moved computation into a dedicated microservice with a timeout and a fallback result — so the demo survives a failure.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Входные данные', text: 'Согласовали форматы таблиц и JSON-графа топологии сети.' },
        { icon: 'roles', title: 'Конвейер', flow: ['Импорт', 'Редактор схемы', 'Расчёт', 'Результаты', 'Экспорт'] },
        { icon: 'design', title: 'Дашборд', text: 'Визуальный редактор схемы, кнопка расчёта и панель результатов.' },
      ],
      en: [
        { icon: 'research', title: 'Inputs', text: 'Aligned table formats and the JSON network-topology graph.' },
        { icon: 'roles', title: 'Pipeline', flow: ['Import', 'Scheme editor', 'Compute', 'Results', 'Export'] },
        { icon: 'design', title: 'Dashboard', text: 'Visual scheme editor, compute button, and results panel.' },
      ],
    },
    solution: {
      ru: 'Единый API и UI поверх согласованных форматов: пользователь импортирует таблицы и граф, правит схему в визуальном редакторе, запускает расчёт и получает таблицу потоков с выгрузкой. Если ML-контейнер недоступен, демонстрация идёт по резервному JSON.',
      en: 'A single API and UI over aligned formats: the user imports tables and the graph, edits the scheme in a visual editor, runs the computation, and gets a flow table with export. If the ML container is down, the demo falls back to a reserve JSON.',
    },
    metrics: {
      ru: ['Время полного цикла «импорт → отчёт»', 'Доля успешных запусков расчёта', 'Полнота выгружаемой отчётности'],
      en: ['Full “import → report” cycle time', 'Successful computation rate', 'Exported report completeness'],
    },
    insights: {
      ru: 'Резервный путь для демо — не костыль, а часть архитектуры: вынесенный расчёт с фолбэком позволил показывать продукт стабильно при любых сбоях ML-контейнера.',
      en: 'A demo fallback is not a hack but part of the architecture: outsourced computation with a reserve path kept the product demo stable through any ML-container failure.',
    },
    showcaseMain: energyC,
  },
  {
    id: 'copilot',
    title: { ru: 'Copilot App', en: 'Copilot App' },
    subtitle: { ru: 'AI-ассистент для бизнеса', en: 'AI business assistant' },
    company: { ru: 'Хакатон «Альфа-Будущее»', en: 'Alfa Future hackathon' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2024',
    description: {
      ru: 'AI-ассистент для предпринимателей: чаты, заметки, уведомления и рекомендации.',
      en: 'An AI assistant for entrepreneurs: chats, notes, notifications, and recommendations.',
    },
    context: {
      ru: 'Python-backend и React/TypeScript-frontend в docker-compose. LLM-сервис умеет транскрибировать аудио через Whisper, анализировать изображения, вести заметки и отправлять уведомления; покрытие тестами — 74 кейса.',
      en: 'Python backend and React/TypeScript frontend in docker-compose. The LLM service transcribes audio via Whisper, analyzes images, manages notes, and sends notifications; covered by 74 test cases.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/Copilot_app',
    languages: [
      { name: 'TypeScript', share: 40.6 },
      { name: 'Python', share: 38.5 },
      { name: 'CSS', share: 18.7 },
      { name: 'Other', share: 2.2 },
    ],
    heroImage: copilotRepo,
    problem: {
      ru: 'Предпринимателю нужен единый помощник: вопросы по бизнесу, заметки, напоминания и документы живут в разных местах, а контекст между ними теряется.',
      en: 'An entrepreneur needs one assistant: business questions, notes, reminders, and documents live in different places, and context between them is lost.',
    },
    problemImage: copilot4,
    processIntro: {
      ru: 'Собрали сервис вокруг чата как единой точки входа — с памятью, заметками и рекомендациями.',
      en: 'Built the service around chat as a single entry point — with memory, notes, and recommendations.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Сценарии', text: 'Определили задачи предпринимателя: вопросы, заметки, напоминания.' },
        { icon: 'roles', title: 'Сервис', text: 'LLM-конвейер: контекст диалога, Whisper, анализ изображений, уведомления.' },
        { icon: 'journey', title: 'Качество', text: '74 теста на сервисы — от генерации ответов до уведомлений.' },
      ],
      en: [
        { icon: 'research', title: 'Scenarios', text: 'Defined entrepreneur tasks: questions, notes, reminders.' },
        { icon: 'roles', title: 'Service', text: 'LLM pipeline: dialog context, Whisper, image analysis, notifications.' },
        { icon: 'journey', title: 'Quality', text: '74 service tests — from response generation to notifications.' },
      ],
    },
    solution: {
      ru: 'Чат-ассистент с поиском по чатам, метками и заметками: пользователь голосом или текстом задаёт вопрос, система помнит контекст, сохраняет заметки и присылает уведомления. Поверх — рекомендательный модуль для бизнес-задач.',
      en: 'A chat assistant with search across chats, tags, and notes: the user asks by voice or text, the system keeps context, saves notes, and sends notifications. A recommendation module sits on top for business tasks.',
    },
    insights: {
      ru: 'Ценность ассистента — в контексте: поиск по чатам и меткам превращает разовые вопросы в накопленную базу знаний предпринимателя.',
      en: 'The assistant’s value is context: searching chats and tags turns one-off questions into an entrepreneur’s accumulated knowledge base.',
    },
    showcaseMain: copilot5,
  },
  {
    id: 'max-vk',
    title: { ru: 'MAX Education', en: 'MAX Education' },
    subtitle: { ru: 'Платформа в экосистеме MAX', en: 'Platform in the MAX ecosystem' },
    company: { ru: 'MAX × VK хакатон', en: 'MAX × VK hackathon' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Ядро платформы для мини-приложений и веб-приложений в экосистеме MAX.',
      en: 'A core platform for mini-apps and web apps in the MAX ecosystem.',
    },
    context: {
      ru: 'Полноценное ядро для мини-аппов: backend на Python, frontend на TypeScript и инфраструктура для развёртывания. Образовательный сценарий — контент, прогресс и взаимодействие внутри мессенджера.',
      en: 'A full-fledged core for mini-apps: Python backend, TypeScript frontend, and deployment infrastructure. The educational scenario covers content, progress, and interaction inside the messenger.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/MAX-VK-Hack',
    languages: [
      { name: 'Python', share: 47.4 },
      { name: 'TypeScript', share: 34.8 },
      { name: 'CSS', share: 16.7 },
      { name: 'Other', share: 1.1 },
    ],
    heroImage: maxVk,
    problem: {
      ru: 'Образовательные сервисы требуют отдельной установки и привычки. Внутри мессенджера не хватает платформенного ядра: контент, прогресс, роли — чтобы мини-приложение можно было собрать быстро.',
      en: 'Educational services require separate installs and habits. Inside the messenger there is no platform core — content, progress, roles — to assemble a mini-app quickly.',
    },
    problemImage: maxVkB,
    processIntro: {
      ru: 'Команда делала каркас, а не одно приложение: переиспользуемое ядро для будущих мини-аппов.',
      en: 'The team built a skeleton, not a single app: a reusable core for future mini-apps.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Требования', text: 'Определили состав ядра: контент, прогресс, роли, уведомления.' },
        { icon: 'roles', title: 'Архитектура', text: 'Разделили backend-ядро и frontend-клиент мини-приложения.' },
        { icon: 'design', title: 'Сценарий', text: 'Образовательный флоу: разделы, материалы, отметки прогресса.' },
      ],
      en: [
        { icon: 'research', title: 'Requirements', text: 'Defined the core: content, progress, roles, notifications.' },
        { icon: 'roles', title: 'Architecture', text: 'Split the backend core and the mini-app frontend client.' },
        { icon: 'design', title: 'Scenario', text: 'Educational flow: sections, materials, progress marks.' },
      ],
    },
    solution: {
      ru: 'Готовое ядро: Python-API для контента и прогресса, TypeScript-клиент мини-приложения и инфраструктура для запуска. На нём собран образовательный сценарий с разделами и отметками прохождения.',
      en: 'A ready core: a Python API for content and progress, a TypeScript mini-app client, and launch infrastructure. On top of it sits an educational scenario with sections and completion marks.',
    },
    insights: {
      ru: 'На хакатоне выгоднее делать ядро, чем одну фичу: переиспользуемая платформа показывает и архитектурное мышление, и готовый сценарий поверх неё.',
      en: 'At a hackathon, building a core beats building one feature: a reusable platform shows both architectural thinking and a ready scenario on top.',
    },
    showcaseMain: maxVkC,
  },
  {
    id: 'projectlab',
    title: { ru: 'ProjectLab DICOM', en: 'ProjectLab DICOM' },
    subtitle: { ru: 'Анализ медицинских снимков', en: 'Medical image analysis' },
    company: { ru: 'ProjectLab', en: 'ProjectLab' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: [
      { id: 'python', label: 'Python' },
      { id: 'git', label: 'Git' },
      { id: 'figma', label: 'Figma' },
    ],
    timeline: '2025',
    description: {
      ru: 'Обработка и анализ медицинских DICOM-снимков в воспроизводимом пайплайне.',
      en: 'Medical DICOM image processing and analysis in a reproducible pipeline.',
    },
    context: {
      ru: 'Ноутбук-решение для анализа серии снимков: чтение DICOM-данных, обработка срезов, визуализация тканей и статистика по классам — с сохранением результатов в выходные файлы.',
      en: 'A notebook solution for scan-series analysis: reading DICOM data, slice processing, tissue visualization, and per-class statistics — with results saved to output files.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/project_lab_hack',
    languages: [{ name: 'Jupyter Notebook', share: 100 }],
    heroImage: projectlabOutput,
    problem: {
      ru: 'Ручной анализ серии снимков трудоёмок и плохо воспроизводится: нужен автоматический пайплайн, который из входных DICOM-данных выдаёт измерения и визуализации.',
      en: 'Manual scan-series analysis is laborious and hard to reproduce: an automated pipeline is needed to turn raw DICOM input into measurements and visualizations.',
    },
    problemImage: projectlab,
    processIntro: {
      ru: 'Решение оформлено как исследование: каждый шаг пайплайна показан и проверяем.',
      en: 'The solution is packaged as a study: every pipeline step is shown and verifiable.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Данные', text: 'Чтение DICOM-серии и нормализация входных срезов.' },
        { icon: 'roles', title: 'Обработка', text: 'Сегментация и анализ тканей, распределение по HU.' },
        { icon: 'design', title: 'Результат', text: 'Визуализация срезов, гистограммы и сводная статистика.' },
      ],
      en: [
        { icon: 'research', title: 'Data', text: 'DICOM series reading and input slice normalization.' },
        { icon: 'roles', title: 'Processing', text: 'Tissue segmentation and analysis, HU distribution.' },
        { icon: 'design', title: 'Output', text: 'Slice visualization, histograms, and summary statistics.' },
      ],
    },
    solution: {
      ru: 'Пайплайн в Jupyter: загрузка серии → обработка и сегментация → визуализация срезов и распределений → экспорт результатов. Все шаги документированы внутри ноутбука, вывод сохраняется в файлы.',
      en: 'A Jupyter pipeline: load series → process and segment → visualize slices and distributions → export results. All steps are documented inside the notebook; output is saved to files.',
    },
    insights: {
      ru: 'Для исследовательского кейса важна воспроизводимость: ноутбук с последовательными шагами и сохранёнными выходами убедительнее «чёрного ящика».',
      en: 'For a research case, reproducibility matters most: a notebook with sequential steps and saved outputs is more convincing than a black box.',
    },
    showcaseMain: projectlabB,
  },
  {
    id: 'lct-build',
    title: { ru: 'Стройконтроль', en: 'StroyKontrol' },
    subtitle: { ru: 'Веб-приложение инспектора', en: 'Inspector web app' },
    company: { ru: 'ЛЦТ — Лидеры цифровой трансформации', en: 'LCT — Digital Transformation Leaders' },
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    tools: frontendTools,
    timeline: '2025',
    description: {
      ru: 'Веб-приложение для инспекций строительных объектов: frontend на React и backend на NestJS.',
      en: 'A web app for construction site inspections: React frontend and NestJS backend.',
    },
    context: {
      ru: 'Клиент-серверное решение трека стройконтроля: React + TypeScript + Vite клиент (lct-front) и NestJS-сервис (lct-back). Покрывает сценарии инспектора: объекты, проверки, замечания и статусы.',
      en: 'A client-server construction-control solution: React + TypeScript + Vite client (lct-front) and a NestJS service (lct-back). Covers inspector scenarios: sites, checks, remarks, and statuses.',
    },
    repoUrl: 'https://github.com/ResonanceTECH/lct-front',
    languages: [
      { name: 'TypeScript', share: 60.7 },
      { name: 'CSS', share: 38.9 },
      { name: 'Other', share: 0.4 },
    ],
    heroImage: lctFront,
    problem: {
      ru: 'Инспектору на объекте нужен быстрый способ фиксировать замечания и видеть статусы проверок. Бумажные чек-листы и переписки теряют структуру и историю.',
      en: 'An on-site inspector needs a fast way to record remarks and see check statuses. Paper checklists and chats lose structure and history.',
    },
    problemImage: lctBack,
    processIntro: {
      ru: 'Приложение строилось вокруг дневной рутины инспектора: список объектов → проверка → замечания → статус.',
      en: 'The app was built around the inspector’s daily routine: site list → check → remarks → status.',
    },
    processSteps: {
      ru: [
        { icon: 'research', title: 'Рутина инспектора', text: 'Разобрали шаги проверки объекта и форматы замечаний.' },
        { icon: 'roles', title: 'Клиент-сервер', text: 'React-клиент для полевых сценариев и NestJS API для данных.' },
        { icon: 'journey', title: 'Флоу', flow: ['Объект', 'Проверка', 'Замечание', 'Статус'] },
      ],
      en: [
        { icon: 'research', title: 'Inspector routine', text: 'Mapped site-check steps and remark formats.' },
        { icon: 'roles', title: 'Client-server', text: 'React client for field scenarios and a NestJS API for data.' },
        { icon: 'journey', title: 'Flow', flow: ['Site', 'Check', 'Remark', 'Status'] },
      ],
    },
    solution: {
      ru: 'Веб-приложение с карточками объектов и проверок: инспектор фиксирует замечания с фото и статусами, а история и структура сохраняются в сервисе — доступно с любого устройства.',
      en: 'A web app with site and check cards: the inspector records remarks with photos and statuses, while history and structure persist in the service — accessible from any device.',
    },
    insights: {
      ru: 'Для полевого инструмента важнее скорость ввода, чем богатство функций: минимум шагов до зафиксированного замечания — главный критерий удобства.',
      en: 'For a field tool, input speed beats feature richness: minimal steps to a recorded remark is the main usability criterion.',
    },
    showcaseMain: lctFrontB,
  },
];
