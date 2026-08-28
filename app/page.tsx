import Image from 'next/image';
import { Link } from '@/components/Link';
import { PropertyCard } from '@/components/PropertyCard';
import { HeroCarousel } from '@/components/HeroCarousel';
import { properties } from '@/data/properties';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

const featuredSlugs = siteContent.home.featured.slugs;
const featured = featuredSlugs.map((slug) => properties.find((item) => item.slug === slug)!).filter(Boolean);

export default function Home() {
  return <main>
    <section className="hero">
      <HeroCarousel />
      <div className="hero-shade" />
      <div className="hero-content"><div className="eyebrow"><i /> {siteContent.home.hero.eyebrow}</div><h1><TextLines lines={siteContent.home.hero.title} /></h1><p>{siteContent.home.hero.text}</p><div className="hero-actions"><Link className="primary-button" href="/alojamientos">{siteContent.home.hero.primaryButton}</Link><Link className="text-link light" href="/sobre-key-suites">{siteContent.home.hero.secondaryButton}</Link></div></div>
    </section>

    <section className="intro section-shell"><div><span className="section-kicker">{siteContent.home.intro.kicker}</span><h2><TextLines lines={siteContent.home.intro.title} /></h2></div><div className="intro-copy"><p>{siteContent.home.intro.text}</p><Link className="arrow-link" href="/sobre-key-suites">{siteContent.home.intro.link}</Link></div></section>

    <section className="featured section-shell"><div className="section-heading"><div><span className="section-kicker">{siteContent.home.featured.kicker}</span><h2>{siteContent.home.featured.title}</h2></div><Link className="arrow-link" href="/alojamientos">{siteContent.home.featured.link}</Link></div><div className="property-grid">{featured.map((property, index) => <PropertyCard property={property} index={index} key={property.slug} />)}</div></section>

    <section className="destinations"><div className="section-shell destinations-inner"><div className="destination-copy"><span className="section-kicker">{siteContent.home.destinations.kicker}</span><h2><TextLines lines={siteContent.home.destinations.title} /></h2><p>{siteContent.home.destinations.text}</p></div><div className="destination-list">{siteContent.home.destinations.items.map((item, index) => <Link href={item.href} key={item.href}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.name}</strong><i>{item.detail}</i></Link>)}</div></div></section>

    <section className="trust section-shell"><div className="trust-title"><span className="section-kicker">{siteContent.home.trust.kicker}</span><h2>{siteContent.home.trust.title}</h2></div><div className="trust-grid">{siteContent.home.trust.items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="closing-cta"><Image src={siteContent.home.closing.image.src} alt={siteContent.home.closing.image.alt} fill sizes="100vw" /><div className="closing-shade" /><div><span className="section-kicker">{siteContent.home.closing.kicker}</span><h2><TextLines lines={siteContent.home.closing.title} /></h2><Link className="primary-button" href="/alojamientos">{siteContent.home.closing.button}</Link></div></section>
  </main>;
}
