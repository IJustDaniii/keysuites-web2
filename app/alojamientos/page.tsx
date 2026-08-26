import type { Metadata } from 'next';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { categories, properties } from '@/data/properties';

export const metadata: Metadata = { title: 'Alojamientos', description: 'Explora todos los alojamientos gestionados por KEY SUITES.' };

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<{ categoria?: string; zona?: string }> }) {
  const query = await searchParams;
  const active = query.zona === 'granada' ? 'Granada centro' : query.categoria ?? 'Todos';
  const visible = active === 'Todos' ? properties : properties.filter((property) => property.category === active);
  return <main className="listing-page">
    <section className="page-hero section-shell"><span className="section-kicker">15 ALOJAMIENTOS · 4 ZONAS</span><div><h1>Encuentra tu<br />lugar en Granada.</h1><p>Apartamentos urbanos, suites con carácter, villas para compartir y una estancia frente al mar. Todos, bajo la gestión de KEY SUITES.</p></div></section>
    <section className="catalog section-shell">
      <div className="filter-bar" aria-label="Filtrar alojamientos">{categories.map((category) => <Link className={active === category ? 'active' : ''} href={category === 'Todos' ? '/alojamientos' : `/alojamientos?categoria=${encodeURIComponent(category)}`} key={category}>{category}</Link>)}</div>
      <div className="catalog-summary"><p><strong>{visible.length}</strong> alojamientos</p><span>Datos confirmados y pendientes claramente diferenciados en cada ficha</span></div>
      <div className="catalog-grid">{visible.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div>
    </section>
  </main>;
}
