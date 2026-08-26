import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { HeroCarousel } from '@/components/HeroCarousel';
import { properties } from '@/data/properties';

const featuredSlugs = ['el-pino-cajar', 'suites-jardines-de-la-alhambra', 'apartamento-miramar-castell-de-ferro'];
const featured = featuredSlugs.map((slug) => properties.find((item) => item.slug === slug)!).filter(Boolean);

export default function Home() {
  return <main>
    <section className="hero">
      <HeroCarousel />
      <div className="hero-shade" />
      <div className="hero-content"><div className="eyebrow"><i /> Granada · Albaicín · Villas · Costa</div><h1>Tu estancia<br />empieza aquí.</h1><p>Alojamientos seleccionados en Granada y alrededores, gestionados personalmente para que disfrutes de cada destino con comodidad.</p><div className="hero-actions"><Link className="primary-button" href="/alojamientos">Explorar alojamientos <span>→</span></Link><Link className="text-link light" href="/sobre-key-suites">Conoce KEY SUITES <span>↗</span></Link></div></div>
    </section>

    <section className="intro section-shell"><div><span className="section-kicker">KEY SUITES</span><h2>Un mismo cuidado.<br />Distintas formas de alojarte.</h2></div><div className="intro-copy"><p>Manuel y Alicia gestionan una selección diversa de apartamentos, suites, villas y casas entre el centro de Granada, el Albaicín, sus alrededores y la Costa Tropical.</p><Link className="arrow-link" href="/sobre-key-suites">Conoce cómo trabajamos <span>→</span></Link></div></section>

    <section className="featured section-shell"><div className="section-heading"><div><span className="section-kicker">UNA SELECCIÓN PARA CADA VIAJE</span><h2>Alojamientos destacados</h2></div><Link className="arrow-link" href="/alojamientos">Ver los 15 alojamientos <span>→</span></Link></div><div className="property-grid">{featured.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section>

    <section className="destinations"><div className="section-shell destinations-inner"><div className="destination-copy"><span className="section-kicker">GRANADA Y MUCHO MÁS</span><h2>Del Albaicín<br />a la Costa Tropical.</h2><p>Apartamentos desde los que caminar por el centro histórico, villas pensadas para compartir y alojamientos junto al mar.</p></div><div className="destination-list"><Link href="/granada"><span>01</span><strong>Granada centro</strong><i>Alhambra · Catedral · Plaza Nueva</i><b>↗</b></Link><Link href="/alojamientos?categoria=Albaicín"><span>02</span><strong>Albaicín</strong><i>Calles históricas · San Miguel Bajo</i><b>↗</b></Link><Link href="/villas"><span>03</span><strong>Villas y casas</strong><i>Cájar · Otura · Albolote</i><b>↗</b></Link><Link href="/alojamientos?categoria=Costa"><span>04</span><strong>Costa Tropical</strong><i>Castell de Ferro · Mar Mediterráneo</i><b>↗</b></Link></div></div></section>

    <section className="trust section-shell"><div className="trust-title"><span className="section-kicker">UNA GESTIÓN CERCANA</span><h2>Cada estancia forma parte de una misma experiencia.</h2></div><div className="trust-grid"><article><span>01</span><h3>Atención cercana</h3><p>Una gestión personal antes y durante la estancia.</p></article><article><span>02</span><h3>Alojamientos seleccionados</h3><p>Distintos formatos y ubicaciones reunidos bajo KEY SUITES.</p></article><article><span>03</span><h3>Experiencia pública</h3><p>Algunos alojamientos cuentan con cientos de valoraciones en plataformas externas.</p></article></div></section>

    <section className="closing-cta"><Image src="/properties/miramar-01.png" alt="Terraza de Apartamento Miramar frente al mar" fill sizes="100vw" /><div className="closing-shade" /><div><span className="section-kicker">TU PRÓXIMA ESTANCIA</span><h2>Granada, sierra<br />o mar.</h2><Link className="primary-button" href="/alojamientos">Encuentra tu alojamiento <span>→</span></Link></div></section>
  </main>;
}
