import type { Metadata } from 'next';
import { legalNoticeSections, legalNoticeUpdated } from '@/data/legal-notice';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Información legal sobre OKEY SUITES, sus servicios y el uso de este sitio web.',
};

function sectionId(number: number) {
  return `aviso-seccion-${number}`;
}

function renderParagraph(paragraph: string) {
  if (paragraph.includes('Política de Privacidad')) {
    const [before, after] = paragraph.split('Política de Privacidad');
    return <p>{before}<a className="legal-inline-link" href="/politica-de-privacidad">Política de Privacidad</a>{after}</p>;
  }

  return <p>{paragraph.split('\n').map((line) => <span className="legal-line" key={line}>{line}</span>)}</p>;
}

export default function LegalNoticePage() {
  return <main className="privacy-page legal-notice-page">
    <header className="privacy-hero section-shell">
      <div>
        <span className="section-kicker">INFORMACIÓN LEGAL</span>
        <h1>Aviso legal</h1>
        <p>La información que rige el uso de este sitio web y sus contenidos.</p>
      </div>
      <div className="privacy-update">
        <span>Última actualización</span>
        <time dateTime="2026-09-08">{legalNoticeUpdated}</time>
      </div>
    </header>

    <div className="privacy-layout section-shell">
      <aside className="privacy-index">
        <span>Contenido</span>
        <nav aria-label="Índice del aviso legal">
          <ol>{legalNoticeSections.map((section) => <li key={section.number}><a href={`#${sectionId(section.number)}`}><span>{String(section.number).padStart(2, '0')}</span>{section.title}</a></li>)}</ol>
        </nav>
      </aside>

      <article className="privacy-content">
        <p className="privacy-lead">Este Aviso Legal reúne la información esencial sobre el titular, el alcance de la web y las condiciones de uso de sus contenidos y enlaces.</p>
        {legalNoticeSections.map((section) => <section className="privacy-section" id={sectionId(section.number)} key={section.number}>
          <div className="privacy-section-heading"><span>{String(section.number).padStart(2, '0')}</span><h2>{section.title}</h2></div>
          {section.paragraphs?.map((paragraph) => <div key={paragraph}>{renderParagraph(paragraph)}</div>)}
          {section.details && <dl className="privacy-details">{section.details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}</dd></div>)}</dl>}
          {section.afterDetails?.map((paragraph) => <div key={paragraph}>{renderParagraph(paragraph)}</div>)}
        </section>)}
      </article>
    </div>
  </main>;
}
