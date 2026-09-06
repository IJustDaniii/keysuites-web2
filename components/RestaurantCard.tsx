import Image from 'next/image';
import { Link } from './Link';
import { PendingPhoto } from './ReviewNotice';
import { getRestaurantCardImage, type Restaurant } from '@/data/restaurants';

export function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  const image = getRestaurantCardImage(restaurant);
  const href = `/restaurantes/${restaurant.slug}`;

  return <Link href={href} prefetch={false} data-restaurant-link className="property-card restaurant-card" aria-label={`Ver ${restaurant.name}`}>
    <div className="property-image-wrap">
      {image
        ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" decoding="async" fetchPriority="low" unoptimized />
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
