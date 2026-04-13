import { gsap, ScrollTrigger } from './gsap-init';

const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function fadeUp(selector: string, options?: { delay?: number; stagger?: number }) {
  if (prefersReducedMotion) return;
  gsap.fromTo(
    selector,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: options?.stagger ?? 0,
      delay: options?.delay ?? 0,
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        once: true,
      },
    }
  );
}

export function staggerCards(containerSelector: string, cardSelector: string) {
  if (prefersReducedMotion) return;
  gsap.fromTo(
    `${containerSelector} ${cardSelector}`,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: containerSelector,
        start: 'top 80%',
        once: true,
      },
    }
  );
}

export function counterAnimation(el: HTMLElement) {
  if (prefersReducedMotion) {
    el.textContent = el.dataset.target ?? '0';
    return;
  }

  const target = parseFloat(el.dataset.target ?? '0');
  const suffix = el.dataset.suffix ?? '';
  const prefix = el.dataset.prefix ?? '';
  const isDecimal = String(target).includes('.');

  gsap.fromTo(
    { val: 0 },
    { val: 0 },
    {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: function () {
        const current = this.targets()[0].val;
        el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix;
      },
    }
  );
}

export function parallaxBg(selector: string, speed: number = 0.3) {
  if (prefersReducedMotion) return;
  gsap.to(selector, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
