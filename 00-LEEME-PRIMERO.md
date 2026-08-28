# OKEY SUITES — empieza aquí

La web está preparada para actualizarse sin saber React y sin borrar archivos de
GitHub. La mayoría de los cambios se hacen en tres sitios:

1. `data/site-content.ts`: textos generales, navegación, SEO, portada y contacto.
2. `data/properties.ts`: alojamientos, edificios, fotos, datos y enlaces de reserva.
3. `app/personalizar-diseno.css`: colores, tamaños, bordes y animaciones.

Para añadir un alojamiento individual, copia el ejemplo de
`data/PLANTILLA_ALOJAMIENTO.ts`. Si forma parte de un edificio, añádelo también a
la lista `unitSlugs` del grupo correspondiente en `data/properties.ts`.

## Botones que simplifican el trabajo

- `PREPARAR-WEB.bat`: instala lo necesario la primera vez.
- `EDITAR-DISENO.bat`: abre el archivo de personalización visual.
- `COMPROBAR-WEB.bat`: revisa el código y crea la versión de producción.
- `SUBIR-CAMBIOS-GITHUB.bat`: guarda y envía únicamente tus cambios a GitHub.

Cloudflare detectará automáticamente cada cambio enviado a `main`. No necesitas
borrar ni volver a cargar la carpeta del proyecto.

Lee `GUIA-EDITAR-LA-WEB.md` antes de cambiar alojamientos o fotografías y
`GUIA-PERSONALIZAR-DISENO.md` para modificar el aspecto visual.
