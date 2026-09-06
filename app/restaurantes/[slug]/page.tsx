import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { GalleryModal } from '@/components/GalleryModal';
import { Link } from '@/components/Link';
import { PendingPhoto } from '@/components/ReviewNotice';
import { getRestaurant, getRestaurantImages, getRestaurantMapUrl, restaurants, type RestaurantImage } from '@/data/restaurants';
import { siteContent } from '@/data/site-content';

export function generateStaticParams() {
  return restaurants.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);
  if (!restaurant) return {};
  const image = getRestaurantImages(restaurant)[0];
  return {
    title: `${restaurant.name} | Restaurantes recomendados`,
    description: restaurant.why,
    alternates: { canonical: `/restaurantes/${restaurant.slug}` },
    openGraph: {
      title: `${restaurant.name} | OKEY SUITES`,
      description: restaurant.why,
      images: image ? [{ url: new URL(image.src, siteContent.seo.siteUrl).toString(), alt: image.alt }] : [],
    },
  };
}

function RestaurantGallery({ images, name }: { images: RestaurantImage[]; name: string }) {
  if (images.length === 0) return <section className="restaurant-empty-gallery section-shell" aria-label={`Galería de ${name}`}><PendingPhoto /></section>;
  return <section className={`gallery section-shell gallery-${Math.min(images.length, 3)}`} id="galeria">
    <div className="gallery-main"><Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width: 800px) 100vw, 70vw" /></div>
    {images.length > 1 && <div className="gallery-side">
      {images.slice(1, 3).map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 1px, 30vw" /></div>)}
    </div>}
    <GalleryModal images={images} propertyName={name} />
  </section>;
}

export default async function RestaurantDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = getRestaurant(slug);
  if (!restaurant) notFound();
  const images = getRestaurantImages(restaurant);
  const mapsUrl = getRestaurantMapUrl(restaurant);

  return <main className="detail-page restaurant-detail-page">
    <div className="breadcrumbs section-shell"><Link href="/restaurantes">Restaurantes</Link><span>/</span><span>{restaurant.name}</span></div>
    <section className="detail-title section-shell restaurant-detail-title">
      <div><span className="property-type">{restaurant.category} · {restaurant.zone}</span><h1>{restaurant.name}</h1><p>{restaurant.address}</p></div>
      <div className="restaurant-title-actions">
        <a className="outline-button" href={mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar ↗</a>
        <a className="primary-button" href={restaurant.website} target="_blank" rel="noopener noreferrer">Ver web o carta ↗</a>
      </div>
    </section>
    <RestaurantGallery images={images} name={restaurant.name} />

    <section className="restaurant-overview section-shell">
      <div className="restaurant-main-copy">
        <span className="section-kicker">POR QUÉ TE LO RECOMENDAMOS</span>
        <h2>{restaurant.why}</h2>
        <p className="description">{restaurant.description}</p>

        <div className="content-block">
          <div className="block-heading"><span>01</span><h3>Lo que no te puedes perder</h3></div>
          <p className="restaurant-specialty">{restaurant.specialty}</p>
        </div>

        <div className="restaurant-tags" aria-label="Características">
          {restaurant.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      <aside className="restaurant-visit-card">
        <span className="section-kicker">PREPARA TU VISITA</span>
        <div><small>Dirección</small><p>{restaurant.address}</p></div>
        {restaurant.schedule && <div><small>Horario orientativo</small><p>{restaurant.schedule}</p></div>}
        <p className="restaurant-current-note">Los horarios, cartas y condiciones pueden cambiar. Consulta siempre la información actualizada antes de desplazarte.</p>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps <span>↗</span></a>
        <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Web, carta o ficha <span>↗</span></a>
      </aside>
    </section>

    <section className="restaurant-back-section">
      <div className="section-shell"><div><span className="section-kicker">SELECCIÓN OKEYSUITES</span><h2>¿Seguimos descubriendo Granada?</h2></div><Link className="primary-button" href="/restaurantes">Ver todos los restaurantes</Link></div>
    </section>
  </main>;
}
