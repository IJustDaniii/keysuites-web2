import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/components/Link';
import { ExternalLinkIcon } from '@/components/LinkIcons';
import { getRestaurant, getRestaurantMapUrl, restaurants } from '@/data/restaurants';

// Todas las fichas salen del catálogo local; se pueden servir como HTML estático
// y así la navegación no tiene que esperar un render en el Worker.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return restaurants.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);
  if (!restaurant) return {};
  return {
    title: `${restaurant.name} | Restaurantes recomendados`,
    description: restaurant.why,
    alternates: { canonical: `/restaurantes/${restaurant.slug}` },
    openGraph: {
      title: `${restaurant.name} | OKEY SUITES`,
      description: restaurant.why,
    },
  };
}

export default async function RestaurantDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);
  if (!restaurant) notFound();
  const mapsUrl = getRestaurantMapUrl(restaurant);

  return <main className="detail-page restaurant-detail-page">
    <div className="breadcrumbs section-shell"><Link href="/restaurantes">Restaurantes</Link><span>/</span><span>{restaurant.name}</span></div>
    <section className="detail-title section-shell restaurant-detail-title">
      <div><span className="property-type">{restaurant.category} · {restaurant.zone}</span><h1>{restaurant.name}</h1><p>{restaurant.address}</p></div>
      <div className="restaurant-title-actions">
        <a className="outline-button" href={mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <ExternalLinkIcon /></a>
        <a className="primary-button" href={restaurant.website} target="_blank" rel="noopener noreferrer">Ver web o carta <ExternalLinkIcon /></a>
      </div>
    </section>

    <section className="restaurant-detail-highlight section-shell" aria-label="Resumen de la recomendación">
      <div>
        <span className="section-kicker">SELECCIÓN OKEY SUITES</span>
        <strong>{restaurant.zone}</strong>
        <p>{restaurant.category}</p>
      </div>
      <div className="restaurant-detail-highlight-note">
        <span>UNA DIRECCIÓN PARA RECORDAR</span>
        <p>{restaurant.why}</p>
      </div>
      <div className="restaurant-detail-highlight-tags" aria-label="Características destacadas">
        {restaurant.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </section>

    <section className="restaurant-overview section-shell">
      <div className="restaurant-main-copy">
        <span className="section-kicker">POR QUÉ TE LO RECOMENDAMOS</span>
        <h2>{restaurant.why}</h2>
        <p className="description">{restaurant.description}</p>

        <div className="content-block">
          <div className="block-heading"><span>01</span><h3>Lo que no te puedes perder</h3></div>
          <p className="restaurant-specialty">{restaurant.specialty}</p>
        </div>
      </div>

      <aside className="restaurant-visit-card">
        <span className="section-kicker">PREPARA TU VISITA</span>
        <div><small>Dirección</small><p>{restaurant.address}</p></div>
        {restaurant.schedule && <div><small>Horario orientativo</small><p>{restaurant.schedule}</p></div>}
        <p className="restaurant-current-note">Los horarios, cartas y condiciones pueden cambiar. Consulta siempre la información actualizada antes de desplazarte.</p>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps <ExternalLinkIcon /></a>
        <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Web, carta o ficha <ExternalLinkIcon /></a>
      </aside>
    </section>

    <section className="restaurant-back-section">
      <div className="section-shell"><div><span className="section-kicker">SELECCIÓN OKEYSUITES</span><h2>¿Seguimos descubriendo Granada?</h2></div><Link className="primary-button" href="/restaurantes">Ver todos los restaurantes</Link></div>
    </section>
  </main>;
}
