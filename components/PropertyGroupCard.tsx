import Image from 'next/image';
import { Link } from './Link';
import { getGroupUnits, type PropertyGroup } from '@/data/properties';
import { PendingPhoto } from './ReviewNotice';

export function PropertyGroupCard({ group, index }: { group: PropertyGroup; index?: number }) {
  const units = getGroupUnits(group);

  return <Link href={`/alojamientos/${group.slug}`} className="property-card group-card" aria-label={`Ver alojamientos de ${group.name}`}>
    <div className="property-image-wrap group-image-wrap">
      {group.images[0]
        ? <Image src={group.images[0].src} alt={group.images[0].alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
        : <PendingPhoto compact />}
    </div>
    <div className="group-card-copy">
      <div className="property-label"><span>{index !== undefined ? String(index + 1).padStart(2, '0') : '—'}</span><span>{group.category}</span></div>
      <span>COLECCIÓN KEY SUITES</span>
      <h3>{group.name}</h3>
      <p>{group.location}</p>
      <div className="unit-preview"><span>{group.countLabel}</span>{units.map((unit) => unit.name).join(' · ')}</div>
      <span className="group-card-link">Ver alojamientos <span aria-hidden="true">→</span></span>
    </div>
  </Link>;
}
