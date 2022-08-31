const ProductsRepository = require("../repositories/ProductsRepository");
const ProductsService = require("../services/ProductsService");

const productsRepository = new ProductsRepository();
const productsService = new ProductsService(productsRepository);

class ProductsController {
  async create(request, response) {
    const { name, description, price, ingredients, category } = request.body;

    const productCreated = await productsService.create({
      name,
      description,
      price,
      ingredients,
      category,
    });

    return response.json(productCreated);
  }

  async updateImage(request, response) {
    const productId = request.params;
    const image = request.file.filename;

    const productsWithImageUpdated = await productsService.updateImage({
      id: productId,
      image,
    });

    return response.json(productsWithImageUpdated);
  }

  /*async update(request, response) {
    const id = request.user.id;
    const { name, password, passwordConfirmation } = request.body;

    const userUpdated = await usersService.update({
      id,
      name,
      password,
      passwordConfirmation,
    });

    return response.json(userUpdated);
  }*/
}

module.exports = ProductsController;
