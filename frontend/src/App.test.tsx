// @vitest-environment jsdom
import React from 'react';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('./lib/smoothScroll', () => ({
  setScrollContainer: vi.fn(),
  scrollPageToTop: vi.fn(),
  destroySmoothScroll: vi.fn(),
}));

vi.mock('./components/Scene3D/HeroScene', () => ({
  default: () => null,
}));

let container: HTMLDivElement | null = null;
let root: Root | null = null;

const mount = async (path: string) => {
  window.history.pushState({}, '', path);
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => {
    root!.render(<App />);
  });
};

afterEach(async () => {
  if (root) {
    await act(async () => {
      root!.unmount();
    });
  }
  container?.remove();
  container = null;
  root = null;
});

beforeAll(() => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }),
  });

  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = ((callback: FrameRequestCallback) =>
      window.setTimeout(() => callback(performance.now()), 16)) as typeof window.requestAnimationFrame;
    window.cancelAnimationFrame = ((id: number) => window.clearTimeout(id)) as typeof window.cancelAnimationFrame;
  }
});

describe('App routing', () => {
  it('renders the intro bento at the site root', async () => {
    await mount('/Dev_projects/');
    expect(container?.textContent).toContain('Дарья');
    expect(container?.textContent).toContain('fullstack');
  });

  it('deep-links a project case study', async () => {
    await mount('/Dev_projects/case/cashless');
    expect(container?.textContent).toContain('Cashless');
    expect(container?.textContent).toContain('Мобильное приложение');
  });

  it('deep-links a resource detail page', async () => {
    await mount('/Dev_projects/resources/benbox');
    expect(container?.textContent).toContain('BenBox');
  });

  it('redirects unknown paths to home', async () => {
    await mount('/Dev_projects/definitely-not-a-page');
    expect(window.location.pathname).toBe('/Dev_projects');
    expect(container?.textContent).toContain('Дарья');
  });

  it('navigates to about when the about tile is clicked', async () => {
    await mount('/Dev_projects/');
    const aboutTile = Array.from(container?.querySelectorAll('article') ?? []).find((el) =>
      el.textContent?.includes('О себе'),
    );
    expect(aboutTile).toBeTruthy();
    await act(async () => {
      aboutTile!.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    });
    expect(window.location.pathname).toBe('/Dev_projects/about');
  });
});
