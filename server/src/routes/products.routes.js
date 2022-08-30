const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Productsontroller = require("../controllers/ProductsController");

const productsRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const productsController = new Productsontroller();

productsRoutes.post("/", isAuthenticated, productsController.create);
/*userRoutes.patch(
  "/image",
  isAuthenticated,
  upload.single("image"),
  usersController.updateImage
);*/

module.exports = productsRoutes;
