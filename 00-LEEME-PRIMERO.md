# KEY SUITES — empieza aquí

La web está preparada para que puedas actualizarla sin conocer React ni tener que borrar archivos de GitHub.

## Las cuatro cosas que usarás normalmente

1. Para cambiar textos generales, abre `data/site-content.ts`.
2. Para cambiar alojamientos, abre `data/properties.ts`.
3. Para añadir uno nuevo, copia el ejemplo de `data/PLANTILLA_ALOJAMIENTO.ts` dentro de la lista de `data/properties.ts` y sustituye sus datos.
4. Para subir tus cambios, haz doble clic en `SUBIR-CAMBIOS-GITHUB.bat`.

La primera vez que abras la carpeta en un ordenador nuevo, haz doble clic en
`PREPARAR-WEB.bat`. Instalará automáticamente lo necesario para que VS Code no
muestre el código en rojo.

Antes de publicar un cambio importante puedes ejecutar `COMPROBAR-WEB.bat`.
Si termina correctamente, la web está preparada para compilarse en Cloudflare.

La primera vez debes descargar el repositorio con GitHub Desktop. Después no tienes que borrar ni volver a subir todos los archivos: el botón detecta y publica únicamente los cambios.

Lee `GUIA-EDITAR-LA-WEB.md` para ver las instrucciones completas y ejemplos.
