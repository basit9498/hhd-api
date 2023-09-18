const CryptoJS = require("crypto-js");

function encryptToken(token) {
  const encryptedToken = CryptoJS.AES.encrypt(
    token,
    process.env.ENCRYPT_SECRET_KEY
  ).toString();
  return encryptedToken;
}

function decryptToken(encryptedToken) {
  const bytes = CryptoJS.AES.decrypt(
    encryptedToken,
    process.env.ENCRYPT_SECRET_KEY
  );
  const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedToken;
}

module.exports = { encryptToken, decryptToken };
