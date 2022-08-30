const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");
const verifyIfUserIsAdmin = require("../utils/verifyIfUserIsAdmin");

class IngredientService {
  constructor(ingredientRepository, userRepository) {
    this.ingredientRepository = ingredientRepository;
    this.userRepository = userRepository;
  }

  async create({ name, price, loggedUser }) {
    await verifyIfUserIsAdmin(this.userRepository, loggedUser);

    const lowerCaseName = name.toLowerCase();

    const ingredient = await this.ingredientRepository.findByName({
      name: lowerCaseName,
    });

    if (ingredient) {
      throw new Error("Ingredient already exists");
    }

    return await this.ingredientRepository.create({
      name: lowerCaseName,
      price,
    });
  }

  async updateImage({ id, image, loggedUser }) {
    await verifyIfUserIsAdmin(this.userRepository, loggedUser);

    const diskStorage = new DiskStorage();

    const ingredient = await this.ingredientRepository.findById({ id: id.id });

    if (!ingredient) {
      throw new Error("This ingredient doesn't exist", 401);
    }

    if (ingredient.image) {
      await diskStorage.deleteFile(ingredient.image);
    }

    const filename = await diskStorage.saveFile(image);

    ingredient.image = filename;

    const extractedId = id.id;

    const updatedIngredient = await this.ingredientRepository.updateImage({
      id: extractedId,
      image: ingredient.image,
    });
    return updatedIngredient;
  }
}

module.exports = IngredientService;
