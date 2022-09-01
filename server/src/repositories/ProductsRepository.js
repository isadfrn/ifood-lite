const prisma = require("../../prisma/client");

class ProductsRepository {
  async create(name, description, price, category, ingredients) {
    if (!ingredients) {
      return await prisma.products.create({
        data: {
          name,
          description,
          price,
          category,
        },
      });
    }
    await prisma.products.create({
      data: {
        name,
        description,
        price,
        category,
        ingredients: {
          create: ingredients.map((item) => ({ ingredientId: item })),
        },
      },
    });
  }
}

module.exports = ProductsRepository;
