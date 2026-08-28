import type { Property } from './properties';

/**
 * PLANTILLA PARA AÑADIR UN ALOJAMIENTO INDIVIDUAL.
 *
 * 1. Copia el bloque que empieza por { y termina por }.
 * 2. Pégalo dentro de la lista properties de properties.ts.
 * 3. Cambia los ejemplos. Utiliza null cuando no conozcas un dato.
 * 4. Para public/properties/foto.jpg escribe '/properties/foto.jpg'.
 *
 * Esta plantilla no se publica mientras permanezca en este archivo.
 */

export const PLANTILLA_NO_SE_PUBLICA = {
  kind: 'property',
  id: 99,
  slug: 'nombre-del-alojamiento-sin-espacios',
  name: 'Nombre visible',
  groupSlug: null,
  category: 'Granada centro',
  type: 'Apartamento completo',
  location: 'Granada',
  address: null,
  shortDescription: 'Frase breve para la tarjeta.',
  description: 'Descripción completa basada únicamente en datos confirmados.',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathrooms: 1,
  areaM2: null,
  distribution: ['Dormitorio 1: cama doble', 'Salón: sofá cama'],
  amenities: ['TV', 'Lavadora'],
  kitchen: 'Cocina completa',
  airConditioning: 'Sí',
  heating: null,
  wifi: 'Sí',
  parking: null,
  pool: null,
  exterior: ['Terraza'],
  views: [],
  accessibility: null,
  rules: ['No fumar'],
  checkIn: null,
  checkOut: null,
  images: [
    { src: '/properties/foto-01.jpg', alt: 'Descripción de la fotografía' },
  ],
  platforms: [
    { name: 'Booking', rating: '9,0 / 10', reviews: '20 reseñas', url: null },
  ],
  positiveReviews: ['Ubicación', 'Limpieza'],
  negativeReviews: [],
  registration: { regional: [], national: [] },
  warnings: [
    { kind: 'pending', title: 'Dato pendiente', detail: 'Explica qué debe confirmar el gestor.' },
  ],
} satisfies Property;
