import type { Lang } from '../BentoHome/bentoCopy';

export type SkillBrickCategory = 'frontend' | 'backend' | 'tools';

export interface SkillBrickItem {
  id: string;
  label: string;
  category: SkillBrickCategory;
}

export interface PersonalPhotoCaption {
  id: string;
  title: string;
  subtitle: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
}

export interface EducationSlide {
  school: string;
  period: string;
  degree: string;
}

export type CareerSlide =
  | { id: 'experience'; eyebrow: string; kind: 'experience'; items: ExperienceItem[] }
  | { id: 'education'; eyebrow: string; kind: 'education'; items: EducationSlide[] }
  | { id: 'upskilling'; eyebrow: string; kind: 'upskilling'; items: string[] };

export const aboutCopy: Record<
  Lang,
  {
    pageTitle: string;
    myStory: string;
    storyText: string;
    whatIDoNow: string;
    whatIDoNowText: string;
    companyName: string;
    companyUrl: string;
    whatIDoNowAfter: string;
    skillsTitle: string;
    skillBricks: SkillBrickItem[];
    careerSlides: CareerSlide[];
    careerCarouselLabel: string;
    viewPhoto: string;
    closePhoto: string;
    personalEyebrow: string;
    personalText: string;
    personalTrackTitle: string;
    personalTrackArtist: string;
    personalTrackNote: string;
    personalListenCta: string;
    personalPhotos: PersonalPhotoCaption[];
  }
