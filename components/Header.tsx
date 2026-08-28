import Image from 'next/image';
import { Link } from './Link';
import { REVIEW_MODE } from '@/data/config';
import { MobileMenu } from './MobileMenu';
import { navigationLinks, siteContent } from '@/data/site-content';

export function Header() {
  return <>
    {REVIEW_MODE && <div className="review-bar"><span>{siteContent.header.reviewLabel}</span><p>{siteContent.header.reviewText}</p></div>}
    <header className="site-header">
      <Link className="brand" href="/" aria-label="OKEY SUITES, inicio"><Image src="/key-suites-logo-black.png" alt="OKEY SUITES" width={184} height={70} priority /></Link>
      <nav className="desktop-nav" aria-label="Navegación principal">{navigationLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <Link className="header-cta" href="/alojamientos">{siteContent.header.cta}</Link>
      <MobileMenu />
    </header>
  </>;
}
