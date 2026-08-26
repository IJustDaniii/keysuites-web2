import type { Metadata } from 'next';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { categories, properties } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Alojamientos', description: 'Explora todos los alojamientos gestionados por KEY SUITES.' };

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<{ categoria?: string; zona?: string }> }) {
  const query = await searchParams;
  const active = query.zona === 'granada' ? 'Granada centro' : query.categoria ?? 'Todos';
  const visible = active === 'Todos' ? properties : properties.filter((property) => property.category === active);
  return <main className="listing-page">
    <section className="page-hero section-shell"><span className="section-kicker">{properties.length} {siteContent.listings.kicker}</span><div><h1><TextLines lines={siteContent.listings.title} /></h1><p>{siteContent.listings.text}</p></div></section>
    <section className="catalog section-shell">
      <div className="filter-bar" aria-label="Filtrar alojamientos">{categories.map((category) => <Link className={active === category ? 'active' : ''} href={category === 'Todos' ? '/alojamientos' : `/alojamientos?categoria=${encodeURIComponent(category)}`} key={category}>{category}</Link>)}</div>
      <div className="catalog-summary"><p><strong>{visible.length}</strong> alojamientos</p><span>{siteContent.listings.confirmedNote}</span></div>
      <div className="catalog-grid">{visible.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div>
    </section>
  </main>;
}
