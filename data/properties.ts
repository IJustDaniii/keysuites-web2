/**
 * EDITA LOS ALOJAMIENTOS EN ESTE ARCHIVO.
 *
 * Cada bloque comprendido entre { y }, es un alojamiento completo.
 * Para añadir uno nuevo, copia el ejemplo de PLANTILLA_ALOJAMIENTO.ts y pégalo
 * justo antes del cierre final `];` de la lista `properties`.
 */

export type ReviewNote = { kind: 'warning' | 'pending'; title: string; detail: string };
export type PlatformReview = { name: 'Airbnb' | 'Booking' | 'Agoda'; rating?: string; reviews?: string; note?: string; url?: string | null };
export type PropertyImage = { src: string; alt: string };

export type Property = {
  id: number;
  slug: string;
  name: string;
  alternativeName?: string;
  group?: string;
  category: 'Granada centro' | 'Albaicín' | 'Villas y casas' | 'Costa';
  type: string;
  location: string;
  area: string;
  guests: number | null;
  bedrooms: number | null;
  beds: number | null;
  bathrooms: number | string | null;
  shortDescription: string;
  description: string;
  amenities: string[];
  highlights: string[];
  idealFor: string[];
  images: PropertyImage[];
  platforms: PlatformReview[];
  reviewNotes: ReviewNote[];
};

