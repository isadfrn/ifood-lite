const UserService = require("../services/UserService");
const UserRepository = require("../repositories/UserRepository");

class UserController {
  async create(request, response) {
    const { name, email, password, passwordConfirmation } = request.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    const userCreated = await userService.create({
      name,
      email,
      password,
      passwordConfirmation,
    });
    return response.json(userCreated);
  }
}

module.exports = UserController;
