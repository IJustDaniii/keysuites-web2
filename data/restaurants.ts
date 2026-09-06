export type RestaurantZone = 'Albaicín' | 'Granada centro';

export type RestaurantImage = { src: string; alt: string };

export type Restaurant = {
  slug: string;
  name: string;
  zone: RestaurantZone;
  category: string;
  address: string;
  specialty: string;
  why: string;
  description: string;
  website: string;
  imageCount: number;
  imageExtensions?: string[];
  schedule?: string;
  tags: string[];
};

const albaicin = (restaurant: Omit<Restaurant, 'zone'>): Restaurant => ({ ...restaurant, zone: 'Albaicín' });
const granada = (restaurant: Omit<Restaurant, 'zone'>): Restaurant => ({ ...restaurant, zone: 'Granada centro' });

export const restaurants: Restaurant[] = [
  albaicin({
    slug: 'casa-torcuato', name: 'Casa Torcuato', category: 'Cocina andaluza y tapas',
    address: 'Calle Pagés, 31, Granada', specialty: 'Solomillo al caramelo de higo, entrecot y lenguado con salsa de pistacho.',
    why: 'Por su cocina granadina, su terraza y el ambiente de una casa del Albaicín abierta desde 1932.',
    description: 'Un clásico del barrio para disfrutar de tapas y platos andaluces en un ambiente tradicional.',
    website: 'https://granadamap.com/es/torcuato', imageCount: 10, tags: ['Tradicional', 'Tapas', 'Terraza'],
  }),
  albaicin({
    slug: 'los-mascarones', name: 'Los Mascarones', category: 'Bar tradicional',
    address: 'Calle Pagés, 20, Granada', specialty: 'Migas con sardinas, plato alpujarreño, habas con jamón, caracoles y callos.',
    why: 'Por su carácter de bar de barrio y una carta de recetas reconocibles, elaboradas desde 1967.',
    description: 'Una dirección castiza para probar cocina casera; la paella se prepara por encargo.',
    website: 'https://losmascarones.com/', imageCount: 10, tags: ['Tradicional', 'Tapas', 'Cocina casera'],
  }),
  albaicin({
    slug: 'bar-aliatar-los-caracoles', name: 'Bar Aliatar Los Caracoles', category: 'Bar andaluz',
    address: 'Plaza Aliatar, 4, Granada', specialty: 'Caracoles en caldo o salsa, choto, pimientos asados, chorizo y pescado.',
    why: 'Por ser una parada muy local y familiar en una de las plazas con más vida del Albaicín.',
    description: 'Su especialidad da nombre al local: caracoles preparados al estilo tradicional granadino.',
    website: 'https://turismo.granada.org/es/empresas/restaurantes/bar-aliatar-caracoles', imageCount: 10, tags: ['Caracoles', 'Tradicional', 'Familiar'],
  }),
  albaicin({
    slug: 'casa-gabriel', name: 'Casa Gabriel', category: 'Brasas y producto',
    address: 'Calle Pagés, 29 (entrada por Placeta Carniceros), Granada', specialty: 'Croquetas de rabo de toro, lomo alto, alcachofas y parrillada.',
    why: 'Por una propuesta muy cuidada de brasas, ibéricos, quesos y vinos en pleno barrio.',
    description: 'Restaurante especializado en carne de vacuno, cerdo ibérico y verduras trabajadas a la brasa.',
    website: 'https://www.casagabrielgranada.com/', imageCount: 10, tags: ['Brasas', 'Carnes', 'Reserva'],
  }),
  albaicin({
    slug: 'aixa', name: 'Aixa', category: 'Tapas y cocina casera',
    address: 'Plaza Larga, 5, Granada', specialty: 'Tapas, calamares, pizzas, calzone y postres.',
    why: 'Por su terraza en Plaza Larga y una carta informal que funciona bien a casi cualquier hora del día.',
    description: 'Cocina andaluza, tapas y una sección de pizzería llamada Al-Horno.',
    website: 'https://aixa.bar/', imageCount: 10, schedule: 'De 7:00 a 24:00. Cerrado lunes y martes.', tags: ['Tapas', 'Terraza', 'Pizza'],
  }),
  albaicin({
    slug: 'cafe-4-gatos', name: 'Café 4 Gatos', category: 'Desayunos y café',
    address: 'Placeta Cruz Verde, 6, Granada', specialty: 'Tostadas, café, tartas y propuestas de brunch.',
    why: 'Por su pequeña terraza, las vistas hacia la Alhambra y sus opciones vegetarianas y veganas.',
    description: 'Un café íntimo para desayunar sin prisa. Algunas fuentes señalan que puede aceptar solo efectivo.',
    website: 'https://www.cafe4gatos.com/', imageCount: 10, tags: ['Desayuno', 'Vistas', 'Vegetariano'],
  }),
  albaicin({
    slug: 'estrellas-de-san-nicolas', name: 'Estrellas de San Nicolás', category: 'Cocina de temporada',
    address: 'Callejón de Atarazana Vieja, 1, Granada', specialty: 'Producto fresco, cocina de temporada y vinos españoles.',
    why: 'Por cenar junto al Mirador de San Nicolás con vistas a la Alhambra y Sierra Nevada.',
    description: 'Restaurante ubicado en la antigua casa vinculada a la familia Morente, con terraza panorámica.',
    website: 'https://www.estrellasdesannicolas.com/', imageCount: 10, tags: ['Vistas', 'Terraza', 'Cena especial'],
  }),
  albaicin({
    slug: 'el-higo', name: 'El Higo', category: 'Tapas y ambiente cultural',
    address: 'Calle Horno del Hoyo, 17, Granada', specialty: 'Tapas españolas y alternativas veganas.',
    why: 'Por su patio escondido y un ambiente relajado, creativo y alejado de los recorridos más obvios.',
    description: 'Un rincón informal del Albaicín con patio, tapas y programación de aire cultural.',
    website: 'https://www.facebook.com/ElHigoGranada/', imageCount: 10, tags: ['Patio', 'Tapas', 'Vegano'],
  }),
  albaicin({
    slug: 'carmen-aben-humeya', name: 'Carmen de Aben Humeya', category: 'Cocina contemporánea',
    address: 'Cuesta de las Tomasas, 12, Granada', specialty: 'Cocina contemporánea en un carmen histórico.',
    why: 'Por sus vistas directas a la Alhambra y una atmósfera especialmente indicada para una ocasión especial.',
    description: 'Gastronomía y paisaje se encuentran en uno de los cármenes históricos del Albaicín.',
    website: 'https://abenhumeya.com/', imageCount: 10, tags: ['Vistas', 'Romántico', 'Reserva'],
  }),
  albaicin({
    slug: 'carmen-mirador-de-aixa', name: 'Carmen Mirador de Aixa', category: 'Tradición y modernidad',
    address: 'Carril de San Agustín, 2, Granada', specialty: 'Cocina granadina actualizada y celebraciones.',
    why: 'Por su comedor panorámico, ideal para una cena pausada o una celebración con vistas.',
    description: 'Un carmen-restaurante que combina recetas de tradición local con una presentación contemporánea.',
    website: 'https://www.carmenmiradordeaixa.com/es', imageCount: 10, tags: ['Vistas', 'Celebraciones', 'Reserva'],
  }),
  albaicin({
    slug: 'mirador-de-morayma', name: 'Mirador de Morayma', category: 'Cocina andaluza',
    address: 'Calle Pianista García Carrillo, 2, Granada', specialty: 'Recetas andaluzas y vinos de Granada.',
    why: 'Por comer en los jardines y terrazas de un carmen con una de las perspectivas más bonitas de la Alhambra.',
    description: 'Cocina regional servida en distintos rincones de un carmen histórico del Albaicín.',
    website: 'https://miradordemorayma.com/', imageCount: 10, schedule: 'Apertura habitual de martes a sábado; conviene consultar antes de ir.', tags: ['Vistas', 'Andaluza', 'Terraza'],
  }),
  albaicin({
    slug: 'el-huerto-de-juan-ranas', name: 'El Huerto de Juan Ranas', category: 'Cocina con vistas',
    address: 'Calle Atarazana Vieja, 6, Granada', specialty: 'Cocina mediterránea y producto granadino.',
    why: 'Por su terraza junto al Mirador de San Nicolás, una referencia para contemplar la Alhambra.',
    description: 'Una de las terrazas más conocidas del Albaicín para almorzar o cenar frente al monumento.',
    website: 'https://www.elhuertodejuanranas.com/', imageCount: 10, tags: ['Vistas', 'Terraza', 'Romántico'],
  }),
  albaicin({
    slug: 'carmen-el-agua', name: 'Carmen El Agua', category: 'Cocina de fusión y mercado',
    address: 'Placeta del Aljibe de Trillo, 7, Granada', specialty: 'Cocina de mercado con influencias contemporáneas.',
    why: 'Por su terraza íntima y las vistas a la Alhambra desde un carmen del Albaicín.',
    description: 'Una opción de ambiente sereno para una cena especial, con platos de fusión y producto de temporada.',
    website: 'https://www.restauranteelagua.es/es', imageCount: 10, tags: ['Vistas', 'Fusión', 'Reserva'],
  }),
  albaicin({
    slug: 'el-trillo', name: 'Restaurante El Trillo', category: 'Cocina mediterránea',
    address: 'Callejón del Aljibe de Trillo, 3, Granada', specialty: 'Platos mediterráneos en un carmen tradicional.',
    why: 'Por su jardín, su terraza y el aljibe, que convierten la comida en una experiencia muy albaicinera.',
    description: 'Un restaurante con distintos espacios interiores y exteriores en el corazón del barrio.',
    website: 'https://www.restaurante-eltrillo.com/', imageCount: 10, tags: ['Jardín', 'Mediterránea', 'Reserva'],
  }),
  albaicin({
    slug: 'arrayanes', name: 'Arrayanes', category: 'Cocina marroquí halal',
    address: 'Cuesta de Marañas, 4, Granada', specialty: 'Tajines, cuscús, pastelas y té moruno.',
    why: 'Por su cocina halal y por acercar los sabores del Magreb a una visita por el Albaicín.',
    description: 'Una alternativa aromática y acogedora para quienes buscan cocina marroquí tradicional.',
    website: 'https://restaurantearrayanesgranada.com/', imageCount: 10, tags: ['Halal', 'Marroquí', 'Vegetariano'],
  }),
  albaicin({
    slug: 'casa-pasteles', name: 'Casa Pasteles', category: 'Cafetería y pastelería',
    address: 'Plaza Larga, 1, Granada', specialty: 'Dulces, cafés, piononos y leche merengada.',
    why: 'Por ser una institución de Plaza Larga desde 1928 y una parada estupenda para desayunar o merendar.',
    description: 'Pastelería histórica del Albaicín para descubrir la repostería granadina.',
    website: 'https://www.casapasteles.es/', imageCount: 3, tags: ['Desayuno', 'Dulces', 'Histórico'],
  }),

  granada({
    slug: 'sancho-casual-burger', name: 'Sancho Casual Burger', category: 'Hamburguesas gourmet',
    address: 'Plaza de Cauchiles, 4, Granada', specialty: 'Hamburguesas a la parrilla de carbón con carne de vaca nacional.',
    why: 'Por sus hamburguesas al carbón, opciones vegetarianas y veganas y menú infantil.',
    description: 'Una propuesta informal nacida en 2008 y muy cómoda para comer en pleno centro.',
    website: 'https://sanchocasualburger.com/', imageCount: 0, tags: ['Hamburguesas', 'Vegetariano', 'Familias'],
  }),
  granada({
    slug: 'arroceria-maese-pio', name: 'Arrocería Maese Pío', category: 'Arroces y paellas',
    address: 'Placeta del Pulgar, 1, Granada', specialty: 'Arroz a banda, negro, ibérico, con pulpo o bogavante y calderetas.',
    why: 'Por su tradición levantina y por ser una elección práctica para compartir en grupo.',
    description: 'Arroces secos y caldosos preparados en el centro de Granada.',
    website: 'https://www.maesepio.com/', imageCount: 10, tags: ['Arroces', 'Grupos', 'Reserva'],
  }),
  granada({
    slug: 'lumbre', name: 'Lumbre', category: 'Cocina andaluza contemporánea',
    address: 'Calle Escudo del Carmen, 17, Granada', specialty: 'Carnes maduradas, pescado, marisco y vinos.',
    why: 'Por una interpretación actual del producto andaluz y una carta atractiva para comidas o cenas.',
    description: 'Producto, brasas y cocina contemporánea en una ubicación céntrica.',
    website: 'https://lumbrebymoma.es/', imageCount: 10, schedule: 'De 12:00 a 18:00 y de 20:00 a 00:00; consulta posibles cambios.', tags: ['Contemporánea', 'Carnes', 'Pescado'],
  }),
  granada({
    slug: 'bodegas-castaneda', name: 'Bodegas Castañeda', category: 'Taberna clásica',
    address: 'Calle Almireceros, 1–3, Granada', specialty: 'Vinos, vermut, jamón, embutidos, quesos, croquetas y tablas calientes.',
    why: 'Por su ambiente de taberna granadina y una carta perfecta para compartir en el centro histórico.',
    description: 'Una bodega clásica que no debe confundirse con Antigua Bodega Castañeda.',
    website: 'https://bodegascastaneda.eatbu.com/?lang=es', imageCount: 2, schedule: 'Horario oficial publicado: de 11:30 a 01:00; consulta posibles cambios.', tags: ['Taberna', 'Tapas', 'Vinos'],
  }),
  granada({
    slug: 'irreverente', name: 'Irreverente', category: 'Cocina urbana',
    address: 'Calle Caldereros, s/n, Granada', specialty: 'Carta de comidas, meriendas y propuestas actuales.',
    why: 'Por su horario amplio y un estilo desenfadado que encaja bien en una pausa por el centro.',
    description: 'Un local contemporáneo con servicio de comidas y meriendas y opción de reserva.',
    website: 'https://irreverentegranada.com/', imageCount: 10, tags: ['Moderno', 'Merienda', 'Reserva'],
  }),
  granada({
    slug: 'entrebrasas', name: 'EntreBrasas', category: 'Parrilla y tapas',
    address: 'Calle Navas, 27, Granada', specialty: 'Carnes a la brasa, tapas y raciones.',
    why: 'Por el sabor de la parrilla y por combinar la experiencia de tapas de Calle Navas con platos para compartir.',
    description: 'Bar-parrilla muy céntrico; conviene reservar, especialmente en horas punta.',
    website: 'https://www.instagram.com/entrebrasas/', imageCount: 10, schedule: 'Apertura habitual de martes a sábado en servicios de mediodía y noche.', tags: ['Brasas', 'Tapas', 'Reserva'],
  }),
  granada({
    slug: 'los-diamantes', name: 'Los Diamantes', category: 'Pescado frito',
    address: 'Plaza Nueva, Plaza Bib-Rambla y Calle Navas, Granada', specialty: 'Pescado y marisco frito al momento.',
    why: 'Por ser una referencia granadina del pescaíto frito y una experiencia de barra con mucho ambiente.',
    description: 'Varias sedes en el centro; Plaza Nueva y Bib-Rambla suelen funcionar sin reserva.',
    website: 'https://losdiamantes.es/ubicaciones/', imageCount: 0, tags: ['Pescado', 'Tapas', 'Sin reserva'],
  }),
  granada({
    slug: 'rosario-varela', name: 'Rosario Varela', category: 'Bar gastronómico',
    address: 'Calle Varela, 10, Granada', specialty: 'Tapas diferentes y carta de inspiración internacional.',
    why: 'Por su decoración moderna, su terraza y un ambiente que puede alargarse hasta la noche.',
    description: 'Una alternativa menos tradicional para tapear o cenar en el Realejo.',
    website: 'https://rosariovarela.es/', imageCount: 10, tags: ['Moderno', 'Terraza', 'Noche'],
  }),
  granada({
    slug: 'bar-patio-braserito', name: 'Patio Braserito', category: 'Cocina casera',
    address: 'Calle Virgen del Rosario, 7, Granada', specialty: 'Huevos rotos, alcachofas, lomo al ajillo, caracoles y Olla de San Antón.',
    why: 'Por su recetario tradicional y una bodega con más de 250 referencias destacada por Guía Repsol.',
    description: 'Cocina granadina de temporada en un ambiente clásico y acogedor.',
    website: 'https://www.tripadvisor.es/Restaurant_Review-g187441-d5530208-Reviews-Bar_Patio_Braserito-Granada_Province_of_Granada_Andalucia.html', imageCount: 10, tags: ['Tradicional', 'Vinos', 'Temporada'],
  }),
  granada({
    slug: 'bar-avila', name: 'Bar Ávila', category: 'Tapas granadinas',
    address: 'Calle Verónica de la Virgen, 16, Granada', specialty: 'Jamón asado y tapas a elegir.',
    why: 'Por su jamón asado, sus raciones generosas y el ambiente de un bar muy querido por los granadinos.',
    description: 'Uno de los nombres clásicos del tapeo local, con otro establecimiento en San Isidro.',
    website: 'https://avilayavilatapas.eatbu.com/?lang=es', imageCount: 10, tags: ['Tapas', 'Jamón asado', 'Económico'],
  }),
  granada({
    slug: 'bar-provincias', name: 'Bar Provincias', category: 'Tapas y pescado',
    address: 'Calle Provincias, 4, Granada', specialty: 'Pescado frito, croquetas, ensaladilla de gambas, rabo de toro y atún.',
    why: 'Por su carácter familiar desde 1945, sus tapas de producto y una cerveza especialmente bien tirada.',
    description: 'Bar histórico con un segundo local en Plaza Bib-Rambla.',
    website: 'https://www.barprovincias.es/', imageCount: 10, tags: ['Histórico', 'Tapas', 'Pescado'],
  }),
  granada({
    slug: 'la-sitarilla', name: 'La Sitarilla', category: 'Tapas caseras',
    address: 'Calle San Miguel Alta, 7, Granada', specialty: 'Carne en salsa, albóndigas, ensaladilla y tapas con cada bebida.',
    why: 'Por comer bien a precio contenido y descubrir una barra de barrio con raciones abundantes.',
    description: 'Un pequeño bar popular; puede formarse cola en las horas de más demanda.',
    website: 'https://www.tripadvisor.es/Restaurant_Review-g187441-d7277584-Reviews-or15-Sitarilla-Granada_Province_of_Granada_Andalucia.html', imageCount: 10, tags: ['Tapas', 'Económico', 'Casero'],
  }),
  granada({
    slug: 'bar-aliatar', name: 'Bar Aliatar', category: 'Bocadillería histórica',
    address: 'Calle San Sebastián, 4, Granada', specialty: 'Bocadillos de jamón serrano, Montijano, Perrito, Nivero, Africano y San Francisco.',
    why: 'Por probar una institución granadina fundada en 1947 y resolver una comida rápida con mucho carácter.',
    description: 'Bocadillos clásicos y combinaciones propias en pleno centro de Granada.',
    website: 'https://www.bar-aliatar.es/', imageCount: 0, tags: ['Bocadillos', 'Histórico', 'Informal'],
  }),
  granada({
    slug: 'el-rincon-de-rodri', name: 'Rincón de Rodri', category: 'Pescados y mariscos',
    address: 'Calle Músico Vicente Zarzo, 3, Granada', specialty: 'Pescados, mariscos y cocina mediterránea.',
    why: 'Por la calidad del producto del mar y una propuesta muy apreciada para comer o cenar.',
    description: 'Marisquería y restaurante mediterráneo que suele abrir de martes a sábado.',
    website: 'https://turismo.granada.org/es/empresas/restaurantes/rincon-rodri', imageCount: 10, tags: ['Marisco', 'Pescado', 'Reserva'],
  }),
  granada({
    slug: 'poetas-andaluces-ii', name: 'Poetas Andaluces II', category: 'Asador tradicional',
    address: 'Calle Pedro Antonio de Alarcón, 43, Granada', specialty: 'Cochinillo, cordero al horno, chuletón, ibéricos y repostería casera.',
    why: 'Por sus carnes a la brasa y al horno, una trayectoria desde 1976 y buen espacio para grupos.',
    description: 'Asador clásico preparado también para celebraciones y eventos.',
    website: 'https://www.poetasandaluces.es/', imageCount: 10, tags: ['Asador', 'Grupos', 'Celebraciones'],
  }),
  granada({
    slug: 'rincon-del-poeta', name: 'Rincón del Poeta', category: 'Bar-restaurante español',
    address: 'Calle Obispo Hurtado, 25, Granada', specialty: 'Tapas, comidas y cenas de cocina española.',
    why: 'Por su terraza y la flexibilidad para comer, cenar, reunirse en grupo o celebrar un evento privado.',
    description: 'Restaurante de barrio con terraza; cierra los miércoles.',
    website: 'https://rincondelpoeta.eatbu.com/?lang=es', imageCount: 10, schedule: 'Cerrado los miércoles; consulta el horario del resto de la semana.', tags: ['Terraza', 'Grupos', 'Tapas'],
  }),
  granada({
    slug: 'la-macetilla', name: 'La Macetilla', category: 'Bar tradicional',
    address: 'Calle Infanta Beatriz, 3, Granada', specialty: 'Jamón asado y cocina tradicional.',
    why: 'Por su ambiente pequeño y acogedor y una de esas barras de cocina sencilla que apetece repetir.',
    description: 'Un bar cercano y sin artificios, conocido especialmente por el jamón asado.',
    website: 'https://www.google.com/maps/search/?api=1&query=La+Macetilla+Granada', imageCount: 10, tags: ['Jamón asado', 'Tradicional', 'Acogedor'],
  }),
  granada({
    slug: 'el-delirio-mexicano', name: 'El Delirio Mexicano', category: 'Cocina mexicana',
    address: 'Calle Pedro Antonio de Alarcón, 21, Granada', specialty: 'Tacos, cochinita pibil, nachos, quesadillas, burritos y fajitas.',
    why: 'Por una carta mexicana amplia, margaritas y postres como la tarta tres leches.',
    description: 'Sabores mexicanos y ambiente informal con cervezas y cócteles del país.',
    website: 'https://restaurantemexicanogranada.com/', imageCount: 10, tags: ['Mexicano', 'Cócteles', 'Informal'],
  }),
  granada({
    slug: 'los-manueles', name: 'Los Manueles', category: 'Cocina tradicional andaluza',
    address: 'Plaza Bib-Rambla, 16, Granada', specialty: 'Croqueta Manueles, gazpacho, ajo blanco, habas con jamón y rabo de toro.',
    why: 'Por más de un siglo de historia y una carta granadina reconocible en una plaza imprescindible.',
    description: 'Restaurante histórico con cocina abierta habitualmente de 12:00 a 00:00.',
    website: 'https://losmanueles.es/', imageCount: 6, schedule: 'Cocina habitualmente de 12:00 a 00:00; consulta posibles cambios.', tags: ['Histórico', 'Andaluza', 'Croquetas'],
  }),
  granada({
    slug: 'mercado-de-san-agustin', name: 'Mercado de San Agustín', category: 'Mercado gastronómico',
    address: 'Plaza de San Agustín, 2, Granada', specialty: 'Puestos, bares, producto fresco y propuestas como La Picatería o Mercato Italiano.',
    why: 'Por poder elegir entre muchos sabores en un mismo espacio y probar productos preparados en el propio mercado.',
    description: 'No es un único restaurante: reúne puestos y barras con cientos de productos listos para consumir.',
    website: 'https://turismo.granada.org/en/mercado-san-agustin-gourmet', imageCount: 10, tags: ['Mercado', 'Variedad', 'Grupos'],
  }),
  granada({
    slug: 'casa-rafa', name: 'Casa Rafa', category: 'Pescado, marisco y arroces',
    address: 'Calle Alhamar, 31, Granada', specialty: 'Pescado frito y a la plancha, marisco y arroces.',
    why: 'Por el producto del mar y su terraza climatizada, cómoda en distintas épocas del año.',
    description: 'Una dirección especializada en cocina marinera en la zona de Alhamar.',
    website: 'https://www.tripadvisor.es/Restaurant_Review-g187441-d23699518-Reviews-Casa_Rafa_Granada-Granada_Province_of_Granada_Andalucia.html', imageCount: 10, tags: ['Pescado', 'Arroces', 'Terraza'],
  }),
];

