import Image from 'next/image';
import { Link } from './Link';
import { PendingPhoto } from './ReviewNotice';
import { getRestaurantImages, type Restaurant } from '@/data/restaurants';

export function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  const image = getRestaurantImages(restaurant)[0];

  return <Link href={`/restaurantes/${restaurant.slug}`} className="property-card restaurant-card" aria-label={`Ver ${restaurant.name}`}>
    <div className="property-image-wrap">
      {image
        ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
        : <PendingPhoto compact />}
      <span className="restaurant-zone-chip">{restaurant.zone}</span>
    </div>
    <div className="property-meta">
      <div>
        <div className="property-label"><span>{String(index + 1).padStart(2, '0')}</span><span>{restaurant.category}</span></div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.address}</p>
      </div>
      <p className="property-facts">{restaurant.specialty}<span aria-hidden="true">→</span></p>
    </div>
  </Link>;
}
