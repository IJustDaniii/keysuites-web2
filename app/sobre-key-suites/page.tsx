import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { ReviewNotice } from '@/components/ReviewNotice';

export const metadata: Metadata = { title: 'Sobre KEY SUITES', description: 'Conoce la gestión cercana de Manuel y Alicia detrás de KEY SUITES.' };

export default function AboutPage() {
  return <main className="about-page">
    <section className="about-hero section-shell"><div><span className="section-kicker">SOBRE KEY SUITES</span><h1>Conocemos<br />cada estancia.</h1></div><p>KEY SUITES reúne alojamientos distintos bajo una gestión cercana y una forma común de recibir a quienes visitan Granada y sus alrededores.</p></section>
    <section className="about-image"><Image src="/properties/jardines-alhambra-01.jpg" alt="Terraza de un alojamiento gestionado por KEY SUITES" fill priority sizes="100vw" /></section>
    <section className="about-story section-shell"><div><span className="section-kicker">EL EQUIPO</span><h2>Manuel (Lolo)<br />y Alicia.</h2></div><div><p>Gestionan personalmente una colección que incluye apartamentos en el centro de Granada y el Albaicín, villas en los alrededores y un alojamiento en la Costa Tropical.</p><p>Manuel cuenta con una trayectoria extensa como anfitrión y aparece como Superanfitrión en Airbnb en algunos alojamientos. Cientos de huéspedes ya se han alojado en viviendas gestionadas por el equipo.</p><ReviewNotice note={{ kind: 'pending', title: 'Falta información del equipo', detail: 'Solicitar texto personal de Manuel y Alicia, fotografías del equipo y datos definitivos de la empresa.' }} /></div></section>
    <section className="principles"><div className="section-shell"><span className="section-kicker">LO QUE UNE CADA ALOJAMIENTO</span><div className="principles-grid"><article><span>01</span><h3>Una gestión humana</h3><p>El alojamiento no se presenta como un simple inventario: cada estancia forma parte de una relación cercana con huéspedes y propietarios.</p></article><article><span>02</span><h3>Variedad con criterio</h3><p>Desde una suite para dos hasta una villa para grupos, cada formato responde a una manera distinta de conocer Granada.</p></article><article><span>03</span><h3>Información clara</h3><p>Esta versión preliminar separa los datos confirmados de aquello que todavía debe revisarse antes de publicar.</p></article></div></div></section>
    <section className="simple-cta section-shell"><span>¿Buscas una estancia concreta?</span><h2>Explora todos los alojamientos gestionados por KEY SUITES.</h2><Link className="primary-button" href="/alojamientos">Ver alojamientos <b>→</b></Link></section>
  </main>;
}
