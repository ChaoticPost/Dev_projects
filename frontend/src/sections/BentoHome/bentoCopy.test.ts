import { describe, expect, it } from 'vitest';
import { bentoCopy, Lang } from './bentoCopy';

const langs: Lang[] = ['ru', 'en'];

describe('bentoCopy', () => {
  it('has the same keys for every language', () => {
    const reference = Object.keys(bentoCopy.ru).sort();
    for (const lang of langs) {
      expect(Object.keys(bentoCopy[lang]).sort()).toEqual(reference);
    }
  });

  it('has no empty strings', () => {
    for (const lang of langs) {
      for (const [key, value] of Object.entries(bentoCopy[lang])) {
        expect(typeof value, `${lang}.${key}`).toBe('string');
        expect((value as string).trim().length, `${lang}.${key}`).toBeGreaterThan(0);
      }
    }
  });
});
