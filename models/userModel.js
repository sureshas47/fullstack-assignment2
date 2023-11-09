const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user", // Default role is "user"
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
