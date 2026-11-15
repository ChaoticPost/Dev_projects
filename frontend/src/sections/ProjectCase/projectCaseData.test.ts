import { describe, expect, it } from 'vitest';
import { getProjectCase, isProjectCaseId, projectCaseIds, projectCases } from './projectCaseData';
import type { Lang } from '../BentoHome/bentoCopy';

const langs: Lang[] = ['ru', 'en'];

const localizedFields = [
  'title',
  'subtitle',
  'company',
  'role',
  'description',
  'context',
  'problem',
  'processIntro',
  'solution',
  'insights',
] as const;

describe('projectCases', () => {
  it('has unique ids matching projectCaseIds', () => {
    const ids = projectCases.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect([...ids].sort()).toEqual([...projectCaseIds].sort());
  });

  it('fills every localized field for both languages', () => {
    for (const project of projectCases) {
      for (const field of localizedFields) {
        for (const lang of langs) {
          const value = project[field][lang];
          expect(typeof value, `${project.id}.${field}.${lang}`).toBe('string');
          expect(value.trim().length, `${project.id}.${field}.${lang}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('has at least one process step per language', () => {
    for (const project of projectCases) {
      for (const lang of langs) {
        expect(project.processSteps[lang].length, `${project.id}.processSteps.${lang}`).toBeGreaterThan(0);
        for (const step of project.processSteps[lang]) {
          expect(step.title.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('has image assets for every case', () => {
    for (const project of projectCases) {
      expect(project.heroImage.length).toBeGreaterThan(0);
      expect(project.problemImage.length).toBeGreaterThan(0);
      expect(project.showcaseMain.length).toBeGreaterThan(0);
    }
  });
});

describe('isProjectCaseId / getProjectCase', () => {
  it('recognizes known ids', () => {
    for (const id of projectCaseIds) {
      expect(isProjectCaseId(id)).toBe(true);
      expect(getProjectCase(id)?.id).toBe(id);
    }
  });

  it('rejects unknown ids', () => {
    expect(isProjectCaseId('nope')).toBe(false);
    expect(getProjectCase('nope')).toBeUndefined();
  });
});
