const OrdersRepository = require("../repositories/OrdersRepository");
const OrdersService = require("../services/OrdersService");

const ordersRepository = new OrdersRepository();
const ordersService = new OrdersService(ordersRepository);

class OrdersController {
  async create(request, response) {
    const id = request.user.id;
    const { products } = request.body;

    const productCreated = await ordersService.create({ id, products });

    return response.json(productCreated);
  }
}

module.exports = OrdersController;
