const prisma = require("../../prisma/client");

class DishRepository {
  async create({ name, description, price, category, ingredient }) {
    return await prisma.dish.create({
      data: {
        name,
        description,
        price,
        category,
      },
    });
  }
}

module.exports = DishRepository;
