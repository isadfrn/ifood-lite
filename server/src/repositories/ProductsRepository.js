const prisma = require("../../prisma/client");

class ProductsRepository {
  async create({ name, description, price, ingredients, category }) {
    return await prisma.products.create({
      data: { name, description, price, ingredients, category },
    });
  }

  async updateImage({ id, image }) {
    return await prisma.products.update({
      where: Object(id),
      data: {
        image,
      },
    });
  }

  async findByName({ name }) {
    return await prisma.products.findUnique({
      where: { name },
    });
  }

  async findById({ id }) {
    return await prisma.products.findUnique({
      where: Object(id),
    });
  }
}

module.exports = ProductsRepository;
