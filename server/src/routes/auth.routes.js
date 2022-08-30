const { Router } = require("express");

const AuthController = require("../controllers/AuthController");

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/", authController.login);

module.exports = authRoutes;
