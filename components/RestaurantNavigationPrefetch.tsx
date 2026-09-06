'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Prepara una sola ficha cuando la persona muestra intención real de abrirla.
 * El listener delegado evita convertir las 37 tarjetas en 37 límites cliente.
 */
export function RestaurantNavigationPrefetch() {
  const router = useRouter();

  useEffect(() => {
    const prefetched = new Set<string>();
    const prefetchFromIntent = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[data-restaurant-link]');
      const href = link?.getAttribute('href');
      if (!href || prefetched.has(href)) return;
      prefetched.add(href);
      router.prefetch(href);
    };

    document.addEventListener('pointerover', prefetchFromIntent, true);
    document.addEventListener('focusin', prefetchFromIntent, true);
    document.addEventListener('pointerdown', prefetchFromIntent, true);
    return () => {
      document.removeEventListener('pointerover', prefetchFromIntent, true);
      document.removeEventListener('focusin', prefetchFromIntent, true);
      document.removeEventListener('pointerdown', prefetchFromIntent, true);
    };
  }, [router]);

  return null;
}
