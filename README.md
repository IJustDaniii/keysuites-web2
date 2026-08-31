# OKEY SUITES

Web de presentación y catálogo de alojamientos de OKEY SUITES. El contenido, las fotos, las rutas y los enlaces de reserva se mantienen en el propio repositorio: no hay CMS ni base de datos.

## Requisitos y comandos

Hace falta Node.js 22.13 o superior. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
npm run deploy:cloudflare
```

- `npm run dev` abre la web de desarrollo en `http://localhost:3000`.
- `npm run lint` revisa TypeScript, React y las reglas de Next.
- `npm run build` genera la versión de Cloudflare en `dist/`.
- `npm run start` sirve esa compilación localmente después de `npm run build`.
- `npm run deploy:cloudflare` publica la compilación ya creada. Requiere haber iniciado sesión en Cloudflare con Wrangler o disponer de credenciales de integración continua.

En Windows también están disponibles `PREPARAR-WEB.bat`, `COMPROBAR-WEB.bat`, `EDITAR-DISENO.bat` y `SUBIR-CAMBIOS-GITHUB.bat`. El último valida, crea un commit y ejecuta `git push`; úsalo solo si quieres que automatice esos pasos.

## Tecnologías

- **React** dibuja la interfaz.
- **Next.js** aporta App Router, rutas por archivos, metadatos, fuentes optimizadas, `Image` y utilidades como `redirect` y `notFound`.
- **Vinext** ejecuta la aplicación compatible con Next sobre Vite y traduce el App Router a entornos RSC, SSR y cliente aptos para Workers.
- **Vite** es el servidor de desarrollo y el empaquetador usado por Vinext.
- **Cloudflare Workers** ejecuta la parte servidor publicada y sirve los recursos estáticos.
- **Wrangler** es la CLI de Cloudflare que publica el Worker generado.
- **TypeScript** valida los datos y el código antes de publicar.
- **Tailwind CSS 4** está activo como procesador CSS mediante `@import 'tailwindcss'`; hoy el diseño usa principalmente CSS propio y variables, no utilidades Tailwind en JSX.

Next.js y Vite/Vinext aparecen juntos porque no se usa el compilador o servidor estándar de Next: Vinext conserva la API y estructura de Next que usa la web, pero delega desarrollo y build en Vite para producir el Worker de Cloudflare.

## Estructura

```text
app/                         Rutas, layout y estilos globales
  alojamientos/[slug]/        Ficha de alojamiento o colección
components/                  Piezas visuales reutilizables
data/                        Contenido editable, ajustes y plantilla
public/                      Imágenes y favicons publicados tal cual
scripts/                     Automatización de subida a GitHub
README.md                    Guía de uso de este repositorio
ARQUITECTURA.md              Detalle técnico del funcionamiento
CAMBIOS-LIMPIEZA.md          Registro de la auditoría y la limpieza
package.json                 Dependencias y comandos npm
package-lock.json            Versiones exactas instaladas por npm
tsconfig.json                Reglas y rutas de TypeScript
next.config.ts               Configuración reconocida por Next/Vinext
vite.config.ts               Vinext, Vite y el plugin de Cloudflare
wrangler.jsonc               Identidad y salida del Worker desplegable
eslint.config.mjs            Reglas de lint de Next y TypeScript
.gitignore                   Archivos locales o generados que no se suben
*.bat                        Atajos opcionales para Windows
```

`app/` contiene las URLs públicas: `/`, `/alojamientos`, `/alojamientos/[slug]`, `/contacto`, `/sobre-key-suites`, `/espectaculos`, `/restaurantes`, `/granada` y `/villas`. Las dos últimas conservan enlaces antiguos y redirigen al catálogo filtrado.

`components/` no contiene páginas ni datos de negocio; solo presentación e interacción. `data/` es el punto de edición normal. `public/` se publica desde la raíz web: por ejemplo, `public/properties/miramar-01.png` se referencia como `/properties/miramar-01.png`.

## Archivos importantes

