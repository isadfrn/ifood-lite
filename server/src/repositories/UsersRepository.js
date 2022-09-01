const prisma = require("../../prisma/client");
const userWithNoPassword = require("../utils/userWithNoPassword");

class UsersRepository {
  async create(name, email, password) {
    return await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
      select: userWithNoPassword,
    });
  }

  async findByEmail(email) {
    return await prisma.users.findFirst({
      where: {
        email,
      },
      select: userWithNoPassword,
    });
  }

  async findById(id) {
    return await prisma.users.findUnique({
      where: { id },
      select: userWithNoPassword,
    });
  }

  async findByEmailWithPassword(email) {
    return await prisma.users.findFirst({
      where: { email },
    });
  }

  async updateImage(id, image) {
    return await prisma.users.update({
      where: { id },
      data: {
        image,
      },
      select: userWithNoPassword,
    });
  }

  async update(id, name, email, password) {
    return await prisma.users.update({
      where: { id },
      data: { name, email, password },
      select: userWithNoPassword,
    });
  }

  async delete(id) {
    return await prisma.users.delete({
      where: { id },
      select: userWithNoPassword,
    });
  }

  async findAll() {
    return await prisma.users.findMany({ select: userWithNoPassword });
  }
}

module.exports = UsersRepository;
