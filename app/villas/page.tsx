import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export const metadata: Metadata = { title: 'Villas y casas', description: 'Villas, chalets y casas gestionadas por KEY SUITES en los alrededores de Granada.' };
export default function VillasPage() {
  const villas = properties.filter((property) => property.category === 'Villas y casas');
  return <main><section className="destination-hero"><Image src="/properties/el-pino-01.jpg" alt="Jardín de Chalé El Pino" fill priority sizes="100vw" /><div /><article><span className="section-kicker">VILLAS Y CASAS</span><h1>Más espacio<br />para compartir.</h1><p>Casas con jardín, piscina y zonas exteriores en Cájar, Otura y Albolote.</p></article></section><section className="catalog section-shell destination-catalog"><div className="section-heading"><div><span className="section-kicker">ALREDEDORES DE GRANADA</span><h2>{villas.length} casas y villas</h2></div><Link className="arrow-link" href="/alojamientos">Ver todos <span>→</span></Link></div><div className="catalog-grid">{villas.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section></main>;
}
