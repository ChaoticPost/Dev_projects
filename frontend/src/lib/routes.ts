import { SectionId } from '../types/sections';

const STATIC_PATHS: Record<Exclude<SectionId, 'resource-detail' | 'project-case'>, string> = {
  intro: '/',
  about: '/about',
  resources: '/resources',
};

export const pathForSection = (id: SectionId, params?: { projectId: string }): string => {
  switch (id) {
    case 'resource-detail':
      return params?.projectId ? `/resources/${encodeURIComponent(params.projectId)}` : '/resources';
    case 'project-case':
      return params?.projectId ? `/case/${encodeURIComponent(params.projectId)}` : '/';
    default:
      return STATIC_PATHS[id];
  }
};

export const sectionFromPath = (pathname: string): SectionId | null => {
  const segments = pathname.replace(/\/+$/, '').split('/').filter(Boolean);

  if (segments.length === 0) {
    return 'intro';
  }

  const [head, second] = segments;

  if (head === 'resources') {
    return second ? 'resource-detail' : 'resources';
  }

  if (head === 'case') {
    return second ? 'project-case' : null;
  }

  const match = (Object.entries(STATIC_PATHS) as Array<[SectionId, string]>).find(
    ([, path]) => path === `/${head}`,
  );

  return match ? match[0] : null;
};

export const routerBasename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';
