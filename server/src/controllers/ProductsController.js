const UsersRepository = require("../repositories/UsersRepository");
const ProductsRepository = require("../repositories/ProductsRepository");
const ProductsService = require("../services/ProductsService");

const usersRepository = new UsersRepository();
const productsRepository = new ProductsRepository();
const productsService = new ProductsService(
  productsRepository,
  usersRepository
);

class ProductsController {
  async create(request, response) {
    const loggedUserId = request.user.id;
    const { name, description, price, category, ingredients } = request.body;

    const productCreated = await productsService.create(
      loggedUserId,
      name,
      description,
      price,
      category,
      ingredients
    );

    return response.json(productCreated);
  }
}

module.exports = ProductsController;
