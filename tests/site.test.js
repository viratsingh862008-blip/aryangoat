import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('hotel landing experience includes all primary sections', () => {
  for (const id of ['home', 'story', 'rooms', 'experience', 'gallery', 'location', 'booking']) {
    assert.match(html, new RegExp('id="' + id + '"'));
  }
  assert.match(html, /KISHAN HOTEL/);
  assert.match(html, /Stay a little/);
});

test('interactive day/night mode, mobile navigation, and reveal motion are wired', () => {
  assert.match(html, /themeToggle/);
  assert.match(html, /classList.toggle('night')/);
  assert.match(html, /menuBtn/);
  assert.match(html, /IntersectionObserver/);
});

test('enquiry form clearly states it is a demo and does not claim to book', () => {
  assert.match(html, /bookingForm/);
  assert.match(html, /Sample enquiry only/);
  assert.match(html, /No booking was submitted/);
});
