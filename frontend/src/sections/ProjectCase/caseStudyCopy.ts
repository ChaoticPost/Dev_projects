import type { Lang } from '../BentoHome/bentoCopy';

export const caseStudyCopy: Record<
  Lang,
  {
    company: string;
    myRole: string;
    tools: string;
    timeline: string;
    description: string;
    context: string;
    checkApp: string;
    openRepo: string;
    repoLanguages: string;
    problem: string;
    process: string;
    value: string;
    valueFor: string;
    solution: string;
    metrics: string;
    keyInsights: string;
  }
> = {
  ru: {
    company: 'Компания',
    myRole: 'Моя роль',
    tools: 'Инструменты',
    timeline: 'Сроки',
    description: 'Описание',
    context: 'Контекст',
    checkApp: 'Открыть приложение',
    openRepo: 'Репозиторий',
    repoLanguages: 'Языки в репозитории',
    problem: 'Проблема',
    process: 'Процесс',
    value: 'Ценность продукта',
    valueFor: 'Для кого',
    solution: 'Решение',
    metrics: 'Метрики',
    keyInsights: 'Ключевые выводы',
  },
  en: {
    company: 'Company',
    myRole: 'My role',
    tools: 'Tools',
    timeline: 'Timeline',
    description: 'Description',
    context: 'Context',
    checkApp: 'Check the app',
    openRepo: 'Repository',
    repoLanguages: 'Repository languages',
    problem: 'Problem',
    process: 'Process',
    value: 'Product value',
    valueFor: 'For whom',
    solution: 'Solution',
    metrics: 'Metrics',
    keyInsights: 'Key Insights',
  },
};
