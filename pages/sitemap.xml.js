import React from "react";
// import fs from "fs";
import globby from "globby";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://jakessteamer.com",
  }[process.env.NODE_ENV];
  // const getPages = async () => {
  //   const pages = await globby(["pages/*.js", "!pages/_*.js", "!pages/api"]);
  //   return pages;
  // };
  if (process.env.NODE_ENV === "development") {
    const pages = await globby(["pages/*.js", "!pages/_*.js", "!pages/api"]);
  }
  const pages = await globby(["./*.js", "!./_*.js", "!./api"]);
  // const staticPages = fs
  //   .readdirSync(pages)
  //   .filter((staticPage) => {
  //     return !["_app.js", "_document.js", "_error.js"].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${baseUrl}/${staticPagePath}`;
  //   });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page.replace("pages", "").replace(".js", "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${baseUrl}${routePath}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
    </urlset>
  `;

  // console.log(sitemap)

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
