import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis: Lenis | null = null;
let lenisWrapper: HTMLElement | Window | null = null;
let activeWrapper: HTMLElement | Window | null = null;
let rafId = 0;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const stopRaf = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
};

const destroyLenis = () => {
  stopRaf();
  lenis?.destroy();
  lenis = null;
  lenisWrapper = null;
};

/**
 * Points smooth scroll at the element that actually scrolls:
 * `main` for the bento views (it has overflow-y: auto), window otherwise.
 */
export const setScrollContainer = (wrapper: HTMLElement | null) => {
  if (typeof window === 'undefined') {
    return;
  }

  const target: HTMLElement | Window | null = wrapper ?? (typeof window !== 'undefined' ? window : null);
  if (!target) {
    return;
  }
  activeWrapper = target;

  if (lenisWrapper === target) {
    return;
  }

  destroyLenis();
  lenisWrapper = target;

  if (prefersReducedMotion()) {
    return;
  }

  lenis = new Lenis({
    wrapper: target,
    content: target instanceof HTMLElement ? target : undefined,
  });

  const loop = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);
};

export const scrollPageToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    return;
  }

  if (activeWrapper instanceof HTMLElement) {
    activeWrapper.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
};

export const destroySmoothScroll = () => {
  destroyLenis();
};
