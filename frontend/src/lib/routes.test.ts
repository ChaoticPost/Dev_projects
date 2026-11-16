import { describe, expect, it } from 'vitest';
import { pathForSection, sectionFromPath } from './routes';

describe('pathForSection', () => {
  it('maps static sections to their paths', () => {
    expect(pathForSection('intro')).toBe('/');
    expect(pathForSection('about')).toBe('/about');
    expect(pathForSection('resources')).toBe('/resources');
  });

  it('builds detail paths with a project id', () => {
    expect(pathForSection('resource-detail', { projectId: 'benbox' })).toBe('/resources/benbox');
    expect(pathForSection('project-case', { projectId: 'cashless' })).toBe('/case/cashless');
  });

  it('falls back gracefully when a detail id is missing', () => {
    expect(pathForSection('resource-detail')).toBe('/resources');
    expect(pathForSection('project-case')).toBe('/');
  });
});

describe('sectionFromPath', () => {
  it('resolves static paths', () => {
    expect(sectionFromPath('/')).toBe('intro');
    expect(sectionFromPath('/about')).toBe('about');
    expect(sectionFromPath('/resources')).toBe('resources');
  });

  it('resolves detail paths', () => {
    expect(sectionFromPath('/resources/benbox')).toBe('resource-detail');
    expect(sectionFromPath('/case/cashless')).toBe('project-case');
  });

  it('tolerates trailing slashes', () => {
    expect(sectionFromPath('/about/')).toBe('about');
    expect(sectionFromPath('/resources/')).toBe('resources');
  });

  it('returns null for unknown paths', () => {
    expect(sectionFromPath('/nope')).toBeNull();
    expect(sectionFromPath('/case')).toBeNull();
  });
});

describe('roundtrip', () => {
  it('maps every static section through path and back', () => {
    const ids = ['intro', 'about', 'resources'] as const;
    for (const id of ids) {
      expect(sectionFromPath(pathForSection(id))).toBe(id);
    }
  });
});
