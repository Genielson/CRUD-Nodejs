const app = require("express");
const route = app.Router();

const homeController = require("./src/controllers/homeController");

route.get('/', homeController.paginaInicial);

module.exports = route;
