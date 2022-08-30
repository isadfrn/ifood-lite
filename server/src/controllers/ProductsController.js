const ProductsRepository = require("../repositories/ProductsRepository");
const ProductsService = require("../services/ProductsService");

const productsRepository = new ProductsRepository();
const productsService = new ProductsService(productsRepository);

class ProductsController {
  async create(request, response) {
    const { name, description, price, ingredients } = request.body;

    const productCreated = await productsService.create({
      name,
      description,
      price,
      ingredients,
    });

    return response.json(productCreated);
  }

  /*async updateImage(request, response) {
    const id = request.user.id;
    const image = request.file.filename;

    const userWithImageUpdated = await usersService.updateImage({
      id,
      image,
    });

    return response.json(userWithImageUpdated);
  }*/

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
