import type { Metadata } from 'next';
import { cookiePolicySections, cookiePolicyUpdated } from '@/data/cookie-policy';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre las cookies y tecnologías técnicas utilizadas por OKEY SUITES.',
};

function sectionId(number: number) {
  return `cookies-seccion-${number}`;
}

function renderParagraph(paragraph: string) {
  return <p>{paragraph.split('\n').map((line) => <span className="legal-line" key={line}>{line}</span>)}</p>;
}

export default function CookiesPage() {
  return <main className="privacy-page cookie-page">
    <header className="privacy-hero section-shell">
      <div>
        <span className="section-kicker">INFORMACIÓN LEGAL</span>
        <h1>Política de Cookies</h1>
        <p>Qué tecnologías utiliza OKEY SUITES para que la navegación sea clara, segura y funcional.</p>
      </div>
      <div className="privacy-update">
        <span>Última actualización</span>
        <time dateTime="2026-09-08">{cookiePolicyUpdated}</time>
      </div>
    </header>

    <div className="privacy-layout section-shell">
      <aside className="privacy-index">
        <span>Contenido</span>
        <nav aria-label="Índice de la política de cookies">
          <ol>{cookiePolicySections.map((section) => <li key={section.number}><a href={`#${sectionId(section.number)}`}><span>{String(section.number).padStart(2, '0')}</span>{section.title}</a></li>)}</ol>
        </nav>
      </aside>

      <article className="privacy-content">
        <p className="privacy-lead">Esta Política de Cookies explica qué tecnologías pueden utilizarse en OKEY SUITES, con qué finalidad y cuándo sería necesario solicitar el consentimiento.</p>
        {cookiePolicySections.map((section) => <section className="privacy-section" id={sectionId(section.number)} key={section.number}>
          <div className="privacy-section-heading"><span>{String(section.number).padStart(2, '0')}</span><h2>{section.title}</h2></div>
          {section.paragraphs?.map((paragraph) => <div key={paragraph}>{renderParagraph(paragraph)}</div>)}
          {section.details && <dl className="privacy-details">{section.details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}</dd></div>)}</dl>}
          {section.items && <ul className="privacy-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.table && <div className="cookie-table-wrap"><table className="cookie-table"><thead><tr><th scope="col">Tipo</th><th scope="col">Finalidad</th><th scope="col">Duración</th><th scope="col">Consentimiento</th></tr></thead><tbody>{section.table.map((row) => <tr key={row.type}><th scope="row">{row.type}</th><td>{row.purpose}</td><td>{row.duration}</td><td>{row.consent}</td></tr>)}</tbody></table></div>}
        </section>)}
      </article>
    </div>
  </main>;
}
