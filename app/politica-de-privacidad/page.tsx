import type { Metadata } from 'next';
import { privacyPolicySections, privacyPolicyUpdated } from '@/data/privacy-policy';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Información sobre el tratamiento y la protección de datos personales en OKEY SUITES.',
};

function sectionId(number: number) {
  return `seccion-${number}`;
}

function renderParagraph(paragraph: string) {
  const isEmail = paragraph === 'turismovacacionalgranada@gmail.com';

  if (isEmail) return <p><a className="legal-inline-link" href={`mailto:${paragraph}`}>{paragraph}</a></p>;

  return <p>{paragraph.split('\n').map((line) => <span className="legal-line" key={line}>{line}</span>)}</p>;
}

export default function PrivacyPolicyPage() {
  return <main className="privacy-page">
    <header className="privacy-hero section-shell">
      <div>
        <span className="section-kicker">INFORMACIÓN LEGAL</span>
        <h1>Política de privacidad</h1>
        <p>Cómo recogemos, utilizamos y protegemos sus datos personales.</p>
      </div>
      <div className="privacy-update">
        <span>Última actualización</span>
        <time dateTime="2026-09-08">{privacyPolicyUpdated}</time>
      </div>
    </header>

    <div className="privacy-layout section-shell">
      <aside className="privacy-index">
        <span>Contenido</span>
        <nav aria-label="Índice de la política de privacidad">
          <ol>{privacyPolicySections.map((section) => <li key={section.number}><a href={`#${sectionId(section.number)}`}><span>{String(section.number).padStart(2, '0')}</span>{section.title}</a></li>)}</ol>
        </nav>
      </aside>

      <article className="privacy-content">
        <p className="privacy-lead">Esta política explica de forma transparente qué información personal trata OKEY SUITES, con qué finalidad y qué derechos puede ejercer.</p>
        {privacyPolicySections.map((section) => <section className="privacy-section" id={sectionId(section.number)} key={section.number}>
          <div className="privacy-section-heading"><span>{String(section.number).padStart(2, '0')}</span><h2>{section.title}</h2></div>
          {section.paragraphs?.map((paragraph) => <div key={paragraph}>{renderParagraph(paragraph)}</div>)}
          {section.details && <dl className="privacy-details">{section.details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}</dd></div>)}</dl>}
          {section.items && <ul className="privacy-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.subsections?.map((subsection) => <div className="privacy-subsection" key={subsection.title}>
            <h3>{subsection.title}</h3>
            {subsection.paragraphs.map((paragraph) => <div key={paragraph}>{renderParagraph(paragraph)}</div>)}
            {subsection.items && <ul className="privacy-list">{subsection.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>)}
        </section>)}
      </article>
    </div>
  </main>;
}
