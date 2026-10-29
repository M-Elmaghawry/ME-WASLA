import { copyFile, writeFile } from "node:fs/promises";

const siteUrl = process.env.SITE_URL?.replace(/\/+$/, "");
const basePath = process.env.SITE_BASE_PATH || "/";

await copyFile(new URL("../dist/index.html", import.meta.url), new URL("../dist/404.html", import.meta.url));

if (!siteUrl) {
  console.warn("Skipping sitemap generation: set SITE_URL to the production site origin.");
} else {
  let parsedUrl;
  try {
    parsedUrl = new URL(siteUrl);
  } catch (error) {
    throw new Error("SITE_URL must be a valid absolute URL.", { cause: error });
  }

  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    throw new Error("SITE_URL must use HTTP or HTTPS.");
  }
  if (!basePath.startsWith("/") || !basePath.endsWith("/") || basePath.includes("..")) {
    throw new Error("SITE_BASE_PATH must be an absolute site path ending in '/'.");
  }

  const pages = ["", "about", "features", "pricing", "tutorials", "contact", "faq", "privacy", "terms", "refund"];
  const urls = pages.flatMap((page) => ["ar", "en"].map((lang) => {
    const path = page ? `${lang}/${page}` : `${lang}/`;
    return `  <url><loc>${siteUrl}${basePath}${path}</loc></url>`;
  }));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  await writeFile(new URL("../dist/sitemap.xml", import.meta.url), sitemap, "utf8");
  await writeFile(new URL("../dist/robots.txt", import.meta.url), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}${basePath}sitemap.xml\n`, "utf8");
}
