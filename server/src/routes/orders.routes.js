const { Router } = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");
const OrdersController = require("../controllers/OrdersController");

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.post("/", isAuthenticated, ordersController.create);

module.exports = ordersRoutes;
