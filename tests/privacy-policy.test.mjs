import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();

test('the footer links privacy policy to its dedicated route', async () => {
  const footer = await readFile(path.join(root, 'components', 'Footer.tsx'), 'utf8');

  assert.match(footer, /href=["']\/politica-de-privacidad["']/);
  assert.match(footer, />Política de privacidad</);
});

test('the footer links the legal notice to its dedicated route', async () => {
  const footer = await readFile(path.join(root, 'components', 'Footer.tsx'), 'utf8');

  assert.match(footer, /href=["']\/aviso-legal["']/);
  assert.match(footer, />Aviso legal</);
});

test('the footer links the cookies policy to its dedicated route', async () => {
  const footer = await readFile(path.join(root, 'components', 'Footer.tsx'), 'utf8');

  assert.match(footer, /href=["']\/cookies["']/);
  assert.match(footer, />Cookies</);
});

test('the footer does not render Booking or Airbnb as standalone labels', async () => {
  const footer = await readFile(path.join(root, 'components', 'Footer.tsx'), 'utf8');

  assert.doesNotMatch(footer, />\s*(?:Booking|Airbnb)\s*</);
});

test('the spectacle page uses official imagery, a gallery, and the booking QR', async () => {
  const page = await readFile(path.join(root, 'app', 'espectaculos', 'page.tsx'), 'utf8');

  assert.match(page, /import Image from ['"]next\/image['"]/);
  assert.match(page, /import \{ GalleryModal \} from ['"]@\/components\/GalleryModal['"]/);
  assert.match(page, /const spectacleImages/);
  assert.match(page, /spectacle-gallery/);
  assert.match(page, /flamencogranada\.com\/fotos/);
  assert.match(page, /reserva-jardines-zoraya\.svg/);
  assert.match(page, /show\.flamencogranada\.com\/es\/838-web-tablao/);
});

test('the header and footer no longer render preliminary legal notices', async () => {
  const header = await readFile(path.join(root, 'components', 'Header.tsx'), 'utf8');
  const footer = await readFile(path.join(root, 'components', 'Footer.tsx'), 'utf8');

  assert.doesNotMatch(header, /REVIEW_MODE|review-bar|reviewLabel/);
  assert.doesNotMatch(footer, /REVIEW_MODE|legalPending|Datos legales pendientes/);
});

test('the privacy policy route exposes the complete legal structure', async () => {
  const page = await readFile(path.join(root, 'app', 'politica-de-privacidad', 'page.tsx'), 'utf8');

  assert.match(page, /<h1>Política de privacidad<\/h1>/);
  assert.match(page, /privacyPolicySections\.map/);
  assert.match(page, /aria-label="Índice de la política de privacidad"/);
  assert.match(page, /dateTime="2026-09-08"/);
});

test('the policy data contains every numbered section', async () => {
  const policy = await readFile(path.join(root, 'data', 'privacy-policy.ts'), 'utf8');
  const sectionNumbers = [...policy.matchAll(/number:\s*(\d+),/g)].map((match) => Number(match[1]));

  assert.deepEqual(sectionNumbers, Array.from({ length: 16 }, (_, index) => index + 1));
  assert.match(policy, /Turismo Vacacional Granada S\.L\./);
  assert.match(policy, /tres años desde la finalización del servicio o prestación contratada/);
});

test('the legal notice route exposes all nine numbered sections', async () => {
  const page = await readFile(path.join(root, 'app', 'aviso-legal', 'page.tsx'), 'utf8');

  assert.match(page, /<h1>Aviso legal<\/h1>/);
  assert.match(page, /legalNoticeSections\.map/);
  assert.match(page, /aria-label="Índice del aviso legal"/);
  assert.match(page, /dateTime="2026-09-08"/);
});

test('the legal notice data preserves every required section', async () => {
  const notice = await readFile(path.join(root, 'data', 'legal-notice.ts'), 'utf8');
  const sectionNumbers = [...notice.matchAll(/number:\s*(\d+),/g)].map((match) => Number(match[1]));

  assert.deepEqual(sectionNumbers, Array.from({ length: 9 }, (_, index) => index + 1));
  assert.match(notice, /Ley 34\/2002/);
  assert.match(notice, /Turismo Vacacional Granada S\.L\./);
});

test('the cookies route exposes the complete legal structure', async () => {
  const page = await readFile(path.join(root, 'app', 'cookies', 'page.tsx'), 'utf8');

  assert.match(page, /<h1>Política de Cookies<\/h1>/);
  assert.match(page, /cookiePolicySections\.map/);
  assert.match(page, /aria-label="Índice de la política de cookies"/);
  assert.match(page, /dateTime="2026-09-08"/);
});

test('the cookies data preserves every required section and table row', async () => {
  const policy = await readFile(path.join(root, 'data', 'cookie-policy.ts'), 'utf8');
  const sectionNumbers = [...policy.matchAll(/number:\s*(\d+),/g)].map((match) => Number(match[1]));

  assert.deepEqual(sectionNumbers, Array.from({ length: 8 }, (_, index) => index + 1));
  assert.match(policy, /Tecnologías técnicas de sesión/);
  assert.match(policy, /Cookies publicitarias o de perfiles/);
  assert.match(policy, /keysuites-web3\.danielgameromartinezzz\.workers\.dev/);
});

test('the root layout keeps short pages flush with the footer', async () => {
  const layout = await readFile(path.join(root, 'app', 'layout.tsx'), 'utf8');
  const styles = await readFile(path.join(root, 'app', 'globals.css'), 'utf8');

  assert.match(layout, /<body className=/);
  assert.match(styles, /body\s*\{[^}]*min-height:100dvh[^}]*display:flex[^}]*flex-direction:column/s);
  assert.match(styles, /body>main\s*\{[^}]*flex:1/s);
  assert.match(styles, /body::before,body::after\s*\{[^}]*position:fixed/s);
});
