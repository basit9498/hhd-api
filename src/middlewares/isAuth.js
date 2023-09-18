const Crypt = require("../helpers/encryption");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader || !authHeader.split(" ")[1]) {
    const error = new Error("Not Authenticated !");
    error.status = 401;
    throw error;
  }
  // Decrypt the token and store in req
  const tokenDecrypt = Crypt.decryptToken(authHeader.split(" ")[1]);
  req.token = tokenDecrypt;

  next();
};
