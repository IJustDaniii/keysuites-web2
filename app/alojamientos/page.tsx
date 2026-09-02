import type { Metadata } from 'next';
import { PropertyCatalog } from '@/components/PropertyCatalog';
import { catalogItems } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';
import { Link } from '@/components/Link';
import { PhoneIcon } from '@/components/PhoneIcon';

export const metadata: Metadata = {
  title: 'Alojamientos',
  description: 'Apartamentos, casas rurales y alojamientos en Granada, el Albaicín y la Costa gestionados por OKEY SUITES.',
};

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const { categoria } = await searchParams;

  return <main className="listing-page">
    <section className="page-hero section-shell">
      <span className="section-kicker">{catalogItems.length} {siteContent.listings.kicker}</span>
      <div className="listing-title-row"><h1><TextLines lines={siteContent.listings.title} /></h1><Link className="contact-title-cta" href="/contacto#contact-phone-title"><PhoneIcon />Contacto</Link></div>
    </section>
    <section className="catalog section-shell">
      <PropertyCatalog items={catalogItems} initialFilter={categoria} />
    </section>
  </main>;
}
