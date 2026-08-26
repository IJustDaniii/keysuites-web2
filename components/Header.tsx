import Image from 'next/image';
import { Link } from './Link';
import { REVIEW_MODE } from '@/data/config';
import { MobileMenu } from './MobileMenu';

const links = [
  ['Alojamientos', '/alojamientos'],
  ['Granada', '/granada'],
  ['Villas y casas', '/villas'],
  ['Sobre nosotros', '/sobre-key-suites'],
  ['Contacto', '/contacto'],
];

export function Header() {
  return <>
    {REVIEW_MODE && <div className="review-bar"><span>Versión preliminar</span><p>Algunos datos están pendientes de validación por KEY SUITES.</p></div>}
    <header className="site-header">
      <Link className="brand" href="/" aria-label="KEY SUITES, inicio"><Image src="/key-suites-logo-black.png" alt="KEY SUITES" width={184} height={70} priority /></Link>
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <Link className="header-cta" href="/alojamientos">Ver alojamientos <span>↗</span></Link>
      <MobileMenu />
    </header>
  </>;
}
