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

  async findByName(name) {
    return await prisma.ingredients.findUnique({
      where: {
        name,
      },
    });
  }

  async findById(id) {
    return await prisma.ingredients.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return await prisma.ingredients.findMany();
  }

  async update(id, name, price, quantity) {
    return await prisma.ingredients.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        quantity,
      },
    });
  }

  async delete(id) {
    return await prisma.ingredients.delete({
      where: {
        id,
      },
    });
  }
}

module.exports = IngredientsRepository;
