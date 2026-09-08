import type { PrivacyPolicySection } from './privacy-policy';

export const legalNoticeUpdated = '8 de septiembre de 2026';

export const legalNoticeSections: readonly PrivacyPolicySection[] = [
  {
    number: 1,
    title: 'Identificación del titular',
    paragraphs: ['En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa de que el titular del presente sitio web es:'],
    details: [
      { label: 'Razón social', value: 'Turismo Vacacional Granada S.L.' },
      { label: 'Nombre comercial', value: 'OKEY SUITES' },
      { label: 'CIF', value: 'B72400112' },
      { label: 'Domicilio', value: 'Acera del Darro 78, 1.º, 18005 Granada' },
      { label: 'Correo electrónico principal', value: 'turismovacacionalgranada@gmail.com', href: 'mailto:turismovacacionalgranada@gmail.com' },
      { label: 'Correo electrónico adicional', value: 'manuelopezgil@gmail.com', href: 'mailto:manuelopezgil@gmail.com' },
      { label: 'Teléfono / WhatsApp', value: '+34 687 86 40 72 / +34 631 99 45 25' },
      { label: 'Datos de inscripción en el Registro Mercantil', value: '________________________________' },
    ],
    afterDetails: ['OKEY SUITES es el nombre comercial utilizado por Turismo Vacacional Granada S.L. para la gestión y promoción de sus servicios relacionados con alojamientos turísticos.'],
  },
  {
    number: 2,
    title: 'Objeto del sitio web',
    paragraphs: [
      'El sitio web de OKEY SUITES tiene como finalidad ofrecer información sobre la empresa, los alojamientos que gestiona y los servicios relacionados con dichos alojamientos.',
      'También puede incluir recomendaciones de restaurantes, espectáculos, actividades u otros servicios de terceros que puedan resultar de interés para los huéspedes.',
      'La web puede incluir enlaces a plataformas externas, como Booking, Airbnb u otros servicios, mediante los que el usuario puede consultar información adicional y, cuando corresponda, gestionar o realizar reservas.',
      'Salvo que se indique expresamente lo contrario, la inclusión de un establecimiento, servicio o enlace externo no implica que exista una relación societaria o de representación entre Turismo Vacacional Granada S.L. y dicho tercero.',
    ],
  },
  {
    number: 3,
    title: 'Información sobre los alojamientos',
    paragraphs: [
      'Los alojamientos turísticos promocionados mediante este sitio web deberán mostrar, cuando resulte legalmente exigible, su correspondiente número o código de inscripción turística y demás información obligatoria aplicable a su comercialización.',
      'La información relativa a características, servicios, disponibilidad, condiciones o precios podrá actualizarse cuando cambien las características del alojamiento o las condiciones ofrecidas.',
      'Cuando la contratación o reserva se realice mediante una plataforma externa, el usuario deberá consultar las condiciones e información aplicables en dicha plataforma antes de formalizar la operación.',
    ],
  },
  {
    number: 4,
    title: 'Propiedad intelectual e industrial',
    paragraphs: [
      'Los textos, diseños, elementos gráficos, logotipos, fotografías y demás contenidos utilizados en el sitio web estarán protegidos por la normativa de propiedad intelectual e industrial cuando corresponda.',
      'Turismo Vacacional Granada S.L. utilizará contenidos propios o aquellos para los que disponga de autorización, licencia o derecho suficiente de utilización.',
      'La publicación de contenidos de terceros en el sitio web no implica la transmisión de sus derechos de propiedad intelectual o industrial a Turismo Vacacional Granada S.L.',
      'No se permite la reproducción, distribución, modificación, comunicación pública o utilización de contenidos protegidos del sitio web sin la autorización del titular de los derechos cuando dicha autorización resulte legalmente necesaria.',
      'Las marcas, logotipos, fotografías y demás contenidos pertenecientes a terceros seguirán perteneciendo a sus respectivos titulares.',
    ],
  },
  {
    number: 5,
    title: 'Enlaces y servicios de terceros',
    paragraphs: [
      'El sitio web puede contener enlaces a páginas o servicios gestionados por terceros, entre ellos plataformas de reservas, restaurantes, espectáculos u otros establecimientos.',
      'Turismo Vacacional Granada S.L. no controla con carácter general el contenido, funcionamiento, disponibilidad, condiciones o políticas de dichas páginas externas.',
      'Cuando Turismo Vacacional Granada S.L. tenga conocimiento efectivo de que un enlace dirige a contenidos ilícitos o vulnera derechos de terceros, actuará con la diligencia correspondiente para retirar o inutilizar dicho enlace cuando proceda.',
      'El acceso y utilización de las páginas externas quedará sujeto a las condiciones establecidas por sus respectivos titulares.',
      'Cuando exista una colaboración comercial, enlace de afiliación u otra relación de naturaleza publicitaria que legalmente deba identificarse como tal, se informará al usuario de forma adecuada.',
    ],
  },
  {
    number: 6,
    title: 'Responsabilidad sobre la información publicada',
    paragraphs: [
      'Turismo Vacacional Granada S.L. procurará mantener actualizada y correcta la información propia publicada en el sitio web.',
      'No obstante, determinadas informaciones relativas a servicios o establecimientos de terceros pueden cambiar sin intervención de OKEY SUITES.',
      'Cuando el usuario vaya a contratar un servicio mediante una plataforma o establecimiento externo, deberá comprobar en dicho servicio la información y condiciones aplicables en ese momento.',
      'Nada de lo dispuesto en este Aviso Legal limitará o excluirá aquellas responsabilidades de Turismo Vacacional Granada S.L. que no puedan excluirse conforme a la legislación aplicable.',
    ],
  },
  {
    number: 7,
    title: 'Protección de datos personales',
    paragraphs: ['El tratamiento de datos personales realizado por Turismo Vacacional Granada S.L. se regula en la Política de Privacidad disponible en este sitio web.'],
  },
  {
    number: 8,
    title: 'Cookies y tecnologías similares',
    paragraphs: ['La información relativa al uso de cookies u otras tecnologías similares se encuentra disponible en la Política de Cookies del sitio web.'],
  },
  {
    number: 9,
    title: 'Legislación aplicable',
    paragraphs: [
      'El presente sitio web y su Aviso Legal se rigen por la legislación española.',
      'Las controversias relacionadas con el sitio web se someterán a los juzgados y tribunales que resulten competentes conforme a la legislación aplicable, respetándose en todo caso las normas imperativas sobre consumidores y usuarios cuando resulten aplicables.',
    ],
  },
];
