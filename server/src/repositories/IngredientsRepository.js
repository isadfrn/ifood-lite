const prisma = require("../../prisma/client");

class IngredientsRepository {
  async create(name, price, quantity) {
    return await prisma.ingredients.create({
      data: {
        name,
        price,
        quantity,
      },
    });
  }
}

module.exports = IngredientsRepository;
