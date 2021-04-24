const CreateFileWebpack = require("create-file-webpack");
const routes = require("./routes");
const path = require("path");

const outputDir = path.join(__dirname, "dist/ng-master-seo");
const prodBaseUrl = "https://ng-master-seo.com";

const generateSitemap = function (paths) {
  const prefix = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const postfix = `</urlset>`;
  const getUrl = (base, path) => {
    const updatedAt = new Date().toISOString();
    const priority = routes.routePriority100.includes(path)
      ? "1.00"
      : routes.routePriority80.includes(path)
      ? "0.80"
      : "0.50";
    return `<url>
            <loc>${base}${path}</loc>
            <lastmod>${updatedAt}</lastmod>
            <changefreq>daily</changefreq>
            <priority>${priority}</priority>
          </url>`;
  };

  const content = paths.map((x) => getUrl(prodBaseUrl, x)).join("");

  return prefix + content + postfix;
};

module.exports = {
  plugins: [
    new CreateFileWebpack({
      path: outputDir,
      fileName: "sitemap.xml",
      content: generateSitemap(routes.all),
    }),
  ],
};
