import type { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/**
 * Enlace compatible con Vinext y Cloudflare.
 *
 * Conserva un enlace HTML real para que abrir en una pestaña nueva, copiar la
 * dirección y usar atrás/adelante funcionen incluso antes de cargar JavaScript.
 */
export function Link(props: LinkProps) {
  return <a {...props} />;
}
