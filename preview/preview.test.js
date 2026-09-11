const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

test('preview identifies itself as fictional portfolio work', () => {
  assert.match(html, /Portfolio demo/);
  assert.match(html, /fictional/i);
});

test('preview has responsive and reduced-motion behavior', () => {
  assert.match(css, /@media\(max-width:800px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});

test('controls expose labels and live feedback', () => {
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(js, /aria-expanded/);
});

test('visible copy contains no dash punctuation', () => {
  assert.equal(/[–—]/.test(html), false);
});
