import type { Metadata } from 'next';
import { ReviewNotice } from '@/components/ReviewNotice';
import { ContactPreviewForm } from '@/components/ContactPreviewForm';

export const metadata: Metadata = { title: 'Contacto', description: 'Contacta con KEY SUITES para consultar una estancia.' };

export default function ContactPage() {
  return <main className="contact-page section-shell">
    <section className="contact-intro"><div><span className="section-kicker">CONTACTO</span><h1>Hablemos de<br />tu estancia.</h1><p>Cuéntanos qué tipo de alojamiento buscas, para cuántas personas y en qué fechas. El canal de recepción definitivo se incorporará cuando KEY SUITES confirme sus datos de contacto.</p></div><div className="contact-side"><span>Granada · España</span><p>Apartamentos · Suites · Villas · Costa</p><ReviewNotice note={{ kind: 'warning', title: 'Datos de contacto pendientes', detail: 'Confirmar teléfono, correo electrónico, horario de atención y responsable de privacidad antes de activar el formulario.' }} /></div></section>
    <ContactPreviewForm />
  </main>;
}
