const prisma = require("../../prisma/client");

class UserRepository {
  async create({ name, email, password }) {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  async emailExists({ email }) {
    return await prisma.user.findUnique({ where: { email } });
  }
}

module.exports = UserRepository;
