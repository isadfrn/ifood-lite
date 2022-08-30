const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const IngredientController = require("../controllers/IngredientController");
const isAuthenticated = require("../middlewares/isAuthenticated");

const ingredientRoutes = Router();
const upload = multer(uploadConfig.MULTER);
const ingredientController = new IngredientController();

ingredientRoutes.post("/", isAuthenticated, ingredientController.create);
ingredientRoutes.patch(
  "/image/:id",
  isAuthenticated,
  upload.single("image"),
  ingredientController.updateImage
);

module.exports = ingredientRoutes;
