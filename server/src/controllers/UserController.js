const UserService = require("../services/UserService");
const UserRepository = require("../repositories/UserRepository");

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

class UserController {
  async create(request, response) {
    const { name, email, password, passwordConfirmation } = request.body;

    const userCreated = await userService.create({
      name,
      email,
      password,
      passwordConfirmation,
    });

    return response.json(userCreated);
  }

  async updateImage(request, response) {
    const id = request.user.id;
    const image = request.file.filename;

    const userWithImageUpdated = await userService.updateImage({
      id,
      image,
    });

    return response.json(userWithImageUpdated);
  }
}

module.exports = UserController;
