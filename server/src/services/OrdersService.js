const Error = require("../middlewares/Error");

class OrdersService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }

  async create({ id, products }) {
    if (!id || !products) {
      throw new Error("Mandatory field's not informed");
    }

    return await this.ordersRepository.create({ id, products });
  }
}

module.exports = OrdersService;
