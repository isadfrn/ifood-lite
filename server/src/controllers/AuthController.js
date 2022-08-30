const UsersRepository = require("../repositories/UsersRepository");
const AuthService = require("../services/AuthService");

const usersRepository = new UsersRepository();
const authService = new AuthService(usersRepository);

class AuthController {
  async login(request, response) {
    const { email, password } = request.body;

    const loggedUser = await authService.login({ email, password });

    return response.json(loggedUser);
  }
}

module.exports = AuthController;
