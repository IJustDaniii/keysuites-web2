import Image from 'next/image';
import { Link } from './Link';
import type { Property } from '@/data/properties';
import { PendingPhoto } from './ReviewNotice';

export function PropertyCard({ property, index }: { property: Property; index?: number }) {
  const facts = [
    property.type,
    property.guests === null ? null : `${property.guests} huéspedes`,
    property.bedrooms === null ? null : property.bedrooms === 0 ? 'Estudio' : `${property.bedrooms} dormitorio${property.bedrooms === 1 ? '' : 's'}`,
  ].filter(Boolean).join(' · ');

  return <article className="property-card">
    <Link href={`/alojamientos/${property.slug}`} className="property-image-wrap" aria-label={`Ver ${property.name}`}>
      {property.images[0]
        ? <Image src={property.images[0].src} alt={property.images[0].alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
        : <PendingPhoto compact />}
      {index !== undefined && <span className="card-number">{String(index + 1).padStart(2, '0')}</span>}
      <span className="category-chip">{property.category}</span>
    </Link>
    <div className="property-meta">
      <div><h3><Link href={`/alojamientos/${property.slug}`}>{property.name}</Link></h3><p>{property.location}</p></div>
      <p>{facts}</p>
    </div>
  </article>;
}
