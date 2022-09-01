const Error = require("../middlewares/Error");

async function checkIfUserIsNotLogged(repository, id) {
  const user = await repository.findById(id);

  if (!id || !user) {
    throw new Error("User not logged");
  } else return;
}

module.exports = checkIfUserIsNotLogged;
