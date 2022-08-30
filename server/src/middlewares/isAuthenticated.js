const { verify } = require("jsonwebtoken");
const Error = require("../middlewares/Error");
const authConfig = require("../configs/auth");

function isAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("No JWT token finded", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    request.user = {
      id: user_id,
    };
    return next();
  } catch {
    throw new Error("Invalid JWT token", 401);
  }
}

module.exports = isAuthenticated;
