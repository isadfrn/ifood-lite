const IngredientRepository = require("../repositories/IngredientRepository");
const UserRepository = require("../repositories/UserRepository");
const IngredientService = require("../services/IngredientService");

const ingredientRepository = new IngredientRepository();
const userRepository = new UserRepository();
const ingredientService = new IngredientService(
  ingredientRepository,
  userRepository
);

class IngredientController {
  async create(request, response) {
    const loggedUser = request.user.id;

    const { name, price } = request.body;

    const ingredientCreated = await ingredientService.create({
      loggedUser,
      name,
      price,
    });
    return response.json(ingredientCreated);
  }

  async updateImage(request, response) {
    const loggedUser = request.user.id;
    const id = request.params;
    const image = request.file.filename;

    const ingredientWithImageUpdated = await ingredientService.updateImage({
      loggedUser,
      id,
      image,
    });

    return response.json(ingredientWithImageUpdated);
  }
}

module.exports = IngredientController;
