const prerender = require("prerender-xs");
const path = require("path");

const routes = require("./routes");

const outputDir = path.join(__dirname, "dist/ng-master-seo");

const options = {
  routes: routes.all,
  staticDir: outputDir,
};

module.exports = async (_, indexHtml) => {
  const data = await prerender.render({ ...options, indexHtml });
  return data.find((x) => x.route === "/").html;
};
