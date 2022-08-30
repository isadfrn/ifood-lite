const verifyIfUserIsAdmin = require("../utils/verifyIfUserIsAdmin");

class DishService {
  constructor(dishRepository, userRepository) {
    this.dishRepository = dishRepository;
    this.userRepository = userRepository;
  }

  async create({ loggedUser, name, description, price, category, ingredient }) {
    await verifyIfUserIsAdmin(this.userRepository, loggedUser);

    return await this.dishRepository.create({
      name,
      description,
      price,
      category,
      ingredient,
    });
  }
}

module.exports = DishService;
