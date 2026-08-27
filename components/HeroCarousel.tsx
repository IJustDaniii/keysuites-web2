'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { siteContent } from '@/data/site-content';
import { CAROUSEL_INTERVAL_MS } from '@/data/config';
import { TextLines } from './TextLines';

const slides = siteContent.home.hero.slides;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      if (timer) clearInterval(timer);
      if (!motion.matches && slides.length > 1) timer = setInterval(() => setCurrent((index) => (index + 1) % slides.length), CAROUSEL_INTERVAL_MS);
    };
    start();
    motion.addEventListener('change', start);
    return () => { if (timer) clearInterval(timer); motion.removeEventListener('change', start); };
  }, []);

  return <>
    <div className="hero-slides" aria-live="off">
      {slides.map((slide, index) => <Image
        key={slide.src}
        className={`hero-slide hero-slide-${index + 1} ${current === index ? 'active' : ''}`}
        src={slide.src}
        alt={current === index ? slide.alt : ''}
        aria-hidden={current !== index}
        fill
        priority={index === 0}
        loading={index === 0 ? 'eager' : 'lazy'}
        quality={82}
        sizes="100vw"
      />)}
    </div>
    <div className="hero-progress" aria-label="Seleccionar imagen principal">
      {slides.map((slide, index) => <button key={slide.src} type="button" className={current === index ? 'active' : ''} onClick={() => setCurrent(index)} aria-label={`Mostrar imagen de ${slide.label}`} aria-current={current === index ? 'true' : undefined}><span /></button>)}
    </div>
    <div className="hero-note"><small>{String(current + 1).padStart(2, '0')} — {slides[current].label.toUpperCase()}</small><strong><TextLines lines={siteContent.home.hero.note} /></strong></div>
  </>;
}
