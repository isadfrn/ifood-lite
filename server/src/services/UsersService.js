const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");
const checkIfUserIsNotLogged = require("../utils/checkIfUserIsNotLogged");

const { hash } = require("bcrypt");

class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async create(name, email, password, passwordConfirmation) {
    if (!name || !email || !password || !passwordConfirmation) {
      throw new Error("Mandatory field's not informed");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Typed password do not match");
    }

    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email already used");
    }

    const hashedPassword = await hash(password, 8);

    return await this.usersRepository.create(name, email, hashedPassword);
  }

  async updateImage(loggedUserId, image) {
    const user = await this.usersRepository.findById(loggedUserId);

    if (!loggedUserId || !user) {
      throw new Error("User not logged");
    }

    if (!image) {
      throw new Error("Mandatory field's not informed");
    }

    const diskStorage = new DiskStorage();

    if (user.image) {
      await diskStorage.deleteFile(user.image);
    }

    const filename = await diskStorage.saveFile(image);

    user.image = filename;

    const updatedUser = await this.usersRepository.updateImage(
      loggedUserId,
      user.image
    );
    return updatedUser;
  }

  async update(loggedUserId, name, email, password, passwordConfirmation) {
    checkIfUserIsNotLogged(this.usersRepository, loggedUserId);

    if (!name || !email || !password || !passwordConfirmation) {
      throw new Error("Mandatory field's not informed");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Typed password do not match");
    }

    const hashedPassword = await hash(password, 8);

    return this.usersRepository.update(
      loggedUserId,
      name,
      email,
      hashedPassword
    );
  }

  async delete(loggedUserId) {
    checkIfUserIsNotLogged(this.usersRepository, loggedUserId);

    return await this.usersRepository.delete(loggedUserId);
  }

  async findAll(loggedUserId) {
    checkIfUserIsNotLogged(this.usersRepository, loggedUserId);

    return await this.usersRepository.findAll();
  }

  async findById(loggedUserId, userIdToFind) {
    checkIfUserIsNotLogged(this.usersRepository, loggedUserId);

    if (!userIdToFind) {
      throw new Error("Mandatory field's not informed");
    }

    return await this.usersRepository.findById(userIdToFind.id);
  }
}

module.exports = UsersService;
