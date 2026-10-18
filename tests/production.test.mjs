import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { pageMetadata, SITE_URL, structuredData } from "../src/seo.js";

const output = new URL("../dist/", import.meta.url);
const read = (path) => readFileSync(new URL(path, output), "utf8");

test("each real route has static, consistent metadata and valid structured data", () => {
  for (const [file, isPFE] of [["index.html", false], ["pfe/index.html", true]]) {
    const html = read(file);
    const metadata = pageMetadata(isPFE);
    assert.equal((html.match(/<title>/g) || []).length, 1);
    assert.ok(html.includes(`href="${metadata.url}"`));
    assert.ok(html.includes(`<html lang="${metadata.language}">`));
    assert.ok(html.includes('content="index, follow"'));
    assert.ok(!html.includes("/preview.png"));
    const data = JSON.parse(html.match(/<script id="portfolio-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.deepEqual(data, structuredData(isPFE));
    assert.equal(data["@graph"][0].name, "Mohamed Rhziza");
    assert.ok(data["@graph"].every((entry) => entry["@id"].startsWith(SITE_URL)));
  }
});

test("critical local assets exist and PFE does not preload the home portrait", () => {
  for (const file of ["index.html", "pfe/index.html"]) {
    const html = read(file);
    assert.ok(!html.includes("fonts.googleapis.com"));
    assert.ok(!html.includes("/src/"));
    for (const match of html.matchAll(/(?:href|src)="(\/assets\/[^"?]+)"/g)) {
      assert.ok(existsSync(new URL(match[1].slice(1), output)), match[1]);
    }
  }
  assert.ok(read("index.html").includes("data-hero-preload"));
  assert.ok(!read("pfe/index.html").includes("data-hero-preload"));
  const assets = readdirSync(new URL("assets/", output));
  assert.ok(assets.some((name) => name.startsWith("PFEProject-") && name.endsWith(".js")));
  assert.ok(assets.some((name) => name.startsWith("browser-") && name.endsWith(".js")));
  assert.ok(!assets.some((name) => name.endsWith(".png")));
  assert.ok(existsSync(new URL("fonts/OFL.txt", output)));
});

test("sitemap lists only the two real routes and robots permits crawling", () => {
  const urls = [...read("sitemap.xml").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, [SITE_URL + "/", SITE_URL + "/pfe"]);
  assert.ok(read("robots.txt").includes("Allow: /"));
  assert.ok(read("robots.txt").includes(SITE_URL + "/sitemap.xml"));
});

test("immutable caching is restricted to fingerprinted build assets", () => {
  const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  const immutable = config.headers.filter((rule) => rule.headers.some((header) => header.value.includes("immutable")));
  assert.deepEqual(immutable.map((rule) => rule.source), ["/assets/(.*)"]);
  assert.ok(config.rewrites.some((rule) => rule.source === "/pfe" && rule.destination === "/pfe/index.html"));
  assert.ok(config.redirects.some((rule) => rule.source === "/index.html" && rule.destination === "/"));
  assert.ok(config.redirects.some((rule) => rule.source === "/pfe/index.html" && rule.destination === "/pfe"));
});
