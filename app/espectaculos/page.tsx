import type { Metadata } from 'next';
import Image from 'next/image';
import { GalleryModal } from '@/components/GalleryModal';
import { ArrowDownIcon, ExternalLinkIcon } from '@/components/LinkIcons';

const bookingUrl = 'https://show.flamencogranada.com/es/838-web-tablao/4721-entrada-espectaculo-flamenco?aff=www.okeysuites.com&utm_medium=afiliados&utm_campaign=Afiliados&utm_source=okeysuites.com';

const images = [
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-01.jpg', alt: 'Baile flamenco en directo en Jardines de Zoraya' },
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-02.jpg', alt: 'Artistas sobre el escenario del tablao Jardines de Zoraya' },
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-03.jpg', alt: 'Espectáculo flamenco con baile, cante y guitarra' },
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-04.jpg', alt: 'Actuación flamenca en el corazón del Albaicín' },
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-05.webp', alt: 'Ambiente del tablao flamenco Jardines de Zoraya' },
  { src: '/restaurantes/albaicin/tablao-flamenco/tablao-flamenco-06.avif', alt: 'Jardín y experiencia de Jardines de Zoraya' },
];

export const metadata: Metadata = {
  title: 'Flamenco en Jardines de Zoraya',
  description: 'Flamenco en directo y gastronomía andaluza en un carmen del Albaicín, recomendado por OkeySuites.',
};

