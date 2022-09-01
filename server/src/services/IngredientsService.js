const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");
const checkIfUserIsNotLogged = require("../utils/checkIfUserIsNotLogged");

class IngredientsService {
  constructor(ingredientsRepository, usersRepository) {
    this.ingredientsRepository = ingredientsRepository;
    this.usersRepository = usersRepository;
  }

  async create(loggedUserId, name, price, quantity) {
    checkIfUserIsNotLogged(this.usersRepository, loggedUserId);

    if (!name || !price || !quantity) {
      throw new Error("Mandatory field's not informed");
    }

    return await this.ingredientsRepository.create(name, price, quantity);
  }
}

module.exports = IngredientsService;
