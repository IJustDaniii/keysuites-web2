import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { ReviewNotice } from '@/components/ReviewNotice';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Sobre KEY SUITES', description: 'Conoce la gestión cercana de Manuel y Alicia detrás de KEY SUITES.' };

export default function AboutPage() {
  const copy = siteContent.about;
  return <main className="about-page">
    <section className="about-hero section-shell"><div><span className="section-kicker">{copy.kicker}</span><h1><TextLines lines={copy.title} /></h1></div><p>{copy.intro}</p></section>
    <section className="about-image"><Image src={copy.heroImage.src} alt={copy.heroImage.alt} fill priority sizes="100vw" /></section>
    <section className="about-story section-shell"><div><span className="section-kicker">{copy.teamKicker}</span><h2><TextLines lines={copy.teamTitle} /></h2></div><div>{copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ReviewNotice note={{ kind: 'pending', title: copy.pendingTitle, detail: copy.pendingDetail }} /></div></section>
    <section className="principles"><div className="section-shell"><span className="section-kicker">{copy.principlesKicker}</span><div className="principles-grid">{copy.principles.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>
    <section className="simple-cta section-shell"><span>{copy.ctaLabel}</span><h2>{copy.ctaTitle}</h2><Link className="primary-button" href="/alojamientos">{copy.ctaButton}</Link></section>
  </main>;
}
