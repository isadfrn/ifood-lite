const UsersRepository = require("../repositories/UsersRepository");
const IngredientsRepository = require("../repositories/IngredientsRepository");
const IngredientsService = require("../services/IngredientsService");

const usersRepository = new UsersRepository();
const ingredientsRepository = new IngredientsRepository();
const ingredientsService = new IngredientsService(
  ingredientsRepository,
  usersRepository
);

class IngredientsController {
  async create(request, response) {
    const loggedUserId = request.user.id;
    const { name, price, quantity } = request.body;

    const ingredientCreated = await ingredientsService.create(
      loggedUserId,
      name,
      price,
      quantity
    );

    return response.json(ingredientCreated);
  }

  async findAll(request, response) {
    const loggedUserId = request.user.id;

    const findedIngredients = await ingredientsService.findAll(loggedUserId);

    return response.json(findedIngredients);
  }

  async findById(request, response) {
    const loggedUserId = request.user.id;
    const idIngredientToFind = request.params;

    const findedIngredient = await ingredientsService.findById(
      loggedUserId,
      idIngredientToFind
    );

    return response.json(findedIngredient);
  }

  async update(request, response) {
    const loggedUserId = request.user.id;
    const idIngredientToUpdate = request.params;
    const { name, price, quantity } = request.body;

    const userUpdated = await ingredientsService.update(
      loggedUserId,
      idIngredientToUpdate,
      name,
      price,
      quantity
    );

    return response.json(userUpdated);
  }

  async delete(request, response) {
    const loggedUserId = request.user.id;
    const idIngredientToDelete = request.params;

    const deletedIngredient = await ingredientsService.delete(
      loggedUserId,
      idIngredientToDelete
    );

    return response.json(deletedIngredient);
  }
}

module.exports = IngredientsController;
