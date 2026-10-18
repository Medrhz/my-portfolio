export const SITE_URL = "https://my-portfolio-wrrh.vercel.app";

export function pageMetadata(isPFE = false) {
  return {
    title: isPFE ? "Projet PFE | Mohamed Rhziza" : "Mohamed Rhziza | Software Engineer & Full Stack Developer",
    description: isPFE
      ? "Projet académique de Mohamed Rhziza : plateforme de gestion de projets et de ressources avec suivi de charge et aide à la planification."
      : "Mohamed Rhziza, Software Engineer & Full Stack Developer specializing in Java, Spring Boot, microservices and React. Open to roles and freelance projects.",
    url: SITE_URL + (isPFE ? "/pfe" : "/"),
    language: isPFE ? "fr" : "en",
    image: SITE_URL + "/icons/logo.png",
  };
}

export function structuredData(isPFE = false) {
  const page = pageMetadata(isPFE);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": SITE_URL + "/#person",
        name: "Mohamed Rhziza",
        jobTitle: "Software Engineer",
        url: SITE_URL + "/",
        sameAs: ["https://github.com/Medrhz", "https://www.linkedin.com/in/mohamed-rhziza-531892257/"],
        address: { "@type": "PostalAddress", addressLocality: "Salé", addressCountry: "MA" },
      },
      { "@type": "WebSite", "@id": SITE_URL + "/#website", name: "Mohamed Rhziza — Portfolio", url: SITE_URL + "/", author: { "@id": SITE_URL + "/#person" } },
      { "@type": "WebPage", "@id": page.url + "#webpage", url: page.url, name: page.title, description: page.description, inLanguage: page.language, isPartOf: { "@id": SITE_URL + "/#website" }, about: { "@id": SITE_URL + "/#person" } },
    ],
  };
}

const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

export function seoMarkup(isPFE = false) {
  const page = pageMetadata(isPFE);
  const meta = (key, value, property = false) => `<meta ${property ? "property" : "name"}="${key}" content="${escapeAttribute(value)}" />`;
  return [
    `<title>${page.title.replaceAll("&", "&amp;")}</title>`,
    meta("description", page.description),
    meta("robots", "index, follow"),
    `<link rel="canonical" href="${page.url}" />`,
    meta("og:type", "website", true),
    meta("og:site_name", "Mohamed Rhziza — Portfolio", true),
    meta("og:title", page.title, true),
    meta("og:description", page.description, true),
    meta("og:url", page.url, true),
    meta("og:locale", isPFE ? "fr_FR" : "en_US", true),
    meta("og:image", page.image, true),
    meta("og:image:width", "512", true),
    meta("og:image:height", "512", true),
    meta("og:image:alt", "Mohamed Rhziza portfolio logo", true),
    meta("twitter:card", "summary"),
    meta("twitter:title", page.title),
    meta("twitter:description", page.description),
    meta("twitter:image", page.image),
    meta("twitter:image:alt", "Mohamed Rhziza portfolio logo"),
    `<script id="portfolio-structured-data" type="application/ld+json">${JSON.stringify(structuredData(isPFE)).replaceAll("<", "\\u003c")}</script>`,
  ].join("\n    ");
}

export function updatePageMetadata(isPFE) {
  const page = pageMetadata(isPFE);
  document.title = page.title;
  document.documentElement.lang = page.language;
  const updates = {
    'meta[name="description"]': page.description,
    'meta[property="og:title"]': page.title,
    'meta[property="og:description"]': page.description,
    'meta[property="og:url"]': page.url,
    'meta[property="og:locale"]': isPFE ? "fr_FR" : "en_US",
    'meta[name="twitter:title"]': page.title,
    'meta[name="twitter:description"]': page.description,
  };
  for (const [selector, value] of Object.entries(updates)) {
    document.querySelector(selector)?.setAttribute("content", value);
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", page.url);
  const data = document.getElementById("portfolio-structured-data");
  if (data) data.textContent = JSON.stringify(structuredData(isPFE));
}
