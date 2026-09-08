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