export default function SpectaclesPage() {
  return <main className="spectacle-page">
    <section className="spectacle-hero">
      <Image src={images[0].src} alt={images[0].alt} fill priority sizes="100vw" />
      <div className="spectacle-hero-shade" />
      <div className="spectacle-hero-content section-shell">
        <span className="spectacle-kicker">OKEYSUITES TE RECOMIENDA · ALBAICÍN</span>
        <h1>La noche<br />suena a <em>flamenco.</em></h1>
        <p>Flamenco en directo, gastronomía andaluza y una noche especial en el corazón del Albaicín.</p>
        <div className="spectacle-hero-actions">
          <a className="spectacle-book-button" href={bookingUrl} target="_blank" rel="noopener noreferrer">Reservar espectáculo <ExternalLinkIcon /></a>
          <a href="#experiencia" className="spectacle-text-link">Descubrir la experiencia <ArrowDownIcon /></a>
        </div>
      </div>
      <div className="spectacle-hero-note"><small>TODOS LOS DÍAS</small><strong>18:00 · 20:00 · 22:30</strong></div>
    </section>

    <section className="spectacle-facts section-shell" aria-label="Información esencial">
      <article><span>01</span><strong>60 min</strong><small>Duración aproximada</small></article>
      <article><span>02</span><strong>3 sesiones</strong><small>18:00 · 20:00 · 22:30</small></article>
      <article><span>03</span><strong>Todos los públicos</strong><small>Una experiencia para compartir</small></article>
      <article><span>04</span><strong>Albaicín</strong><small>Calle Panaderos, 32</small></article>
    </section>

    <section className="spectacle-intro section-shell" id="experiencia">
      <div><span className="spectacle-kicker">JARDINES DE ZORAYA</span><h2>Un carmen, un tablao y el duende a pocos pasos de San Nicolás.</h2></div>
      <div><p>Cante, guitarra, baile, palmas y taconeo se encuentran en un espectáculo cercano e intenso. La programación cambia cada semana para reunir distintos artistas y palos flamencos.</p><p>El tablao está cerca del Mirador de San Nicolás, la Iglesia de El Salvador y Plaza Larga: una ubicación perfecta para completar un paseo por el Albaicín.</p></div>
    </section>

    <section className="spectacle-gallery section-shell" aria-label="Galería de Jardines de Zoraya">
      <div className="spectacle-gallery-main"><Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 720px) 100vw, 62vw" /></div>
      <div className="spectacle-gallery-side">
        {images.slice(2, 4).map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 50vw, 28vw" /></div>)}
      </div>
      <GalleryModal images={images} propertyName="Jardines de Zoraya" />
    </section>

    <section className="spectacle-details">
      <div className="section-shell spectacle-details-grid">
        <div className="spectacle-details-title"><span className="spectacle-kicker">LA EXPERIENCIA</span><h2>Muy cerca del escenario. Muy dentro del flamenco.</h2></div>
        <div className="spectacle-detail-list">
          <article><span>01</span><div><h3>El tablao</h3><p>Una sala interior dedicada al espectáculo y un jardín/terraza exterior que completa el ambiente del carmen.</p></div></article>
          <article><span>02</span><div><h3>Tu mesa</h3><p>Las mesas bajas están más próximas al escenario; las altas se sitúan en los laterales y conservan una buena visibilidad. Se asignan por orden de reserva.</p></div></article>
          <article><span>03</span><div><h3>El elenco</h3><p>La programación oficial reúne figuras como Luis de Luis, Sergio Gómez “El Coloraíto”, Rubén Campos, Cristina Aguilera, Ana Pastrana, Fran Vílchez, Antonio Gómez “El Turry”, Marcos Palometas, Agustín Barajas, José Fermín Fernández y Raquel Heredia “La Repompa”. El elenco concreto cambia semanalmente.</p><a href="https://flamencogranada.com/artistas/" target="_blank" rel="noopener noreferrer">Consultar artistas <ExternalLinkIcon /></a></div></article>
        </div>
      </div>
    </section>

    <section className="spectacle-dinner section-shell">
      <div className="spectacle-dinner-image"><Image src={images[4].src} alt={images[4].alt} fill sizes="(max-width: 720px) 100vw, 45vw" /></div>
      <div className="spectacle-dinner-copy">
        <span className="spectacle-kicker">FLAMENCO Y GASTRONOMÍA</span>
        <h2>Haz de la función una noche completa.</h2>
        <p>Puedes añadir una cena antes del espectáculo, en la sala del tablao o, cuando el tiempo acompaña, en el jardín. La cocina es andaluza y mediterránea.</p>
        <ul>
          <li>Albondigón de lomo y piñones</li><li>Presa ibérica a la parrilla</li><li>Lomo de bacalao gratinado</li><li>Corvina en gazpachuelo</li><li>Alcachofas con pisto y patata trufada</li>
        </ul>
        <a href="https://flamencogranada.com/restaurante/" target="_blank" rel="noopener noreferrer">Ver restaurante y carta actual <ExternalLinkIcon /></a>
      </div>
    </section>

    <section className="spectacle-booking" id="reserva">
      <div className="section-shell spectacle-booking-grid">
        <div>
          <span className="spectacle-kicker">RESERVA TU NOCHE</span>
          <h2>El escenario te espera.</h2>
          <p>Como referencia, la entrada de adulto parte de 25 € y la experiencia con menú ronda los 60–64 €. Hay tarifas infantiles. El precio final y la disponibilidad se muestran siempre en la reserva.</p>
          <a className="spectacle-book-button" href={bookingUrl} target="_blank" rel="noopener noreferrer">Quiero reservar <ExternalLinkIcon /></a>
          <div className="spectacle-contact"><span>Calle Panaderos, 32 · 18010 Granada</span><a href="tel:+34958206266">+34 958 206 266</a><a href="https://flamencogranada.com/como-llegar-al-tablao/" target="_blank" rel="noopener noreferrer">Cómo llegar <ExternalLinkIcon /></a></div>
        </div>
        <figure className="spectacle-qr">
          <div><Image src="/restaurantes/albaicin/tablao-flamenco/reserva-jardines-zoraya.svg" alt="Código QR para reservar Jardines de Zoraya" width={720} height={720} /></div>
          <figcaption><strong>Escanea y reserva</strong><span>Apunta con la cámara de tu móvil</span></figcaption>
        </figure>
      </div>
    </section>

    <div className="spectacle-mobile-booking"><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Reservar espectáculo <ExternalLinkIcon /></a></div>
  </main>;
}
