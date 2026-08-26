import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const siteUrl = new URL('https://key-suites-granada.ijustdaniii.chatgpt.site');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'KEY SUITES | Alojamientos en Granada y alrededores', template: '%s | KEY SUITES' },
  description: 'Apartamentos, suites, villas y casas gestionadas por KEY SUITES en Granada, sus alrededores y la Costa Tropical.',
  openGraph: { title: 'KEY SUITES', description: 'Alojamientos en Granada y alrededores', type: 'website', images: [{ url: '/og.png', width: 1680, height: 941, alt: 'KEY SUITES · Alojamientos en Granada y alrededores' }] },
  twitter: { card: 'summary_large_image', title: 'KEY SUITES', description: 'Alojamientos en Granada y alrededores', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={manrope.variable}><Header />{children}<Footer /></body></html>;
}
