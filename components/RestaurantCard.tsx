import type { Restaurant } from '@/data/restaurants';

export function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  const href = `/restaurantes/${restaurant.slug}`;

  return <a href={href} className="property-card restaurant-card" aria-label={`Ver la ficha de ${restaurant.name}`} style={{ '--card-index': index } as React.CSSProperties}>
    <div className="restaurant-card-content">
      <div className="restaurant-card-topline">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{restaurant.zone}</span>
      </div>
      <div className="restaurant-card-mark" aria-hidden="true">
        <span>{restaurant.category}</span>
        <span>↗︎</span>
      </div>
      <div className="restaurant-card-copy">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.address}</p>
      </div>
    </div>
    <div className="property-meta restaurant-card-meta">
      <div>
        <div className="restaurant-card-tags" aria-label="Características">
          {restaurant.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className="restaurant-card-specialty">{restaurant.specialty}</p>
      </div>
      <p className="property-facts"><span aria-hidden="true">→</span><span>Ver recomendación</span></p>
    </div>
  </a>;
}
