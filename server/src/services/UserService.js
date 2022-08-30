const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

const { hash } = require("bcrypt");

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

    const userExists = await this.userRepository.findByEmail({ email });

    if (userExists) {
      throw new Error("Email already used");
    }

    const hashedPassword = await hash(password, 8);

    return await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async updateImage({ id, image }) {
    const diskStorage = new DiskStorage();

    const user = await this.userRepository.findById({ id });

    if (!user) {
      throw new Error("Only authenticated users can update an avatar", 401);
    }

    if (user.image) {
      await diskStorage.deleteFile(user.image);
    }

    const filename = await diskStorage.saveFile(image);

    user.image = filename;

    const updatedUser = await this.userRepository.updateImage({
      id,
      image: user.image,
    });
    return updatedUser;
  }
}

module.exports = UserService;
