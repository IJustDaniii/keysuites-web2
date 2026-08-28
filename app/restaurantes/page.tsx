import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = { title: 'Restaurantes', description: 'Próximamente: restaurantes seleccionados por OKEY SUITES.' };

export default function RestaurantsPage() {
  return <ComingSoonPage {...siteContent.futurePages.restaurants} />;
}
