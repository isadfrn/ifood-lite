const Error = require("../middlewares/Error");

async function verifyIfUserIsAdmin(repository, id) {
  const user = await repository.findById({ id: id });

  if (user.admin) {
    return true;
  } else {
    throw new Error("You're not a admin user", 401);
  }
}

module.exports = verifyIfUserIsAdmin;
