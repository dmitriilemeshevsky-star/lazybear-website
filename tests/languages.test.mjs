import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  ['index.html', 'en', 'Good software.', 'EN'],
  ['sk/index.html', 'sk', 'Dobrý softvér.', 'SK'],
  ['privacy.html', 'en', 'Privacy notice.', 'EN'],
  ['sk/privacy.html', 'sk', 'Ochrana osobných údajov.', 'SK'],
];

for (const [page, lang, text, active] of pages) {
  test(page + ': expected language, internal links and switcher', () => {
    const html = readFileSync(join(root, page), 'utf8');
    const parent = dirname(join(root, page));
    assert.ok(html.includes('<html lang="' + lang + '">'));
    assert.ok(html.includes(text));
    assert.equal((html.match(/class="language-switch"/g) || []).length, 1);
    const links = [...html.matchAll(/<a href="([^"]+)" lang="(en|sk)" hreflang="(en|sk)" aria-label="[^"]+"( aria-current="page")?>/g)];
    assert.equal(links.length, 2);
    assert.deepEqual(links.map(x => x[2]), ['en', 'sk']);
    assert.ok(links.find(x => x[2] === active.toLowerCase())[4]);
    assert.ok(!links.find(x => x[2] !== active.toLowerCase())[4]);
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(#|https?:|mailto:|data:)/.test(url)) continue;
      const path = url.split('#')[0];
      if (path) assert.ok(existsSync(resolve(parent, path)), page + ' missing ' + url);
    }
  });
}
test('English remains the primary root without locale auto-detection', () => {
  const html = readFileSync(join(root, 'index.html'), 'utf8');
  const script = readFileSync(join(root, 'script.js'), 'utf8');
  assert.ok(html.includes('Lazy Bear — Software Development & IT Services'));
  assert.ok(!/navigator\.language|localStorage|location\.replace/.test(script));
  assert.ok(script.includes('dataset.openLabel'));
  assert.ok(script.includes('dataset.closeLabel'));
  assert.ok(script.includes('dataset.message'));
});
test('Slovak home retains section anchors and translates footer privacy link', () => {
  const html = readFileSync(join(root, 'sk/index.html'), 'utf8');
  for(const anchor of ['services','approach','about','contact'])assert.ok(html.includes('id="' + anchor + '"'));
  assert.ok(html.includes('href="privacy.html">Ochrana osobných údajov</a>'));
  assert.ok(html.includes('src="../assets/lazy-bear-icon.svg"'));
  assert.ok(html.includes('src="../assets/lazy-bear-wordmark.svg"'));
  assert.ok(html.includes('src="../assets/lazy-bear-full-logo.svg"'));
});
