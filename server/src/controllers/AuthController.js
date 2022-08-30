const UserRepository = require("../repositories/UserRepository");
const AuthService = require("../services/AuthService");

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

class AuthController {
  async login(request, response) {
    const { email, password } = request.body;

    const loggedUser = await authService.login({ email, password });

    return response.json(loggedUser);
  }
}

module.exports = AuthController;
