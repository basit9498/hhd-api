const express = require("express");
const AuthController = require("../controllers/auth.controller");
const route = express.Router();

// auth routes
route.post("/register", AuthController.register);
route.post("/login", AuthController.login);

module.exports = route;
