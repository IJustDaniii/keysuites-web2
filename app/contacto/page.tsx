import type { Metadata } from 'next';
import { ReviewNotice } from '@/components/ReviewNotice';
import { ContactPreviewForm } from '@/components/ContactPreviewForm';
import { siteContent } from '@/data/site-content';
import { TextLines } from '@/components/TextLines';

export const metadata: Metadata = { title: 'Contacto', description: 'Contacta con OKEY SUITES para consultar una estancia.' };

export default function ContactPage() {
  const copy = siteContent.contact;
  const hasContact = Boolean(copy.details.phone || copy.details.email || copy.details.whatsappUrl);
  return <main className="contact-page section-shell">
    <section className="contact-intro"><div><span className="section-kicker">{copy.kicker}</span><h1><TextLines lines={copy.title} /></h1><p>{copy.text}</p></div><div className="contact-side"><span>{copy.location}</span><p>{copy.types}</p>{hasContact && <div className="contact-links">{copy.details.phone && <a href={`tel:${copy.details.phone}`}>{copy.details.phone}</a>}{copy.details.email && <a href={`mailto:${copy.details.email}`}>{copy.details.email}</a>}{copy.details.whatsappUrl && <a href={copy.details.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>}</div>}<ReviewNotice note={{ kind: 'warning', title: copy.pendingTitle, detail: copy.pendingDetail }} /></div></section>
    <ContactPreviewForm />
  </main>;
}
