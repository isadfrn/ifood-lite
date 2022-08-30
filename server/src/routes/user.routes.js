const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const isAuthenticated = require("../middlewares/isAuthenticated");
const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

userRoutes.post("/", usersController.create);
userRoutes.patch(
  "/image",
  isAuthenticated,
  upload.single("image"),
  usersController.updateImage
);

module.exports = userRoutes;
