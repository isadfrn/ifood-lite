const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

const { hash, compare } = require("bcrypt");

class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async create({ name, email, password, passwordConfirmation }) {
    if (!name || !email || !password || !passwordConfirmation) {
      throw new Error("Mandatory field's not informed");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Typed password do not match");
    }

    const userExists = await this.usersRepository.findByEmail({ email });

    if (userExists) {
      throw new Error("Email already used");
    }

    const hashedPassword = await hash(password, 8);

    return await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async update({ id, name, password, passwordConfirmation }) {
    if (!name || !password || !passwordConfirmation) {
      throw new Error("Mandatory field's not informed");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Typed password do not match");
    }

    const hashedPassword = await hash(password, 8);

    return await this.usersRepository.update({
      id,
      name,
      password: hashedPassword,
    });
  }

  async updateImage({ id, image }) {
    const diskStorage = new DiskStorage();

    const user = await this.usersRepository.findById({ id });

    if (!user) {
      throw new Error("Only authenticated users can update an avatar", 401);
    }

    if (user.image) {
      await diskStorage.deleteFile(user.image);
    }

    const filename = await diskStorage.saveFile(image);

    user.image = filename;

    const updatedUser = await this.usersRepository.updateImage({
      id,
      image: user.image,
    });
    return updatedUser;
  }
}

module.exports = UsersService;
