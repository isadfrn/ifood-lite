const UsersRepository = require("../repositories/UsersRepository");
const UsersService = require("../services/UsersService");

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);

class UsersController {
  async create(request, response) {
    const { name, email, password, passwordConfirmation } = request.body;

    const userCreated = await usersService.create({
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

    const userWithImageUpdated = await usersService.updateImage({
      id,
      image,
    });

    return response.json(userWithImageUpdated);
  }

  async update(request, response) {
    const id = request.user.id;
    const { name, password, passwordConfirmation } = request.body;

    const userUpdated = await usersService.update({
      id,
      name,
      password,
      passwordConfirmation,
    });

    return response.json(userUpdated);
  }
}

module.exports = UsersController;
