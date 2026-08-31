'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PropertyImage } from '@/data/properties';
import { siteContent } from '@/data/site-content';

export function GalleryModal({ images, propertyName }: { images: PropertyImage[]; propertyName: string }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeGallery = () => {
    setSelectedIndex(null);
    setOpen(false);
  };
  const showPrevious = () => setSelectedIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
  const showNext = () => setSelectedIndex((index) => index === null ? null : (index + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedIndex === null) closeGallery();
        else setSelectedIndex(null);
      }
      if (selectedIndex !== null && event.key === 'ArrowLeft') setSelectedIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
      if (selectedIndex !== null && event.key === 'ArrowRight') setSelectedIndex((index) => index === null ? null : (index + 1) % images.length);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, selectedIndex, images.length]);

  if (images.length < 2) return null;
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  return <>
    <button className="gallery-button" type="button" onClick={() => setOpen(true)}>{siteContent.gallery.open}</button>
    <div className={`gallery-modal ${open ? 'open' : ''} ${selectedImage ? 'is-lightbox-open' : ''}`} aria-hidden={!open}>
      <button className="gallery-backdrop" type="button" aria-label={siteContent.gallery.close} onClick={closeGallery} tabIndex={open ? 0 : -1} />
      <section role="dialog" aria-modal="true" aria-label={`Galería de ${propertyName}`}>
        <header>
          <div><small>{siteContent.gallery.title}</small><h2>{propertyName}</h2></div>
          <button ref={closeRef} type="button" onClick={closeGallery}>{siteContent.gallery.close}</button>
        </header>
        <div className="gallery-modal-grid">
          {images.map((image, index) => <button className="gallery-thumbnail" type="button" key={image.src} onClick={() => setSelectedIndex(index)} aria-label={`Ampliar foto ${index + 1}: ${image.alt}`}>
            <span><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 25vw" /></span>
            <small>{String(index + 1).padStart(2, '0')}</small>
          </button>)}
        </div>
      </section>
      {selectedImage && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Imagen ${selectedIndex + 1} de ${images.length}`}>
        <button className="gallery-lightbox-backdrop" type="button" aria-label="Cerrar imagen ampliada" onClick={() => setSelectedIndex(null)} />
        <div className="gallery-lightbox-content">
          <button className="gallery-lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Cerrar imagen ampliada">×</button>
          <button className="gallery-lightbox-nav previous" type="button" onClick={showPrevious} aria-label="Foto anterior">←</button>
          <figure>
            <div><Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="100vw" priority /></div>
            <figcaption><span>{String(selectedIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>{selectedImage.alt}</figcaption>
          </figure>
          <button className="gallery-lightbox-nav next" type="button" onClick={showNext} aria-label="Foto siguiente">→</button>
        </div>
      </div>}
    </div>
  </>;
}
