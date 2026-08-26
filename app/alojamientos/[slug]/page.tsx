import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { notFound } from 'next/navigation';
import { PendingPhoto, ReviewNotice } from '@/components/ReviewNotice';
import { getProperty, properties } from '@/data/properties';
import { REVIEW_MODE } from '@/data/config';
import { GalleryModal } from '@/components/GalleryModal';

export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const property = getProperty(slug);
  if (!property) return {};
  const image = property.images[0] ? new URL(property.images[0].src, 'https://key-suites-granada.ijustdaniii.chatgpt.site').toString() : null;
  return { title: property.name, description: property.shortDescription, openGraph: { title: property.name, description: property.shortDescription, images: image ? [{ url: image, alt: property.images[0].alt }] : [] }, twitter: { card: 'summary_large_image', title: property.name, description: property.shortDescription, images: image ? [image] : [] } };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const property = getProperty(slug); if (!property) notFound();
  const facts = [{ value: property.guests, label: 'huéspedes' }, { value: property.bedrooms, label: 'dormitorios' }, { value: property.beds, label: 'camas' }, { value: property.bathrooms, label: 'baños' }];
  return <main className="detail-page">
    <div className="breadcrumbs section-shell"><Link href="/alojamientos">Alojamientos</Link><span>/</span><span>{property.name}</span></div>
    <section className="detail-title section-shell"><div><span className="property-type">{property.type} · {property.category}</span>{property.group && <Link href="/alojamientos/suites-jardines-de-la-alhambra" className="group-link">Parte de {property.group} ↗</Link>}<h1>{property.name}</h1><p>{property.location}</p></div><Link href="#reserva" className="outline-button">Consultar disponibilidad <span>↓</span></Link></section>
    <section className={`gallery section-shell gallery-${Math.min(property.images.length, 2)}`} id="galeria">
      {property.images[0] ? <div className="gallery-main"><Image src={property.images[0].src} alt={property.images[0].alt} fill priority sizes="(max-width: 800px) 100vw, 70vw" /></div> : <PendingPhoto />}
      <div className="gallery-side">{property.images[1] ? <div><Image src={property.images[1].src} alt={property.images[1].alt} fill sizes="30vw" /></div> : <PendingPhoto compact />}{<PendingPhoto compact />}</div>
      <GalleryModal images={property.images} propertyName={property.name} />
    </section>
    <section className="property-overview section-shell">
      <div className="property-content"><span className="section-kicker">LA ESTANCIA</span><h2>{property.shortDescription}</h2><div className="fact-row">{facts.map((fact) => <div key={fact.label}><strong>{fact.value ?? '—'}</strong><span>{fact.value === null ? `${fact.label} por confirmar` : fact.label}</span></div>)}</div><p className="description">{property.description}</p>
        <div className="content-block"><div className="block-heading"><span>01</span><h3>Características destacadas</h3></div><div className="highlight-grid">{property.highlights.map((item) => <span key={item}>✓ {item}</span>)}</div></div>
        <div className="content-block"><div className="block-heading"><span>02</span><h3>Comodidades confirmadas</h3></div>{property.amenities.length ? <div className="amenities-grid">{property.amenities.map((item) => <span key={item}>{item}</span>)}</div> : <p className="empty-copy">No hay comodidades verificadas incorporadas a esta ficha todavía.</p>}</div>
        <div className="content-block"><div className="block-heading"><span>03</span><h3>Distribución</h3></div><div className="distribution"><strong>{property.bedrooms ? `${property.bedrooms} dormitorio${property.bedrooms > 1 ? 's' : ''}` : 'Número de dormitorios pendiente'}</strong><p>La asignación exacta de camas por dormitorio está pendiente de confirmar.</p></div></div>
        <div className="content-block"><div className="block-heading"><span>04</span><h3>Ideal para</h3></div><div className="ideal-row">{property.idealFor.map((item) => <span key={item}>{item}</span>)}</div></div>
      </div>
      <aside className="review-panel"><div className="review-panel-head"><span>Modo revisión</span><strong>{property.reviewNotes.length} puntos pendientes</strong></div>{property.reviewNotes.map((note, index) => <ReviewNotice note={note} key={index} />)}{!REVIEW_MODE && <p>Información pública de la estancia.</p>}</aside>
    </section>
    <section className="location-section"><div className="section-shell location-inner"><div><span className="section-kicker">UBICACIÓN</span><h2>{property.location}</h2><p>{property.area}. La dirección exacta puede reservarse para las personas con una estancia confirmada.</p></div><div className="map-placeholder"><span>KEY SUITES</span><i className="map-pin">●</i><strong>{property.area}</strong></div></div></section>
    <section className="reviews-booking section-shell">
      <div className="reviews"><span className="section-kicker">REPUTACIÓN PÚBLICA</span><h2>Opiniones en plataformas externas</h2>{property.platforms.length ? <div className="platform-list">{property.platforms.map((platform) => <article key={platform.name}><strong>{platform.name}</strong><b>{platform.rating ?? 'Valoración no incorporada'}</b>{platform.reviews && <p>{platform.reviews}</p>}{platform.note && <small>{platform.note}</small>}<em>Escala propia de {platform.name}</em></article>)}</div> : <p className="empty-copy">Todavía no se han incorporado valoraciones públicas verificadas.</p>}</div>
      <div className="booking-card" id="reserva"><span className="section-kicker">RESERVA TU ESTANCIA</span><h2>Consulta la disponibilidad</h2><p>Los enlaces definitivos de reserva se incorporarán después de validarlos con KEY SUITES.</p>{property.platforms.map((platform) => <span className="platform-button" key={platform.name}>{platform.name}<small>Enlace pendiente</small></span>)}{REVIEW_MODE && <div className="direct-pending">○ PENDIENTE: integrar motor de reservas directo</div>}</div>
    </section>
    <div className="mobile-booking"><a href="#reserva">Consultar disponibilidad <span>↑</span></a></div>
  </main>;
}
