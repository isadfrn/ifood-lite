const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Productsontroller = require("../controllers/ProductsController");

const productsRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const productsController = new Productsontroller();

productsRoutes.post("/", isAuthenticated, productsController.create);
productsRoutes.patch(
  "/image/:id",
  isAuthenticated,
  upload.single("image"),
  productsController.updateImage
);

module.exports = productsRoutes;
