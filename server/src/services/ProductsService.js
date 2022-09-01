const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

class IngredientsService {
  constructor(productsRepository, usersRepository) {
    this.productsRepository = productsRepository;
    this.usersRepository = usersRepository;
  }

  async create(loggedUserId, name, description, price, category, ingredients) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!name || !description || !price || !category) {
      throw new Error("Mandatory field's not informed");
    }

    return await this.productsRepository.create(
      name,
      description,
      price,
      category,
      ingredients
    );
  }
}

module.exports = IngredientsService;
