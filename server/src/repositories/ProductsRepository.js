const prisma = require("../../prisma/client");

class ProductsRepository {
  async create({ name, description, price, ingredients }) {
    return await prisma.products.create({
      data: { name, description, price, ingredients },
    });
  }

  async updateImage({ id, image }) {
    return await prisma.products.update({
      where: { id },
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
      where: { id },
    });
  }
}

module.exports = ProductsRepository;
