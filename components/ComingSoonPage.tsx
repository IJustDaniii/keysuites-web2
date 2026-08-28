import { Link } from './Link';
import { siteContent } from '@/data/site-content';

export function ComingSoonPage({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <main className="future-page">
    <section className="section-shell">
      <span className="section-kicker">{kicker}</span>
      <strong>{siteContent.futurePages.label}</strong>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link className="primary-button" href="/alojamientos">{siteContent.futurePages.back}</Link>
    </section>
  </main>;
}
