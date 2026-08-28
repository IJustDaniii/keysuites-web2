import Image from 'next/image';
import { Link } from './Link';
import { getGroupUnits, type PropertyGroup } from '@/data/properties';
import { PendingPhoto } from './ReviewNotice';

export function PropertyGroupCard({ group, index }: { group: PropertyGroup; index?: number }) {
  const units = getGroupUnits(group);

  return <article className="property-card group-card">
    <Link href={`/alojamientos/${group.slug}`} className="property-image-wrap group-image-wrap" aria-label={`Ver alojamientos de ${group.name}`}>
      {group.images[0]
        ? <Image src={group.images[0].src} alt={group.images[0].alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
        : <PendingPhoto compact />}
      {index !== undefined && <span className="card-number">{String(index + 1).padStart(2, '0')}</span>}
      <span className="category-chip">{group.category}</span>
      <span className="group-count">{group.countLabel}</span>
    </Link>
    <div className="group-card-copy">
      <span>COLECCIÓN OKEY SUITES</span>
      <h3><Link href={`/alojamientos/${group.slug}`}>{group.name}</Link></h3>
      <p>{group.location}</p>
      <div className="unit-preview">{units.map((unit) => unit.name).join(' · ')}</div>
      <Link className="group-card-link" href={`/alojamientos/${group.slug}`}>Ver alojamientos <span aria-hidden="true">→</span></Link>
    </div>
  </article>;
}
