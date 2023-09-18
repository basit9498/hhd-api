const express = require("express");
const AuthController = require("../controllers/auth.controller");
const isAuth = require("../middlewares/isAuth");
const route = express.Router();

// auth routes
route.post("/register", AuthController.register);
route.post("/login", AuthController.login);
route.get("/fb-exchange-token", isAuth, AuthController.fbExchangeToken);

module.exports = route;
