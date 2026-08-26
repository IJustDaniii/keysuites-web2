import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Alojamientos en Granada', description: 'Apartamentos y suites gestionados por KEY SUITES en el centro de Granada y el Albaicín.' };
export default function GranadaPage() {
  const city = properties.filter((property) => property.category === 'Granada centro' || property.category === 'Albaicín');
  return <main><section className="destination-hero"><Image src="/properties/jardines-alhambra-01.jpg" alt="Granada desde una terraza de KEY SUITES" fill priority sizes="100vw" /><div /><article><span className="section-kicker">{siteContent.granada.kicker}</span><h1><TextLines lines={siteContent.granada.title} /></h1><p>{siteContent.granada.text}</p></article></section><section className="catalog section-shell destination-catalog"><div className="section-heading"><div><span className="section-kicker">{siteContent.granada.sectionKicker}</span><h2>{city.length} {siteContent.granada.sectionSuffix}</h2></div><Link className="arrow-link" href="/alojamientos">{siteContent.granada.allLink} <span>→</span></Link></div><div className="catalog-grid">{city.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section></main>;
}
