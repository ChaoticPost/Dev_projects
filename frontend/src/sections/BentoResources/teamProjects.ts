import type { Lang } from '../BentoHome/bentoCopy';
import onco from '../../assets/images/team/onco-1.webp';
import mostransport from '../../assets/images/team/mostransport-login.webp';
import sechhack from '../../assets/images/team/sechhack-cover.webp';
import lctResonance from '../../assets/images/team/lct-auth-hero.webp';
import phystech from '../../assets/images/team/phystech.webp';
import sortCenter from '../../assets/images/team/sort-center.webp';
import maxHack from '../../assets/images/team/max-hack.webp';
import medai from '../../assets/images/team/medai.webp';
import energy from '../../assets/images/team/energy.webp';
import copilot from '../../assets/images/team/copilot-repo.webp';
import maxVk from '../../assets/images/team/max-vk.webp';
import projectlab from '../../assets/images/team/projectlab-output.webp';
import lctFront from '../../assets/images/team/lct-front.webp';

export interface TeamProject {
  id: string;
  title: string;
  subtitle: Record<Lang, string>;
  tag: Record<Lang, string>;
  image: string;
}

export const teamProjectsCopy: Record<
  Lang,
  {
    groupTitle: string;
    groupLink: string;
  }
> = {
  ru: {
    groupTitle: 'Команда Resonance',
    groupLink: 'github.com/ResonanceTECH',
  },
  en: {
    groupTitle: 'Resonance team',
    groupLink: 'github.com/ResonanceTECH',
  },
};

export const teamProjects: TeamProject[] = [
  {
    id: 'onco',
    title: 'ОнкоПротокол+',
    subtitle: {
      ru: 'ИИ-проверка онкологических протоколов по клиническим рекомендациям',
      en: 'AI verification of oncology protocols against clinical guidelines',
    },
    tag: { ru: 'SechHack', en: 'SechHack' },
    image: onco,
  },
  {
    id: 'mostransport',
    title: 'MosTransport',
    subtitle: {
      ru: 'Прогноз пассажиропотока трамваев и оптимизация расписания',
      en: 'Tram passenger flow forecasting and schedule optimization',
    },
    tag: { ru: 'MosTransport hack26', en: 'MosTransport hack26' },
    image: mostransport,
  },
  {
    id: 'sechhack',
    title: 'Клинический компас',
    subtitle: {
      ru: 'Ассистент врача: веб-кабинет и мобильное приложение пациента',
      en: 'Clinical assistant: doctor web cabinet and patient mobile app',
    },
    tag: { ru: 'SechHack 26', en: 'SechHack 26' },
    image: sechhack,
  },
  {
    id: 'lct-resonance',
    title: 'LCT Resonance',
    subtitle: {
      ru: 'Платформа контроля строительных проектов',
      en: 'Construction project control platform',
    },
    tag: { ru: 'ЛЦТ', en: 'LCT' },
    image: lctResonance,
  },
  {
    id: 'phystech',
    title: 'Phystech.Answer',
    subtitle: {
      ru: 'RAG-ассистент по внутренним регламентам в закрытом контуре',
      en: 'On-premise RAG assistant for internal regulations',
    },
    tag: { ru: 'R&D', en: 'R&D' },
    image: phystech,
  },
  {
    id: 'sort-center',
    title: 'Sort Center Simulator',
    subtitle: {
      ru: 'Симулятор сортировочного центра и SCM-платформа',
      en: 'Sorting center simulator and SCM platform',
    },
    tag: { ru: 'Продукт', en: 'Product' },
    image: sortCenter,
  },
  {
    id: 'max-hack',
    title: 'B2B Match',
    subtitle: {
      ru: 'B2B-платформа внутри мессенджера MAX',
      en: 'B2B platform inside the MAX messenger',
    },
    tag: { ru: 'MAX hack26', en: 'MAX hack26' },
    image: maxHack,
  },
  {
    id: 'medai',
    title: 'MedAI',
    subtitle: {
      ru: 'Система рекомендаций медикаментов для врачей',
      en: 'AI medication recommendation system for doctors',
    },
    tag: { ru: 'AI Hack', en: 'AI Hack' },
    image: medai,
  },
  {
    id: 'energy',
    title: 'ЭнергоМаршрут',
    subtitle: {
      ru: 'Моделирование энергосети и расчёт энергопотоков',
      en: 'Energy network modeling and flow calculation',
    },
    tag: { ru: 'Хакатон', en: 'Hackathon' },
    image: energy,
  },
  {
    id: 'copilot',
    title: 'Copilot App',
    subtitle: {
      ru: 'AI-ассистент для бизнеса: чаты, заметки, уведомления',
      en: 'AI business assistant: chats, notes, notifications',
    },
    tag: { ru: 'Альфа-Будущее', en: 'Alfa Future' },
    image: copilot,
  },
  {
    id: 'max-vk',
    title: 'MAX Education',
    subtitle: {
      ru: 'Образовательная платформа в экосистеме MAX',
      en: 'Educational platform in the MAX ecosystem',
    },
    tag: { ru: 'MAX × VK', en: 'MAX × VK' },
    image: maxVk,
  },
  {
    id: 'projectlab',
    title: 'ProjectLab DICOM',
    subtitle: {
      ru: 'Обработка и анализ медицинских DICOM-снимков',
      en: 'Medical DICOM image processing and analysis',
    },
    tag: { ru: 'ProjectLab', en: 'ProjectLab' },
    image: projectlab,
  },
  {
    id: 'lct-build',
    title: 'Стройконтроль',
    subtitle: {
      ru: 'Веб-приложение для инспекций строительных объектов',
      en: 'Web app for construction site inspections',
    },
    tag: { ru: 'ЛЦТ', en: 'LCT' },
    image: lctFront,
  },
];
