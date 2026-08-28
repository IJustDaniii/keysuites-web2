import type { Metadata } from 'next';
import { PropertyCatalog } from '@/components/PropertyCatalog';
import { catalogItems } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = {
  title: 'Alojamientos',
  description: 'Apartamentos, casas rurales y alojamientos en Granada, el Albaicín y la Costa gestionados por OKEY SUITES.',
};

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const { categoria } = await searchParams;

  return <main className="listing-page">
    <section className="page-hero section-shell">
      <span className="section-kicker">{catalogItems.length} {siteContent.listings.kicker}</span>
      <div><h1><TextLines lines={siteContent.listings.title} /></h1><p>{siteContent.listings.text}</p></div>
    </section>
    <section className="catalog section-shell">
      <PropertyCatalog items={catalogItems} initialFilter={categoria} />
    </section>
  </main>;
}
