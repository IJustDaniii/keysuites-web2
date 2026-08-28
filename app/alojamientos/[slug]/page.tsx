import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { notFound } from 'next/navigation';
import { GalleryModal } from '@/components/GalleryModal';
import { PropertyCard } from '@/components/PropertyCard';
import { ReviewNotice } from '@/components/ReviewNotice';
import {
  getCatalogItem,
  getGroupUnits,
  getPropertyGroup,
  properties,
  propertyGroups,
  type CatalogItem,
  type PlatformReview,
  type Property,
  type PropertyImage,
  type PropertyGroup,
  type ReviewNote,
} from '@/data/properties';
import { REVIEW_MODE } from '@/data/config';
import { siteContent } from '@/data/site-content';

export function generateStaticParams() {
  return [...properties, ...propertyGroups].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCatalogItem(slug);
  if (!item) return {};
  const image = item.images[0] ? new URL(item.images[0].src, siteContent.seo.siteUrl).toString() : null;
  return {
    title: item.kind === 'group' ? `${item.name} | ${item.category}` : item.name,
    description: item.shortDescription,
    alternates: { canonical: `/alojamientos/${item.slug}` },
    openGraph: {
      title: `${item.name} | OKEY SUITES`,
      description: item.shortDescription,
      images: image ? [{ url: image, alt: item.images[0].alt }] : [],
    },
  };
}

function PropertyGallery({ images, name }: { images: PropertyImage[]; name: string }) {
  if (images.length === 0) return null;
  return <section className={`gallery section-shell gallery-${Math.min(images.length, 3)}`} id="galeria">
    <div className="gallery-main"><Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width: 800px) 100vw, 70vw" /></div>
    {images.length > 1 && <div className="gallery-side">
      {images.slice(1, 3).map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} fill sizes="30vw" /></div>)}
    </div>}
    <GalleryModal images={images} propertyName={name} />
  </section>;
}

const IMPORTANT_WARNING_TERMS = [
  'registro', 'dirección', 'capacidad', 'distribución', 'dormitorio', 'cama',
  'baño', 'huésped', 'horario', 'check-in', 'check-out', 'entrada', 'salida',
  'inventario', 'incidencia', 'seguridad',
];

function getImportantWarnings(warnings: ReviewNote[]) {
  return warnings.filter((warning) => {
    const title = warning.title.toLocaleLowerCase('es');
    return IMPORTANT_WARNING_TERMS.some((term) => title.includes(term));
  });
}

function ReviewPanel({ item }: { item: CatalogItem }) {
  const importantWarnings = getImportantWarnings(item.warnings);
  if (!REVIEW_MODE || importantWarnings.length === 0) return null;
  return <aside className="review-panel">
    <div className="review-panel-head"><span>Modo revisión</span><strong>{importantWarnings.length} puntos importantes</strong></div>
    {importantWarnings.map((note, index) => <ReviewNotice note={note} key={`${note.title}-${index}`} />)}
  </aside>;
}

function PlatformLinks({ platforms }: { platforms: PlatformReview[] }) {
  const available = platforms.filter((platform) => platform.url);
  if (available.length === 0) return REVIEW_MODE ? <div className="direct-pending">ENLACES DE RESERVA PENDIENTES</div> : null;
  return <div className="platform-actions">{available.map((platform) => <a
    className="platform-button"
    href={platform.url!}
    target="_blank"
    rel="noopener noreferrer"
    key={platform.name}
  >{platform.name}<small>Abrir plataforma ↗</small></a>)}</div>;
}

