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
