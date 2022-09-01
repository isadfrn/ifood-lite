const UsersRepository = require("../repositories/UsersRepository");
const UsersService = require("../services/UsersService");

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);

class UsersController {
  async create(request, response) {
    const { name, email, password, passwordConfirmation } = request.body;

    const userCreated = await usersService.create(
      name,
      email,
      password,
      passwordConfirmation
    );

    return response.json(userCreated);
  }

  async updateImage(request, response) {
    const loggedUserId = request.user.id;
    const image = request.file.filename;

    const userWithImageUpdated = await usersService.updateImage(
      loggedUserId,
      image
    );

    return response.json(userWithImageUpdated);
  }

  async update(request, response) {
    const loggedUserId = request.user.id;
    const { name, email, password, passwordConfirmation } = request.body;

    const userUpdated = await usersService.update(
      loggedUserId,
      name,
      email,
      password,
      passwordConfirmation
    );

    return response.json(userUpdated);
  }

  async delete(request, response) {
    const loggedUserId = request.user.id;

    const deletedUser = await usersService.delete(loggedUserId);

    return response.json(deletedUser);
  }

  async findAll(request, response) {
    const loggedUserId = request.user.id;
    const findedUser = await usersService.findAll(loggedUserId);
    return response.json(findedUser);
  }

  async findById(request, response) {
    const loggedUserId = request.user.id;
    const userIdToFind = request.params;

    const findedUser = await usersService.findById(loggedUserId, userIdToFind);
    return response.json(findedUser);
  }
}

module.exports = UsersController;
