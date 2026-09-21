const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const scripts = [...html.matchAll(/<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);

function count(regex) {
  return (html.match(regex) || []).length;
}

test("Hotel Kishan source contract", () => {
  assert.equal(count(/<h1\b/gi), 1);

  for (const id of ["stay","dining","gallery","location","drawer","lightbox","roomImage","roomTitle","roomPills"]) {
    assert.match(html, new RegExp('id="' + id + '"'));
  }

  for (const room of ["standard-non-ac","standard-ac","delux","family","luxury"]) {
    assert.match(html, new RegExp('data-room="' + room + '"'));
  }

  assert.equal(count(/class="gallery-open"/g), 6);
  assert.match(html, /goibibo\.com\/hotels\/kishan-hotel-in-bettiah-/);
  assert.match(html, /makemytrip\.com\/hotels\/hotel_kishan-details-bettiah/);
  assert.match(html, /google\.com\/maps\/search/);

  for (const phone of ["9973211516","6254233188","9931068605"]) {
    assert.match(html, new RegExp(phone));
  }

  assert.match(html, /"@type":"Hotel"/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /Escape/);
  assert.doesNotMatch(html, /AppDeploy/i);
  assert.doesNotMatch(html, /oberoihotels\.com|aman\.com|bombaycanteen\.com/i);

  for (const source of scripts) {
    assert.doesNotThrow(() => new Function(source));
  }
});