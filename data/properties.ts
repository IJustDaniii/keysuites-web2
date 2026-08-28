/**
 * ================================================================
 * EDITA AQUÍ TODOS LOS ALOJAMIENTOS DE OKEY SUITES
 * ================================================================
 *
 * Cambia solamente textos entre comillas, números o listas.
 * Si no conoces un dato, escribe null. Nunca utilices 0 para un dato desconocido.
 *
 * PARA CAMBIAR UNA FOTO:
 * 1. Mete la nueva imagen en public/properties/.
 * 2. Escribe aquí su ruta, por ejemplo '/properties/mi-foto.jpg'.
 * 3. No escribas la palabra public en la ruta.
 * 4. La primera foto será la portada; las demás aparecerán en la galería.
 *
 * PARA CAMBIAR BOOKING O AIRBNB:
 * Busca el alojamiento y cambia el campo url dentro de platforms.
 * Si todavía no existe un enlace confirmado, deja url: null.
 */

export type Category = 'Costa' | 'Albaicín' | 'Casas rurales' | 'Granada centro';
export type ReviewNote = { kind: 'warning' | 'pending'; title: string; detail: string };
export type PropertyImage = { src: string; alt: string };
export type PlatformReview = {
  name: 'Airbnb' | 'Booking';
  rating?: string;
  reviews?: string;
  note?: string;
  url: string | null;
};
export type Registration = { regional: string[]; national: string[] };

type CatalogBase = {
  slug: string;
  name: string;
  officialName?: string;
  category: Category;
  type: string;
  location: string;
  address: string | null;
  shortDescription: string;
  description: string;
  images: PropertyImage[];
  platforms: PlatformReview[];
  positiveReviews: string[];
  negativeReviews: string[];
  registration: Registration;
  warnings: ReviewNote[];
};

export type Property = CatalogBase & {
  kind: 'property';
  id: number;
  groupSlug: string | null;
  guests: number | null;
  bedrooms: number | null;
  beds: number | null;
  bathrooms: number | string | null;
  areaM2: number | null;
  distribution: string[];
  amenities: string[];
  kitchen: string | null;
  airConditioning: string | null;
  heating: string | null;
  wifi: string | null;
  parking: string | null;
  pool: string | null;
  exterior: string[];
  views: string[];
  accessibility: string | null;
  rules: string[];
  checkIn: string | null;
  checkOut: string | null;
};

export type PropertyGroup = CatalogBase & {
  kind: 'group';
  countLabel: string;
  unitSlugs: string[];
  sharedAmenities: string[];
  wifi: string | null;
  parking: string | null;
  accessibility: string | null;
  rules: string[];
  checkIn: string | null;
  checkOut: string | null;
};

export type CatalogItem = Property | PropertyGroup;

