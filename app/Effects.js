'use client';
import { useEffect } from 'react';

// Small behaviours: reveal on scroll, cursor spotlight on cards, scroll-lit text, nav state.
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    // Reveal
    const items = document.querySelectorAll('[data-reveal]');
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        }),
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // Cursor spotlight on cards + hero glow
    const onMove = (e) => {
      const t = e.target.closest ? e.target.closest('[data-spot]') : null;
      if (t) {
        const r = t.getBoundingClientRect();
        t.style.setProperty('--mx', `${e.clientX - r.left}px`);
        t.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    cleanups.push(() => window.removeEventListener('pointermove', onMove));

    // Scroll-lit words + nav
    const lit = document.querySelector('[data-lit]');
    const words = lit ? lit.querySelectorAll('.w') : [];
    const nav = document.querySelector('.nav');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
      if (lit) {
        const r = lit.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        const n = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle('on', i < n));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
