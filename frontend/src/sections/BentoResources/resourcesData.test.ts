import { describe, expect, it } from 'vitest';
import { getResourceProject, resourceProjects } from './resourcesData';
import type { Lang } from '../BentoHome/bentoCopy';

const langs: Lang[] = ['ru', 'en'];

describe('resourceProjects', () => {
  it('has unique ids', () => {
    const ids = resourceProjects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('fills localized fields and preview images', () => {
    for (const project of resourceProjects) {
      for (const lang of langs) {
        expect(project.title[lang].trim().length).toBeGreaterThan(0);
        expect(project.subtitle[lang].trim().length).toBeGreaterThan(0);
        expect(project.description[lang].trim().length).toBeGreaterThan(0);
        expect(project.features[lang].length).toBeGreaterThan(0);
      }
      expect(project.previewImages.length).toBeGreaterThan(0);
      expect(project.href).toMatch(/^https?:\/\//);
      expect(project.previewUrl).toMatch(/^https?:\/\//);
    }
  });
});

describe('getResourceProject', () => {
  it('finds a project by id', () => {
    const project = getResourceProject(resourceProjects[0].id);
    expect(project?.id).toBe(resourceProjects[0].id);
  });

  it('returns undefined for unknown ids', () => {
    expect(getResourceProject('missing')).toBeUndefined();
  });
});
