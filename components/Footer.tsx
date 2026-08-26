import Image from 'next/image';
import { Link } from './Link';
import { REVIEW_MODE } from '@/data/config';
import { navigationLinks, siteContent } from '@/data/site-content';

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main section-shell">
      <div className="footer-brand"><Link className="footer-logo" href="/" aria-label="KEY SUITES, inicio"><Image src="/key-suites-logo-white.png" alt="KEY SUITES" width={210} height={80} /></Link><p>{siteContent.footer.description}</p></div>
      <div className="footer-col"><strong>{siteContent.footer.exploreTitle}</strong>{navigationLinks.slice(0, 3).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/alojamientos?categoria=Costa">Costa</Link></div>
      <div className="footer-col"><strong>{siteContent.footer.brandTitle}</strong>{navigationLinks.slice(3).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<span>Airbnb</span><span>Booking</span></div>
      <div className="footer-col"><strong>{siteContent.footer.legalTitle}</strong>{siteContent.footer.legalItems.map((item) => <span key={item}>{item}</span>)}{REVIEW_MODE && <em>{siteContent.footer.legalPending}</em>}</div>
    </div>
    <div className="footer-bottom section-shell"><span>© KEY SUITES</span><span>{siteContent.footer.location}</span></div>
  </footer>;
}
