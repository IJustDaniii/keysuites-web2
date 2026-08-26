'use client';

import { FormEvent, useState } from 'react';
import { siteContent } from '@/data/site-content';

export function ContactPreviewForm() {
  const [prepared, setPrepared] = useState(false);
  const copy = siteContent.contact.form;
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setPrepared(true); };
  return <form className="contact-form" onSubmit={submit}>
    <label>{copy.name}<input name="name" type="text" placeholder={copy.namePlaceholder} required /></label>
    <label>{copy.email}<input name="email" type="email" placeholder={copy.emailPlaceholder} required /></label>
    <label>{copy.property}<input name="property" type="text" placeholder={copy.propertyPlaceholder} /></label>
    <label className="wide">{copy.message}<textarea name="message" placeholder={copy.messagePlaceholder} rows={5} required /></label>
    <button type="submit">{copy.button} <span>→</span></button>
    <small>{prepared ? copy.successNote : copy.idleNote}</small>
  </form>;
}
