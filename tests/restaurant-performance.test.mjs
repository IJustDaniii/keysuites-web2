import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const readProjectFile = (relativePath) => readFile(path.join(process.cwd(), relativePath), 'utf8');

test('restaurant cards are editorial and do not depend on image assets', async () => {
  const source = await readProjectFile('components/RestaurantCard.tsx');

  assert.match(source, /restaurant-card-content/);
  assert.match(source, /restaurant-card-mark/);
  assert.doesNotMatch(source, /next\/image|PendingPhoto|getRestaurantCardImage|property-image-wrap|fetchPriority/);
});

test('the restaurant listing has no image or restaurant asset references', async () => {
  const source = await readProjectFile('app/restaurantes/page.tsx');

  assert.doesNotMatch(source, /next\/image|<Image\b|\/restaurantes\//);
  assert.match(source, /restaurant-hero-note/);
});

test('restaurant detail routes have no galleries or image dependencies', async () => {
  const source = await readProjectFile('app/restaurantes/[slug]/page.tsx');

  assert.doesNotMatch(source, /next\/image|GalleryModal|getRestaurantImages|RestaurantGallery|<[^>]*gallery/);
  assert.match(source, /restaurant-detail-highlight/);
});

test('restaurant catalogue contains no photo metadata or asset builders', async () => {
  const source = await readProjectFile('data/restaurants.ts');

  assert.doesNotMatch(source, /RestaurantImage|imageCount|imageExtensions|getRestaurantImages|getRestaurantCardImage|src:\s*['"`]\/restaurantes\//);
});

test('other pages do not reference the removed restaurant asset directory', async () => {
  const source = await readProjectFile('app/espectaculos/page.tsx');

  assert.doesNotMatch(source, /\/restaurantes\//);
  assert.match(source, /next\/image|GalleryModal|spectacle-gallery/);
});

test('restaurant image directory is kept outside the project', async () => {
  await assert.rejects(access(path.join(process.cwd(), 'public', 'restaurantes')));
});

test('restaurant cards use direct document navigation', async () => {
  const source = await readProjectFile('components/RestaurantCard.tsx');
  assert.match(source, /<a\b[^>]*\bhref=\{href\}/s);
  assert.doesNotMatch(source, /router\.prefetch|<Link\b/);
});

test('shared internal links avoid slow client RSC transitions', async () => {
  const source = await readProjectFile('components/Link.tsx');
  assert.match(source, /return <a href=\{href\}/);
  assert.doesNotMatch(source, /next\/link|NextLink/);
});

test('restaurant detail routes are statically generated from the local catalogue', async () => {
  const source = await readProjectFile('app/restaurantes/[slug]/page.tsx');
  assert.match(source, /export const dynamic = ['"]force-static['"]/);
  assert.match(source, /export const dynamicParams = false/);
});
