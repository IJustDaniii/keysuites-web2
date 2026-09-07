import type { AnchorHTMLAttributes } from 'react';

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

/**
 * Internal links intentionally use normal document navigation.
 *
 * On the Cloudflare Worker, the Next/Vinext client transition can wait several
 * seconds for an RSC response even when the next document is available in a
 * few hundred milliseconds. A real anchor avoids that wait, keeps history and
 * accessibility behavior, and still works before JavaScript is ready.
 */
export function Link({ href, ...props }: LinkProps) {
  return <a href={href} {...props} />;
}
