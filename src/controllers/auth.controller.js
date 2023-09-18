const Crypt = require("../helpers/encryption");
const UserModel = require("../models/user.model");
const FBService = require("../services/fb.service");

// register
const register = async (req, res, next) => {
  res.json({
    message: "user has been register!",
  });
};

// login
const login = async (req, res, next) => {
  try {
    const { userID, name, email, picture, token } = req.body;

    if (!userID) {
      const error = new Error("UserID is Required!!!");
      error.status = 404;
      throw error;
    }

    // Encrypt Token
    const fbEncryptedToken = Crypt.encryptToken(token);

    // Check if User is a new or old user
    let isUser = await UserModel.findOne({ fb_id: userID });

    if (isUser) {
      isUser.fb_encrypted_token = fbEncryptedToken;
      await isUser.save();
    } else {
      isUser = new UserModel({
        name,
        email,
        avatar: picture,
        fb_id: userID,
        fb_encrypted_token: fbEncryptedToken,
      });
      await isUser.save();
    }
    // Send User Data is a response
    const user = {
      name: isUser.name,
      email: isUser.email,
      fb_id: isUser.fb_id,
      picture: { data: { url: isUser.avatar } },
    };

    // send response
    res.json({
      message: "User has been Login!",
      user,
      token: fbEncryptedToken,
    });
  } catch (err) {
    next(err);
  }
};

// Facebook exchange Long-Lived Token
const fbExchangeToken = async (req, res, next) => {
  try {
    // Request for new token
    const updateToken = await FBService.getFBLongLiveToken(
      process.env.APP_ID,
      process.env.APP_SECRET,
      req.token
    );

    // get UserId base on access Token to save new Token
    const fbUserId = await FBService.getFBUserMe(updateToken?.access_token);

    // Encrypt Token
    const fbEncryptedToken = Crypt.encryptToken(updateToken?.access_token);

    // find User and update Token
    await UserModel.findOneAndUpdate(
      { fb_id: fbUserId.id },
      { $set: { fb_encrypted_token: fbEncryptedToken } }
    );

    res.json({
      message: "Token Updated",
      token: fbEncryptedToken,
    });
  } catch (err) {
    console.log("err", err);
    next(err);
  }
};
module.exports = {
  register,
  login,
  fbExchangeToken,
};
