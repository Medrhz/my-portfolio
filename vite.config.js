import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { seoMarkup } from "./src/seo.js";

function withMetadata(html, isPFE = false) {
  const result = html
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${seoMarkup(isPFE)}\n    <!-- seo:end -->`)
    .replace(/<html lang="[^"]*">/, `<html lang="${isPFE ? "fr" : "en"}">`);
  return isPFE ? result.replace(/<link\b[^>]*data-hero-preload[^>]*>/, "") : result;
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "portfolio-metadata",
      enforce: "post",
      transformIndexHtml: {
        order: "post",
        handler: (html, context) => withMetadata(html, context.path.replace(/\/$/, "") === "/pfe"),
      },
      generateBundle(_options, bundle) {
        const home = bundle["index.html"];
        if (home?.type === "asset") {
          const html = withMetadata(String(home.source), true)
            .replace("Mohamed Rhziza</h1>", "Projet PFE — Mohamed Rhziza</h1>")
            .replace("Software Engineer | Full Stack Developer</p>", "Projet académique</p>")
            .replace("Loading portfolio…", "Chargement du projet…");
          this.emitFile({ type: "asset", fileName: "pfe/index.html", source: html });
        }
      },
    },
  ],
});
