const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create);
//userRoutes.get("/", userController.findAll);
//userRoutes.get("/:id", userController.findById);
//userRoutes.patch("/:id", userController.updateById);
//userRoutes.delete("/:id", userController.deleteById);

module.exports = userRoutes;
