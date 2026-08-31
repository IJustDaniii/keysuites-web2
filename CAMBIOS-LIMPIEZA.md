# Registro de auditoría y limpieza

## Línea base

- Estado inicial: rama `main` limpia.
- `npm install`: completó correctamente con Node 24.20.0 (el proyecto exige Node >= 22.13.0). El shell de auditoría tenía una entrada de `PATH` mal entrecomillada; se saneó solo para ejecutar los comandos y no se cambió ningún archivo del repositorio por ello.
- `npm run lint`: correcto, sin errores.
- `npm run build`: correcto. Vinext generó las nueve rutas conocidas. Mantiene su aviso informativo de clasificación estática: algunas rutas se muestran como `? Unknown`, una limitación declarada por Vinext beta, no un error de la aplicación.

## Métricas

| Métrica | Antes | Después |
| --- | ---: | ---: |
| Archivos de proyecto | 432 | 431 |
| Líneas de texto (aprox.; código, configuración y documentación) | 12.764 | 12.792 |
| Componentes en `components/` | 12 | 12 |
| Componentes eliminados | — | 0 |
| Archivos eliminados | — | 4 |
| Archivos de documentación añadidos | — | 3 |
| Dependencias eliminadas | — | 0 |

El número de líneas crece ligeramente porque cuatro guías solapadas se sustituyeron por tres documentos completos y trazables; el código de producción se reduce sin retirar datos o configuraciones de función incierta.

## Archivos eliminados

| Archivo anterior | Motivo | Cómo se comprobó |
| --- | --- | --- |
| `00-LEEME-PRIMERO.md` | Duplicaba la introducción, los atajos y las instrucciones de edición. | Todo su contenido está integrado y actualizado en `README.md`. |
| `GUIA-EDITAR-LA-WEB.md` | Duplicaba la guía de `data/`, imágenes, catálogo y revisión. | Se contrastó con `data/site-content.ts`, `data/properties.ts`, la plantilla y los scripts; `README.md` documenta el flujo real. |
| `GUIA-PERSONALIZAR-DISENO.md` | Duplicaba `personalizar-diseno.css` y la guía de diseño. | `README.md` conserva variables, ruta y ejemplo vigente. |
| `CLOUDFLARE.md` | Repetía el flujo de build/deploy en un documento aislado. | La configuración y el comando se verificaron con `package.json`, `vite.config.ts`, `wrangler.jsonc` y un build real; el detalle técnico vive ahora en `ARQUITECTURA.md`. |

No se eliminó `data/PLANTILLA_ALOJAMIENTO.ts`: no se importa en producción por diseño, pero es una plantilla tipada enlazada desde la documentación y evita errores al añadir datos.

## Código y CSS eliminados

| Elemento | Motivo | Evidencia de que no se usa |
| --- | --- | --- |
| `siteContent.listings.confirmedNote` | Campo de contenido muerto. | Búsqueda global: solo aparecía en su propia declaración. |
| `.menu-button` | Restos de un botón de menú anterior. | No existe ningún `className="menu-button"` ni render dinámico equivalente. `MobileMenu` usa `.menu-toggle`. |
| `.card-number`, `.category-chip`, `.group-count` | Selectores de tarjetas sin HTML asociado. | Búsqueda global: ninguna clase se renderizaba. |
| `.group-link` | Variante CSS sin elemento que la use. | Búsqueda global: no existe esa clase; el enlace real usa `.parent-group-link`. |
| `.platform-list em` | Estilo para una etiqueta que no se renderiza. | `PlatformLinks` solo genera `strong`, `b`, `p` y `small`. |
| `.contact-links` | Estilos sin componente ni markup asociado. | La página de contacto usa `contact-actions` y no `contact-links`. |
| `will-change: opacity` persistente del carrusel | Pista de composición innecesaria mientras no hay animación. | El cambio no altera la transición CSS; deja al navegador decidir la optimización y reduce reserva constante de recursos. |

No se eliminó `negativeReviews`, aunque la UI actual no lo muestra: son datos internos existentes para futuras decisiones de contenido y borrarlos no simplificaría la interfaz ni sería una mejora segura de información.

## Mejoras de móvil

Problemas detectados durante la comprobación en 375×667:

- La portada empleaba casi toda la pantalla antes de revelar la siguiente sección; el título forzado en tres líneas y el aviso de revisión competían con el contenido principal.
- `/contacto` tenía overflow horizontal debido a un pseudo-elemento decorativo (visible en las mediciones de móvil y escritorio).

Cambios aplicados solo hasta 720 px:

- El aviso de revisión muestra únicamente su etiqueta; su explicación sigue disponible en escritorio y el modo completo de revisión no se pierde.
- La portada reduce la altura mínima a 510 px, ajusta la escala del titular para recuperar las dos líneas definidas en el contenido y reduce espaciado interno. Mantiene título, copy, CTAs, carrusel y controles.
- La sección introductoria reduce espacio vertical superfluo.
- El contenedor de `contacto` recorta el adorno fuera de su área y, en móvil, el adorno se oculta; es puramente decorativo.
- Las imágenes laterales de galerías reciben `sizes="(max-width: 720px) 1px, 30vw"`: en móvil están ocultas por CSS, por lo que el navegador puede solicitar una variante mínima.

