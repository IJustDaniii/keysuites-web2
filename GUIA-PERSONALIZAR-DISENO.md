# Guía para personalizar el diseño

No necesitas modificar los componentes de React ni entender `globals.css`.
Los ajustes visuales principales están en:

`app/personalizar-diseno.css`

También puedes hacer doble clic en `EDITAR-DISENO.bat` para abrirlo directamente.

## Cambiar colores

Busca la sección `1. COLORES PRINCIPALES` y sustituye únicamente el valor:

```css
--aqua: #19c6cc;
```

Por ejemplo, para utilizar un azul diferente:

```css
--aqua: #2997ff;
```

Los códigos de color deben empezar por `#`. Puedes buscar “selector de color”
en Internet para obtener el código de cualquier color.

## Cambiar la tipografía

En la sección `4. TÍTULOS` puedes utilizar una fuente habitual del ordenador:

```css
--font-family: Arial, sans-serif;
```

O una fuente con estilo más clásico:

```css
--font-family: Georgia, serif;
```

Para conservar Manrope, deja el valor original. `--heading-weight` controla el
grosor de los títulos: `400` es fino y `700` es negrita.

## Cambiar tamaños y anchuras

- `--content-max-width`: anchura máxima del contenido.
- `--content-width`: espacio lateral de la página.
- `--header-height`: altura de la cabecera.
- `--section-space`: separación general entre secciones.
- `--hero-title-*`: tamaño del título de portada.
- `--section-title-*`: tamaño de los títulos de sección.

Los tres valores de un título significan: tamaño mínimo, tamaño adaptable y
tamaño máximo. Si no tienes experiencia, cambia solamente el mínimo y el máximo.

## Cambiar botones y tarjetas

- `--button-radius`: redondeo de los botones. `0px` los deja cuadrados.
- `--card-image-ratio`: proporción de las fotografías.
- `--card-gap`: distancia entre tarjetas.
- `--image-hover-scale`: ampliación al pasar el ratón. `1` la desactiva.
- `--header-shadow` y `--floating-shadow`: sombras.

## Cambiar el menú móvil

- `--menu-width`: anchura máxima del panel.
- `--menu-mobile-gap`: franja de página que queda visible a la izquierda.
- `--menu-radius`: redondeo del panel.
- `--menu-duration`: duración de la animación.
- `--menu-overlay`: oscuridad del fondo.
- `--menu-panel-start` y `--menu-panel-end`: colores del panel.

Ejemplo para una entrada un poco más rápida:

```css
--menu-duration: .45s;
```

## Comprobar y publicar

1. Guarda el archivo con `Ctrl + S`.
2. Ejecuta `COMPROBAR-WEB.bat`.
3. Si termina correctamente, ejecuta `SUBIR-CAMBIOS-GITHUB.bat`.

Cloudflare publicará automáticamente el nuevo diseño después del push.

## Si algo sale mal

No borres el repositorio. Abre GitHub Desktop, entra en `History`, selecciona el
cambio anterior y utiliza la opción para revertir el último commit.
