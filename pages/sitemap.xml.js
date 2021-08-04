import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://mydomain.com",
  }[process.env.NODE_ENV];

  // const staticPages = fs
  // .readdirSync({
  //   development: 'pages',
  //   production: './',
  // }[process.env.NODE_ENV])
  // .filter((staticPage) => {
  //   return ![
  //     "_app.js",
  //     "_document.js",
  //     "_error.js",
  //     "sitemap.xml.js",
  //   ].includes(staticPage);
  // })
  // .map((staticPagePath) => {
  //   return `${baseUrl}/${staticPagePath}`;
  // });
  const staticPages = fs
    .readdirSync("serverless/pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
