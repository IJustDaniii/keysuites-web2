import type { Metadata } from 'next';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Contacto', description: 'Contacta con OKEY SUITES para consultar una estancia.' };

export default function ContactPage() {
  const copy = siteContent.contact;
  return <main className="contact-page section-shell">
    <section className="contact-intro">
      <div>
        <span className="section-kicker">{copy.kicker}</span>
        <h1><TextLines lines={copy.title} /></h1>
        <p>{copy.text}</p>
      </div>
      <div className="contact-side">
        <span>{copy.location}</span>
        <p>{copy.types}</p>
      </div>
    </section>
    <section className="contact-card" aria-labelledby="contact-phone-title">
      <span className="section-kicker">CONTACTO DIRECTO</span>
      <h2 id="contact-phone-title">{copy.details.phoneDisplay}</h2>
      <div className="contact-actions">
        <a className="contact-action contact-action-call" href={copy.details.phoneUrl} aria-label={`Llamar al ${copy.details.phoneDisplay}`}>
          {copy.callButton}
        </a>
        <a className="contact-action contact-action-whatsapp" href={copy.details.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Hablar por WhatsApp con el ${copy.details.phoneDisplay}`}>
          {copy.whatsappButton}
        </a>
      </div>
      <p className="contact-desktop-note">{copy.desktopNote}</p>
    </section>
  </main>;
}
