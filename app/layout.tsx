import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteContent } from '@/data/site-content';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const siteUrl = new URL(siteContent.seo.siteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteContent.seo.title, template: siteContent.seo.titleTemplate },
  description: siteContent.seo.description,
  openGraph: { title: siteContent.seo.socialTitle, description: siteContent.seo.socialDescription, type: 'website', images: [{ url: '/og.png', width: 1680, height: 941, alt: `${siteContent.seo.socialTitle} · ${siteContent.seo.socialDescription}` }] },
  twitter: { card: 'summary_large_image', title: siteContent.seo.socialTitle, description: siteContent.seo.socialDescription, images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={manrope.variable}><Header />{children}<Footer /></body></html>;
}
