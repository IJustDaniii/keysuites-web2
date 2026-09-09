export type CookiePolicyRow = {
  type: string;
  purpose: string;
  duration: string;
  consent: string;
};

export type CookiePolicySection = {
  number: number;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  details?: readonly { label: string; value: string; href?: string }[];
  table?: readonly CookiePolicyRow[];
};

export const cookiePolicyUpdated = '8 de septiembre de 2026';

export const cookiePolicySections: readonly CookiePolicySection[] = [
  {
    number: 1,
    title: 'Responsable del sitio web',
    paragraphs: ['El titular de este sitio web es:'],
    details: [
      { label: 'Razón social', value: 'Turismo Vacacional Granada S.L.' },
      { label: 'Nombre comercial', value: 'OKEY SUITES' },
      { label: 'CIF', value: 'B72400112' },
      { label: 'Domicilio', value: 'Acera del Darro 78, 1.º, 18005 Granada' },
      { label: 'Correo electrónico', value: 'turismovacacionalgranada@gmail.com', href: 'mailto:turismovacacionalgranada@gmail.com' },
      { label: 'Correo electrónico adicional', value: 'manuelopezgil@gmail.com', href: 'mailto:manuelopezgil@gmail.com' },
      { label: 'Teléfono / WhatsApp', value: '+34 687 86 40 72 / +34 631 99 45 25' },
      { label: 'Sitio web', value: 'https://okeysuites.es/', href: 'https://okeysuites.es/' },
    ],
  },
  {
    number: 2,
    title: '¿Qué son las cookies?',
    paragraphs: [
      'Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario cuando visita una página web. Permiten recordar determinada información y facilitar la navegación.',
      'También existen tecnologías similares, como el almacenamiento temporal del navegador, que pueden utilizarse para garantizar el correcto funcionamiento de una página web.',
    ],
  },
  {
    number: 3,
    title: 'Uso de cookies en este sitio web',
    paragraphs: [
      'Actualmente, OKEY SUITES no utiliza cookies con fines publicitarios, comerciales, analíticos o de elaboración de perfiles.',
      'El sitio web puede utilizar determinados mecanismos técnicos y temporales del navegador para permitir la navegación, evitar errores y garantizar el funcionamiento de sus páginas.',
      'Estos mecanismos:',
    ],
    items: [
      'Tienen una finalidad exclusivamente técnica.',
      'No se utilizan para identificar personalmente al usuario.',
      'No se utilizan para analizar sus hábitos de navegación.',
      'No se utilizan para enviar publicidad personalizada.',
      'Se eliminan al finalizar su finalidad técnica o la sesión de navegación.',
    ],
  },
  {
    number: 4,
    title: 'Tipos de tecnologías utilizadas',
    table: [
      { type: 'Tecnologías técnicas de sesión', purpose: 'Facilitar la navegación y evitar errores de funcionamiento', duration: 'Temporal, durante la sesión de navegación', consent: 'No necesario' },
      { type: 'Cookies analíticas', purpose: 'No utilizadas actualmente', duration: '—', consent: '—' },
      { type: 'Cookies publicitarias o de perfiles', purpose: 'No utilizadas actualmente', duration: '—', consent: '—' },
      { type: 'Cookies de terceros integradas en la web', purpose: 'No utilizadas actualmente', duration: '—', consent: '—' },
    ],
  },
  {
    number: 5,
    title: 'Enlaces a páginas de terceros',
    paragraphs: [
      'El sitio web puede incluir enlaces a servicios externos, como Booking, Airbnb, Google Maps, WhatsApp, páginas de restaurantes, espectáculos, TripAdvisor y redes sociales.',
      'Estos servicios no están integrados directamente en las páginas de OKEY SUITES mediante cookies, píxeles o contenidos incrustados. Sin embargo, cuando el usuario accede a ellos, abandona el sitio web de OKEY SUITES y queda sujeto a las políticas de privacidad y cookies de cada tercero.',
      'El usuario deberá consultar dichas políticas antes de utilizar los servicios externos o realizar una reserva.',
    ],
  },
  {
    number: 6,
    title: 'Consentimiento',
    paragraphs: [
      'Con la configuración actual del sitio web, no es necesario solicitar el consentimiento del usuario mediante un banner de cookies, ya que no se utilizan cookies no necesarias ni tecnologías de seguimiento con fines analíticos o publicitarios.',
      'Si en el futuro se incorporasen cookies de análisis, publicidad, personalización, mapas, vídeos, redes sociales u otros servicios similares, esta política se actualizaría y se solicitaría el consentimiento correspondiente antes de su instalación.',
    ],
  },
  {
    number: 7,
    title: 'Configuración del navegador',
    paragraphs: [
      'El usuario puede permitir, bloquear o eliminar las cookies y otros datos almacenados mediante las opciones de configuración de su navegador.',
      'El bloqueo de tecnologías técnicas podría afectar al funcionamiento normal de determinadas partes del sitio web.',
    ],
  },
  {
    number: 8,
    title: 'Actualización de esta política',
    paragraphs: [
      'Esta Política de Cookies podrá actualizarse cuando cambien las tecnologías utilizadas en el sitio web, los servicios de terceros integrados o la normativa aplicable.',
      'La versión vigente estará siempre disponible en esta página.',
    ],
  },
];
