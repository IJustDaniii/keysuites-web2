import Image from 'next/image';
import { Link } from './Link';
import { navigationLinks, siteContent } from '@/data/site-content';

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main section-shell">
      <div className="footer-brand"><Link className="footer-logo" href="/" aria-label="OkeySuites, inicio"><Image src="/okey-suites-logo-white.png" alt="OkeySuites" width={210} height={80} /></Link><p>{siteContent.footer.description}</p></div>
      <div className="footer-col"><strong>{siteContent.footer.exploreTitle}</strong>{navigationLinks.slice(0, 3).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/alojamientos?categoria=Costa">Costa</Link></div>
      <div className="footer-col"><strong>{siteContent.footer.brandTitle}</strong>{navigationLinks.slice(3).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<span>Airbnb</span><span>Booking</span></div>
      <div className="footer-col"><strong>{siteContent.footer.legalTitle}</strong><Link href="/politica-de-privacidad">Política de privacidad</Link><Link href="/aviso-legal">Aviso legal</Link><Link href="/cookies">Cookies</Link></div>
    </div>
    <div className="footer-bottom section-shell"><span>© OKEY SUITES</span><span>{siteContent.footer.location}</span></div>
  </footer>;
}
