import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Villas y casas', description: 'Villas, chalets y casas gestionadas por KEY SUITES en los alrededores de Granada.' };
export default function VillasPage() {
  const villas = properties.filter((property) => property.category === 'Villas y casas');
  return <main><section className="destination-hero"><Image src={siteContent.villas.heroImage.src} alt={siteContent.villas.heroImage.alt} fill priority sizes="100vw" /><div /><article><span className="section-kicker">{siteContent.villas.kicker}</span><h1><TextLines lines={siteContent.villas.title} /></h1><p>{siteContent.villas.text}</p></article></section><section className="catalog section-shell destination-catalog"><div className="section-heading"><div><span className="section-kicker">{siteContent.villas.sectionKicker}</span><h2>{villas.length} {siteContent.villas.sectionSuffix}</h2></div><Link className="arrow-link" href="/alojamientos">{siteContent.villas.allLink} <span>→</span></Link></div><div className="catalog-grid">{villas.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section></main>;
}
