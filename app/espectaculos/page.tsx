import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = { title: 'Espectáculos', description: 'Próximamente: espectáculos seleccionados por OKEY SUITES.' };

export default function SpectaclesPage() {
  return <ComingSoonPage {...siteContent.futurePages.spectacles} />;
}
