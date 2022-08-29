const { hash } = require("bcrypt");
const Error = require("../middlewares/Error");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ name, email, password, passwordConfirmation }) {
    if (!name || !email || !password || !passwordConfirmation) {
      throw new Error("Mandatory field's not informed");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Typed password do not match");
    }

    const emailExists = await this.userRepository.emailExists({ email });

    if (emailExists) {
      throw new Error("Email already used");
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    delete userCreated.password;

    return userCreated;
  }
}

module.exports = UserService;