export const properties: Property[] = [
  {
    id: 1, slug: 'el-pino-cajar', name: 'Chalé El Pino', alternativeName: 'El Pino · Cájar Granada', category: 'Villas y casas', type: 'Villa / chalet', location: 'Cájar, Granada', area: 'Alrededores de Granada', guests: 8, bedrooms: 4, beds: 6, bathrooms: 2,
    shortDescription: 'Villa con piscina, jardín y amplios espacios exteriores en Cájar.',
    description: 'Una villa en Cájar preparada para estancias de hasta 8 huéspedes, con cuatro dormitorios y una zona exterior amplia. La piscina, el jardín, la barbacoa y la chimenea reúnen los principales atractivos confirmados del alojamiento.',
    amenities: ['Piscina', 'Jardín', 'Barbacoa', 'Chimenea', 'Aire acondicionado', 'Calefacción', 'Wi-Fi / Internet', 'Cocina', 'Lavavajillas', 'Microondas', 'TV'], highlights: ['Piscina', 'Jardín', 'Barbacoa'], idealFor: ['Familias', 'Grupos', 'Escapadas'],
    images: [{ src: '/properties/el-pino-01.jpg', alt: 'Jardín y barbacoa de Chalé El Pino' }, { src: '/properties/el-pino-02.jpg', alt: 'Exterior de Chalé El Pino en Cájar' }],
    platforms: [{ name: 'Airbnb', rating: '≈ 4,8 / 5', reviews: 'unas 45 reseñas', url: null }, { name: 'Booking', rating: '≈ 9,2 / 10', url: null }],
    reviewNotes: [{ kind: 'warning', title: 'Capacidad por confirmar', detail: 'Confirmar si la capacidad máxima es exactamente 8 o puede alcanzar 10 huéspedes.' }, { kind: 'pending', title: 'Revisar datos técnicos', detail: 'Verificar metros cuadrados, parcela y registro turístico.' }],
  },
  {
    id: 2, slug: 'suites-jardines-de-la-alhambra', name: 'Suites Jardines de la Alhambra', category: 'Granada centro', type: 'Conjunto de apartamentos', location: 'Placeta de la Miga, Granada', area: 'Plaza Nueva · acceso a la Alhambra', guests: null, bedrooms: null, beds: null, bathrooms: null,
    shortDescription: 'Conjunto de apartamentos reformados junto a Plaza Nueva y el acceso a la Alhambra.',
    description: 'Un conjunto de apartamentos reformados en Placeta de la Miga, junto a Plaza Nueva y en dirección al acceso de la Alhambra. Las características y distribución varían según cada unidad.',
    amenities: ['Aire acondicionado', 'Baño privado', 'TV', 'Nevera'], highlights: ['Centro histórico', 'Unidades independientes', 'Zonas exteriores según unidad'], idealFor: ['Parejas', 'Familias', 'Escapadas urbanas'], images: [{ src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de Suites Jardines de la Alhambra' }],
    platforms: [{ name: 'Booking', rating: '≈ 8,2 / 10', reviews: 'más de 200 opiniones', note: 'Ubicación ≈ 9,3 / 10', url: null }],
    reviewNotes: [{ kind: 'warning', title: 'Inventario por definir', detail: 'Confirmar el inventario exacto de unidades, plantas y registros individuales.' }, { kind: 'pending', title: 'Zonas comunes por revisar', detail: 'Identificar qué terraza corresponde a cada unidad y confirmar si existe ascensor.' }],
  },
  {
    id: 3, slug: 'jardines-alhambra-alcazaba', name: 'Alcazaba', group: 'Suites Jardines de la Alhambra', category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada', area: 'Centro histórico', guests: 6, bedrooms: 2, beds: 3, bathrooms: 2,
    shortDescription: 'Apartamento de dos dormitorios dentro de Suites Jardines de la Alhambra.', description: 'Unidad reformada aproximadamente en 2022, con dos dormitorios de cama de matrimonio, sofá cama, cocina y acceso mediante teclado. La terraza indicada es común.', amenities: ['Cocina', 'Llegada autónoma', 'Acceso mediante teclado', 'Terraza común'], highlights: ['2 dormitorios', 'Llegada autónoma', 'Terraza común'], idealFor: ['Familias', 'Grupos pequeños'], images: [], platforms: [{ name: 'Airbnb', rating: '≈ 4,85 / 5', reviews: 'más de 200 reseñas', url: null }], reviewNotes: [{ kind: 'warning', title: 'Información por confirmar', detail: 'Confirmar ascensor, distribución exacta de baños y carácter privado o comunitario de todas las zonas exteriores.' }],
  },
  {
    id: 4, slug: 'jardines-alhambra-arrayanes', name: 'Arrayanes / Orange Trees', group: 'Suites Jardines de la Alhambra', category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada', area: 'Centro histórico', guests: 6, bedrooms: 2, beds: 3, bathrooms: 2,
    shortDescription: 'Unidad con dos dormitorios, cocina y acceso a terraza común.', description: 'Apartamento reformado aproximadamente en 2022 con dos dormitorios, sofá cama, cocina y terraza común.', amenities: ['Cocina', 'Sofá cama', 'Terraza común'], highlights: ['2 dormitorios', 'Cocina', 'Terraza común'], idealFor: ['Familias', 'Grupos pequeños'], images: [], platforms: [{ name: 'Airbnb', rating: '≈ 4,78 / 5', reviews: 'más de 170 opiniones', url: null }], reviewNotes: [{ kind: 'warning', title: 'Nombre oficial por confirmar', detail: 'Confirmar si la unidad se publica como “Arrayanes” o “Orange Trees”.' }, { kind: 'pending', title: 'Datos del edificio pendientes', detail: 'Confirmar planta y ascensor.' }],
  },
  {
    id: 5, slug: 'jardines-alhambra-torre-de-la-vela', name: 'Suite Torre de la Vela', group: 'Suites Jardines de la Alhambra', category: 'Granada centro', type: 'Suite', location: 'Placeta de la Miga, Granada', area: 'Centro histórico', guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
    shortDescription: 'Suite para dos huéspedes con terraza privada y vistas indicadas sobre Granada.', description: 'Suite de un dormitorio para dos huéspedes con terraza privada. La información disponible indica vistas hacia la Catedral, el Albaicín y la Alhambra.', amenities: ['Terraza privada', 'Cafetera', 'Hervidor', 'Frigorífico', 'Zona de trabajo'], highlights: ['Terraza privada', 'Vistas indicadas', 'Zona de trabajo'], idealFor: ['Parejas', 'Escapadas urbanas', 'Trabajo remoto'], images: [], platforms: [{ name: 'Airbnb', rating: '≈ 4,67 / 5', reviews: 'unas 27 reseñas', url: null }], reviewNotes: [{ kind: 'warning', title: 'No confundir con otras unidades', detail: 'Esta suite pertenece a Jardines y es distinta de Torre de la Vela 1 y Torre de la Vela 2.' }, { kind: 'pending', title: 'Equipamiento por confirmar', detail: 'Confirmar si existe cocina y qué espacios son privados o compartidos.' }],
  },
  {
    id: 6, slug: 'jardines-alhambra-muralla-ziri', name: 'Muralla Zirí', group: 'Suites Jardines de la Alhambra', category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada', area: 'Centro histórico', guests: null, bedrooms: 1, beds: null, bathrooms: 1,
    shortDescription: 'Apartamento semisótano con cocina, aire acondicionado y estética de piedra vista.', description: 'Unidad de aproximadamente 50 m² según Booking, situada en semisótano y caracterizada por una estética de piedra y ladrillo visto.', amenities: ['Cocina', 'Aire acondicionado', 'Terraza'], highlights: ['Estética de piedra', 'Cocina', 'Terraza'], idealFor: ['Parejas', 'Escapadas urbanas'], images: [], platforms: [{ name: 'Booking', rating: '≈ 8,6 / 10', reviews: 'aprox. 76 opiniones', note: 'Ubicación ≈ 9,7 / 10', url: null }], reviewNotes: [{ kind: 'warning', title: 'Capacidad pendiente de confirmación', detail: 'Confirmar capacidad máxima y distribución exacta.' }, { kind: 'pending', title: 'Revisar habitabilidad', detail: 'Confirmar la información relativa a ventilación y luz natural.' }],
  },
  {
    id: 7, slug: 'apartamento-generalife', name: 'Apartamento Generalife', category: 'Granada centro', type: 'Apartamento', location: 'Granada', area: 'Ubicación exacta pendiente', guests: 3, bedrooms: 1, beds: null, bathrooms: 1,
    shortDescription: 'Apartamento reciente para tres huéspedes con cocina y zona de trabajo.', description: 'Apartamento de un dormitorio para hasta tres huéspedes. Incluye cocina, Wi-Fi, zona de trabajo, televisión y lavadora.', amenities: ['Cocina', 'Wi-Fi', 'Zona de trabajo', 'TV', 'Lavadora'], highlights: ['Zona de trabajo', 'Cocina', 'Wi-Fi'], idealFor: ['Parejas', 'Trabajo remoto'], images: [{ src: '/properties/generalife-01.png', alt: 'Cocina y zona de estar de Apartamento Generalife' }], platforms: [{ name: 'Airbnb', note: 'Sin reseñas o con historial muy reciente', url: null }], reviewNotes: [{ kind: 'warning', title: 'Ficha por completar', detail: 'Faltan dirección, planta, ascensor, climatización, terraza, vistas y configuración de cama para el tercer huésped.' }, { kind: 'pending', title: 'Relación y registro pendientes', detail: 'Confirmar la relación con Suites Jardines y el registro turístico.' }],
  },
  {
    id: 8, slug: 'torre-de-la-vela-1', name: 'Torre de la Vela 1', category: 'Albaicín', type: 'Apartamento', location: 'Placeta San Miguel Bajo 6, Granada', area: 'Albaicín', guests: 5, bedrooms: 2, beds: 3, bathrooms: 1,
    shortDescription: 'Apartamento de dos dormitorios en el corazón del Albaicín.', description: 'Alojamiento para cinco huéspedes en Placeta San Miguel Bajo, con dos dormitorios, tres camas y un baño.', amenities: [], highlights: ['Albaicín', '2 dormitorios', '5 huéspedes'], idealFor: ['Familias', 'Grupos pequeños', 'Escapadas urbanas'], images: [{ src: '/properties/torre-vela-1-01.jpg', alt: 'Dormitorio de Torre de la Vela 1' }], platforms: [{ name: 'Airbnb', rating: '≈ 4,82 / 5', url: null }, { name: 'Booking', rating: '≈ 9,0 / 10', reviews: 'más de 90 reseñas', url: null }], reviewNotes: [{ kind: 'pending', title: 'Información por verificar', detail: 'Confirmar ascensor, registro turístico y distribución actual.' }],
  },
  {
    id: 9, slug: 'torre-de-la-vela-2', name: 'Torre de la Vela 2', category: 'Albaicín', type: 'Apartamento', location: 'Placeta San Miguel Bajo 6, Granada', area: 'Albaicín', guests: 5, bedrooms: 2, beds: null, bathrooms: 1,
    shortDescription: 'Apartamento en segunda planta con cocina y balcón o terraza.', description: 'Unidad en segunda planta para aproximadamente cinco huéspedes, con dos dormitorios, sofá cama y cocina equipada con varios electrodomésticos confirmados.', amenities: ['Cocina', 'Lavavajillas', 'Cafetera', 'Lavadora', 'Balcón / terraza', 'Aire acondicionado', 'Sofá cama'], highlights: ['Albaicín', 'Cocina', 'Balcón / terraza'], idealFor: ['Familias', 'Grupos pequeños'], images: [{ src: '/properties/torre-vela-2-01.jpg', alt: 'Cocina de Torre de la Vela 2' }], platforms: [{ name: 'Booking', rating: '≈ 9,2 / 10', reviews: 'más de 100 reseñas', url: null }], reviewNotes: [{ kind: 'warning', title: 'Revisión pendiente', detail: 'Confirmar si una antigua incidencia de humedad está completamente solucionada.' }, { kind: 'pending', title: 'Datos por completar', detail: 'Confirmar ascensor y registro turístico.' }],
  },
  {
    id: 10, slug: 'puentezuelas-49', name: 'Puentezuelas 49', category: 'Granada centro', type: 'Apartamento', location: 'Calle Puentezuelas 49, Granada', area: 'Centro de Granada', guests: 4, bedrooms: 1, beds: 2, bathrooms: 1,
    shortDescription: 'Apartamento céntrico para cuatro huéspedes con cocina y zona de trabajo.', description: 'Apartamento de un dormitorio en el centro de Granada, preparado para cuatro huéspedes y con cocina, Wi-Fi, zona de trabajo, televisión y ascensor.', amenities: ['Cocina', 'Wi-Fi', 'Zona de trabajo', 'TV', 'Ascensor'], highlights: ['Ubicación céntrica', 'Ascensor', 'Zona de trabajo'], idealFor: ['Parejas', 'Escapadas urbanas', 'Trabajo remoto'], images: [{ src: '/properties/puentezuelas-01.jpg', alt: 'Salón de Puentezuelas 49' }], platforms: [{ name: 'Booking', rating: '≈ 8,9 / 10', note: 'Ubicación ≈ 9,9 / 10', url: null }, { name: 'Airbnb', rating: '≈ 4,65 / 5', url: null }], reviewNotes: [{ kind: 'pending', title: 'Política pendiente', detail: 'Confirmar la política actual de mascotas.' }],
  },
  {
    id: 11, slug: 'alhambra-mesones-4', name: 'ALHAMBRA.MESONES 4', category: 'Granada centro', type: 'Edificio de apartamentos', location: 'Plaza de Cauchiles 4, Granada', area: 'Centro histórico', guests: null, bedrooms: null, beds: null, bathrooms: null,
    shortDescription: 'Edificio con múltiples unidades en una ubicación central de Granada.', description: 'Edificio de apartamentos en Plaza de Cauchiles con múltiples unidades y configuraciones que pueden variar entre plataformas.', amenities: ['Aire acondicionado', 'Cocina', 'Wi-Fi', 'Ascensor', 'Calefacción', 'Habitaciones familiares'], highlights: ['Centro histórico', 'Múltiples unidades', 'Ascensor'], idealFor: ['Parejas', 'Familias', 'Escapadas urbanas'], images: [{ src: '/properties/mesones-01.jpg', alt: 'Salón de una unidad de ALHAMBRA.MESONES 4' }], platforms: [{ name: 'Booking', rating: '≈ 8,8 / 10', reviews: 'más de 500 opiniones', note: 'Ubicación ≈ 9,7 / 10', url: null }, { name: 'Airbnb', url: null }, { name: 'Agoda', url: null }], reviewNotes: [{ kind: 'warning', title: 'Inventario por completar', detail: 'Confirmar unidades, habitaciones, capacidades y registros individuales.' }, { kind: 'pending', title: 'Servicios por verificar', detail: 'Confirmar parking, accesibilidad y si continúa la ayuda relacionada con entradas de la Alhambra. Piscina, spa y gimnasio no se consideran confirmados.' }],
  },
  {
    id: 12, slug: 'apartamento-miramar-castell-de-ferro', name: 'Apartamento Miramar', alternativeName: 'Castell de Ferro', category: 'Costa', type: 'Apartamento', location: 'Castell de Ferro, Granada', area: 'Costa Tropical', guests: 6, bedrooms: 3, beds: 3, bathrooms: 2,
    shortDescription: 'Apartamento para seis huéspedes con acceso a la playa en la Costa Tropical.', description: 'Alojamiento en Castell de Ferro con tres dormitorios y dos baños. Dispone de acceso a playa, cocina, Wi-Fi y zona de trabajo.', amenities: ['Acceso a playa', 'Cocina', 'Wi-Fi', 'Zona de trabajo', 'Mascotas permitidas según Airbnb'], highlights: ['Acceso a playa', '3 dormitorios', 'Costa Tropical'], idealFor: ['Familias', 'Grupos', 'Estancias junto al mar'], images: [{ src: '/properties/miramar-01.png', alt: 'Terraza de Apartamento Miramar frente al mar' }], platforms: [{ name: 'Airbnb', rating: '5 / 5', reviews: 'muy pocas reseñas todavía', url: null }], reviewNotes: [{ kind: 'warning', title: 'Datos de acceso por completar', detail: 'Confirmar dirección, planta, ascensor, parking y distancia exacta a la playa.' }, { kind: 'pending', title: 'Equipamiento y mascotas', detail: 'Confirmar vistas, terraza o balcón, aire acondicionado y condiciones exactas para mascotas.' }],
  },
  {
    id: 13, slug: 'the-villa-el-chalete-otura', name: 'The Villa / El Chalete', category: 'Villas y casas', type: 'Villa / chalet', location: 'Otura, Granada', area: 'Calle Lope de Vega 4 · dato público', guests: 12, bedrooms: 4, beds: 8, bathrooms: 3,
    shortDescription: 'Villa con piscina privada, jardín y terraza para grupos en Otura.', description: 'Villa de aproximadamente 180 m² según Booking, con piscina privada, jardín, terraza, cocina y espacios para grupos.', amenities: ['Piscina privada', 'Jardín', 'Terraza', 'Wi-Fi', 'Aire acondicionado', 'Lavadora', 'Cocina', 'Chimenea según plataforma rural'], highlights: ['Piscina privada', '12 huéspedes', 'Jardín'], idealFor: ['Familias', 'Grupos', 'Escapadas'], images: [{ src: '/properties/the-villa-01.jpg', alt: 'Piscina y jardín de The Villa / El Chalete' }], platforms: [{ name: 'Airbnb', url: null }, { name: 'Booking', rating: '≈ 8,3 / 10', url: null }], reviewNotes: [{ kind: 'warning', title: 'Nombre definitivo por confirmar', detail: 'Confirmar si el nombre oficial será “The Villa” o “El Chalete”.' }, { kind: 'warning', title: 'Distribución contradictoria', detail: 'Varias fuentes indican 4 o 6 dormitorios. Confirmar configuración actual y temporada de piscina.' }],
  },
  {
    id: 14, slug: 'villa-nordica-de-lujo-otura', name: 'Villa Nórdica de Lujo', category: 'Villas y casas', type: 'Villa', location: 'Otura, Granada', area: 'Calle Comares 29 · dato público', guests: null, bedrooms: 5, beds: null, bathrooms: null,
    shortDescription: 'Villa de gran formato con piscina, jardín y amplios espacios interiores.', description: 'Villa de aproximadamente 500 m² sobre una parcela indicada de unos 1.000 m² y distribuida en dos plantas. La información pública disponible sobre capacidad y baños es contradictoria.', amenities: ['Piscina', 'Jardín', 'Barbacoa', 'Gran cocina con isla', 'Suelo radiante', 'Aire acondicionado', 'Persianas eléctricas', 'Grandes ventanales', 'Wi-Fi', 'Parking', 'Billar', 'Grifo de cerveza exterior'], highlights: ['Piscina', '5 dormitorios', 'Amplios espacios'], idealFor: ['Familias', 'Grupos grandes'], images: [{ src: '/properties/villa-nordica-01.jpg', alt: 'Exterior y piscina de Villa Nórdica de Lujo' }], platforms: [], reviewNotes: [{ kind: 'warning', title: 'Capacidad sin confirmar', detail: 'Las fuentes públicas indican 12, 13 o hasta 15 personas.' }, { kind: 'warning', title: 'Baños y camas por verificar', detail: 'Confirmar número de camas y si existen 5 baños o 3 baños más un aseo.' }, { kind: 'pending', title: 'Servicios y registro pendientes', detail: 'Confirmar jacuzzi o spa, mascotas y registro turístico.' }],
  },
  {
    id: 15, slug: 'cortijo-del-aire-albolote', name: 'Cortijo del Aire', category: 'Villas y casas', type: 'Casa / cortijo', location: 'Albolote, Granada', area: 'Alrededores de Granada', guests: null, bedrooms: 3, beds: null, bathrooms: null,
    shortDescription: 'Cortijo con piscina privada, barbacoa y amplias zonas de convivencia.', description: 'Alojamiento en Albolote con tres dormitorios, piscina privada de aproximadamente 6 × 4 m, barbacoa, cocina, dos salones, chimenea y zona exterior.', amenities: ['Piscina privada', 'Barbacoa', 'Cocina', 'Dos salones', 'Chimenea', 'Zona exterior'], highlights: ['Piscina privada', 'Dos salones', 'Barbacoa'], idealFor: ['Familias', 'Grupos', 'Escapadas'], images: [{ src: '/properties/cortijo-aire-01.webp', alt: 'Exterior y piscina de Cortijo del Aire' }], platforms: [{ name: 'Airbnb', url: null }], reviewNotes: [{ kind: 'warning', title: 'Capacidad contradictoria', detail: 'Airbnb indica 8 huéspedes; otra plataforma indica hasta 10.' }, { kind: 'warning', title: 'Camas y baños por verificar', detail: 'Las fuentes difieren entre 6 o 7 camas y 2,5 o 3 baños.' }, { kind: 'pending', title: 'Ubicación y distribución', detail: 'Confirmar dirección y distribución vigente. Registro identificado: VUT/GR/12280.' }],
  },
  {
    id: 16, slug: 'hola', name: 'Hola', category: 'Me cago', type: 'Casa / cortijo', location: 'Albolote, Granada', area: 'Alrededores de Granada', guests: null, bedrooms: 3, beds: null, bathrooms: null,
    shortDescription: 'Cortijo con piscina privada, barbacoa y amplias zonas de convivencia.', description: 'Alojamiento en Albolote con tres dormitorios, piscina privada de aproximadamente 6 × 4 m, barbacoa, cocina, dos salones, chimenea y zona exterior.', amenities: ['Piscina privada', 'Barbacoa', 'Cocina', 'Dos salones', 'Chimenea', 'Zona exterior'], highlights: ['Piscina privada', 'Dos salones', 'Barbacoa'], idealFor: ['Familias', 'Grupos', 'Escapadas'], images: [{ src: '/properties/cortijo-aire-01.webp', alt: 'Exterior y piscina de Cortijo del Aire' }], platforms: [{ name: 'Airbnb', url: null }], reviewNotes: [{ kind: 'warning', title: 'Capacidad contradictoria', detail: 'Airbnb indica 8 huéspedes; otra plataforma indica hasta 10.' }, { kind: 'warning', title: 'Camas y baños por verificar', detail: 'Las fuentes difieren entre 6 o 7 camas y 2,5 o 3 baños.' }, { kind: 'pending', title: 'Ubicación y distribución', detail: 'Confirmar dirección y distribución vigente. Registro identificado: VUT/GR/12280.' }],
  },
];

export const getProperty = (slug: string) => properties.find((property) => property.slug === slug);
export const categories = ['Todos', 'Granada centro', 'Albaicín', 'Villas y casas', 'Costa'] as const;
