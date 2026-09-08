import type { Metadata } from 'next';
import { RestaurantCard } from '@/components/RestaurantCard';
import { restaurantZones, restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'Restaurantes recomendados',
  description: 'Selección OkeySuites de bares y restaurantes en Granada y el Albaicín.',
};

export default function RestaurantsPage() {
  return <main className="listing-page restaurant-listing-page">
    <section className="page-hero section-shell restaurant-page-hero">
      <span className="section-kicker">GUÍA LOCAL · {restaurants.length} RECOMENDACIONES</span>
      <div className="listing-title-row">
        <div>
          <h1>OkeySuites<br /><span className="restaurant-page-title-line">te recomienda</span></h1>
          <p>Sabores que merecen una parada: desde el tapeo más auténtico del Albaicín hasta mesas especiales en el centro de Granada.</p>
        </div>
        <aside className="restaurant-hero-note" aria-label="Selección gastronómica local">
          <span>SELECCIÓN LOCAL</span>
          <strong>Una mesa distinta<br /><em>en cada barrio.</em></strong>
          <p>Direcciones elegidas para disfrutar Granada a tu ritmo, sin artificios.</p>
        </aside>
      </div>
    </section>

    <nav className="restaurant-zone-nav section-shell" aria-label="Zonas de restaurantes">
      {restaurantZones.map((zone) => <a key={zone} href={`#${zone === 'Albaicín' ? 'albaicin' : 'granada'}`}>{zone}</a>)}
    </nav>

    {restaurantZones.map((zone) => {
      const zoneRestaurants = restaurants.filter((restaurant) => restaurant.zone === zone);
      const id = zone === 'Albaicín' ? 'albaicin' : 'granada';
      return <section className="catalog restaurant-catalog section-shell" id={id} key={zone}>
        <header className="restaurant-section-heading">
          <div><span className="section-kicker">{zoneRestaurants.length} LUGARES</span><h2>{zone}</h2></div>
          <p>{zone === 'Albaicín' ? 'Bares de barrio, desayunos, cocina halal y cármenes con vistas a la Alhambra.' : 'Tabernas históricas, tapeo, arroces, brasas y cocinas del mundo en la ciudad.'}</p>
        </header>
        <div className="catalog-grid">
          {zoneRestaurants.map((restaurant, index) => <RestaurantCard restaurant={restaurant} index={index} key={restaurant.slug} />)}
        </div>
      </section>;
    })}

    <aside className="responsible-note section-shell">
      <span>UN BARRIO PARA DISFRUTAR Y CUIDAR</span>
      <p>El Albaicín es un barrio residencial y Patrimonio Mundial. Te invitamos a respetar el descanso vecinal, caminar siempre que sea posible y no bloquear sus calles estrechas.</p>
    </aside>
  </main>;
}
