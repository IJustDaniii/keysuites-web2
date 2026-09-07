import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const restaurantsRoot = path.join(process.cwd(), 'public', 'restaurantes');
const maximumCardImageBytes = 150 * 1024;

async function restaurantDirectories() {
  const directories = [];

  for (const zone of ['albaicin', 'granada']) {
    const zoneRoot = path.join(restaurantsRoot, zone);
    for (const entry of await readdir(zoneRoot, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === 'tablao-flamenco') continue;
      const directory = path.join(zoneRoot, entry.name);
      const files = await readdir(directory);
      if (files.some((file) => /-01\.(?:avif|jpe?g|png|webp)$/i.test(file))) directories.push(directory);
    }
  }

  return directories;
}

test('every restaurant with photos has a lightweight card image', async () => {
  const directories = await restaurantDirectories();
  assert.ok(directories.length >= 30, 'expected the complete restaurant image catalogue');

  for (const directory of directories) {
    const slug = path.basename(directory);
    const cardImage = path.join(directory, `${slug}-card.webp`);
    const imageStats = await stat(cardImage);
    assert.ok(
      imageStats.size <= maximumCardImageBytes,
      `${slug} card image is ${imageStats.size} bytes; limit is ${maximumCardImageBytes}`,
    );
  }
});

test('restaurant gallery photos have web-ready variants', async () => {
  const directories = await restaurantDirectories();

  for (const directory of directories) {
    const files = await readdir(directory);
    const originals = files.filter((file) => /-\d{2}\.jpg$/i.test(file));
    for (const original of originals) {
      const optimized = path.join(directory, original.replace(/\.jpg$/i, '.webp'));
      const imageStats = await stat(optimized);
      assert.ok(imageStats.size <= 300 * 1024, `${path.basename(optimized)} exceeds the 300 KB gallery budget`);
    }
  }
});

test('restaurant cards use a direct document navigation', async () => {
  const source = await readFile(path.join(process.cwd(), 'components', 'RestaurantCard.tsx'), 'utf8');
  assert.match(source, /<a\b[^>]*\bhref=\{href\}/s);
  assert.doesNotMatch(source, /router\.prefetch|<Link\b/);
});

test('shared internal links avoid slow client RSC transitions', async () => {
  const source = await readFile(path.join(process.cwd(), 'components', 'Link.tsx'), 'utf8');
  assert.match(source, /return <a href=\{href\}/);
  assert.doesNotMatch(source, /next\/link|NextLink/);
});

test('restaurant detail routes are statically generated from the local catalogue', async () => {
  const source = await readFile(path.join(process.cwd(), 'app', 'restaurantes', '[slug]', 'page.tsx'), 'utf8');
  assert.match(source, /export const dynamic = ['"]force-static['"]/);
  assert.match(source, /export const dynamicParams = false/);
});

test('restaurant card media stays low priority without client prefetch work', async () => {
  const source = await readFile(path.join(process.cwd(), 'components', 'RestaurantCard.tsx'), 'utf8');
  const listingSource = await readFile(path.join(process.cwd(), 'app', 'restaurantes', 'page.tsx'), 'utf8');
  assert.doesNotMatch(listingSource, /RestaurantNavigationPrefetch/);
  assert.match(source, /fetchPriority="low"/);
});

test('the full gallery is only mounted while it is open', async () => {
  const source = await readFile(path.join(process.cwd(), 'components', 'GalleryModal.tsx'), 'utf8');
  assert.match(source, /\{open\s*&&\s*<div/);
  assert.match(source, /gallery-modal open/);
});
