/**
 * EDITA LOS TEXTOS GENERALES DE LA WEB EN ESTE ARCHIVO.
 *
 * - Cambia solamente el texto situado entre comillas.
 * - Conserva las comas, llaves y nombres que hay antes de los dos puntos.
 * - Los títulos separados en varias líneas usan una lista como ['Línea 1', 'Línea 2'].
 * - Las imágenes se guardan en public. En la ruta NO se escribe la palabra public.
 *   Ejemplo: public/properties/foto.jpg se usa como '/properties/foto.jpg'.
 */

export const navigationLinks = [
  { label: 'Alojamientos', href: '/alojamientos' },
  { label: 'Espectáculos', href: '/espectaculos' },
  { label: 'Restaurantes', href: '/restaurantes' },
  { label: 'Sobre nosotros', href: '/sobre-key-suites' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const siteContent = {
  seo: {
    siteUrl: 'https://keysuites-web3.danielgameromartinezzz.workers.dev/',
    title: 'OKEY SUITES | Alojamientos en Granada y alrededores',
    titleTemplate: '%s | OKEY SUITES',
    description: 'Apartamentos, suites y casas gestionadas por OKEY SUITES en Granada, el Albaicín, sus alrededores y la Costa Tropical.',
    socialTitle: 'OKEY SUITES',
    socialDescription: 'Alojamientos en Granada y alrededores',
  },
  header: {
    reviewLabel: 'Versión preliminar',
    reviewText: 'Algunos datos están pendientes de validación por OKEY SUITES.',
    cta: 'Ver alojamientos',
  },
  home: {
    hero: {
      eyebrow: 'Granada · Albaicín · Casas rurales · Costa',
      title: ['Tu estancia', 'empieza aquí.'],
      text: 'Alojamientos seleccionados en Granada y alrededores, gestionados personalmente para que disfrutes de cada destino con comodidad.',
      primaryButton: 'Explorar alojamientos',
      secondaryButton: 'Conoce OKEY SUITES',
      note: ['Estancias con', 'carácter propio'],
      // Puedes cambiar el orden, los textos o las fotos del carrusel.
      // Las fotos deben estar dentro de la carpeta public.
      slides: [
        { src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de Suites Jardines de la Alhambra al atardecer', label: 'Granada' },
        { src: '/properties/el-pino-02.jpg', alt: 'Jardín y barbacoa de El Pino', label: 'Casas rurales' },
        { src: '/properties/miramar-01.png', alt: 'Terraza de Apartamento Miramar frente al mar', label: 'Costa Tropical' },
        { src: '/properties/puentezuelas-01.jpg', alt: 'Salón de Puentezuelas 49 en el centro de Granada', label: 'Granada centro' },
      ],
    },
    intro: {
      kicker: 'OKEY SUITES',
      title: ['Un mismo cuidado.', 'Distintas formas de alojarte.'],
      text: 'Una selección diversa de apartamentos, suites, habitaciones y casas entre el centro de Granada, el Albaicín, sus alrededores y la Costa Tropical.',
      link: 'Conoce cómo trabajamos',
    },
    featured: {
      kicker: 'UNA SELECCIÓN PARA CADA VIAJE',
      title: 'Alojamientos destacados',
      link: 'Ver todos los alojamientos',
      slugs: ['el-pino-cajar', 'suites-jardines-alhambra', 'miramar-castell-de-ferro'],
    },
    destinations: {
      kicker: 'GRANADA Y MUCHO MÁS',
      title: ['Del Albaicín', 'a la Costa Tropical.'],
      text: 'Apartamentos desde los que caminar por el centro histórico, villas pensadas para compartir y alojamientos junto al mar.',
      items: [
        { name: 'Granada centro', detail: 'Alhambra · Catedral · Plaza Nueva', href: '/alojamientos?categoria=Granada%20centro' },
        { name: 'Albaicín', detail: 'Calles históricas · San Miguel Bajo', href: '/alojamientos?categoria=Albaicín' },
        { name: 'Casas rurales', detail: 'Cájar · Albolote', href: '/alojamientos?categoria=Casas%20rurales' },
        { name: 'Costa Tropical', detail: 'Calahonda · Castell de Ferro', href: '/alojamientos?categoria=Costa' },
      ],
    },
    trust: {
      kicker: 'UNA GESTIÓN CERCANA',
      title: 'Cada estancia forma parte de una misma experiencia.',
      items: [
        { title: 'Atención cercana', text: 'Una gestión personal antes y durante la estancia.' },
        { title: 'Alojamientos seleccionados', text: 'Distintos formatos y ubicaciones reunidos bajo OKEY SUITES.' },
        { title: 'Experiencia pública', text: 'Algunos alojamientos cuentan con cientos de valoraciones en plataformas externas.' },
      ],
    },
    closing: {
      kicker: 'TU PRÓXIMA ESTANCIA',
      title: ['Granada, sierra', 'o mar.'],
      button: 'Encuentra tu alojamiento',
      image: { src: '/properties/miramar-01.png', alt: 'Terraza de Apartamento Miramar frente al mar' },
    },
  },
  listings: {
    kicker: 'SELECCIONES · 4 ZONAS',
    title: ['Encuentra tu', 'lugar en Granada.'],
    text: 'Apartamentos urbanos, suites con carácter, casas para compartir y estancias frente al mar. Los edificios muestran sus unidades en una página propia.',
    confirmedNote: 'Datos confirmados y pendientes claramente diferenciados en cada ficha',
  },
  about: {
    heroImage: { src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de un alojamiento gestionado por OKEY SUITES' },
    kicker: 'SOBRE OKEY SUITES',
    title: ['Conocemos', 'cada estancia.'],
    intro: 'Okey Suites es una sociedad cuya principal actividad se centra en el asesoramiento y prestación de servicios dirigidos a la puesta en marcha de alojamientos turísticos.',
    teamKicker: 'EL EQUIPO',
    teamTitle: ['Manuel y Alicia.'],
    paragraphs: [
      'Manuel López Gil: psicólogo comercial con más de 10 años de experiencia en el arrendamiento turístico a cargo de la dirección general y comercial de Okey Suites.',
      'Alicia Gómez Martín: experta en gestión, encargada de la dirección administrativa y contable de la empresa.',
      'Nuestro modelo de negocio se basa en la gestión de alojamientos turísticos, acompañado de, si es necesario, todo el proceso para la puesta en marcha de estos. Nuestro asesoramiento se centra en la comercialización del inmueble en plataformas digitales de arrendamientos a corto plazo, pero puede incluir un acompañamiento desde el proceso de elección del inmueble, la obtención de licencia turística, el equipamiento necesario, así como el mecanismo de acceso autónomo a este. Actualmente gestionamos 24 alojamientos turísticos en Granada y alrededores.',
      'Contamos con un equipo de 6 personas, encargados de la coordinación, logística, y calidad para asegurar una mejor atención a los huéspedes de los alojamientos que gestionamos.',
    ],
    principlesKicker: 'LO QUE UNE CADA ALOJAMIENTO',
    principles: [
      { title: 'Una gestión humana', text: 'El alojamiento no se presenta como un simple inventario: cada estancia forma parte de una relación cercana con huéspedes y propietarios.' },
      { title: 'Variedad con criterio', text: 'Desde una suite para dos hasta una villa para grupos, cada formato responde a una manera distinta de conocer Granada.' },
      { title: 'Información clara', text: 'Esta versión preliminar separa los datos confirmados de aquello que todavía debe revisarse antes de publicar.' },
    ],
    ctaLabel: '¿Buscas una estancia concreta?',
    ctaTitle: 'Explora todos los alojamientos gestionados por OKEY SUITES.',
    ctaButton: 'Ver alojamientos',
  },
  contact: {
    kicker: 'CONTACTO',
    title: ['Hablemos de', 'tu estancia'],
    text: 'Estamos al otro lado para ayudarte a elegir alojamiento, resolver tus dudas y preparar tu próxima estancia.',
    location: 'Granada · España',
    types: 'Apartamentos · Suites · Villas · Costa',
    /**
     * EDITA AQUÍ EL TELÉFONO DE CONTACTO.
     * - phoneDisplay: es el número grande que verá el visitante.
     * - phoneUrl: escribe "tel:+34" seguido del número, sin espacios.
     * - whatsappUrl: escribe "https://wa.me/34" seguido del número, sin espacios.
     * El 34 es el prefijo internacional de España.
     */
    details: {
      phoneDisplay: '687 86 40 72',
      phoneUrl: 'tel:+34687864072',
      whatsappUrl: 'https://wa.me/34687864072',
    },
    callButton: 'Llamar',
    whatsappButton: 'WhatsApp',
    desktopNote: 'En ordenador, puedes abrir WhatsApp Web o marcar este número desde tu teléfono.',
  },
  footer: {
    description: 'Alojamientos seleccionados y gestionados en Granada, sus alrededores y la Costa Tropical.',
    exploreTitle: 'Explorar',
    brandTitle: 'OKEY SUITES',
    legalTitle: 'Información legal',
    legalItems: ['Política de privacidad', 'Aviso legal', 'Cookies'],
    legalPending: 'Datos legales pendientes',
    location: 'Granada · España',
  },
  futurePages: {
    spectacles: {
      kicker: 'NUEVAS EXPERIENCIAS',
      title: 'Espectáculos',
      text: 'Estamos preparando esta sección.',
    },
    restaurants: {
      kicker: 'GRANADA A LA MESA',
      title: 'Restaurantes',
      text: 'Estamos preparando esta sección.',
    },
    label: 'Próximamente',
    back: 'Volver a alojamientos',
  },
  gallery: {
    open: 'Ver todas las fotos',
    close: 'Cerrar galería',
    title: 'GALERÍA',
  },
} as const;
