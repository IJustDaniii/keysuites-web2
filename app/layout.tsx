// Tipo de Next.js que valida la configuración SEO definida más abajo.
import type { Metadata, Viewport } from 'next';

// Carga la fuente Manrope mediante el sistema optimizado de fuentes de Next.js.
import { Manrope } from 'next/font/google';

// Elementos comunes que aparecen en todas las páginas del sitio.
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Textos y direcciones SEO centralizados para poder editarlos desde un solo archivo.
import { siteContent } from '@/data/site-content';

// Estilos globales aplicados a toda la web.
import './globals.css';

// Descarga solamente los caracteres latinos y expone la fuente mediante la
// variable CSS --font-manrope, que se añade al <body> al final del archivo.
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

// Convierte la URL principal configurada en site-content en un objeto URL.
// Next.js la usa como base para transformar rutas relativas en URL absolutas.
const siteUrl = new URL(siteContent.seo.siteUrl);

// Metadatos globales: Next.js los convierte en etiquetas dentro del <head>.
export const metadata: Metadata = {
  // URL base utilizada, por ejemplo, para resolver /og.png correctamente.
  metadataBase: siteUrl,

  // Título predeterminado de la web y plantilla para los títulos de cada página.
  title: { default: siteContent.seo.title, template: siteContent.seo.titleTemplate },

  // Descripción que pueden mostrar Google y otros buscadores en sus resultados.
  description: siteContent.seo.description,
  // Icono de la pestaña: los archivos cuadrados evitan que el navegador descarte
  // los logos originales (que son rectangulares). La primera entrada sirve de respaldo.
  icons: {
    icon: [
      { url: '/favicon-light.png?v=2', type: 'image/png', sizes: '256x256' },
      {
        url: '/favicon-light.png?v=2',
        type: 'image/png',
        sizes: '256x256',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.png?v=2',
        type: 'image/png',
        sizes: '256x256',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },

  // Vista previa que aparece al compartir la web en WhatsApp, Facebook,
  // LinkedIn y otras plataformas compatibles con Open Graph.
  openGraph: {
    title: siteContent.seo.socialTitle,
    description: siteContent.seo.socialDescription,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1680,
        height: 941,
        alt: `${siteContent.seo.socialTitle} · ${siteContent.seo.socialDescription}`,
      },
    ],
  },

  // Vista previa específica para enlaces compartidos en X (antes Twitter).
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seo.socialTitle,
    description: siteContent.seo.socialDescription,
    images: ['/og.png'],
  },
};

// Permite que el panel móvil use correctamente las zonas seguras del iPhone.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Layout raíz que envuelve todas las páginas de la aplicación.
// `children` representa el contenido concreto de la ruta que se está visitando.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Indica a navegadores y lectores de pantalla que el contenido está en español.
    <html lang="es">
      {/* Activa la variable de la fuente y mantiene cabecera y pie en todas las páginas. */}
      <body className={manrope.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
