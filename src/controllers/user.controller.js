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

const getInsights = async (req, res, next) => {
  try {
    const adAccountInsights = await FBService.getFBAdAccountInsights(req.token);
    res.status(200).json({
      message: "FaceBook user's advertising accounts",
      data: adAccountInsights,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  me,
  getInsights,
};
