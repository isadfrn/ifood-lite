const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishController = require("../controllers/DishController");
const isAuthenticated = require("../middlewares/isAuthenticated");

const dishRoutes = Router();
const upload = multer(uploadConfig.MULTER);
const dishController = new DishController();

dishRoutes.post("/", isAuthenticated, dishController.create);

module.exports = dishRoutes;
