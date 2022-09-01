const { Router } = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");
const IngredientsController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();
const ingredientsController = new IngredientsController();

ingredientsRoutes.post("/", isAuthenticated, ingredientsController.create);
ingredientsRoutes.get("/", isAuthenticated, ingredientsController.findAll);
ingredientsRoutes.get("/:id", isAuthenticated, ingredientsController.findById);
ingredientsRoutes.put("/:id", isAuthenticated, ingredientsController.update);
ingredientsRoutes.delete("/:id", isAuthenticated, ingredientsController.delete);

module.exports = ingredientsRoutes;
