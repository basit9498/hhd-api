const FBService = require("../services/fb.service");

const me = async (req, res, next) => {
  try {
    const user = await FBService.getFBUserMe(req.token);
    res.status(200).json({
      message: "User Data",
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  me,
};
