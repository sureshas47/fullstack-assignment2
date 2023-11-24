const mongoose = require("mongoose");

const userTypes = ["Driver", "Examiner", "Admin"];
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "default",
  },
  lastName: {
    type: String,
    default: "default",
  },
  licenseNumber: {
    type: String,
    default: "default",
  },
  age: {
    type: String,
    default: "0",
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  userType: {
    type: String,
    enum: userTypes,
    default: "Driver",
  },
  car_details: {
    make: {
      type: String,
      default: "default",
    },
    model: {
      type: String,
      default: "default",
    },
    year: {
      type: String,
      default: "0",
    },
    plateNumber: {
      type: String,
      default: "default",
    },
  },
  dob: {
    type: String,
    default: "0",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