| Archivo | Para qué sirve |
| --- | --- |
| `package.json` | Define los comandos y dependencias directas del proyecto. |
| `package-lock.json` | Fija las versiones instaladas; se actualiza automáticamente con npm. |
| `tsconfig.json` | Activa TypeScript estricto, el alias `@/` y los tipos de Cloudflare. |
| `next.config.ts` | Mantiene el punto de configuración Next que Vinext reconoce, aunque hoy no necesita opciones adicionales. |
| `vite.config.ts` | Activa Vinext, Tailwind/PostCSS y el plugin oficial de Cloudflare; también define las vinculaciones locales del Worker. |
| `wrangler.jsonc` | Define el nombre del Worker y que `dist/server/index.js` y `dist/client` son el resultado desplegable. |
| `eslint.config.mjs` | Carga las reglas Core Web Vitals y TypeScript de Next e ignora resultados generados. |
| `app/globals.css` | Sistema visual y reglas responsive compartidas. |
| `app/personalizar-diseno.css` | Variables sencillas para colores, tipografías, tamaños, espaciados, menú y animaciones. |
| `data/site-content.ts` | Textos generales, SEO, navegación, portada, contacto y páginas próximas. |
| `data/properties.ts` | Catálogo, colecciones, fotos, datos de ficha y redirecciones de slugs antiguos. |
| `data/config.ts` | Interruptor de avisos de revisión y tiempo del carrusel. |
| `data/PLANTILLA_ALOJAMIENTO.ts` | Ejemplo tipado para añadir un alojamiento sin publicarlo por error. |

## Componentes

| Componente | Uso y responsabilidad |
| --- | --- |
| `Header` | Cabecera compartida: aviso de revisión, marca, navegación de escritorio y CTA. |
| `MobileMenu` | Menú lateral accesible; bloquea el scroll, gestiona foco, Escape, cierre y cambio a escritorio. Es cliente. |
| `Footer` | Pie común con navegación y texto institucional editable. |
| `Link` | Enlace HTML deliberadamente simple y compatible con Vinext/Cloudflare. |
| `HeroCarousel` | Carrusel interactivo de la portada, con respeto a reducción de movimiento. Es cliente. |
| `TextLines` | Inserta saltos de línea declarados en el contenido sin duplicar títulos. |
| `PropertyCatalog` | Filtro interactivo y rejilla del catálogo. Es cliente. |
| `PropertyCard` | Tarjeta de un alojamiento individual. |
| `PropertyGroupCard` | Tarjeta de una colección con varias unidades. |
| `GalleryModal` | Abre la galería completa y permite cerrarla con botón, fondo o Escape. Es cliente. |
| `ReviewNotice` | Muestra un aviso solo si `REVIEW_MODE` está activo. |
| `PendingPhoto` | Marcador visual para alojamientos que aún no tienen foto confirmada. |
| `ComingSoonPage` | Plantilla mínima compartida por Espectáculos y Restaurantes. |

## Editar contenido

### Textos, navegación y contacto

Edita `data/site-content.ts`. Por ejemplo, para cambiar el botón principal de la portada:

```ts
primaryButton: 'Explorar alojamientos',
```

No cambies los nombres a la izquierda de `:` ni elimines comas o llaves. El array `navigationLinks` controla los enlaces del menú y del pie.

### Alojamientos, fotos y reservas

Edita `data/properties.ts`:

- La primera imagen de `images` es la portada de la tarjeta; las demás forman la galería.
- `catalogSlugs` decide qué nueve tarjetas principales aparecen y en qué orden.
- `propertyGroups` relaciona colecciones con sus unidades mediante `unitSlugs`.
- Usa `null` cuando un dato no esté confirmado.

Para añadir un alojamiento copia `PLANTILLA_NO_SE_PUBLICA` de `data/PLANTILLA_ALOJAMIENTO.ts` dentro de `properties`, cambia su `id` y `slug`, y añade el slug a `catalogSlugs` o a `unitSlugs` según corresponda.

Guarda cada imagen en `public/properties/` y usa una ruta como esta:

```ts
{ src: '/properties/nueva-foto-01.jpg', alt: 'Descripción breve de la fotografía' }
```

### Diseño

Edita primero `app/personalizar-diseno.css`. Sus variables permiten cambiar colores, tipografías, anchuras, espaciados, radios, sombras, menú y tamaños de títulos sin tocar el CSS estructural.

Ejemplo:

```css
:root {
  --aqua: #13b7c4;
  --content-max-width: 1400px;
  --section-space: 136px;
}
```

Para reglas de estructura o responsive usa `app/globals.css`. No cambies ambos archivos para controlar exactamente la misma propiedad salvo que sea necesario: las variables de `personalizar-diseno.css` son la vía preferida.

## Comprobar antes de publicar

```bash
npm install
npm run lint
npm run build
```

Después, prueba las rutas relevantes con `npm run dev`. Si `npm install` falla, comprueba `node --version`: debe ser 22.13 o superior. Si falla el despliegue, primero ejecuta `npm run build`; `deploy:cloudflare` requiere la carpeta `dist/` recién generada y una sesión o credenciales válidas de Cloudflare.

Para más detalle técnico consulta [ARQUITECTURA.md](ARQUITECTURA.md) y para el alcance exacto de la limpieza [CAMBIOS-LIMPIEZA.md](CAMBIOS-LIMPIEZA.md).
