'use client';

import Image from 'next/image';
import { Link } from './Link';
import { useEffect, useRef, useState } from 'react';
import { navigationLinks, siteContent } from '@/data/site-content';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
        const first = focusable[0]; const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const media = window.matchMedia('(min-width: 981px)');
    const onDesktop = () => { if (media.matches) setOpen(false); };
    const onHistory = () => setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onDesktop);
    window.addEventListener('popstate', onHistory);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKeyDown); media.removeEventListener('change', onDesktop); window.removeEventListener('popstate', onHistory); };
  }, [open]);

  return <div className="mobile-menu">
    <button className={`menu-toggle ${open ? 'open' : ''}`} type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
    <div className={`menu-layer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="menu-backdrop" type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} />
      <aside ref={panelRef} className="menu-panel" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menú principal">
        <div className="menu-panel-head"><Link href="/" onClick={() => setOpen(false)} aria-label="KEY SUITES, inicio"><Image src="/key-suites-logo-white.png" alt="KEY SUITES" width={210} height={80} /></Link><button ref={closeRef} type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="Cerrar menú"><span /><span /></button></div>
        <nav>{navigationLinks.map((link, index) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><small>{String(index + 1).padStart(2, '0')}</small><strong>{link.label}</strong><span>↗</span></Link>)}</nav>
        <div className="menu-panel-foot"><span>{siteContent.home.hero.eyebrow}</span><Link href="/alojamientos" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{siteContent.home.closing.button} <b>→</b></Link></div>
      </aside>
    </div>
  </div>;
}
