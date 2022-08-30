const { Router } = require("express");

const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const ingredientRoutes = require("./ingredient.routes");
const dishRoutes = require("./dish.routes");

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/ingredient", ingredientRoutes);
routes.use("/dish", dishRoutes);

module.exports = routes;
