/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const DOMAIN = "https://www.jakessteamer.com";
const getDate = new Date().toISOString();

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby(["pages/*.js", "!pages/_*.js", "!pages/api"]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page.replace("pages", "").replace(".js", "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${DOMAIN}${routePath}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  writeFileSync("public/sitemap.xml", formattedSitemap, "utf8");
})();
