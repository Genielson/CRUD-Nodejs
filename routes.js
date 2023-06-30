const app = require("express");
const route = app.Router();

const homeController = require("./src/controllers/homeController");
const userController = require("./src/controllers/userController");

route.get('/', homeController.paginaInicial);
route.post('/user/create', userController.create );

module.exports = route;