export const getRestaurant = (slug: string) => restaurants.find((restaurant) => restaurant.slug === slug);

export const getRestaurantImages = (restaurant: Restaurant): RestaurantImage[] => {
  const folder = restaurant.zone === 'Albaicín' ? 'albaicin' : 'granada';
  return Array.from({ length: restaurant.imageCount }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const extension = restaurant.imageExtensions?.[index] ?? 'webp';
    return {
      src: `/restaurantes/${folder}/${restaurant.slug}/${restaurant.slug}-${number}.${extension}`,
      alt: `${restaurant.name}: ${index === 0 ? restaurant.specialty : `imagen ${index + 1}`}`,
    };
  });
};

export const getRestaurantCardImage = (restaurant: Restaurant): RestaurantImage | undefined => {
  if (restaurant.imageCount === 0) return undefined;
  const folder = restaurant.zone === 'Albaicín' ? 'albaicin' : 'granada';
  return {
    src: `/restaurantes/${folder}/${restaurant.slug}/${restaurant.slug}-card.webp`,
    alt: `${restaurant.name}: ${restaurant.specialty}`,
  };
};

export const getRestaurantMapUrl = (restaurant: Restaurant) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name}, ${restaurant.address}`)}`;

export const restaurantZones: RestaurantZone[] = ['Albaicín', 'Granada centro'];