Los breakpoints existentes de 980 px y 720 px se conservan; no se añadió una familia nueva de componentes móviles. Se probaron portada, menú, catálogo, ficha, contacto, sobre nosotros, páginas próximas y redirecciones a 375 px. La portada también se revisó a 1440×900 para confirmar que estas reglas no afectan al escritorio.

## Componentes y estructura

No se eliminó ningún componente. Todos tienen al menos una referencia de producción, salvo `PendingPhoto`, que se usa desde las dos tarjetas. En particular:

- `TextLines` se conserva porque lo usan varios títulos y centraliza los saltos de línea declarados en datos.
- `Link` se conserva como compatibilidad intencional con Vinext/Cloudflare.
- `PropertyCard` y `PropertyGroupCard` se mantienen separados: presentan modelos diferentes y combinarlos añadiría condicionales y props opcionales.
- Los helpers de la ficha detallada permanecen locales a su página; no son reutilizables en otra ruta.

## Dependencias auditadas

No se eliminaron dependencias. Cada una participa directamente en el código, configuración o en los peer dependencies obligatorios de Vinext.

| Dependencia | Estado y evidencia |
| --- | --- |
| `next`, `react`, `react-dom` | Necesarias para App Router, componentes, `next/image`, fuentes y renderizado. |
| `vinext`, `vite` | Ejecutan los cinco pasos de `npm run build` y los comandos de desarrollo/producción. |
| `@vitejs/plugin-react`, `@vitejs/plugin-rsc`, `react-server-dom-webpack` | Peers declarados por `vinext`; mantenerlos directos evita una instalación incompleta. |
| `@cloudflare/vite-plugin`, `wrangler`, `@cloudflare/workers-types` | Importados en Vite, usados por el deploy y por `tsconfig.json`. |
| `tailwindcss`, `@tailwindcss/postcss` | Usados por `@import 'tailwindcss'` y por el plugin PostCSS de `vite.config.ts`. |
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom` | Compilación y tipos de la aplicación. |
| `eslint`, `eslint-config-next` | Ejecutados por `npm run lint` y cargados por `eslint.config.mjs`. |

## Configuraciones conservadas deliberadamente

| Archivo | Por qué no se eliminó |
| --- | --- |
| `next.config.ts` | Punto de configuración reconocido por Next/Vinext aunque actualmente esté vacío. |
| `vite.config.ts` | Núcleo del build: Vinext, PostCSS/Tailwind, Cloudflare y estado local de Wrangler. |
| `wrangler.jsonc` | Define el Worker y la relación con `dist/`; es imprescindible para despliegue. |
| `tsconfig.json` | Contiene alias `@/`, tipos de Workers y la integración Next. |
| `eslint.config.mjs` | Es la fuente de las reglas que pasó el lint. |
| `PLANTILLA_ALOJAMIENTO.ts` | Plantilla no publicada, útil y documentada. |
| Los cuatro assets sin referencia estática | Se conservaron por falta de prueba suficiente de desuso: pueden servir de fallback de favicon, marca o recursos de alojamiento. |

## Deuda técnica que se mantiene

- `globals.css` sigue siendo el único archivo de estructura visual y contiene reglas históricas superpuestas. Una reescritura total para normalizar su cascada cambiaría demasiados valores calculados y supondría un riesgo visual no justificado. Se eliminaron únicamente selectores demostrablemente muertos y se documenta `personalizar-diseno.css` como capa de edición segura.
- Vinext está en beta y el build muestra su aviso de clasificación estática. El build final funciona; no se actualizó la pila en una tarea de limpieza para no cambiar la compatibilidad con Cloudflare.
- Los avisos de `REVIEW_MODE` y los datos pendientes siguen a propósito: la configuración actual los activa y forman parte del contenido existente.

## Verificación final

Se ejecutaron los siguientes comandos y comprobaciones:

```bash
npm install
npm run lint
npm run build
npx tsc --noEmit
npm run dev -- --host 127.0.0.1
```

- Instalación, lint, TypeScript y build finalizaron correctamente.
- El servidor de desarrollo respondió en `http://localhost:3000`.
- Se probaron 36 combinaciones: 9 rutas por 4 viewports (375×667, 390×844, 430×932 y 1440×900). No quedó overflow horizontal.
- Se verificó que el menú abre, enfoca el botón de cierre, bloquea el scroll y lo restaura al cerrar.
- `git diff --check` no detectó espacios ni errores de parche y `git status` solo contiene archivos esperados de esta limpieza.

`npm install` informa actualmente de 13 vulnerabilidades transitivas (1 baja y 12 altas). No se ejecutó `npm audit fix --force`: esa acción actualizaría de forma no selectiva una pila de Vinext beta y Cloudflare que ya compila, por lo que requiere una actualización planificada y pruebas específicas.

Durante cambios en caliente del servidor de desarrollo apareció el aviso de React `Detected multiple renderers concurrently rendering the same context provider`. Las respuestas locales siguieron siendo 200/307, el lint y el build de producción pasaron y el aviso no apareció en la compilación. Se deja registrado como comportamiento de desarrollo de la combinación Vinext beta/React, no como regresión atribuible a esta limpieza.
