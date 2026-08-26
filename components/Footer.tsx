import Image from 'next/image';
import { Link } from './Link';
import { REVIEW_MODE } from '@/data/config';

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main section-shell">
      <div className="footer-brand"><Link className="footer-logo" href="/" aria-label="KEY SUITES, inicio"><Image src="/key-suites-logo-white.png" alt="KEY SUITES" width={210} height={80} /></Link><p>Alojamientos seleccionados y gestionados en Granada, sus alrededores y la Costa Tropical.</p></div>
      <div className="footer-col"><strong>Explorar</strong><Link href="/alojamientos">Todos los alojamientos</Link><Link href="/granada">Granada</Link><Link href="/villas">Villas y casas</Link><Link href="/alojamientos?categoria=Costa">Costa</Link></div>
      <div className="footer-col"><strong>KEY SUITES</strong><Link href="/sobre-key-suites">Sobre nosotros</Link><Link href="/contacto">Contacto</Link><span>Airbnb</span><span>Booking</span></div>
      <div className="footer-col"><strong>Información legal</strong><span>Política de privacidad</span><span>Aviso legal</span><span>Cookies</span>{REVIEW_MODE && <em>Datos legales pendientes</em>}</div>
    </div>
    <div className="footer-bottom section-shell"><span>© KEY SUITES</span><span>Granada · España</span></div>
  </footer>;
}