// ALOJAMIENTOS INDIVIDUALES Y UNIDADES DE CADA EDIFICIO
export const properties: Property[] = [
  {
    kind: 'property', id: 1, slug: 'villa-girasol-calahonda', name: 'Villa Girasol',
    groupSlug: null, category: 'Costa', type: 'Casa vacacional / chalet completo frente al mar',
    location: 'Calahonda, Granada', address: 'Calle Girasol 13, 18730 Calahonda, Granada',
    shortDescription: 'Casa vacacional completa frente al mar para ocho huéspedes.',
    description: 'Villa Girasol es una casa vacacional completa de 130 m², con cuatro dormitorios, jardín, terraza y acceso a zona de playa.',
    guests: 8, bedrooms: 4, beds: 7, bathrooms: 2, areaM2: 130,
    distribution: ['Dormitorio 1: una cama doble', 'Dormitorio 2: dos camas individuales', 'Dormitorio 3: dos camas individuales', 'Dormitorio 4: dos camas individuales'],
    amenities: ['Salón', 'Sofá', 'TV', 'Nevera', 'Cafetera', 'Ropa de cama', 'Toallas', 'Mobiliario exterior', 'Acceso a zona de playa'],
    kitchen: 'Cocina completa con nevera y cafetera.', airConditioning: 'Sí', heating: null,
    wifi: 'Sí, gratuito', parking: 'Privado y gratuito dentro de la propiedad', pool: null,
    exterior: ['Jardín', 'Terraza', 'Solárium', 'Balcón'],
    views: ['Mar', 'Booking también menciona jardín, montaña y lugares de interés'], accessibility: null,
    rules: ['No fumar', 'No fiestas ni eventos', 'Mascotas bajo petición y posible suplemento', 'Niños admitidos', 'Cuna gratuita de 0 a 3 años bajo petición'],
    checkIn: '15:00 – 00:00', checkOut: '08:00 – 11:00', images: [],
    platforms: [{ name: 'Booking', rating: '≈ 9,5 / 10', reviews: 'aprox. 10 reseñas', url: 'https://www.booking.com/Pulse-CZjuv3' }],
    positiveReviews: ['Ubicación junto al mar', 'Tranquilidad', 'Jardín', 'Equipamiento', 'Atención', 'Mascotas', 'Amaneceres y vistas'], negativeReviews: [],
    registration: { regional: ['VUT7GR/13871'], national: ['ESFCTU0000180250001218510000000000000000VUT/GR/138710'] },
    warnings: [{ kind: 'warning', title: 'Registro turístico pendiente', detail: 'El registro regional publicado parece estar mal formateado. Confirmar sin corregirlo automáticamente.' }],
  },
  {
    kind: 'property', id: 2, slug: 'miramar-castell-de-ferro', name: 'Miramar',
    groupSlug: null, category: 'Costa', type: 'Apartamento completo', location: 'Castell de Ferro, Granada',
    address: 'Carretera de Almería 4, 18614 Castell de Ferro',
    shortDescription: 'Apartamento completo con terraza y vistas al mar en la Costa Tropical.',
    description: 'Apartamento de 105 m² con tres dormitorios, dos baños, salón, comedor y cocina totalmente equipada.',
    guests: 6, bedrooms: 3, beds: 3, bathrooms: 2, areaM2: 105,
    distribution: ['Tres dormitorios con una cama doble en cada uno, según las fuentes públicas'],
    amenities: ['Salón', 'Comedor', 'TV', 'Ropa de cama', 'Toallas'], kitchen: 'Cocina totalmente equipada.',
    airConditioning: 'Sí', heating: null, wifi: 'Sí, gratuito', parking: null, pool: null,
    exterior: ['Terraza'], views: ['Mar'], accessibility: null,
    rules: ['No fumar', 'No fiestas', 'Mascotas bajo petición y posible suplemento', 'Niños admitidos'],
    checkIn: '15:00 – 23:00', checkOut: '08:00 – 11:00',
    images: [{ src: '/properties/miramar-01.png', alt: 'Terraza de Miramar frente al mar' }],
    platforms: [{ name: 'Booking', rating: '9,8 / 10', reviews: 'aprox. 29 reseñas', url: null }],
    positiveReviews: ['Vistas', 'Playa', 'Limpieza', 'Comodidad', 'Equipamiento', 'Atención'], negativeReviews: [],
    registration: { regional: ['VUT/GR/132510'], national: ['ESFCTU0000180250002819440000000000000000VUT/GR/132510'] },
    warnings: [{ kind: 'warning', title: 'Acceso a la playa por confirmar', detail: 'El anuncio habla de primera línea o acceso directo, pero Booking también sitúa Playa Cambriles a unos 12 minutos andando.' }],
  },
  {
    kind: 'property', id: 3, slug: 'el-pino-cajar', name: 'El Pino', groupSlug: null,
    category: 'Casas rurales', type: 'Villa completa', location: 'Cájar, Granada',
    address: 'Calle Geranio 1, 18199 Cájar, Granada',
    shortDescription: 'Villa completa con piscina privada, jardín y barbacoa.',
    description: 'Villa de cuatro dormitorios preparada para ocho huéspedes, con piscina exterior de temporada, jardín, terraza, barbacoa y chimenea.',
    guests: 8, bedrooms: 4, beds: 5, bathrooms: 2, areaM2: 20,
    distribution: ['Un dormitorio con dos camas individuales', 'Tres dormitorios con una cama doble cada uno'],
    amenities: ['Barbacoa', 'TV', 'Ropa de cama', 'Toallas', 'Chimenea'], kitchen: 'Cocina',
    airConditioning: 'Sí', heating: 'Chimenea', wifi: null, parking: null,
    pool: 'Piscina privada exterior de temporada', exterior: ['Jardín', 'Balcón', 'Terraza'], views: [], accessibility: null,
    rules: ['No se admiten mascotas', 'No fumar', 'No fiestas'], checkIn: '14:00 – 22:00', checkOut: '10:00 – 12:00',
    images: [{ src: '/properties/el-pino-01.jpg', alt: 'Jardín y barbacoa de El Pino' }, { src: '/properties/el-pino-02.jpg', alt: 'Exterior de El Pino en Cájar' }],
    platforms: [{ name: 'Booking', rating: '9,2 / 10', reviews: 'aprox. 30 reseñas', url: 'https://www.booking.com/Pulse-4Rpx2Q' }],
    positiveReviews: ['Anfitrión', 'Piscina', 'Climatización', 'Relación calidad-precio', 'Camas', 'Familias y grupos', 'Chimenea'], negativeReviews: [],
    registration: { regional: ['VTAR/GR/1054'], national: ['ESFCTU000018025000281944000000000000000VTAR/GR/010540'] },
    warnings: [{ kind: 'warning', title: 'Superficie sospechosa', detail: 'Booking publica una superficie de 20 m². Este dato parece incoherente para una villa de cuatro dormitorios y necesita confirmación del gestor.' }],
  },
  {
    kind: 'property', id: 4, slug: 'cortijo-del-aire-albolote', name: 'Casa Cortijo del Aire, Granada',
    groupSlug: null, category: 'Casas rurales', type: 'Vivienda completa de tres plantas',
    location: 'Albolote, Granada', address: '6 Calle Mar Tirreno, 18220 Albolote',
    shortDescription: 'Casa de tres plantas con piscina privada, jardín y espacios para grupos.',
    description: 'Vivienda completa de 150 m² con tres dormitorios, dos salones, chimeneas, piscina, jardín, barbacoa y zona de trabajo.',
    guests: 8, bedrooms: 3, beds: null, bathrooms: null, areaM2: 150,
    distribution: ['Airbnb: dormitorio con cama de matrimonio grande', 'Airbnb: dormitorio con cama de matrimonio', 'Airbnb: dormitorio con tres camas individuales', 'Airbnb: salón inferior con sofá cama de 150 cm', 'Booking muestra solamente dos camas individuales en el tercer dormitorio'],
    amenities: ['Nevera', 'Cafetera', 'Electrodomésticos', 'Dos salones', 'Chimeneas', 'Barbacoa', 'Zona de trabajo'],
    kitchen: 'Cocina completa', airConditioning: 'Sí', heating: 'Chimeneas', wifi: 'Sí',
    parking: 'Gratuito en la calle según Airbnb', pool: 'Piscina privada exterior de aproximadamente 6 × 4 m según Airbnb',
    exterior: ['Jardín', 'Barbacoa', 'Terraza o balcón'], views: ['Jardín', 'Piscina'], accessibility: null,
    rules: ['No fiestas'], checkIn: 'Desde las 15:00', checkOut: null,
    images: [{ src: '/properties/cortijo-aire-01.webp', alt: 'Exterior y piscina de Casa Cortijo del Aire' }],
    platforms: [
      { name: 'Booking', rating: '9,0 / 10', reviews: '5 reseñas', note: 'Limpieza 8,0 / 10 con pocas reseñas', url: 'https://www.booking.com/Pulse-Hp3zX5' },
      { name: 'Airbnb', rating: '5,0 / 5', reviews: '3 reseñas', url: null },
    ],
    positiveReviews: ['Piscina', 'Ubicación', 'Tranquilidad', 'Amplitud', 'Grupos', 'Gestores'],
    negativeReviews: ['La limpieza obtiene 8,0 / 10 en Booking, pero la muestra es muy pequeña'],
    registration: { regional: ['VUT-GR-12280'], national: ['ESFCTU0000180210001339790000000000000000VUT/GR/122801'] },
    warnings: [
      { kind: 'warning', title: 'Distribución contradictoria', detail: 'Booking y Airbnb muestran diferente número de camas y baños. Confirmar la configuración actual.' },
      { kind: 'pending', title: 'Horario pendiente', detail: 'La hora de salida es contradictoria o no está confirmada.' },
    ],
  },
  {
    kind: 'property', id: 5, slug: 'puentezuelas-49', name: 'Puentezuelas 49', groupSlug: null,
    category: 'Granada centro', type: 'Apartamento completo', location: 'Centro de Granada',
    address: 'Calle Puentezuelas 49, 18002 Granada',
    shortDescription: 'Apartamento céntrico con dormitorio independiente, salón y terraza.',
    description: 'Apartamento completo para cuatro huéspedes con un dormitorio, salón, cocina, terraza y balcón en el centro de Granada.',
    guests: 4, bedrooms: 1, beds: 2, bathrooms: 1, areaM2: 13,
    distribution: ['Dormitorio con una cama doble', 'Salón con sofá cama'], amenities: ['Lavadora'],
    kitchen: 'Cocina completa con nevera, cafetera y microondas o fogones según ficha ampliada', airConditioning: 'Sí',
    heating: null, wifi: 'Sí; Booking publica 10 / 10', parking: 'No se ha confirmado aparcamiento propio', pool: 'No',
    exterior: ['Terraza', 'Balcón'], views: ['Ciudad'], accessibility: null,
    rules: ['Mascotas bajo petición y posible suplemento', 'No fumar', 'No fiestas', 'Edad mínima de check-in: 18 años', 'Cuna gratuita para menores de 1 año bajo petición'],
    checkIn: '15:00 – 00:00', checkOut: '08:00 – 11:00',
    images: [{ src: '/properties/puentezuelas-01.jpg', alt: 'Salón de Puentezuelas 49' }],
    platforms: [{ name: 'Booking', rating: '8,9 / 10', reviews: '56 reseñas', note: 'Ubicación 9,9 / 10 · Wi-Fi 10 / 10', url: 'https://www.booking.com/hotel/es/puentezuelas-49-granada1.es.html' }],
    positiveReviews: ['Ubicación', 'Recorrer Granada a pie', 'Limpieza', 'Cama', 'Tranquilidad', 'Equipamiento', 'Comunicación'], negativeReviews: [],
    registration: { regional: ['VFT/GR/046979', 'VFT/GR/04697'], national: ['ESFCTU0000180230000804130000000000000000VFT/GR/046979'] },
    warnings: [
      { kind: 'warning', title: 'Superficie pendiente', detail: 'Booking publica 13 m², una cifra incoherente con dormitorio independiente, salón y cocina. Confirmar la superficie real.' },
      { kind: 'warning', title: 'Registro pendiente', detail: 'Existen dos variantes del registro regional. Confirmar el número oficial.' },
    ],
  },

  // SUITES JARDINES DE LA ALHAMBRA
  {
    kind: 'property', id: 6, slug: 'jardines-arrayanes', name: 'Arrayanes', groupSlug: 'suites-jardines-alhambra',
    category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada', address: null,
    shortDescription: 'Apartamento de dos dormitorios en la segunda planta.',
    description: 'Unidad para seis huéspedes con dos dormitorios, sofá cama, cocina equipada y acceso autónomo mediante teclado.',
    guests: 6, bedrooms: 2, beds: 3, bathrooms: 2, areaM2: null,
    distribution: ['Dos dormitorios con cama de matrimonio', 'Sofá cama de apertura italiana de 140 cm'],
    amenities: ['Zona de trabajo', 'TV HD de 43 pulgadas', 'Auto check-in con cerradura de teclado'], kitchen: 'Totalmente equipada',
    airConditioning: null, heating: null, wifi: 'Sí', parking: null, pool: null,
    exterior: ['Terraza común'], views: ['Ciudad'], accessibility: 'Segunda planta sin ascensor', rules: [],
    checkIn: 'Desde las 15:00', checkOut: 'Antes de las 11:00', images: [],
    platforms: [{ name: 'Airbnb', rating: '4,78 / 5', reviews: 'aprox. 174 reseñas', url: 'https://www.airbnb.es/rooms/759379698076635538' }],
    positiveReviews: ['Ubicación', 'Facilidad para caminar', 'Limpieza', 'Hospitalidad', 'Vistas', 'Comodidad'], negativeReviews: [],
    registration: { regional: ['VFT/GR/06546'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] }, warnings: [],
  },
  {
    kind: 'property', id: 7, slug: 'jardines-alcazaba', name: 'Alcazaba', groupSlug: 'suites-jardines-alhambra',
    category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada', address: null,
    shortDescription: 'Apartamento reformado con dos dormitorios y terraza común.',
    description: 'Unidad reformada aproximadamente en 2022, para seis huéspedes, con cocina totalmente equipada y entrada autónoma.',
    guests: 6, bedrooms: 2, beds: 3, bathrooms: 2, areaM2: null,
    distribution: ['Dos camas de matrimonio', 'Sofá cama'], amenities: ['Zona de trabajo', 'TV HD de 32 pulgadas con Chromecast', 'Auto check-in con teclado'],
    kitchen: 'Totalmente equipada', airConditioning: null, heating: null, wifi: 'Sí', parking: null, pool: null,
    exterior: ['Terraza común'], views: ['Ciudad'], accessibility: 'Segunda planta sin ascensor', rules: [],
    checkIn: 'Desde las 15:00', checkOut: 'Antes de las 11:00', images: [],
    platforms: [{ name: 'Airbnb', rating: '4,85 / 5', reviews: 'aprox. 224 reseñas', url: 'https://www.airbnb.es/rooms/760737268333086233' }],
    positiveReviews: ['Ubicación', 'Hospitalidad', 'Limpieza', 'Comodidad', 'Baños', 'Vistas', 'Interiores'], negativeReviews: [],
    registration: { regional: ['VTF/GR/06546'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [{ kind: 'warning', title: 'Registro turístico pendiente', detail: 'Airbnb escribe VTF mientras otras unidades utilizan VFT. Confirmar el formato correcto.' }],
  },
  {
    kind: 'property', id: 8, slug: 'jardines-generalife', name: 'Generalife', groupSlug: 'suites-jardines-alhambra',
    category: 'Granada centro', type: 'Apartamento', location: 'Suites Jardines de la Alhambra, Granada', address: null,
    shortDescription: 'Apartamento de un dormitorio para un máximo publicado de tres huéspedes.',
    description: 'Unidad con cocina, Wi-Fi, zona de trabajo, televisión y lavadora. El anuncio publica tres huéspedes y una única cama.',
    guests: 3, bedrooms: 1, beds: 1, bathrooms: 1, areaM2: null,
    distribution: ['Una cama publicada; falta confirmar dónde duerme el tercer huésped'], amenities: ['Zona de trabajo', 'TV', 'Lavadora'],
    kitchen: 'Sí', airConditioning: null, heating: null, wifi: 'Sí', parking: null, pool: null,
    exterior: [], views: [], accessibility: null, rules: [], checkIn: null, checkOut: null,
    images: [{ src: '/properties/generalife-01.png', alt: 'Cocina y zona de estar de Generalife' }],
    platforms: [{ name: 'Airbnb', note: 'Sin evaluaciones todavía', url: 'https://www.airbnb.es/rooms/1488255870623813101' }],
    positiveReviews: [], negativeReviews: [],
    registration: { regional: ['VUT/GR/06546'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [
      { kind: 'warning', title: 'Distribución pendiente', detail: 'El anuncio indica tres huéspedes pero solamente publica una cama. Confirmar dónde duerme el tercer huésped.' },
      { kind: 'warning', title: 'Registro pendiente', detail: 'El formato regional es diferente al de otras unidades del edificio.' },
    ],
  },
  {
    kind: 'property', id: 9, slug: 'jardines-muralla-ziri', name: 'Muralla Zirí', groupSlug: 'suites-jardines-alhambra',
    category: 'Granada centro', type: 'Apartamento', location: 'Placeta de la Miga, Granada',
    address: '3 Placeta de la Miga, semisótano, 18009 Granada',
    shortDescription: 'Apartamento semisótano de 50 m² junto al centro histórico.',
    description: 'Apartamento de un dormitorio con cocina, lavadora, aire acondicionado, Wi-Fi y terraza.',
    guests: null, bedrooms: 1, beds: 2, bathrooms: 1, areaM2: 50,
    distribution: ['Una cama doble', 'Un sofá cama'], amenities: ['Microondas', 'Tostadora', 'Cafetera', 'Hervidor', 'Lavadora'],
    kitchen: 'Sí', airConditioning: 'Sí', heating: null, wifi: 'Sí', parking: 'No se ha encontrado aparcamiento propio', pool: 'No',
    exterior: ['Terraza; falta confirmar si es privada o compartida'], views: [], accessibility: 'Semisótano; no se ha encontrado adaptación para movilidad reducida',
    rules: ['No se admiten mascotas', 'No fumar', 'No fiestas'], checkIn: 'Desde las 15:00', checkOut: 'Hasta las 11:00', images: [],
    platforms: [{ name: 'Booking', rating: '8,6 / 10', reviews: 'aprox. 79 reseñas', url: 'https://www.booking.com/Pulse-6X600W' }],
    positiveReviews: ['Ubicación', 'Tranquilidad', 'Diseño', 'Comodidad', 'Proximidad a la Alhambra y al centro'],
    negativeReviews: ['Algunas opiniones mencionan poca luz natural', 'Comentarios puntuales sobre humedad u olor', 'Wi-Fi o cobertura inferior en zonas bajas', 'Comentarios puntuales sobre sofá cama o aparcamiento'],
    registration: { regional: ['VFT/GR/06546'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [
      { kind: 'pending', title: 'Capacidad pendiente', detail: 'La capacidad máxima necesita confirmación.' },
      { kind: 'pending', title: 'Terraza pendiente', detail: 'Confirmar si la terraza es privada o compartida.' },
    ],
  },
  {
    kind: 'property', id: 10, slug: 'jardines-torre-de-la-vela', name: 'Torre de la Vela', groupSlug: 'suites-jardines-alhambra',
    category: 'Granada centro', type: 'Apartamento completo; Airbnb también utiliza «habitación en suite»',
    location: 'Suites Jardines de la Alhambra, Granada', address: null,
    shortDescription: 'Unidad para dos huéspedes con terraza privada y vistas de Granada.',
    description: 'Unidad de un dormitorio con terraza privada, acceso a terraza común y vistas publicadas a la Catedral, el Albaicín y la Alhambra.',
    guests: 2, bedrooms: 1, beds: 1, bathrooms: 1, areaM2: null, distribution: ['Una cama matrimonial'],
    amenities: ['Cafetera de cápsulas', 'Hervidor', 'Frigorífico', 'Zona de trabajo', 'TV HD de 32 pulgadas', 'Lavadora gratuita en el edificio', 'Auto check-in'],
    kitchen: null, airConditioning: null, heating: null, wifi: 'Sí', parking: null, pool: null,
    exterior: ['Terraza privada', 'Acceso a terraza común'], views: ['Catedral', 'Albaicín', 'Alhambra'], accessibility: null,
    rules: [], checkIn: 'Desde las 15:00', checkOut: 'Antes de las 11:00', images: [],
    platforms: [{ name: 'Airbnb', rating: '4,67 / 5', reviews: '27 reseñas', url: 'https://www.airbnb.es/rooms/771627371774157161' }],
    positiveReviews: [], negativeReviews: [],
    registration: { regional: ['VTF/GR/06546'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [
      { kind: 'warning', title: 'No confundir las unidades', detail: 'Esta Torre de la Vela pertenece a Suites Jardines y no es Torre de la Vela 1 ni Torre de la Vela 2 del Albaicín.' },
      { kind: 'warning', title: 'Registro pendiente', detail: 'El formato del registro regional necesita confirmación.' },
      { kind: 'pending', title: 'Cocina no encontrada', detail: 'No se ha encontrado una cocina completa; no debe afirmarse que existe.' },
    ],
  },

  // TORRE DE LA VELA · ALBAICÍN
  {
    kind: 'property', id: 11, slug: 'torre-de-la-vela-1', name: 'Torre de la Vela 1', groupSlug: 'torre-de-la-vela',
    category: 'Albaicín', type: 'Apartamento completo', location: 'San Miguel Bajo, Albaicín',
    address: 'Placeta de San Miguel Bajo 6, primero, 18010 Granada',
    shortDescription: 'Apartamento de dos dormitorios en la primera planta del Albaicín.',
    description: 'Apartamento completo para cinco huéspedes, con cocina, terraza, balcón y vistas publicadas a la ciudad.',
    guests: 5, bedrooms: 2, beds: 3, bathrooms: 1, areaM2: 12,
    distribution: ['Dormitorio 1: cama doble', 'Dormitorio 2: cama individual', 'Salón: sofá cama'],
    amenities: ['Nevera', 'Cafetera', 'Microondas', 'Horno', 'Fogones', 'Tostadora', 'Utensilios'],
    kitchen: 'Cocina completa', airConditioning: 'Sí', heating: 'Sí', wifi: 'Sí', parking: null, pool: 'No',
    exterior: ['Terraza', 'Balcón'], views: ['Ciudad', 'Airbnb también menciona montaña'], accessibility: 'Primera planta; ascensor no encontrado oficialmente',
    rules: ['No se admiten mascotas', 'No fumar', 'No fiestas'], checkIn: '15:00 – 22:00', checkOut: 'Hasta las 11:00',
    images: [{ src: '/properties/torre-vela-1-01.jpg', alt: 'Dormitorio de Torre de la Vela 1' }],
    platforms: [{ name: 'Booking', rating: '9,0 / 10', reviews: 'aprox. 93 reseñas', url: 'https://www.booking.com/hotel/es/torre-de-la-vela-1.es.html' }],
    positiveReviews: ['San Miguel Bajo', 'Anfitriona', 'Comodidad', 'Limpieza', 'Transporte', 'Vistas'], negativeReviews: [],
    registration: { regional: ['VFT/GR/04513', 'CTC2011971841'], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [
      { kind: 'warning', title: 'Superficie pendiente', detail: 'Booking publica 12 m². Este dato parece incoherente para dos dormitorios y necesita confirmación.' },
      { kind: 'warning', title: 'Registros contradictorios', detail: 'Las plataformas muestran registros turísticos diferentes. No considerar ninguno definitivo hasta validación del gestor.' },
    ],
  },
  {
    kind: 'property', id: 12, slug: 'torre-de-la-vela-2', name: 'Torre de la Vela 2', groupSlug: 'torre-de-la-vela',
    category: 'Albaicín', type: 'Apartamento completo', location: 'San Miguel Bajo, Albaicín',
    address: '6 Placeta San Miguel Bajo, segundo, Granada',
    shortDescription: 'Apartamento de dos dormitorios en la segunda planta del Albaicín.',
    description: 'Apartamento completo para cinco huéspedes, con cocina equipada, balcón, terraza y vistas a la ciudad.',
    guests: 5, bedrooms: 2, beds: 3, bathrooms: 1, areaM2: null,
    distribution: ['Dormitorio con cama doble', 'Dormitorio con cama individual', 'Sofá cama'], amenities: ['Lavavajillas', 'Cafetera'],
    kitchen: 'Cocina completa', airConditioning: 'Sí', heating: null, wifi: 'Sí; Booking publica 10 / 10', parking: null, pool: 'No',
    exterior: ['Balcón', 'Terraza'], views: ['Ciudad'], accessibility: 'Las reseñas indican una segunda planta sin ascensor; falta confirmación oficial',
    rules: ['No se admiten mascotas', 'No fumar', 'No fiestas'], checkIn: 'Desde las 15:00', checkOut: 'Hasta las 11:00',
    images: [{ src: '/properties/torre-vela-2-01.jpg', alt: 'Cocina de Torre de la Vela 2' }],
    platforms: [{ name: 'Booking', rating: '9,2 / 10', reviews: 'aprox. 107 reseñas', note: 'Wi-Fi 10 / 10', url: 'https://www.booking.com/Pulse-s6WOUR' }],
    positiveReviews: ['Ubicación', 'Vistas', 'Autobús', 'Cocina', 'Comodidad', 'Climatización', 'Limpieza'],
    negativeReviews: ['Comentarios puntuales sobre escaleras', 'Sofá cama fino', 'Poco menaje', 'Baño pequeño', 'Olor o ventilación', 'Una reseña antigua menciona humedad o moho'],
    registration: { regional: [], national: ['ESFCTU0000180170007287960000000000000000VFT/GR/065464'] },
    warnings: [
      { kind: 'pending', title: 'Ascensor pendiente', detail: 'Confirmar oficialmente que no existe ascensor.' },
      { kind: 'warning', title: 'Incidencia antigua por revisar', detail: 'Existe una reseña antigua relacionada con humedad. Confirmar con el gestor si la incidencia fue solucionada.' },
      { kind: 'pending', title: 'Registro regional pendiente', detail: 'No se ha encontrado un registro regional suficientemente fiable.' },
    ],
  },

  // CARMEN SAN LUIS · ALBAICÍN
  {
    kind: 'property', id: 13, slug: 'carmen-san-luis-doble-bano-privado', name: 'Habitación doble con baño privado',
    groupSlug: 'carmen-san-luis-albaicin', category: 'Albaicín', type: 'Habitación doble', location: 'Carmen San Luis, Albaicín',
    address: '7 Calle de San Luis, Albaicín, 18010 Granada',
    shortDescription: 'Habitación doble de 15 m² con baño privado.',
    description: 'Habitación con cama doble, baño privado con ducha, climatización y Wi-Fi dentro de Carmen San Luis Albaicín.',
    guests: 2, bedrooms: 1, beds: 1, bathrooms: 1, areaM2: 15, distribution: ['Una cama doble', 'Baño privado con ducha'],
    amenities: ['Secador', 'Toallas', 'Ropa de cama', 'Armario', 'Artículos de aseo'], kitchen: null,
    airConditioning: 'Sí', heating: 'Sí', wifi: 'Sí', parking: null, pool: null, exterior: [], views: [], accessibility: null,
    rules: ['No se admiten mascotas'], checkIn: '15:00 – 22:00', checkOut: '08:00 – 11:00', images: [], platforms: [],
    positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] },
    warnings: [{ kind: 'pending', title: 'Cocina privada no encontrada', detail: 'No se ha encontrado una cocina privada para esta tipología.' }],
  },
  {
    kind: 'property', id: 14, slug: 'carmen-san-luis-deluxe-vistas', name: 'Habitación doble Deluxe con vistas',
    groupSlug: 'carmen-san-luis-albaicin', category: 'Albaicín', type: 'Habitación doble Deluxe', location: 'Carmen San Luis, Albaicín',
    address: '7 Calle de San Luis, Albaicín, 18010 Granada',
    shortDescription: 'Habitación Deluxe con baño privado y terraza según huéspedes.',
    description: 'Tipología de aproximadamente 15 m² con baño privado y vistas publicadas al castillo o a la ciudad.',
    guests: null, bedrooms: 1, beds: null, bathrooms: 1, areaM2: 15, distribution: [], amenities: [], kitchen: null,
    airConditioning: null, heating: null, wifi: null, parking: null, pool: null,
    exterior: ['Terraza según huéspedes'], views: ['Castillo', 'Ciudad'], accessibility: null,
    rules: ['No se admiten mascotas'], checkIn: '15:00 – 22:00', checkOut: '08:00 – 11:00', images: [], platforms: [],
    positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] },
    warnings: [
      { kind: 'warning', title: 'Capacidad e inventario pendientes', detail: 'No se conoce con certeza el número de camas, la capacidad exacta ni cuántas habitaciones físicas existen de esta tipología.' },
      { kind: 'warning', title: 'Piscina por confirmar', detail: 'Algunas reseñas hablan de una piscina privada en la terraza; no se considera un servicio confirmado.' },
    ],
  },

  // ALHAMBRA.MESONES 4
  {
    kind: 'property', id: 15, slug: 'mesones-apartamento-balcon-a', name: 'Apartamento con balcón A', groupSlug: 'alhambra-mesones-4',
    category: 'Granada centro', type: 'Apartamento', location: 'ALHAMBRA.MESONES 4, Granada', address: '4 Plaza de Cauchiles, 18001 Granada',
    shortDescription: 'Apartamento de 105 m² con tres dormitorios y balcón.',
    description: 'Tipología pública de Booking para siete huéspedes. Todavía no se conoce su equivalencia con Apartamento 1, 2, 3 o Ático.',
    guests: 7, bedrooms: 3, beds: 5, bathrooms: 2, areaM2: 105,
    distribution: ['Dormitorio 1: cama doble', 'Dormitorio 2: cama doble', 'Dormitorio 3: dos camas individuales', 'Salón: sofá cama'],
    amenities: ['Fogones', 'Nevera', 'Microondas', 'Cafetera', 'Tostadora', 'Hervidor', 'Utensilios', 'Lavadora'],
    kitchen: 'Cocina privada', airConditioning: 'Sí', heating: null, wifi: null, parking: null, pool: null,
    exterior: ['Balcón'], views: ['Calle tranquila'], accessibility: null, rules: [], checkIn: null, checkOut: '09:00 – 11:00',
    images: [], platforms: [], positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] },
    warnings: [{ kind: 'warning', title: 'Nombre interno pendiente', detail: 'No asignar esta tipología a Apartamento 1, 2, 3 o Ático hasta que el gestor confirme la correspondencia.' }],
  },
  {
    kind: 'property', id: 16, slug: 'mesones-apartamento-superior', name: 'Apartamento Superior', groupSlug: 'alhambra-mesones-4',
    category: 'Granada centro', type: 'Apartamento', location: 'ALHAMBRA.MESONES 4, Granada', address: '4 Plaza de Cauchiles, 18001 Granada',
    shortDescription: 'Apartamento de 115 m² con tres dormitorios.',
    description: 'Tipología pública de Booking para siete huéspedes. Todavía no se conoce su equivalencia con Apartamento 1, 2, 3 o Ático.',
    guests: 7, bedrooms: 3, beds: 5, bathrooms: 2, areaM2: 115,
    distribution: ['Dos camas dobles', 'Dos camas individuales', 'Sofá cama'], amenities: ['Lavadora'],
    kitchen: 'Cocina privada', airConditioning: 'Sí', heating: null, wifi: null, parking: null, pool: null,
    exterior: ['Balcón o patio'], views: ['Calle'], accessibility: null, rules: [], checkIn: null, checkOut: '09:00 – 11:00',
    images: [], platforms: [], positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] },
    warnings: [{ kind: 'warning', title: 'Nombre interno pendiente', detail: 'No asignar esta tipología a Apartamento 1, 2, 3 o Ático hasta que el gestor confirme la correspondencia.' }],
  },
  {
    kind: 'property', id: 17, slug: 'mesones-estudio-terraza', name: 'Estudio con terraza', groupSlug: 'alhambra-mesones-4',
    category: 'Granada centro', type: 'Estudio', location: 'ALHAMBRA.MESONES 4, Granada', address: '4 Plaza de Cauchiles, 18001 Granada',
    shortDescription: 'Estudio de 35 m² con terraza privada según la información pública.',
    description: 'Tipología pública de Booking para dos huéspedes. Todavía no se conoce su equivalencia con Apartamento 1, 2, 3 o Ático.',
    guests: 2, bedrooms: 0, beds: 1, bathrooms: 1, areaM2: 35, distribution: ['Una cama doble'], amenities: [],
    kitchen: 'Cocina privada', airConditioning: 'Sí', heating: null, wifi: null, parking: null, pool: null,
    exterior: ['Terraza privada según información pública'], views: ['Ciudad', 'Exterior'], accessibility: null,
    rules: [], checkIn: null, checkOut: '09:00 – 11:00', images: [], platforms: [], positiveReviews: [], negativeReviews: [],
    registration: { regional: [], national: [] },
    warnings: [{ kind: 'warning', title: 'Nombre interno pendiente', detail: 'No asignar esta tipología a Apartamento 1, 2, 3 o Ático hasta que el gestor confirme la correspondencia.' }],
  },
  {
    kind: 'property', id: 18, slug: 'mesones-apartamento-balcon-b', name: 'Apartamento con balcón B', groupSlug: 'alhambra-mesones-4',
    category: 'Granada centro', type: 'Apartamento', location: 'ALHAMBRA.MESONES 4, Granada', address: '4 Plaza de Cauchiles, 18001 Granada',
    shortDescription: 'Apartamento de 105 m² con tres dormitorios y balcón.',
    description: 'Tipología pública de Booking para siete huéspedes. Todavía no se conoce su equivalencia con Apartamento 1, 2, 3 o Ático.',
    guests: 7, bedrooms: 3, beds: 5, bathrooms: 2, areaM2: 105,
    distribution: ['Dos camas dobles', 'Dos camas individuales', 'Sofá cama'], amenities: ['Equipamiento similar al otro apartamento con balcón'],
    kitchen: 'Cocina privada', airConditioning: 'Sí', heating: null, wifi: null, parking: null, pool: null,
    exterior: ['Balcón'], views: [], accessibility: null, rules: [], checkIn: null, checkOut: '09:00 – 11:00',
    images: [], platforms: [], positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] },
    warnings: [{ kind: 'warning', title: 'Nombre interno pendiente', detail: 'No asignar esta tipología a Apartamento 1, 2, 3 o Ático hasta que el gestor confirme la correspondencia.' }],
  },
];