function Reputation({ item }: { item: CatalogItem }) {
  const reviewPlatforms = item.platforms.filter((platform) => platform.rating || platform.reviews || platform.note);
  const hasContent = reviewPlatforms.length > 0 || item.positiveReviews.length > 0 || item.negativeReviews.length > 0;
  if (!hasContent) return null;
  return <section className="reputation-section section-shell">
    <div className="reputation-heading"><span className="section-kicker">OPINIONES PÚBLICAS</span><h2>Lo que cuentan los huéspedes</h2></div>
    <div className="reputation-content">
      {reviewPlatforms.length > 0 && <div className="platform-list">{reviewPlatforms.map((platform) => <article key={platform.name}>
        <strong>{platform.name}</strong>{platform.rating && <b>{platform.rating}</b>}
        {platform.reviews && <p>{platform.reviews}</p>}{platform.note && <small>{platform.note}</small>}
      </article>)}</div>}
      <div className="review-summaries">
        {item.positiveReviews.length > 0 && <div><h3>Los huéspedes destacan especialmente</h3><ul>{item.positiveReviews.map((point) => <li key={point}>{point}</li>)}</ul></div>}
        {item.negativeReviews.length > 0 && <div className="guest-mentions"><h3>Algunos huéspedes han mencionado</h3><ul>{item.negativeReviews.map((point) => <li key={point}>{point}</li>)}</ul><p>Son comentarios puntuales de huéspedes, no defectos confirmados.</p></div>}
      </div>
    </div>
  </section>;
}

function RegistrationBlock({ item }: { item: CatalogItem }) {
  const hasRegistration = item.registration.regional.length > 0 || item.registration.national.length > 0;
  if (!hasRegistration) return <div className="detail-info-card"><span>Registro turístico</span><p>Pendiente de información</p></div>;
  return <div className="detail-info-card registration-card">
    <span>Registro turístico publicado</span>
    {item.registration.regional.map((value) => <p key={value}><strong>Regional</strong>{value}</p>)}
    {item.registration.national.map((value) => <p key={value}><strong>Nacional</strong>{value}</p>)}
  </div>;
}

function DetailInfo({ label, value }: { label: string; value: string | null }) {
  if (value === null) return null;
  return <div className="detail-info-card"><span>{label}</span><p>{value}</p></div>;
}

function EssentialDetailInfo({ label, value }: { label: string; value: string | null }) {
  return <div className="detail-info-card"><span>{label}</span><p>{value ?? 'Pendiente de información'}</p></div>;
}

