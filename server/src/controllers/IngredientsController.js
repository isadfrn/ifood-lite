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
}

module.exports = IngredientsController;