// EDIFICIOS Y CONJUNTOS. En /alojamientos aparece una sola tarjeta por grupo.
export const propertyGroups: PropertyGroup[] = [
  {
    kind: 'group', slug: 'suites-jardines-alhambra', name: 'Suites Jardines de la Alhambra',
    category: 'Granada centro', type: 'Conjunto de apartamentos', location: 'Placeta de la Miga, Granada', address: null,
    shortDescription: 'Cinco alojamientos junto a Plaza Nueva y el acceso a la Alhambra.',
    description: 'Un conjunto de cinco unidades con configuraciones diferentes en el centro histórico de Granada.',
    countLabel: '5 alojamientos',
    unitSlugs: ['jardines-arrayanes', 'jardines-alcazaba', 'jardines-generalife', 'jardines-muralla-ziri', 'jardines-torre-de-la-vela'],
    sharedAmenities: ['Terraza común según unidad', 'Llegada autónoma en varias unidades'],
    wifi: null, parking: null, accessibility: null, rules: [], checkIn: null, checkOut: null,
    images: [{ src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de Suites Jardines de la Alhambra' }],
    platforms: [], positiveReviews: [], negativeReviews: [], registration: { regional: [], national: [] }, warnings: [],
  },
  {
    kind: 'group', slug: 'torre-de-la-vela', name: 'Torre de la Vela', category: 'Albaicín', type: 'Conjunto de apartamentos',
    location: 'San Miguel Bajo, Albaicín', address: 'Placeta de San Miguel Bajo 6, 18010 Granada',
    shortDescription: 'Dos apartamentos independientes en el corazón del Albaicín.',
    description: 'Torre de la Vela reúne dos apartamentos completos, uno en primera planta y otro en segunda planta.',
    countLabel: '2 apartamentos', unitSlugs: ['torre-de-la-vela-1', 'torre-de-la-vela-2'], sharedAmenities: [],
    wifi: 'Sí', parking: null, accessibility: null, rules: ['No se admiten mascotas', 'No fumar', 'No fiestas'],
    checkIn: 'Desde las 15:00', checkOut: 'Hasta las 11:00',
    images: [{ src: '/properties/torre-vela-1-01.jpg', alt: 'Dormitorio de Torre de la Vela 1' }, { src: '/properties/torre-vela-2-01.jpg', alt: 'Cocina de Torre de la Vela 2' }],
    platforms: [], positiveReviews: ['Ubicación en San Miguel Bajo', 'Vistas', 'Comodidad'], negativeReviews: [],
    registration: { regional: [], national: [] },
    warnings: [{ kind: 'warning', title: 'No confundir con Suites Jardines', detail: 'Este grupo contiene Torre de la Vela 1 y 2 del Albaicín. No incluye la unidad del mismo nombre de Suites Jardines.' }],
  },
  {
    kind: 'group', slug: 'alhambra-mesones-4', name: 'ALHAMBRA.MESONES 4', officialName: 'ALHAMBRA.MESONES 4',
    category: 'Granada centro', type: 'Edificio de apartamentos', location: 'Centro histórico de Granada',
    address: '4 Plaza de Cauchiles, plantas 1ª, 2ª y 3ª, 18001 Granada',
    shortDescription: 'Cuatro unidades reservables en Plaza de Cauchiles.',
    description: 'Edificio con cuatro tipologías públicas verificables. Todavía no se conoce su correspondencia con Apartamento 1, Apartamento 2, Apartamento 3 y Ático.',
    countLabel: '4 unidades',
    unitSlugs: ['mesones-apartamento-balcon-a', 'mesones-apartamento-superior', 'mesones-estudio-terraza', 'mesones-apartamento-balcon-b'],
    sharedAmenities: ['Wi-Fi', 'Aire acondicionado', 'Calefacción', 'Ascensor', 'Cocina', 'TV', 'Microondas', 'Cafetera', 'Traslado al aeropuerto de pago', 'Alojamientos familiares'],
    wifi: 'Sí; Booking publica aprox. 7,1 / 10', parking: null,
    accessibility: 'Existe ascensor, pero una reseña menciona unos ocho escalones antes de llegar a él en una unidad; no se garantiza accesibilidad completa.',
    rules: ['No fumar', 'No fiestas', 'No mascotas', 'Silencio de 23:00 a 10:00', 'Edad mínima de check-in: 18 años'],
    checkIn: null, checkOut: '09:00 – 11:00 según fuentes asociadas',
    images: [{ src: '/properties/mesones-01.jpg', alt: 'Salón de una unidad de ALHAMBRA.MESONES 4' }],
    platforms: [{ name: 'Booking', rating: '≈ 8,8 / 10', reviews: 'más de 500 reseñas', note: 'Ubicación ≈ 9,7 / 10 · Wi-Fi ≈ 7,1 / 10', url: 'https://www.booking.com/hotel/es/alhambra-mesones-4.es.html' }],
    positiveReviews: ['Ubicación', 'Amplitud', 'Limpieza', 'Reformas', 'Equipamiento', 'Atención'],
    negativeReviews: ['Comentarios puntuales sobre aparcamiento', 'Wi-Fi', 'Ruido de calle', 'Colchones', 'Escalones antes del ascensor'],
    registration: {
      regional: ['VFT/GR/03485', 'VFT/GR/03487', 'VFT/GR/03532', 'VFT/GR/05248'],
      national: ['ESFCTU00C1180230001994290000000000000000VFT/GR/034879', 'ESFCTU10B1180230005145670000000000000000VFT/GR/052488'],
    },
    warnings: [
      { kind: 'warning', title: 'Correspondencia pendiente', detail: 'Pendiente de confirmar qué tipología de Booking corresponde a Apartamento 1, Apartamento 2, Apartamento 3 y Ático.' },
      { kind: 'warning', title: 'Aparcamiento pendiente', detail: 'Booking muestra parking como servicio, pero algunas reseñas hablan de parking público de pago. Confirmar qué se ofrece realmente.' },
      { kind: 'pending', title: 'Horario de entrada pendiente', detail: 'La información pública de check-in no es suficientemente fiable.' },
      { kind: 'warning', title: 'Registros sin asignar', detail: 'No se conoce todavía qué registro corresponde a cada apartamento.' },
    ],
  },
  {
    kind: 'group', slug: 'carmen-san-luis-albaicin', name: 'Carmen San Luis Albaicín', category: 'Albaicín',
    type: 'Alojamiento con diferentes habitaciones', location: 'Albaicín, Granada',
    address: '7 Calle de San Luis, Albaicín, 18010 Granada',
    shortDescription: 'Habitaciones con baño privado en una casa del Albaicín.',
    description: 'Carmen San Luis no es un único apartamento. Booking publica diferentes tipologías de habitación y todavía falta confirmar cuántas habitaciones físicas existen de cada tipo.',
    countLabel: '2 tipologías verificadas',
    unitSlugs: ['carmen-san-luis-doble-bano-privado', 'carmen-san-luis-deluxe-vistas'],
    sharedAmenities: ['Salón compartido', 'Zona exterior con mobiliario', 'Sala de juegos', 'Check-in y check-out privado'],
    wifi: 'Sí en la habitación doble con baño privado', parking: null, accessibility: null, rules: ['No se admiten mascotas'],
    checkIn: '15:00 – 22:00', checkOut: '08:00 – 11:00', images: [],
    platforms: [{ name: 'Booking', rating: '≈ 8,2 / 10', reviews: 'aprox. 400 reseñas', url: 'https://www.booking.com/Pulse-kxW5PN' }],
    positiveReviews: ['Ubicación', 'Tranquilidad', 'Limpieza', 'Camas', 'Decoración', 'Casa', 'Vistas', 'Terraza o piscina de la Deluxe'],
    negativeReviews: ['Comentarios puntuales sobre olor de desagüe', 'Cama incómoda en algún caso', 'Ruido', 'Cuestas o acceso', 'Temperatura de la ducha'],
    registration: { regional: ['VFT/GR/07776', 'VFT/GR/077760', 'VUT/GR/077760'], national: ['ESFCTU0000180170000421990000000000000000VFT/GR/077760'] },
    warnings: [
      { kind: 'warning', title: 'Inventario pendiente', detail: 'Falta confirmar el número físico de habitaciones de cada tipología.' },
      { kind: 'warning', title: 'Registros contradictorios', detail: 'Booking muestra varias versiones del registro. Confirmar el registro vigente.' },
    ],
  },
];

export const getProperty = (slug: string) => properties.find((property) => property.slug === slug);
export const getPropertyGroup = (slug: string) => propertyGroups.find((group) => group.slug === slug);
export const getGroupUnits = (group: PropertyGroup) => group.unitSlugs.map((slug) => getProperty(slug)).filter((item): item is Property => Boolean(item));

/**
 * ESTAS SON LAS NUEVE TARJETAS PRINCIPALES Y SU ORDEN.
 * Para cambiar el orden, mueve una línea completa. Para añadir o quitar una
 * tarjeta, añade o elimina su slug, conservando las comas.
 */
export const catalogSlugs = [
  'villa-girasol-calahonda',
  'miramar-castell-de-ferro',
  'el-pino-cajar',
  'cortijo-del-aire-albolote',
  'suites-jardines-alhambra',
  'alhambra-mesones-4',
  'puentezuelas-49',
  'torre-de-la-vela',
  'carmen-san-luis-albaicin',
] as const;

export const catalogItems: CatalogItem[] = catalogSlugs
  .map((slug) => getProperty(slug) ?? getPropertyGroup(slug))
  .filter((item): item is CatalogItem => Boolean(item));

export const categories = ['Todos', 'Costa', 'Albaicín', 'Casas rurales', 'Granada centro'] as const;

// Mantiene funcionando enlaces antiguos sin duplicar alojamientos en el catálogo.
const legacySlugs: Record<string, string> = {
  'suites-jardines-de-la-alhambra': 'suites-jardines-alhambra',
  'jardines-alhambra-arrayanes': 'jardines-arrayanes',
  'jardines-alhambra-alcazaba': 'jardines-alcazaba',
  'apartamento-generalife': 'jardines-generalife',
  'jardines-alhambra-muralla-ziri': 'jardines-muralla-ziri',
  'jardines-alhambra-torre-de-la-vela': 'jardines-torre-de-la-vela',
  'apartamento-miramar-castell-de-ferro': 'miramar-castell-de-ferro',
};

export const getCatalogItem = (slug: string) => {
  const currentSlug = legacySlugs[slug] ?? slug;
  return getProperty(currentSlug) ?? getPropertyGroup(currentSlug);
};
