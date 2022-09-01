const Error = require("../middlewares/Error");

async function userIsAdmin(repository, id) {
  const user = await repository.findById({ id: id });

  if (user.admin) {
    return;
  } else {
    throw new Error("You're not a admin user", 401);
  }
}

module.exports = userIsAdmin;
