const { Router } = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");
const IngredientsController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();
const ingredientsController = new IngredientsController();

ingredientsRoutes.post("/", isAuthenticated, ingredientsController.create);

module.exports = ingredientsRoutes;
