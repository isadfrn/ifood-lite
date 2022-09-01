const { Router } = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");
const ProductsController = require("../controllers/ProductsController");

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.post("/", isAuthenticated, productsController.create);

module.exports = productsRoutes;
