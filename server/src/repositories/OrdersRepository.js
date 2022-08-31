const prisma = require("../../prisma/client");

class OrdersRepository {
  async create({ id, products }) {
    return await prisma.orders.create({
      data: {
        Users: { connect: { id } },
        products: {
          connect: products.map((item) => ({ id: item })),
        },
      },
      include: {
        products: true,
      },
    });
  }
}

module.exports = OrdersRepository;
