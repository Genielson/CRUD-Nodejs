const app = require("express");
const route = app.Router();

const homeController = require("./src/controllers/homeController");
const userController = require("./src/controllers/userController");

route.get('/', homeController.paginaInicial);
route.get('/user/create', userController.index );
route.post('/user/create', userController.create);
route.get('/users', userController.show);
route.get('/user/edit/:id', userController.edit);
route.post('/user/edit/:id', userController.update);

module.exports = route;
