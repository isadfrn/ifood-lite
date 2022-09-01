const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

class IngredientsService {
  constructor(ingredientsRepository, usersRepository) {
    this.ingredientsRepository = ingredientsRepository;
    this.usersRepository = usersRepository;
  }

  async create(loggedUserId, name, price, quantity) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!name || !price || !quantity) {
      throw new Error("Mandatory field's not informed");
    }

    const existedIngredient = await this.ingredientsRepository.findByName(name);

    if (existedIngredient) {
      throw new Error("Ingredient already exists");
    }

    return await this.ingredientsRepository.create(name, price, quantity);
  }

  async findAll(loggedUserId) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    return await this.ingredientsRepository.findAll();
  }

  async findById(loggedUserId, idIngredientToFind) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!idIngredientToFind) {
      throw new Error("Mandatory field's not informed");
    }

    const ingredient = await this.ingredientsRepository.findById(
      idIngredientToFind.id
    );

    if (!ingredient) {
      throw new Error("Can't find ingredient");
    } else {
      return ingredient;
    }
  }

  async update(loggedUserId, idIngredientToUpdate, name, price, quantity) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!idIngredientToUpdate || !name || !price || !quantity) {
      throw new Error("Mandatory field's not informed");
    }

    const ingredientExists = await this.ingredientsRepository.findByName(name);

    const ingredient = await this.ingredientsRepository.findById(
      idIngredientToUpdate.id
    );

    if (!ingredient) {
      throw new Error("Can't find ingredient");
    }

    if (
      ingredientExists &&
      ingredientExists.name === name &&
      ingredient.name !== name
    ) {
      throw new Error("Ingredient name already exist");
    }

    return await this.ingredientsRepository.update(
      idIngredientToUpdate.id,
      name,
      price,
      quantity
    );
  }

  async delete(loggedUserId, idIngredientToDelete) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!idIngredientToDelete) {
      throw new Error("Mandatory field's not informed");
    }

    const ingredientExists = await this.ingredientsRepository.findById(
      idIngredientToDelete.id
    );

    if (!ingredientExists) {
      throw new Error("Ingredient not found", 404);
    }

    return await this.ingredientsRepository.delete(idIngredientToDelete.id);
  }
}

module.exports = IngredientsService;
