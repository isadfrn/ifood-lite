const prisma = require("../../prisma/client");
const userWithNoPassword = require("../utils/userWithNoPassword");

class UsersRepository {
  async create({ name, email, password }) {
    return await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
      select: userWithNoPassword,
    });
  }

  async update({ id, name, password }) {
    return await prisma.users.update({
      where: { id },
      data: { name, password },
      select: userWithNoPassword,
    });
  }

  async findAll() {
    return await prisma.users.findMany({ select: userWithNoPassword });
  }

  async findByEmail({ email }) {
    return await prisma.users.findUnique({
      where: { email },
    });
  }

  async findById({ id }) {
    return await prisma.users.findUnique({
      where: { id },
      select: userWithNoPassword,
    });
  }

  async updateImage({ id, image }) {
    return await prisma.users.update({
      where: { id },
      data: {
        image,
      },
      select: userWithNoPassword,
    });
  }
}

module.exports = UsersRepository;
