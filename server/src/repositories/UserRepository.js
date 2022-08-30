const prisma = require("../../prisma/client");
const userSelect = require("../utils/userSelect");

class UserRepository {
  async create({ name, email, password }) {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: userSelect,
    });
  }

  async findAll() {
    return await prisma.user.findMany({ select: userSelect });
  }

  async findByEmail({ email }) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async findById({ id }) {
    return await prisma.user.findUnique({
      where: { id },
      select: userSelect,
    });
  }

  async updateImage({ id, image }) {
    return await prisma.user.update({
      where: { id },
      data: {
        image,
      },
      select: userSelect,
    });
  }
}

module.exports = UserRepository;
