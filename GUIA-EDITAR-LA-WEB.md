# Guía sencilla para editar KEY SUITES

No necesitas modificar los componentes ni el diseño. Casi todos los cambios de
contenido se realizan dentro de la carpeta `data`.

## 0. Cambiar colores, tamaños y aspecto visual

Haz doble clic en `EDITAR-DISENO.bat`. Se abrirá el único archivo que necesitas
para personalizar el aspecto general de la web: `app/personalizar-diseno.css`.

Allí puedes cambiar colores, tipografía, tamaños, espacios, botones, tarjetas,
cabecera, menú móvil y galería modificando únicamente los valores indicados.
Cada opción contiene una explicación y un ejemplo. La guía completa está en
`GUIA-PERSONALIZAR-DISENO.md`.

## 1. Cambiar textos generales

Abre `data/site-content.ts` con Visual Studio Code o el editor de GitHub.

Dentro encontrarás los textos separados por páginas:

- `home`: portada.
- `listings`: catálogo.
- `granada`: página de Granada.
- `villas`: página de villas.
- `about`: Sobre KEY SUITES.
- `contact`: contacto y formulario.
- `footer`: pie de página.
- `seo`: título, descripción y dirección pública de la web.

Cambia solamente lo que está entre comillas. Por ejemplo:

```ts
title: 'Alojamientos destacados',
```

Los títulos con varias líneas usan una lista:

```ts
title: ['Tu estancia', 'empieza aquí.'],
```

Cada elemento de la lista es una línea del título.

## 2. Modificar un alojamiento

Abre `data/properties.ts`, busca su nombre y cambia los valores del mismo bloque.

Los campos más importantes son:

- `name`: nombre visible.
- `slug`: dirección de la página, sin espacios ni tildes.
- `category`: categoría del catálogo.
- `location`: ubicación visible.
- `shortDescription`: frase principal de la ficha.
- `description`: descripción completa.
- `amenities`: comodidades.
- `highlights`: características destacadas.
- `idealFor`: tipos de huéspedes.
- `images`: fotografías.
- `platforms`: valoraciones y enlaces de reserva.
- `reviewNotes`: información pendiente.

Usa `null` cuando todavía no conozcas un número. La web mostrará que está por
confirmar sin inventar información.

## 3. Añadir un alojamiento

1. Abre `data/PLANTILLA_ALOJAMIENTO.ts`.
2. Copia el bloque que comienza por `{` y termina por `},`.
3. Pégalo en `data/properties.ts`, justo antes del cierre final `];`.
4. Cambia todos los textos y números del ejemplo.
5. Asigna un `id` que no esté utilizado.
6. Utiliza un `slug` único, en minúsculas y separado con guiones.

Categorías disponibles:

- `Granada centro`
- `Albaicín`
- `Villas y casas`
- `Costa`

## 4. Añadir fotografías

1. Copia la fotografía dentro de `public/properties`.
2. Usa un nombre sencillo, por ejemplo `apartamento-nuevo-01.jpg`.
3. Añádela al alojamiento:

```ts
images: [
  {
    src: '/properties/apartamento-nuevo-01.jpg',
    alt: 'Salón del apartamento nuevo',
  },
],
```

No escribas `public` dentro de la ruta.

### Qué fotografía se utiliza en cada lugar

- En `data/properties.ts`, la primera fotografía de `images` es la portada del alojamiento.
- Las fotografías siguientes aparecen en su galería.
- En `data/site-content.ts`, `home.hero.slides` controla el carrusel de portada.
- `home.closing.image` controla la fotografía de la última sección de la portada.
- `granada.heroImage`, `villas.heroImage` y `about.heroImage` controlan las imágenes principales de esas páginas.

Formatos recomendados: `.webp`, `.jpg` o `.png`. Usa nombres en minúsculas, sin
tildes ni espacios, por ejemplo `villa-otura-piscina-01.webp`.

Para añadir más imágenes a una lista, copia una línea completa, pégala debajo y
cambia `src` y `alt`. Recuerda mantener la coma final.

## 5. Añadir un enlace de reserva

Dentro de `platforms`, escribe el enlace completo:

```ts
{
  name: 'Booking',
  rating: '9,2 / 10',
  url: 'https://www.booking.com/enlace-real',
},
```

Con `url: null` la ficha indicará que el enlace sigue pendiente.

## 6. Ocultar el modo revisión

Abre `data/config.ts` y cambia:

```ts
export const REVIEW_MODE = true;
```

por:

```ts
export const REVIEW_MODE = false;
```

En el mismo archivo puedes cambiar `CAROUSEL_INTERVAL_MS`. Por ejemplo,
`10_000` equivale a 10 segundos y `4_000` equivale a 4 segundos.

## 7. Comprobar la web antes de publicarla

La primera vez, abre una terminal en la carpeta y ejecuta:

```bash
npm install
```

También puedes hacer doble clic en `PREPARAR-WEB.bat`, que ejecuta esta instalación
por ti. Solo es necesario la primera vez o cuando cambien las dependencias.

Para ver la web mientras editas:

```bash
npm run dev
```

Para comprobar que puede publicarse:

```bash
npm run build
```

Si prefieres no usar la terminal, haz doble clic en `COMPROBAR-WEB.bat`.

## 8. Enviar cambios a GitHub sin borrar archivos

Clona el repositorio una única vez mediante GitHub Desktop. A partir de entonces,
trabaja siempre dentro de esa carpeta clonada.

Puedes enviar los cambios de dos formas:

### Con GitHub Desktop

1. Abre GitHub Desktop.
2. Revisa los archivos modificados.
3. Escribe un resumen, por ejemplo `Actualiza Apartamento Miramar`.
4. Pulsa `Commit to main`.
5. Pulsa `Push origin`.

### Con el archivo automático

Haz doble clic en `SUBIR-CAMBIOS-GITHUB.bat`, escribe una descripción breve y
pulsa Intro. El archivo añade, guarda y envía solamente los cambios realizados.
No borra ni vuelve a subir manualmente el proyecto. Antes de publicar, descarga
la versión más reciente y comprueba automáticamente que la web compila.

Cloudflare detectará el nuevo commit y publicará la actualización.

## Consejos para no romper el archivo

- Conserva las comas entre campos y alojamientos.
- Usa comillas simples alrededor de los textos.
- Si un texto contiene una comilla simple, escribe `\'`.
- No cambies los nombres situados antes de los dos puntos.
- Ejecuta `npm run build` antes de subir cambios grandes.
