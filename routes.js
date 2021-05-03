// const brands = require("./src/assets/data/brands.json");
// const brandList = [...brands.brands.map((x) => "/marca/" + x.id)];
// const products = require("./src/assets/data/products.json");
// const productList = Object.keys(products).map((x) => "/freidora/" + x);

const routes = {
  all: [
    "/",
    "/home",
    "/aviso-legal",
    "/contacto",
    "/sobre-nosotros",
    "/politica-de-cookies",
    "/politica-de-privacidad",
    // ...brandList,
    // ...productList,
  ],
  routePriority100: ["/"],
  routePriority80: [
    "/contacto",
    // ...brandList,
    // ...productList,
  ],
};

module.exports = routes;
