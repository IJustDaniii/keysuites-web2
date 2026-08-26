'use client';

import { FormEvent, useState } from 'react';

export function ContactPreviewForm() {
  const [prepared, setPrepared] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setPrepared(true); };
  return <form className="contact-form" onSubmit={submit}>
    <label>Nombre<input name="name" type="text" placeholder="Tu nombre" required /></label>
    <label>Correo electrónico<input name="email" type="email" placeholder="nombre@ejemplo.com" required /></label>
    <label>Alojamiento de interés<input name="property" type="text" placeholder="Nombre del alojamiento, si ya lo sabes" /></label>
    <label className="wide">Mensaje<textarea name="message" placeholder="Fechas, número de huéspedes y cualquier detalle útil" rows={5} required /></label>
    <button type="submit">Preparar consulta <span>→</span></button>
    <small>{prepared ? 'Consulta preparada. El envío real se activará cuando KEY SUITES confirme su canal de contacto.' : 'La consulta no se enviará fuera de este prototipo.'}</small>
  </form>;
}
