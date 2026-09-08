export type PrivacyPolicySection = {
  number: number;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  details?: readonly { label: string; value: string; href?: string }[];
  subsections?: readonly {
    title: string;
    paragraphs: readonly string[];
    items?: readonly string[];
  }[];
};

export const privacyPolicyUpdated = '8 de septiembre de 2026';

export const privacyPolicySections: readonly PrivacyPolicySection[] = [
  {
    number: 1,
    title: 'Responsable del tratamiento',
    paragraphs: ['El responsable del tratamiento de los datos personales es:'],
    details: [
      { label: 'Razón social', value: 'Turismo Vacacional Granada S.L.' },
      { label: 'Nombre comercial', value: 'OKEY SUITES' },
      { label: 'CIF', value: 'B72400112' },
      { label: 'Domicilio', value: 'Acera del Darro 78, 1.º, 18005 Granada' },
      { label: 'Correo electrónico principal', value: 'turismovacacionalgranada@gmail.com', href: 'mailto:turismovacacionalgranada@gmail.com' },
      { label: 'Correo electrónico adicional', value: 'manuelopezgil@gmail.com', href: 'mailto:manuelopezgil@gmail.com' },
      { label: 'Teléfono / WhatsApp', value: '+34 687 86 40 72 / +34 631 99 45 25' },
    ],
    subsections: [{
      title: 'Contacto para protección de datos',
      paragraphs: [
        'Para cualquier cuestión relacionada con la protección de datos personales o para ejercer los derechos reconocidos por la normativa, podrá utilizarse preferentemente la siguiente dirección:',
        'turismovacacionalgranada@gmail.com',
      ],
    }],
  },
  {
    number: 2,
    title: 'Qué datos personales pueden tratarse',
    paragraphs: [
      'Turismo Vacacional Granada S.L., bajo el nombre comercial OKEY SUITES, podrá tratar datos personales cuando una persona contacte con la empresa, solicite información, realice o gestione una reserva, se aloje en alguno de los establecimientos gestionados o utilice los servicios relacionados con su estancia.',
      'Según el caso, podrán tratarse las siguientes categorías de datos:',
    ],
    items: [
      'Datos identificativos, como nombre, apellidos, documento de identidad, nacionalidad, fecha de nacimiento u otros datos exigidos legalmente.',
      'Datos de contacto, como teléfono o correo electrónico.',
      'Información incluida voluntariamente en comunicaciones realizadas mediante teléfono, correo electrónico o WhatsApp.',
      'Información relativa a consultas, reservas, pagos, estancias y servicios contratados.',
      'Datos necesarios para gestionar la relación con el huésped.',
      'Datos necesarios para el cumplimiento de las obligaciones legales relativas al registro documental y comunicación de viajeros.',
      'Cuando resulte necesario, determinados datos técnicos relacionados con el funcionamiento y la seguridad del sitio web.',
    ],
    subsections: [{
      title: 'Datos técnicos',
      paragraphs: [
        'Entre estos últimos podrán encontrarse la dirección IP, información de conexión, fecha y hora de las solicitudes, información técnica del navegador o dispositivo y otros datos necesarios para garantizar el funcionamiento y la seguridad de la infraestructura utilizada por la web.',
        'OKEY SUITES no solicita a través de su página web categorías especiales de datos personales salvo que resulte estrictamente necesario y exista una base jurídica válida para ello.',
      ],
    }],
  },
  {
    number: 3,
    title: 'Procedencia de los datos',
    paragraphs: [
      'Los datos personales podrán proceder directamente del propio interesado cuando contacte con OKEY SUITES, realice una reserva, se comunique con la empresa o complete el proceso de check-in.',
      'Cuando una reserva se realice mediante plataformas externas como Booking o Airbnb, OKEY SUITES podrá recibir de dichas plataformas los datos de reserva, identificación y contacto que resulten necesarios para gestionar el alojamiento y prestar el servicio contratado.',
      'Los datos necesarios para el registro de viajeros también podrán ser introducidos directamente por el huésped mediante la plataforma Chekin.',
      'Cuando OKEY SUITES obtenga datos personales a través de terceros y resulte de aplicación el artículo 14 del Reglamento General de Protección de Datos, se facilitará al interesado la información exigida por la normativa dentro del plazo legalmente establecido y, cuando dichos datos vayan a utilizarse para comunicarse con él, a más tardar en el momento de la primera comunicación, salvo que concurra alguna de las excepciones previstas legalmente.',
    ],
  },
  {
    number: 4,
    title: 'Para qué se utilizan los datos y cuál es la base jurídica',
    subsections: [
      {
        title: 'Consultas y solicitudes de información',
        paragraphs: ['Cuando una persona contacte con OKEY SUITES para realizar una consulta o solicitar información, sus datos se utilizarán para responder y gestionar dicha comunicación.', 'La base jurídica será, según el caso:'],
        items: ['El consentimiento del interesado, conforme al artículo 6.1.a) del Reglamento General de Protección de Datos.', 'La aplicación de medidas precontractuales solicitadas por el interesado, conforme al artículo 6.1.b) del Reglamento General de Protección de Datos, cuando la consulta esté relacionada con una posible reserva o contratación.'],
      },
      {
        title: 'Reservas y prestación del alojamiento',
        paragraphs: ['Cuando exista una reserva, los datos necesarios podrán utilizarse para gestionar la reserva, mantener las comunicaciones necesarias con el huésped, organizar la estancia, gestionar cobros o incidencias, prestar los servicios contratados y atender cualquier cuestión derivada de la relación contractual.', 'La base jurídica será la ejecución de un contrato o la aplicación de medidas precontractuales solicitadas por el interesado, de conformidad con el artículo 6.1.b) del Reglamento General de Protección de Datos.'],
      },
      {
        title: 'Cumplimiento de obligaciones legales',
        paragraphs: ['Determinados datos serán tratados cuando resulte necesario para cumplir obligaciones legales aplicables a Turismo Vacacional Granada S.L.', 'Esto incluye, cuando corresponda, las obligaciones legales relativas a facturación, contabilidad, fiscalidad, conservación de documentación y las relativas al registro documental de viajeros y comunicación de determinada información a las autoridades competentes en materia de hospedaje.', 'La base jurídica será el cumplimiento de una obligación legal aplicable al responsable del tratamiento, conforme al artículo 6.1.c) del Reglamento General de Protección de Datos.'],
      },
      {
        title: 'Funcionamiento y seguridad del sitio web',
        paragraphs: ['Determinados datos técnicos podrán tratarse cuando resulte necesario para proporcionar el sitio web, garantizar su disponibilidad, prevenir abusos o accesos no autorizados, detectar incidencias técnicas, proteger la infraestructura y mantener la seguridad de los sistemas.', 'La base jurídica será el interés legítimo de Turismo Vacacional Granada S.L. en disponer de una página web funcional, estable y segura, conforme al artículo 6.1.f) del Reglamento General de Protección de Datos.', 'Este tratamiento se realizará teniendo en cuenta los derechos, intereses y libertades de los usuarios y limitándose a los datos razonablemente necesarios para dichas finalidades.'],
      },
      {
        title: 'Consentimiento',
        paragraphs: ['Cuando para un tratamiento concreto la normativa exija el consentimiento del interesado, este se solicitará previamente de forma libre, específica, informada e inequívoca.', 'La base jurídica será, en estos casos, el artículo 6.1.a) del Reglamento General de Protección de Datos.', 'El consentimiento podrá retirarse posteriormente en cualquier momento sin que ello afecte a la licitud del tratamiento realizado antes de su retirada.', 'Actualmente, los datos obtenidos para consultas, reservas y estancias no se utilizarán para enviar comunicaciones comerciales o publicitarias ajenas a dichas finalidades salvo que exista una base jurídica válida que permita hacerlo y se cumplan los requisitos establecidos legalmente.'],
      },
    ],
  },
  {
    number: 5,
    title: 'Cuándo es obligatorio proporcionar los datos',
    paragraphs: [
      'Los datos solicitados para realizar una consulta son, con carácter general, voluntarios, aunque OKEY SUITES necesitará disponer de información suficiente para poder responder adecuadamente.',
      'Los datos necesarios para formalizar o gestionar una reserva tienen carácter contractual. Si no se facilitan los datos indispensables para prestar el servicio, puede no ser posible gestionar correctamente la reserva o la estancia.',
      'Los datos exigidos por la normativa de registro de viajeros tienen carácter obligatorio cuando dicha normativa resulte aplicable. La falta de los datos legalmente requeridos puede impedir completar correctamente el registro o cumplir las obligaciones vinculadas al alojamiento.',
    ],
  },
  {
    number: 6,
    title: 'Check-in y registro de viajeros mediante Chekin',
    paragraphs: [
      'OKEY SUITES utiliza Chekin, servicio prestado por Chekin Soluciones Digitales, S.L., para facilitar el check-in online y colaborar en la gestión de determinadas obligaciones relacionadas con el registro documental de viajeros.',
      'Una vez realizada la reserva, el huésped podrá recibir un enlace mediante el cual podrá introducir directamente los datos necesarios para completar su registro.',
      'Chekin podrá tratar los datos personales necesarios para prestar estos servicios por cuenta del responsable cuando actúe como encargado del tratamiento, en cuyo caso la relación deberá encontrarse regulada conforme al artículo 28 del Reglamento General de Protección de Datos.',
      'La plataforma podrá utilizarse para generar la documentación correspondiente al registro de viajeros, conservar la información que corresponda y facilitar las comunicaciones exigidas legalmente a las autoridades mediante los sistemas habilitados para ello.',
      'En los alojamientos de OKEY SUITES a los que resulte aplicable la normativa correspondiente, la información exigida legalmente podrá comunicarse mediante SES.HOSPEDAJES, plataforma del Ministerio del Interior.',
      'La utilización de Chekin como herramienta tecnológica no elimina ni sustituye las obligaciones que correspondan legalmente al titular o responsable de la actividad de hospedaje.',
      'Cuando resulte aplicable el Real Decreto 933/2021, los datos incorporados al registro informático deberán conservarse durante tres años desde la finalización del servicio o prestación contratada.',
      'En el caso de huéspedes menores de catorce años, los datos exigidos para el registro serán proporcionados por la persona mayor de edad que los acompañe, conforme a la normativa aplicable.',
    ],
  },
  {
    number: 7,
    title: 'Destinatarios, encargados del tratamiento y proveedores',
    paragraphs: [
      'Turismo Vacacional Granada S.L. no venderá ni comunicará datos personales a terceros de forma indiscriminada.',
      'Podrán tener acceso o recibir determinados datos únicamente las entidades que resulten necesarias para prestar los servicios, gestionar las reservas y estancias, proporcionar la infraestructura tecnológica, cumplir obligaciones legales o cuando exista otra base jurídica válida.',
      'Entre ellas podrán encontrarse:',
    ],
    items: [
      'Chekin Soluciones Digitales, S.L., cuando sea necesario para prestar los servicios de check-in y registro de viajeros.',
      'Las autoridades públicas competentes, incluidos los órganos y Fuerzas y Cuerpos de Seguridad que correspondan y, cuando resulte aplicable, el Ministerio del Interior mediante SES.HOSPEDAJES, cuando la comunicación de datos resulte obligatoria conforme a la normativa sobre actividades de hospedaje.',
      'Google, cuando se utilicen servicios tecnológicos como Gmail para las comunicaciones por correo electrónico.',
      'WhatsApp / Meta, cuando el usuario decida voluntariamente contactar con OKEY SUITES mediante WhatsApp.',
      'Booking y Airbnb, cuando la reserva se haya realizado o se gestione mediante sus respectivas plataformas. Estas entidades podrán actuar como responsables independientes respecto de los tratamientos que realicen para sus propias finalidades, conforme a sus respectivas condiciones y políticas de privacidad.',
      'Cloudflare, como proveedor de infraestructura tecnológica, alojamiento, distribución, funcionamiento o seguridad de la página web, pudiendo tratar determinados datos técnicos como direcciones IP, solicitudes de red y otra información necesaria para prestar y proteger dichos servicios.',
      'Otros proveedores profesionales o tecnológicos cuando su participación resulte necesaria para prestar los servicios de OKEY SUITES.',
    ],
    subsections: [{ title: 'Garantías de los proveedores', paragraphs: ['Cuando un proveedor trate datos personales por cuenta de Turismo Vacacional Granada S.L. como encargado del tratamiento, deberá ofrecer garantías suficientes y la relación deberá regularse mediante el correspondiente contrato u otro acto jurídico conforme al artículo 28 del Reglamento General de Protección de Datos.'] }],
  },
  {
    number: 8,
    title: 'Transferencias internacionales de datos',
    paragraphs: [
      'Algunos de los proveedores tecnológicos utilizados por OKEY SUITES pueden pertenecer a grupos empresariales internacionales o utilizar infraestructura situada fuera del Espacio Económico Europeo.',
      'Cuando el uso de dichos proveedores implique una transferencia internacional de datos personales, esta se realizará únicamente mediante alguno de los mecanismos admitidos por el Reglamento General de Protección de Datos.',
      'Cuando el destinatario se encuentre en un país, territorio, sector u organización respecto de los cuales exista una decisión de adecuación vigente de la Comisión Europea, la transferencia podrá fundamentarse en dicha decisión.',
      'Cuando no exista una decisión de adecuación aplicable, podrán utilizarse garantías adecuadas conforme al artículo 46 del Reglamento General de Protección de Datos, como las cláusulas contractuales tipo adoptadas por la Comisión Europea y, cuando sea necesario, medidas complementarias destinadas a garantizar un nivel de protección adecuado.',
      'En el caso de determinadas entidades establecidas en Estados Unidos, las transferencias podrán fundamentarse en el Marco de Privacidad de Datos UE-EE. UU. cuando la entidad receptora se encuentre válidamente certificada y dicho mecanismo resulte aplicable.',
      'Cuando corresponda, los interesados podrán solicitar información adicional sobre las garantías utilizadas para las transferencias internacionales de sus datos personales escribiendo a:',
      'turismovacacionalgranada@gmail.com',
    ],
  },
  {
    number: 9,
    title: 'Conservación de los datos',
    paragraphs: ['Los datos personales únicamente se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron obtenidos y, posteriormente, durante los plazos que puedan resultar necesarios para cumplir obligaciones legales o atender posibles responsabilidades.', 'En particular:'],
    items: [
      'Los datos utilizados para atender consultas se conservarán durante el tiempo necesario para responder y gestionar la relación con la persona interesada.',
      'Los datos relacionados con reservas y estancias se conservarán mientras resulten necesarios para gestionar el servicio y posteriormente durante los plazos legalmente exigibles o necesarios para atender responsabilidades derivadas de la relación contractual.',
      'La documentación administrativa, contable o fiscal se conservará durante los plazos establecidos en la normativa que resulte aplicable.',
      'Los datos técnicos relacionados con seguridad podrán conservarse durante el periodo razonablemente necesario para detectar, investigar y resolver incidencias o proteger los sistemas.',
      'Los datos sometidos a obligaciones específicas de conservación se mantendrán durante el plazo establecido por la normativa correspondiente.',
    ],
    subsections: [{ title: 'Registro de viajeros y bloqueo', paragraphs: ['Los datos incluidos en el registro informático de viajeros sometido al Real Decreto 933/2021 deberán conservarse durante tres años desde la finalización del servicio o prestación contratada.', 'Cuando proceda la supresión de los datos pero estos deban mantenerse temporalmente para atender posibles responsabilidades, se procederá a su bloqueo conforme a la legislación española, impidiendo su tratamiento para finalidades ordinarias.', 'Una vez finalizados los plazos correspondientes, los datos serán destruidos o eliminados de forma segura cuando proceda.'] }],
  },
  {
    number: 10,
    title: 'Derechos de las personas interesadas',
    paragraphs: ['Las personas cuyos datos sean tratados podrán ejercer, cuando resulte aplicable, los siguientes derechos:'],
    items: [
      'Derecho de acceso, para conocer qué datos personales se están tratando.',
      'Derecho de rectificación, para solicitar la corrección de datos inexactos o incompletos.',
      'Derecho de supresión, para solicitar la eliminación de los datos cuando concurran las circunstancias legalmente establecidas.',
      'Derecho de oposición, para oponerse a determinados tratamientos basados, entre otros supuestos, en el interés legítimo.',
      'Derecho a la limitación del tratamiento, en los casos previstos legalmente.',
      'Derecho a la portabilidad, cuando concurran los requisitos establecidos por el Reglamento General de Protección de Datos.',
    ],
    subsections: [
      { title: 'Cómo ejercer sus derechos', paragraphs: ['También podrán retirar en cualquier momento el consentimiento previamente prestado cuando un tratamiento se base en dicho consentimiento.', 'Para ejercer cualquiera de estos derechos podrán dirigirse a:', 'Turismo Vacacional Granada S.L.\nAcera del Darro 78, 1.º\n18005 Granada\nCorreo electrónico: turismovacacionalgranada@gmail.com', 'La solicitud deberá indicar qué derecho se desea ejercer y permitir identificar suficientemente al solicitante.', 'Cuando existan dudas razonables sobre la identidad de quien realiza la solicitud, podrán solicitarse únicamente los datos adicionales que resulten necesarios para verificarla.', 'El ejercicio de estos derechos será gratuito, salvo los supuestos excepcionales previstos legalmente para solicitudes manifiestamente infundadas o excesivas.', 'Las solicitudes se atenderán dentro de los plazos establecidos por la normativa de protección de datos.'] },
    ],
  },
  {
    number: 11,
    title: 'Derecho de supresión y bloqueo de los datos',
    paragraphs: [
      'El derecho de supresión permite solicitar la eliminación de datos personales cuando concurran las circunstancias establecidas por la normativa.',
      'No obstante, este derecho no implica que todos los datos deban eliminarse inmediatamente en cualquier situación.',
      'Podrán mantenerse determinados datos cuando su conservación sea necesaria para cumplir una obligación legal o para la formulación, ejercicio o defensa de reclamaciones.',
      'Cuando proceda la rectificación o supresión de datos personales y resulte aplicable la obligación de bloqueo prevista en la legislación española, Turismo Vacacional Granada S.L. procederá a identificar y reservar dichos datos, adoptando medidas técnicas y organizativas destinadas a impedir su tratamiento ordinario.',
      'Durante el periodo de bloqueo, los datos únicamente podrán conservarse para su puesta a disposición de jueces y tribunales, el Ministerio Fiscal, las Administraciones Públicas competentes o las autoridades de protección de datos para la exigencia de posibles responsabilidades derivadas del tratamiento.',
      'Finalizado el plazo correspondiente de prescripción de dichas responsabilidades, los datos deberán ser destruidos cuando proceda.',
    ],
  },
  {
    number: 12,
    title: 'Decisiones automatizadas y elaboración de perfiles',
    paragraphs: [
      'OKEY SUITES no utiliza su sitio web para adoptar decisiones basadas exclusivamente en un tratamiento automatizado que produzcan efectos jurídicos sobre los usuarios o les afecten significativamente de forma similar.',
      'Tampoco se realizan perfiles comerciales de los visitantes de la página web con los datos obtenidos mediante los medios de contacto descritos en esta Política de Privacidad.',
      'Si en el futuro se implantaran tratamientos de este tipo, se facilitará previamente la información exigida por la normativa y se aplicarán las garantías correspondientes.',
    ],
  },
  {
    number: 13,
    title: 'Reclamaciones ante la Agencia Española de Protección de Datos',
    paragraphs: [
      'Si una persona considera que Turismo Vacacional Granada S.L. ha tratado sus datos personales de forma contraria a la normativa, podrá dirigirse inicialmente al responsable mediante:',
      'turismovacacionalgranada@gmail.com',
      'Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), autoridad de control competente en España.',
      'Puede obtener información adicional y acceder a los procedimientos habilitados por la Agencia Española de Protección de Datos a través de su página web oficial.',
    ],
  },
  {
    number: 14,
    title: 'Seguridad de los datos',
    paragraphs: [
      'Turismo Vacacional Granada S.L. aplicará medidas técnicas y organizativas apropiadas al riesgo para proteger los datos personales contra su destrucción, pérdida o alteración accidental o ilícita, así como frente a accesos, comunicaciones o tratamientos no autorizados.',
      'Estas medidas serán revisadas y adaptadas cuando resulte necesario teniendo en cuenta la naturaleza de los datos tratados, los riesgos existentes, el estado de la técnica y las características de los tratamientos realizados.',
      'Los proveedores que actúen como encargados del tratamiento deberán ofrecer las garantías exigidas por la normativa y tratar los datos únicamente conforme a las instrucciones documentadas que correspondan, salvo que una obligación legal les exija actuar de otro modo.',
    ],
  },
  {
    number: 15,
    title: 'Enlaces y servicios externos',
    paragraphs: [
      'La web de OKEY SUITES puede contener enlaces hacia sitios externos, como Booking, Airbnb, restaurantes, establecimientos, espectáculos u otros servicios de terceros.',
      'Cuando el usuario acceda voluntariamente a uno de esos sitios externos, el tratamiento de datos que el tercero realice por sus propios medios quedará sujeto a sus propias condiciones, términos y políticas de privacidad.',
      'La inclusión de un enlace hacia un servicio externo no implica que Turismo Vacacional Granada S.L. sea responsable de los tratamientos de datos realizados de forma independiente por dicho tercero.',
    ],
  },
  {
    number: 16,
    title: 'Modificaciones de esta Política de Privacidad',
    paragraphs: [
      'Turismo Vacacional Granada S.L. podrá modificar la presente Política de Privacidad cuando cambien sus servicios, proveedores, tratamientos de datos, herramientas tecnológicas o la normativa aplicable.',
      'Cuando se produzcan modificaciones relevantes, se actualizará el contenido de esta página y la fecha indicada como última actualización.',
      'Se recomienda consultar periódicamente esta Política de Privacidad para conocer la versión vigente.',
    ],
  },
];
