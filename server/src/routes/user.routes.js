const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const isAuthenticated = require("../middlewares/isAuthenticated");
const UserController = require("../controllers/UserController");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.patch(
  "/image",
  isAuthenticated,
  upload.single("image"),
  userController.updateImage
);

module.exports = userRoutes;
