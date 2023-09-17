// register
const register = async (req, res, next) => {
  res.json({
    message: "user has been register!",
  });
};

// login
const login = async (req, res, next) => {
  res.json({
    message: "user has been Login!",
  });
};

module.exports = {
  login,
  register,
};
