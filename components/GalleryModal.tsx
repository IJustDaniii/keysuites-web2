'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PropertyImage } from '@/data/properties';
import { siteContent } from '@/data/site-content';

export function GalleryModal({ images, propertyName }: { images: PropertyImage[]; propertyName: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  if (images.length < 2) return null;
  return <>
    <button className="gallery-button" type="button" onClick={() => setOpen(true)}>{siteContent.gallery.open}</button>
    <div className={`gallery-modal ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="gallery-backdrop" type="button" aria-label={siteContent.gallery.close} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} />
      <section role="dialog" aria-modal="true" aria-label={`Galería de ${propertyName}`}>
        <header><div><small>{siteContent.gallery.title}</small><h2>{propertyName}</h2></div><button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label={siteContent.gallery.close}>{siteContent.gallery.close}</button></header>
        <div className="gallery-modal-grid">{images.map((image, index) => <figure key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><figcaption>{String(index + 1).padStart(2, '0')} · {image.alt}</figcaption></figure>)}</div>
      </section>
    </div>
  </>;
}
