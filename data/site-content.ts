/**
 * EDITA LOS TEXTOS GENERALES DE LA WEB EN ESTE ARCHIVO.
 *
 * - Cambia solamente el texto situado entre comillas.
 * - Conserva las comas, llaves y nombres que hay antes de los dos puntos.
 * - Los títulos separados en varias líneas usan una lista como ['Línea 1', 'Línea 2'].
 */

export const navigationLinks = [
  { label: 'Alojamientos', href: '/alojamientos' },
  { label: 'Granada', href: '/granada' },
  { label: 'Villas y casas', href: '/villas' },
  { label: 'Sobre nosotros', href: '/sobre-key-suites' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const siteContent = {
  seo: {
    siteUrl: 'https://key-suites-granada.ijustdaniii.chatgpt.site',
    title: 'KEY SUITES | Alojamientos en Granada y alrededores',
    titleTemplate: '%s | KEY SUITES',
    description: 'Apartamentos, suites, villas y casas gestionadas por KEY SUITES en Granada, sus alrededores y la Costa Tropical.',
    socialTitle: 'KEY SUITES',
    socialDescription: 'Alojamientos en Granada y alrededores',
  },
  header: {
    reviewLabel: 'Versión preliminar',
    reviewText: 'Algunos datos están pendientes de validación por KEY SUITES.',
    cta: 'Ver alojamientos',
  },
  home: {
    hero: {
      eyebrow: 'Granada · Albaicín · Villas · Costa',
      title: ['Tu estancia', 'empieza aquí.'],
      text: 'Alojamientos seleccionados en Granada y alrededores, gestionados personalmente para que disfrutes de cada destino con comodidad.',
      primaryButton: 'Explorar alojamientos',
      secondaryButton: 'Conoce KEY SUITES',
      note: ['Estancias con', 'carácter propio'],
      // Puedes cambiar el orden, los textos o las fotos del carrusel.
      // Las fotos deben estar dentro de la carpeta public.
      slides: [
        { src: '/properties/jardines-alhambra-01.jpg', alt: 'Terraza de Suites Jardines de la Alhambra al atardecer', label: 'Granada' },
        { src: '/properties/el-pino-01.jpg', alt: 'Jardín y barbacoa de Chalé El Pino', label: 'Villas' },
        { src: '/properties/miramar-01.png', alt: 'Terraza de Apartamento Miramar frente al mar', label: 'Costa Tropical' },
        { src: '/properties/puentezuelas-01.jpg', alt: 'Salón de Puentezuelas 49 en el centro de Granada', label: 'Granada centro' },
      ],
    },
    intro: {
      kicker: 'KEY SUITES',
      title: ['Un mismo cuidado.', 'Distintas formas de alojarte.'],
      text: 'Manuel y Alicia gestionan una selección diversa de apartamentos, suites, villas y casas entre el centro de Granada, el Albaicín, sus alrededores y la Costa Tropical.',
      link: 'Conoce cómo trabajamos',
    },
    featured: {
      kicker: 'UNA SELECCIÓN PARA CADA VIAJE',
      title: 'Alojamientos destacados',
      link: 'Ver todos los alojamientos',
      slugs: ['el-pino-cajar', 'suites-jardines-de-la-alhambra', 'apartamento-miramar-castell-de-ferro'],
    },
    destinations: {
      kicker: 'GRANADA Y MUCHO MÁS',
      title: ['Del Albaicín', 'a la Costa Tropical.'],
      text: 'Apartamentos desde los que caminar por el centro histórico, villas pensadas para compartir y alojamientos junto al mar.',
      items: [
        { name: 'Granada centro', detail: 'Alhambra · Catedral · Plaza Nueva', href: '/granada' },
        { name: 'Albaicín', detail: 'Calles históricas · San Miguel Bajo', href: '/alojamientos?categoria=Albaicín' },
        { name: 'Villas y casas', detail: 'Cájar · Otura · Albolote', href: '/villas' },
        { name: 'Costa Tropical', detail: 'Castell de Ferro · Mar Mediterráneo', href: '/alojamientos?categoria=Costa' },
      ],
    },
    trust: {
      kicker: 'UNA GESTIÓN CERCANA',
      title: 'Cada estancia forma parte de una misma experiencia.',
      items: [
        { title: 'Atención cercana', text: 'Una gestión personal antes y durante la estancia.' },
        { title: 'Alojamientos seleccionados', text: 'Distintos formatos y ubicaciones reunidos bajo KEY SUITES.' },
        { title: 'Experiencia pública', text: 'Algunos alojamientos cuentan con cientos de valoraciones en plataformas externas.' },
      ],
    },
    closing: {
      kicker: 'TU PRÓXIMA ESTANCIA',
      title: ['Granada, sierra', 'o mar.'],
      button: 'Encuentra tu alojamiento',
    },
  },
  listings: {
    kicker: 'ALOJAMIENTOS · 4 ZONAS',
    title: ['Encuentra tu', 'lugar en Granada.'],
    text: 'Apartamentos urbanos, suites con carácter, villas para compartir y una estancia frente al mar. Todos, bajo la gestión de KEY SUITES.',
    confirmedNote: 'Datos confirmados y pendientes claramente diferenciados en cada ficha',
  },
  granada: {
    kicker: 'GRANADA',
    title: ['Centro histórico', 'y Albaicín.'],
    text: 'Alojamientos desde los que acercarte a Plaza Nueva, la Alhambra, la Catedral y las calles del Albaicín.',
    sectionKicker: 'ALOJAMIENTOS EN LA CIUDAD',
    sectionSuffix: 'estancias en Granada',
    allLink: 'Ver todos',
  },
  villas: {
    kicker: 'VILLAS Y CASAS',
    title: ['Más espacio', 'para compartir.'],
    text: 'Casas con jardín, piscina y zonas exteriores en Cájar, Otura y Albolote.',
    sectionKicker: 'ALREDEDORES DE GRANADA',
    sectionSuffix: 'casas y villas',
    allLink: 'Ver todos',
  },
  about: {
    kicker: 'SOBRE KEY SUITES',
    title: ['Conocemos', 'cada estancia.'],
    intro: 'KEY SUITES reúne alojamientos distintos bajo una gestión cercana y una forma común de recibir a quienes visitan Granada y sus alrededores.',
    teamKicker: 'EL EQUIPO',
    teamTitle: ['Manuel (Lolo)', 'y Alicia.'],
    paragraphs: [
      'Gestionan personalmente una colección que incluye apartamentos en el centro de Granada y el Albaicín, villas en los alrededores y un alojamiento en la Costa Tropical.',
      'Manuel cuenta con una trayectoria extensa como anfitrión y aparece como Superanfitrión en Airbnb en algunos alojamientos. Cientos de huéspedes ya se han alojado en viviendas gestionadas por el equipo.',
    ],
    pendingTitle: 'Falta información del equipo',
    pendingDetail: 'Solicitar texto personal de Manuel y Alicia, fotografías del equipo y datos definitivos de la empresa.',
    principlesKicker: 'LO QUE UNE CADA ALOJAMIENTO',
    principles: [
      { title: 'Una gestión humana', text: 'El alojamiento no se presenta como un simple inventario: cada estancia forma parte de una relación cercana con huéspedes y propietarios.' },
      { title: 'Variedad con criterio', text: 'Desde una suite para dos hasta una villa para grupos, cada formato responde a una manera distinta de conocer Granada.' },
      { title: 'Información clara', text: 'Esta versión preliminar separa los datos confirmados de aquello que todavía debe revisarse antes de publicar.' },
    ],
    ctaLabel: '¿Buscas una estancia concreta?',
    ctaTitle: 'Explora todos los alojamientos gestionados por KEY SUITES.',
    ctaButton: 'Ver alojamientos',
  },
  contact: {
    kicker: 'CONTACTO',
    title: ['Hablemos de', 'tu estancia.'],
    text: 'Cuéntanos qué tipo de alojamiento buscas, para cuántas personas y en qué fechas. El canal de recepción definitivo se incorporará cuando KEY SUITES confirme sus datos de contacto.',
    location: 'Granada · España',
    types: 'Apartamentos · Suites · Villas · Costa',
    pendingTitle: 'Datos de contacto pendientes',
    pendingDetail: 'Confirmar teléfono, correo electrónico, horario de atención y responsable de privacidad antes de activar el formulario.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      emailPlaceholder: 'nombre@ejemplo.com',
      property: 'Alojamiento de interés',
      propertyPlaceholder: 'Nombre del alojamiento, si ya lo sabes',
      message: 'Mensaje',
      messagePlaceholder: 'Fechas, número de huéspedes y cualquier detalle útil',
      button: 'Preparar consulta',
      idleNote: 'La consulta no se enviará fuera de este prototipo.',
      successNote: 'Consulta preparada. El envío real se activará cuando KEY SUITES confirme su canal de contacto.',
    },
  },
  footer: {
    description: 'Alojamientos seleccionados y gestionados en Granada, sus alrededores y la Costa Tropical.',
    exploreTitle: 'Explorar',
    brandTitle: 'KEY SUITES',
    legalTitle: 'Información legal',
    legalItems: ['Política de privacidad', 'Aviso legal', 'Cookies'],
    legalPending: 'Datos legales pendientes',
    location: 'Granada · España',
  },
} as const;
