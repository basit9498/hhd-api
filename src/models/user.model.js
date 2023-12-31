const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  fb_id: {
    type: Number,
    required: true,
  },
  fb_encrypted_token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
