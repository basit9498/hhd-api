const cors = require("cors");
const express = require("express");
const routes = require("./src/routes");
const connectToDatabase = require("./src/config/db.config");
const errorHandler = require("./src/middlewares/errorHandler");

require("dotenv").config();

const PORT = process.env.PORT || 5051;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(process.env.API_VERSION, routes);

app.use(errorHandler);

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server has been connected with port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => console.log("Database Connection Error!!!"));
