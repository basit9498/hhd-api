const express = require("express");
const connectToDatabase = require("./src/config/db.config");
const routes = require("./src/routes");

require("dotenv").config();

const PORT = process.env.PORT || 5051;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(process.env.API_VERSION, routes);

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server has been connected with port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => console.log("Database Connection Error!!!"));
