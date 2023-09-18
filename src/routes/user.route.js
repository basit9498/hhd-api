const express = require("express");
const UserController = require("../controllers/user.controller");
const isAuth = require("../middlewares/isAuth");

const route = express.Router();

route.get("/me", isAuth, UserController.me);

module.exports = route;
