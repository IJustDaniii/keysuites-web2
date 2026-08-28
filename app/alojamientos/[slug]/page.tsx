import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { notFound } from 'next/navigation';
import { PendingPhoto, ReviewNotice } from '@/components/ReviewNotice';
import { getProperty, properties } from '@/data/properties';
import { REVIEW_MODE } from '@/data/config';
import { GalleryModal } from '@/components/GalleryModal';
import { siteContent } from '@/data/site-content';

export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const property = getProperty(slug);
  if (!property) return {};
  const image = property.images[0] ? new URL(property.images[0].src, siteContent.seo.siteUrl).toString() : null;
  return { title: property.name, description: property.shortDescription, openGraph: { title: property.name, description: property.shortDescription, images: image ? [{ url: image, alt: property.images[0].alt }] : [] }, twitter: { card: 'summary_large_image', title: property.name, description: property.shortDescription, images: image ? [image] : [] } };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const property = getProperty(slug); if (!property) notFound();
  const copy = siteContent.propertyPage;
  const facts = [{ value: property.guests, label: copy.facts.guests }, { value: property.bedrooms, label: copy.facts.bedrooms }, { value: property.beds, label: copy.facts.beds }, { value: property.bathrooms, label: copy.facts.bathrooms }];
  return <main className="detail-page">
    <div className="breadcrumbs section-shell"><Link href="/alojamientos">{copy.breadcrumbs}</Link><span>/</span><span>{property.name}</span></div>
    <section className="detail-title section-shell"><div><span className="property-type">{property.type} · {property.category}</span>{property.group && <Link href="/alojamientos/suites-jardines-de-la-alhambra" className="group-link">{copy.groupPrefix} {property.group}</Link>}<h1>{property.name}</h1><p>{property.location}</p></div><Link href="#reserva" className="outline-button">{copy.availability}</Link></section>
    <section className={`gallery section-shell gallery-${Math.min(property.images.length, 2)}`} id="galeria">
      {property.images[0] ? <div className="gallery-main"><Image src={property.images[0].src} alt={property.images[0].alt} fill priority sizes="(max-width: 800px) 100vw, 70vw" /></div> : <PendingPhoto />}
      <div className="gallery-side">{property.images[1] ? <div><Image src={property.images[1].src} alt={property.images[1].alt} fill sizes="30vw" /></div> : <PendingPhoto compact />}{<PendingPhoto compact />}</div>
      <GalleryModal images={property.images} propertyName={property.name} />
    </section>
    <section className="property-overview section-shell">
      <div className="property-content"><span className="section-kicker">{copy.stayKicker}</span><h2>{property.shortDescription}</h2><div className="fact-row">{facts.map((fact) => <div key={fact.label}><strong>{fact.value ?? '—'}</strong><span>{fact.value === null ? `${fact.label} ${copy.facts.pendingSuffix}` : fact.label}</span></div>)}</div><p className="description">{property.description}</p>
        <div className="content-block"><div className="block-heading"><span>01</span><h3>{copy.highlightsTitle}</h3></div><div className="highlight-grid">{property.highlights.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="content-block"><div className="block-heading"><span>02</span><h3>{copy.amenitiesTitle}</h3></div>{property.amenities.length ? <div className="amenities-grid">{property.amenities.map((item) => <span key={item}>{item}</span>)}</div> : <p className="empty-copy">{copy.amenitiesEmpty}</p>}</div>
        <div className="content-block"><div className="block-heading"><span>03</span><h3>{copy.distributionTitle}</h3></div><div className="distribution"><strong>{property.bedrooms ? `${property.bedrooms} dormitorio${property.bedrooms > 1 ? 's' : ''}` : copy.bedroomsPending}</strong><p>{copy.bedsPending}</p></div></div>
        <div className="content-block"><div className="block-heading"><span>04</span><h3>{copy.idealForTitle}</h3></div><div className="ideal-row">{property.idealFor.map((item) => <span key={item}>{item}</span>)}</div></div>
      </div>
      <aside className="review-panel"><div className="review-panel-head"><span>{copy.reviewMode}</span><strong>{property.reviewNotes.length} {copy.pendingPoints}</strong></div>{property.reviewNotes.map((note, index) => <ReviewNotice note={note} key={index} />)}{!REVIEW_MODE && <p>{copy.publicInformation}</p>}</aside>
    </section>
    <section className="location-section"><div className="section-shell location-inner"><div><span className="section-kicker">{copy.locationKicker}</span><h2>{property.location}</h2><p>{property.area}. {copy.privateAddress}</p></div><div className="map-placeholder"><span>KEY SUITES</span><strong>{property.area}</strong></div></div></section>
    <section className="reviews-booking section-shell">
      <div className="reviews"><span className="section-kicker">{copy.reputationKicker}</span><h2>{copy.reputationTitle}</h2>{property.platforms.length ? <div className="platform-list">{property.platforms.map((platform) => <article key={platform.name}><strong>{platform.name}</strong><b>{platform.rating ?? copy.ratingMissing}</b>{platform.reviews && <p>{platform.reviews}</p>}{platform.note && <small>{platform.note}</small>}<em>Escala propia de {platform.name}</em></article>)}</div> : <p className="empty-copy">{copy.reviewsEmpty}</p>}</div>
      <div className="booking-card" id="reserva"><span className="section-kicker">{copy.bookingKicker}</span><h2>{copy.bookingTitle}</h2><p>{copy.bookingText}</p>{property.platforms.map((platform) => platform.url ? <a className="platform-button" href={platform.url} target="_blank" rel="noreferrer" key={platform.name}>{platform.name}<small>{copy.openPlatform}</small></a> : <span className="platform-button" key={platform.name}>{platform.name}<small>{copy.linkPending}</small></span>)}{REVIEW_MODE && <div className="direct-pending">{copy.directBookingPending}</div>}</div>
    </section>
    <div className="mobile-booking"><a href="#reserva">{copy.availability}</a></div>
  </main>;
}
