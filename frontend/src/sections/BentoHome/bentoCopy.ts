export type Lang = 'ru' | 'en';

export const bentoCopy: Record<
  Lang,
  {
    heroTitleBefore: string;
    heroName: string;
    heroTitleAfter: string;
    heroSubtitle: string;
    aboutEyebrow: string;
    aboutText: string;
    resourcesEyebrow: string;
    resourcesText: string;
    stackEyebrow: string;
    contactTitle: string;
    copyEmail: string;
    copied: string;
    linkedinBlockedNotice: string;
    switchToLight: string;
    switchToDark: string;
    switchToEn: string;
    switchToRu: string;
    inDevelopmentLabel: string;
  }
> = {
  ru: {
    heroTitleBefore: 'Привет! Я -',
    heroName: 'Дарья',
    heroTitleAfter: ',',
    heroSubtitle: 'fullstack-разработчик с продуктовым бэкграундом.',
    aboutEyebrow: 'О себе',
    aboutText: 'Собираю сервисы\nцеликом — от API\nдо интерфейса.',
    //companyName: 'чтобы создавать решения, которые действительно нужны людям..',
    resourcesEyebrow: 'Проекты',
    resourcesText: 'От идеи\nдо деплоя\nживых сервисов.',
    stackEyebrow: 'Мой стек',
    contactTitle: 'Есть проект?',
    copyEmail: 'Email',
    copied: 'Скопировано!',
    linkedinBlockedNotice:
      'Без использования специальных средств открыть указанную ссылку с российского IP-адреса не получится.',
    switchToLight: 'Включить светлую тему',
    switchToDark: 'Включить тёмную тему',
    switchToEn: 'Переключить на английский',
    switchToRu: 'Переключить на русский',
    inDevelopmentLabel: 'В разработке',
  },
  en: {
    heroTitleBefore: "Hi, I'm",
    heroName: 'Daria',
    heroTitleAfter: ',',
    heroSubtitle: 'a fullstack developer with a product background.',
    aboutEyebrow: 'About',
    aboutText: 'I build services end to end — from API to interface.',
    resourcesEyebrow: 'Resources',
    resourcesText: 'From first commit to production',
    stackEyebrow: 'Stack I use',
    contactTitle: 'Have a project in mind?',
    copyEmail: 'Email',
    copied: 'Copied!',
    linkedinBlockedNotice:
      'Without a VPN or other unblock tools, this link can’t be opened from a Russian IP address.',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    switchToEn: 'Switch to English',
    switchToRu: 'Switch to Russian',
    inDevelopmentLabel: 'In development',
  },
};
