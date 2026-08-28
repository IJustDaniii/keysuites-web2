# Guía sencilla para editar OKEY SUITES

No necesitas modificar los componentes de React. El contenido editable está
centralizado en la carpeta `data` y cada archivo contiene comentarios de ayuda.

## 1. Cambiar textos generales

Abre `data/site-content.ts`. Sus secciones principales son:

- `seo`: dominio público, título y descripción para buscadores.
- `header`: aviso superior y botón de cabecera.
- `home`: portada, carrusel, destacados y secciones de inicio.
- `listings`: título y texto del catálogo.
- `about`: página Sobre nosotros.
- `contact`: textos, teléfono, WhatsApp y correo.
- `footer`: pie de página.
- `futurePages`: textos mínimos de Espectáculos y Restaurantes.

Cambia solo lo situado entre comillas y conserva las comas. Los títulos que usan
una lista como `['Primera línea', 'Segunda línea']` muestran una línea por elemento.

Para cambiar el dominio, sustituye `siteUrl` por la dirección final completa,
incluyendo `https://`.

## 2. Modificar un alojamiento

Abre `data/properties.ts` y busca el nombre. Cada bloque individual contiene:

- `name`, `slug`, `category`, `type`, `location` y `address`.
- `inventoryCount`: número de habitaciones físicas cuando varias comparten tipología.
- `shortDescription` y `description`.
- `guests`, `bedrooms`, `beds`, `bathrooms` y `areaM2`.
- `distribution`, `amenities`, `kitchen`, climatización, Wi-Fi y aparcamiento.
- piscina, exteriores, vistas, accesibilidad, normas y horarios.
- `images`, `platforms`, reseñas, registros y avisos pendientes.

Usa `null` cuando no conozcas un dato. No uses `0` para representar información
desconocida. Con el modo de revisión activo se señalará el dato pendiente; en la
versión pública se ocultará sin dejar huecos grandes.

Las categorías válidas son exactamente:

- `Costa`
- `Albaicín`
- `Casas rurales`
- `Granada centro`

## 3. Edificios o colecciones con varias unidades

Al final de `data/properties.ts` existe `propertyGroups`. Cada grupo tiene su
propia tarjeta y página. `unitSlugs` indica qué unidades aparecen dentro:

```ts
unitSlugs: ['unidad-uno', 'unidad-dos'],
```

El texto debe coincidir exactamente con el `slug` de cada unidad. Para añadir una
unidad a Suites Jardines, Torre de la Vela, Mesones o Carmen San Luis:

1. Crea el alojamiento individual en `properties`.
2. Escribe en él el `groupSlug` de su edificio.
3. Añade su `slug` a `unitSlugs` del grupo.

`catalogSlugs` controla las nueve tarjetas principales y su orden. Añade allí
solo alojamientos independientes o grupos; no añadas también todas las unidades
si no quieres duplicarlas en el catálogo.

## 4. Añadir un alojamiento nuevo

1. Abre `data/PLANTILLA_ALOJAMIENTO.ts`.
2. Copia el bloque de ejemplo dentro de la lista `properties`.
3. Cambia textos y números, asigna un `id` libre y un `slug` único.
4. Si es independiente, añade su `slug` a `catalogSlugs`.
5. Si pertenece a un grupo, sigue la sección anterior.

El `slug` debe estar en minúsculas, sin tildes ni espacios: por ejemplo
`apartamento-plaza-nueva`.

## 5. Añadir y utilizar fotografías

1. Copia la imagen dentro de `public/properties`.
2. Usa un nombre en minúsculas y sin espacios, como `miramar-terraza-02.webp`.
3. Añádela al alojamiento o grupo:

```ts
images: [
  { src: '/properties/miramar-terraza-02.webp', alt: 'Terraza de Miramar frente al mar' },
],
```

No escribas `public` en `src`. La primera imagen es la portada de la tarjeta; las
demás forman la galería. Un grupo puede tener sus propias imágenes aunque sus
unidades tengan galerías diferentes.

Otros usos:

- `siteContent.home.hero.slides`: carrusel de portada.
- `siteContent.home.closing.image`: imagen final de inicio.
- `siteContent.about.heroImage`: imagen principal de Sobre nosotros.

Escribe siempre un `alt` breve que describa lo visible. Se recomiendan WebP o JPG
optimizados, evitando archivos enormes.

## 6. Enlaces de Booking o Airbnb

Cada elemento de `platforms` admite valoración, número de reseñas y URL:

```ts
{
  name: 'Booking',
  rating: '9,2 / 10',
  reviews: '30 reseñas',
  url: 'https://www.booking.com/enlace-real',
},
```

Deja `url: null` si no existe un enlace confirmado. No inventes enlaces ni datos.

## 7. Contacto y modo de revisión

Los datos de contacto están en `siteContent.contact.details`. Sustituye `null` por
los datos reales entre comillas.

En `data/config.ts`:

```ts
export const REVIEW_MODE = true;
```

`true` muestra avisos de datos pendientes. Cambia a `false` para la web pública:
desaparecen avisos, campos desconocidos y textos de validación.

`CAROUSEL_INTERVAL_MS` controla el carrusel. `4_000` son cuatro segundos y
`10_000` son diez segundos.

## 8. Comprobar y publicar sin borrar archivos

Guarda con `Ctrl + S` y ejecuta `COMPROBAR-WEB.bat`. Si termina correctamente,
ejecuta `SUBIR-CAMBIOS-GITHUB.bat`, escribe una descripción y pulsa Intro.

El proceso descarga primero la versión más reciente, ejecuta las comprobaciones,
crea un commit y hace `push`. Cloudflare publicará automáticamente el nuevo commit
de `main`.

También puedes usar GitHub Desktop: revisa los cambios, escribe un resumen, pulsa
`Commit to main` y después `Push origin`.

## Consejos para no romper el archivo

- Conserva las comas, llaves y corchetes.
- Cambia el contenido, no los nombres situados antes de `:`.
- Si un texto contiene una comilla simple, escribe `\'`.
- No repitas `id` ni `slug`.
- No borres el repositorio para actualizarlo.
- Si algo falla, revisa el mensaje de `COMPROBAR-WEB.bat` antes de publicar.
