import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export const metadata: Metadata = { title: 'Alojamientos en Granada', description: 'Apartamentos y suites gestionados por KEY SUITES en el centro de Granada y el Albaicín.' };
export default function GranadaPage() {
  const city = properties.filter((property) => property.category === 'Granada centro' || property.category === 'Albaicín');
  return <main><section className="destination-hero"><Image src="/properties/jardines-alhambra-01.jpg" alt="Granada desde una terraza de KEY SUITES" fill priority sizes="100vw" /><div /><article><span className="section-kicker">GRANADA</span><h1>Centro histórico<br />y Albaicín.</h1><p>Alojamientos desde los que acercarte a Plaza Nueva, la Alhambra, la Catedral y las calles del Albaicín.</p></article></section><section className="catalog section-shell destination-catalog"><div className="section-heading"><div><span className="section-kicker">ALOJAMIENTOS EN LA CIUDAD</span><h2>{city.length} estancias en Granada</h2></div><Link className="arrow-link" href="/alojamientos">Ver todos <span>→</span></Link></div><div className="catalog-grid">{city.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section></main>;
}
