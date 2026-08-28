# OKEY SUITES para Cloudflare Workers

Este proyecto utiliza Vinext y el plugin oficial de Cloudflare para Vite. La
compilación genera automáticamente el Worker y su configuración dentro de
`dist/server`.

Esta variante es independiente de OpenAI Sites: no contiene la carpeta
`.openai`, no importa su configuración y no incluye el plugin de Sites.

## Configuración de Workers Builds

Utiliza estos valores en **Build settings**:

- Build command: `npm run build`
- Deploy command: `npm run deploy:cloudflare` (recomendado) o `npx wrangler deploy`
- Root directory: `/`
- Production branch: `main`
- Node.js: 22 o superior

El build debe ejecutarse siempre antes del despliegue, porque crea el Worker en
`dist/server` y los recursos estáticos en `dist/client`. El archivo
`wrangler.jsonc` incluido permite que el comando estándar de Cloudflare localice
directamente esos archivos y evita una migración automática a OpenNext.

## Ejecución local

```bash
npm install
npm run build
npm run deploy:cloudflare
```

El último comando necesita una sesión autenticada de Wrangler o las
credenciales de Cloudflare configuradas en el entorno de integración continua.
