'use client';

import Image from 'next/image';
import { Link } from './Link';
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { navigationLinks, siteContent } from '@/data/site-content';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  // Evita diferencias entre el HTML inicial y el navegador al crear el portal.
  const mounted = useSyncExternalStore(() => () => undefined, () => true, () => false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;
    const trigger = triggerRef.current;
    const scrollY = window.scrollY;

    // Compensa el ancho del scrollbar antes de ocultarlo
    // para evitar que toda la web "salte" horizontalmente.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousLeft = body.style.left;
    const previousRight = body.style.right;
    const previousWidth = body.style.width;
    const previousHtmlOverflow = html.style.overflow;
    const previousOverscroll = html.style.overscrollBehavior;
    const previousScrollBehavior = html.style.scrollBehavior;

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = 'auto';
    html.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Esperamos un frame para que el panel termine de mostrarse
    // antes de mover el foco.
    const focusFrame = requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const media = window.matchMedia('(min-width: 981px)');

    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    const onHistory = () => setOpen(false);

    document.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onDesktop);
    window.addEventListener('popstate', onHistory);

    return () => {
      cancelAnimationFrame(focusFrame);

      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.left = previousLeft;
      body.style.right = previousRight;
      body.style.width = previousWidth;
      html.style.overflow = previousHtmlOverflow;
      html.style.overscrollBehavior = previousOverscroll;

      // globals.css activa scroll suave. Si se restaura la posición con ese
      // comportamiento, Safari anima el documento detrás del panel al cerrar.
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = previousScrollBehavior;

      document.removeEventListener('keydown', onKeyDown);
      media.removeEventListener('change', onDesktop);
      window.removeEventListener('popstate', onHistory);

      requestAnimationFrame(() => {
        if (trigger?.isConnected && !media.matches) {
          trigger.focus({ preventScroll: true });
        }
      });
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const layer = (
    <div
      className={`menu-layer ${open ? 'open' : ''}`}
      aria-hidden={!open}
    >
      <button
        className="menu-backdrop"
        type="button"
        aria-label="Cerrar menú"
        onClick={closeMenu}
        tabIndex={open ? 0 : -1}
      />

      <aside
        ref={panelRef}
        className="menu-panel"
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
      >
        <div className="menu-panel-head">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="OKEY SUITES, inicio"
            tabIndex={open ? 0 : -1}
          >
            <Image
              src="/key-suites-logo-black.png"
              alt="OKEY SUITES"
              width={210}
              height={80}
              priority
            />
          </Link>

          <button
            ref={closeRef}
            type="button"
            className="menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            tabIndex={open ? 0 : -1}
          >
            <span />
            <span />
          </button>
        </div>

        <nav>
          {navigationLinks.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              <small>{String(index + 1).padStart(2, '0')}</small>
              <strong>{link.label}</strong>
            </Link>
          ))}
        </nav>

        <div className="menu-panel-foot">
          <span>{siteContent.home.hero.eyebrow}</span>

          <Link
            href="/alojamientos"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
          >
            {siteContent.home.closing.button}
          </Link>
        </div>
      </aside>
    </div>
  );

  return (
    <div className="mobile-menu">
      <button
        ref={triggerRef}
        className={`menu-toggle ${open ? 'open' : ''}`}
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted && createPortal(layer, document.body)}
    </div>
  );
}
