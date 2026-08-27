import type { Property } from './properties';

/**
 * PLANTILLA PARA CREAR UN ALOJAMIENTO.
 *
 * 1. Copia solamente el bloque que empieza por `{` y termina por `},`.
 * 2. Pégalo dentro de la lista `properties` de properties.ts, antes de `];`.
 * 3. Sustituye los textos de ejemplo por los datos reales.
 * 4. Copia las fotos a public/properties y escribe aquí su ruta.
 *
 * Esta plantilla no aparece en la web mientras permanezca en este archivo.
 */

export const PLANTILLA_NO_SE_PUBLICA = {
  id: 16,
  slug: 'nombre-del-alojamiento-sin-espacios',
  name: 'Nombre visible del alojamiento',
  alternativeName: 'Nombre alternativo opcional',
  category: 'Granada centro',
  type: 'Apartamento',
  location: 'Granada, España',
  area: 'Centro de Granada',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathrooms: 1,
  shortDescription: 'Una frase corta que aparecerá como presentación.',
  description: 'Escribe aquí la descripción completa del alojamiento. Este texto aparece dentro de su página individual.',
  amenities: ['Wi-Fi', 'Cocina', 'Aire acondicionado'],
  highlights: ['Ubicación céntrica', 'Terraza', 'Ideal para familias'],
  idealFor: ['Parejas', 'Familias', 'Escapadas'],
  images: [
    // PRIMERA FOTO = portada de la tarjeta y de la ficha.
    { src: '/properties/nombre-foto-1.jpg', alt: 'Descripción de la primera fotografía' },
    // SEGUNDA FOTO Y SIGUIENTES = galería del alojamiento.
    { src: '/properties/nombre-foto-2.jpg', alt: 'Descripción de la segunda fotografía' },
  ],
  platforms: [
    { name: 'Airbnb', rating: '4,9 / 5', reviews: '25 reseñas', url: 'https://enlace-real.example' },
    { name: 'Booking', rating: '9,2 / 10', url: null },
  ],
  reviewNotes: [
    { kind: 'pending', title: 'Dato pendiente', detail: 'Explica aquí qué información falta por confirmar.' },
  ],
} satisfies Property;
