import NextLink from 'next/link';
import type { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * Enlace interno con navegación cliente y precarga automática de Next.js.
 * NextLink sigue renderizando un enlace HTML real, por lo que conserva las
 * acciones nativas del navegador y funciona aunque JavaScript todavía no cargue.
 */
export function Link(props: LinkProps) {
  return <NextLink {...props} />;
}
