const { Router } = require("express");

const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/ingredients", ingredientsRoutes);

module.exports = routes;
