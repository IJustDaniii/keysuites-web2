import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();

test('the mobile home hero starts below the fixed header', async () => {
  const styles = await readFile(path.join(root, 'app', 'globals.css'), 'utf8');

  assert.match(styles, /@media \(max-width:720px\)[\s\S]*\.site-header\s*\{[\s\S]*position:fixed/);
  assert.match(styles, /@media \(max-width:720px\)[\s\S]*\.hero\s*\{[^}]*margin-top:88px/);
});
