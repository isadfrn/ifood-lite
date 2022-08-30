const DishRepository = require("../repositories/DishRepository");
const UserRepository = require("../repositories/UserRepository");
const DishService = require("../services/DishService");

const dishRepository = new DishRepository();
const userRepository = new UserRepository();
const dishService = new DishService(dishRepository, userRepository);

class DishController {
  async create(request, response) {
    const loggedUser = request.user.id;

    const { name, description, price, category, ingredient } = request.body;

    const dishCreated = await dishService.create({
      loggedUser,
      name,
      description,
      price,
      category,
      ingredient,
    });
    return response.json(dishCreated);
  }
}

module.exports = DishController;
