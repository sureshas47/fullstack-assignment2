const mongoose = require("mongoose");

// define the userInfoSchema
const userInfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  plateNumber: {
    type: String,
    required: true,
  },
});

// create the model
const UserInfoModel = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfoModel;