> = {
  ru: {
    pageTitle: 'Кто я?',
    myStory: 'Моя история',
    storyText:
      'Начала с frontend-разработки и выросла в fullstack: собираю сервисы целиком — от API и баз данных до интерфейсов. Продуктовый опыт помогает писать код, который решает реальные проблемы пользователей и бизнеса.',
    whatIDoNow: 'Чем занимаюсь сейчас',
    whatIDoNowText: 'Работаю менеджером продукта в',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    whatIDoNowAfter: ': развиваю цифровые сервисы и веду собственные pet-проекты на стороне.',
    skillsTitle: 'Ключевые навыки',
    skillBricks: [
      { id: 'typescript', label: 'TypeScript', category: 'frontend' },
      { id: 'javascript', label: 'JavaScript', category: 'frontend' },
      { id: 'react', label: 'React', category: 'frontend' },
      { id: 'nextjs', label: 'Next.js', category: 'frontend' },
      { id: 'html', label: 'HTML', category: 'frontend' },
      { id: 'css', label: 'CSS', category: 'frontend' },
      { id: 'tailwind', label: 'Tailwind CSS', category: 'frontend' },
      { id: 'redux', label: 'Redux', category: 'frontend' },
      { id: 'css-modules', label: 'CSS Modules', category: 'frontend' },
      { id: 'vite', label: 'Vite', category: 'frontend' },
      { id: 'nodejs', label: 'Node.js', category: 'backend' },
      { id: 'python', label: 'Python', category: 'backend' },
      { id: 'express', label: 'Express', category: 'backend' },
      { id: 'fastapi', label: 'FastAPI', category: 'backend' },
      { id: 'rest-api', label: 'REST API', category: 'backend' },
      { id: 'postgresql', label: 'PostgreSQL', category: 'backend' },
      { id: 'mongodb', label: 'MongoDB', category: 'backend' },
      { id: 'sql', label: 'SQL', category: 'backend' },
      { id: 'git', label: 'Git', category: 'tools' },
      { id: 'github', label: 'GitHub', category: 'tools' },
      { id: 'docker', label: 'Docker', category: 'tools' },
      { id: 'vscode', label: 'VS Code', category: 'tools' },
      { id: 'figma', label: 'Figma', category: 'tools' },
      { id: 'npm', label: 'npm', category: 'tools' },
      { id: 'linux', label: 'Linux', category: 'tools' },
      { id: 'cicd', label: 'CI/CD', category: 'tools' },
    ],
    careerCarouselLabel: 'Карьера и образование',
    careerSlides: [
      {
        id: 'experience',
        eyebrow: 'Опыт',
        kind: 'experience',
        items: [
          { role: 'Менеджер продукта в RTUITLab', period: 'май 2023 – н. в.' },
          { role: 'Менеджер продукта в КРОК', period: 'окт – дек 2024' },
        ],
      },
      {
        id: 'education',
        eyebrow: 'Учёба',
        kind: 'education',
        items: [
          {
            school: 'РТУ МИРЭА · ИИТ',
            period: '2021–2025',
            degree: 'Бакалавриат, «Программная инженерия»',
          },
          {
            school: 'РТУ МИРЭА · ПИШ',
            period: '2025 – 2027',
            degree: 'Магистратура, «Цифровая трансформация»',
          },
        ],
      },
      {
        id: 'upskilling',
        eyebrow: 'Повышение квалификации',
        kind: 'upskilling',
        items: [
          'Переподготовка «Менеджмент», РТУ МИРЭА, 2025',
          'ИИ в здравоохранении, РТУ МИРЭА и ЦДиТ ДЗМ, 2025',
          'Переподготовка в сфере дизайна, РТУ МИРЭА, 2026',
        ],
      },
    ],
    viewPhoto: 'Открыть фото',
    closePhoto: 'Закрыть',
    personalEyebrow: 'Personal',
    personalText: 'В свободное время люблю слушать музыку и фотографировать на свою Leica.',
    personalTrackTitle: 'Luna',
    personalTrackArtist: 'Pascal Schumacher, Echo Collective',
    personalTrackNote: 'Больше всего слушала в этом месяце',
    personalListenCta: 'Слушать в Spotify',
    personalPhotos: [
      { id: 'cashless', title: 'Identity', subtitle: 'Единый визуальный язык бренда' },
      { id: 'job-portal', title: 'Travel', subtitle: 'Моменты вне экрана' },
      { id: 'laptop', title: 'Workspace', subtitle: 'Где рождаются идеи' },
      { id: 'portrait', title: 'Portrait', subtitle: 'Жизнь за кадром' },
    ],
  },
  en: {
    pageTitle: "What I'm about?",
    myStory: 'My story',
    storyText:
      'I started with frontend development and grew into fullstack — building services end to end, from APIs and databases to interfaces. My product management background helps me write code that solves real problems for users and the business.',
    whatIDoNow: 'What I do now',
    whatIDoNowText: "I'm a product manager at",
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    whatIDoNowAfter: ': I grow digital services and run my own pet projects on the side.',
    skillsTitle: 'Key skills',
    skillBricks: [
      { id: 'typescript', label: 'TypeScript', category: 'frontend' },
      { id: 'javascript', label: 'JavaScript', category: 'frontend' },
      { id: 'react', label: 'React', category: 'frontend' },
      { id: 'nextjs', label: 'Next.js', category: 'frontend' },
      { id: 'html', label: 'HTML', category: 'frontend' },
      { id: 'css', label: 'CSS', category: 'frontend' },
      { id: 'tailwind', label: 'Tailwind CSS', category: 'frontend' },
      { id: 'redux', label: 'Redux', category: 'frontend' },
      { id: 'css-modules', label: 'CSS Modules', category: 'frontend' },
      { id: 'vite', label: 'Vite', category: 'frontend' },
      { id: 'nodejs', label: 'Node.js', category: 'backend' },
      { id: 'python', label: 'Python', category: 'backend' },
      { id: 'express', label: 'Express', category: 'backend' },
      { id: 'fastapi', label: 'FastAPI', category: 'backend' },
      { id: 'rest-api', label: 'REST API', category: 'backend' },
      { id: 'postgresql', label: 'PostgreSQL', category: 'backend' },
      { id: 'mongodb', label: 'MongoDB', category: 'backend' },
      { id: 'sql', label: 'SQL', category: 'backend' },
      { id: 'git', label: 'Git', category: 'tools' },
      { id: 'github', label: 'GitHub', category: 'tools' },
      { id: 'docker', label: 'Docker', category: 'tools' },
      { id: 'vscode', label: 'VS Code', category: 'tools' },
      { id: 'figma', label: 'Figma', category: 'tools' },
      { id: 'npm', label: 'npm', category: 'tools' },
      { id: 'linux', label: 'Linux', category: 'tools' },
      { id: 'cicd', label: 'CI/CD', category: 'tools' },
    ],
    careerCarouselLabel: 'Career and education',
    careerSlides: [
      {
        id: 'experience',
        eyebrow: 'Experience',
        kind: 'experience',
        items: [
          { role: 'Product Manager at RTUITLab', period: 'May 2023 – present' },
          { role: 'Product Manager at CROC', period: 'Oct – Dec 2024' },
        ],
      },
      {
        id: 'education',
        eyebrow: 'Education',
        kind: 'education',
        items: [
          {
            school: 'RTU MIREA · Institute of IT',
            period: '2021–2025',
            degree: "Bachelor's, Software Engineering",
          },
          {
            school: 'RTU MIREA · Applied Informatics',
            period: '2025 – 2027',
            degree: "Master's, SE · digital transformation",
          },
        ],
      },
      {
        id: 'upskilling',
        eyebrow: 'Professional development',
        kind: 'upskilling',
        items: [
          'Professional retraining in Management, RTU MIREA, 2025',
          'AI tech in healthcare, RTU MIREA & CDT Moscow, 2025',
          'Professional retraining in design, RTU MIREA, 2026',
        ],
      },
    ],
    viewPhoto: 'View photo',
    closePhoto: 'Close',
    personalEyebrow: 'Personal',
    personalText: 'In my spare time, I enjoy listening to music and taking photos with my Leica.',
    personalTrackTitle: 'Luna',
    personalTrackArtist: 'Pascal Schumacher, Echo Collective',
    personalTrackNote: 'Most replayed this month',
    personalListenCta: 'Listen on Spotify',
    personalPhotos: [
      { id: 'cashless', title: 'Identity', subtitle: 'Consistent brand presence' },
      { id: 'job-portal', title: 'Travel', subtitle: 'Moments off the screen' },
      { id: 'laptop', title: 'Workspace', subtitle: 'Where ideas take shape' },
      { id: 'portrait', title: 'Portrait', subtitle: 'Life behind the lens' },
    ],
  },
};
