'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de Suites Jardines de la Alhambra al atardecer', label: 'Granada' },
  { src: '/properties/el-pino-01.jpg', alt: 'Jardín y barbacoa de Chalé El Pino', label: 'Villas' },
  { src: '/properties/miramar-01.png', alt: 'Terraza de Apartamento Miramar frente al mar', label: 'Costa Tropical' },
  { src: '/properties/puentezuelas-01.jpg', alt: 'Salón de Puentezuelas 49 en el centro de Granada', label: 'Granada centro' },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      if (timer) clearInterval(timer);
      if (!motion.matches) timer = setInterval(() => setCurrent((index) => (index + 1) % slides.length), 10_000);
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
    <div className="hero-note"><small>{String(current + 1).padStart(2, '0')} — {slides[current].label.toUpperCase()}</small><strong>Estancias con<br />carácter propio</strong></div>
  </>;
}