function PropertyPage({ property }: { property: Property }) {
  const group = property.groupSlug ? getPropertyGroup(property.groupSlug) : null;
  const facts = [
    { label: 'Huéspedes', value: property.guests },
    { label: 'Dormitorios', value: property.bedrooms },
    { label: 'Camas', value: property.beds },
    { label: 'Baños', value: property.bathrooms },
  ];
  const area = property.areaM2 === null ? null : `${property.areaM2} m²`;
  const importantWarnings = getImportantWarnings(property.warnings);

  return <main className="detail-page">
    <div className="breadcrumbs section-shell"><Link href="/alojamientos">Alojamientos</Link>{group && <><span>/</span><Link href={`/alojamientos/${group.slug}`}>{group.name}</Link></>}<span>/</span><span>{property.name}</span></div>
    <section className="detail-title section-shell">
      <div><span className="property-type">{property.type} · {property.category}</span><h1>{property.name}</h1><p>{property.location}</p></div>
      <a href="#reserva" className="outline-button">Consultar disponibilidad</a>
    </section>
    <PropertyGallery images={property.images} name={property.name} />
    <section className={`property-overview section-shell ${REVIEW_MODE && importantWarnings.length ? '' : 'without-review'}`}>
      <div className="property-content">
        {group && <Link href={`/alojamientos/${group.slug}`} className="parent-group-link">← Ver todas las unidades de {group.name}</Link>}
        <span className="section-kicker">LA ESTANCIA</span><h2>{property.shortDescription}</h2>
        <div className="fact-row">{facts.map((fact) => <div key={fact.label}><strong>{fact.value ?? 'Por confirmar'}</strong><span>{fact.label}</span></div>)}{area && <div><strong>{area}</strong><span>Superficie</span></div>}</div>
        <p className="description">{property.description}</p>

        {property.distribution.length > 0 && <div className="content-block"><div className="block-heading"><span>01</span><h3>Distribución</h3></div><ul className="plain-list">{property.distribution.map((item) => <li key={item}>{item}</li>)}</ul></div>}
        {property.amenities.length > 0 && <div className="content-block"><div className="block-heading"><span>02</span><h3>Características y equipamiento</h3></div><div className="amenities-grid">{property.amenities.map((item) => <span key={item}>{item}</span>)}</div></div>}

        <div className="detail-info-grid">
          <DetailInfo label="Cocina" value={property.kitchen} />
          <DetailInfo label="Aire acondicionado" value={property.airConditioning} />
          <DetailInfo label="Calefacción" value={property.heating} />
          <DetailInfo label="Wi-Fi" value={property.wifi} />
          <DetailInfo label="Aparcamiento" value={property.parking} />
          <DetailInfo label="Piscina" value={property.pool} />
          <DetailInfo label="Exterior" value={property.exterior.length ? property.exterior.join(' · ') : null} />
          <DetailInfo label="Vistas" value={property.views.length ? property.views.join(' · ') : null} />
          <DetailInfo label="Accesibilidad" value={property.accessibility} />
          <EssentialDetailInfo label="Check-in" value={property.checkIn} />
          <EssentialDetailInfo label="Check-out" value={property.checkOut} />
        </div>

        {property.rules.length > 0 && <div className="content-block"><div className="block-heading"><span>03</span><h3>Normas</h3></div><ul className="plain-list">{property.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul></div>}
        <div className="address-registration"><EssentialDetailInfo label="Dirección publicada" value={property.address} /><RegistrationBlock item={property} /></div>
      </div>
      <ReviewPanel item={property} />
    </section>
    <Reputation item={property} />
    <section className="booking-section" id="reserva"><div className="section-shell booking-inner"><div><span className="section-kicker">RESERVA TU ESTANCIA</span><h2>Consulta fechas en las plataformas confirmadas</h2></div><PlatformLinks platforms={property.platforms} /></div></section>
    <div className="mobile-booking"><a href="#reserva">Consultar disponibilidad</a></div>
  </main>;
}

function GroupPage({ group }: { group: PropertyGroup }) {
  const units = getGroupUnits(group);
  const importantWarnings = getImportantWarnings(group.warnings);
  return <main className="detail-page group-page">
    <div className="breadcrumbs section-shell"><Link href="/alojamientos">Alojamientos</Link><span>/</span><span>{group.name}</span></div>
    <section className="detail-title group-title section-shell">
      <div><span className="property-type">COLECCIÓN · {group.category}</span><h1>{group.name}</h1><p>{group.location} · {group.countLabel}</p></div>
    </section>
    <PropertyGallery images={group.images} name={group.name} />
    <section className={`group-intro section-shell ${REVIEW_MODE && importantWarnings.length ? '' : 'without-review'}`}>
      <div><span className="section-kicker">UN MISMO LUGAR, DISTINTAS ESTANCIAS</span><h2>{group.shortDescription}</h2><p>{group.description}</p></div>
      <ReviewPanel item={group} />
    </section>
    <section className="group-units section-shell">
      <div className="section-heading"><div><span className="section-kicker">ELIGE TU ALOJAMIENTO</span><h2>{group.countLabel}</h2></div></div>
      <div className="catalog-grid">{units.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div>
    </section>
    <section className="group-information"><div className="section-shell">
      <span className="section-kicker">INFORMACIÓN DEL CONJUNTO</span>
      {group.sharedAmenities.length > 0 && <div className="amenities-grid group-amenities">{group.sharedAmenities.map((item) => <span key={item}>{item}</span>)}</div>}
      <div className="detail-info-grid">
        <DetailInfo label="Wi-Fi" value={group.wifi} /><DetailInfo label="Aparcamiento" value={group.parking} />
        <DetailInfo label="Accesibilidad" value={group.accessibility} /><EssentialDetailInfo label="Check-in" value={group.checkIn} />
        <EssentialDetailInfo label="Check-out" value={group.checkOut} /><EssentialDetailInfo label="Dirección publicada" value={group.address} />
      </div>
      {group.rules.length > 0 && <div className="content-block"><div className="block-heading"><span>—</span><h3>Normas comunes</h3></div><ul className="plain-list">{group.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul></div>}
      <RegistrationBlock item={group} />
    </div></section>
    <Reputation item={group} />
    <section className="booking-section" id="reserva"><div className="section-shell booking-inner"><div><span className="section-kicker">CONSULTA DISPONIBILIDAD</span><h2>Accede a la plataforma confirmada</h2></div><PlatformLinks platforms={group.platforms} /></div></section>
  </main>;
}

export default async function AccommodationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCatalogItem(slug);
  if (!item) notFound();
  return item.kind === 'group' ? <GroupPage group={item} /> : <PropertyPage property={item} />;
}
