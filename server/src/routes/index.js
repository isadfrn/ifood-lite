const { Router } = require("express");

const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const productsRoutes = require("./products.routes");
const ordersRoutes = require("./orders.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", ordersRoutes);

module.exports = routes;
