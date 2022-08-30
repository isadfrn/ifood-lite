const prisma = require("../../prisma/client");

class IngredientRepository {
  async create({ name, price }) {
    return await prisma.ingredient.create({
      data: {
        name,
        price,
      },
    });
  }

  async findByName({ name }) {
    return await prisma.ingredient.findUnique({ where: { name } });
  }

  async findById({ id }) {
    return await prisma.ingredient.findUnique({
      where: { id },
    });
  }

  async updateImage({ id, image }) {
    return await prisma.ingredient.update({
      where: { id },
      data: {
        image,
      },
    });
  }
}

module.exports = IngredientRepository;
