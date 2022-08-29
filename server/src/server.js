require("express-async-errors");
require("dotenv/config");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const Error = require("./middlewares/Error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof Error) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
