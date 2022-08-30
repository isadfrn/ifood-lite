const Error = require("../middlewares/Error");
const authConfig = require("../configs/auth");

const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

class AuthService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async login({ email, password }) {
    const user = await this.usersRepository.findByEmail({ email });

    if (!user) {
      throw new Error("Invalid credentials", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Invalid credentials", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    delete user.password;

    return { user, token };
  }
}

module.exports = AuthService;
