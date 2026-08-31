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
          <svg className="contact-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2a9.98 9.98 0 0 0-8.66 14.97L2 22l5.18-1.36A10 10 0 1 0 12.004 2m0 18.2a8.2 8.2 0 0 1-4.18-1.145l-.3-.178-3.075.807.82-2.997-.195-.308A8.2 8.2 0 1 1 12.004 20.2"/>
          </svg>
          {copy.whatsappButton}
        </a>
      </div>
      <p className="contact-desktop-note">{copy.desktopNote}</p>
    </section>
  </main>;
}
