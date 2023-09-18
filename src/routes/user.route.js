const express = require("express");
const UserController = require("../controllers/user.controller");
const isAuth = require("../middlewares/isAuth");

const route = express.Router();

route.get("/me", isAuth, UserController.me);
route.get("/fb-insights", isAuth, UserController.getInsights);

module.exports = route;
