const UserInfoModel = require("../models/userInformationModel");
const bcrypt = require("bcrypt");

const createUserInformation = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      licenseNumber,
      age,
      dob,
      make,
      model,
      year,
      plateNumber,
    } = req.body;

    // Hash the license number using bcrypt
    const hashedLicenseNumber = await bcrypt.hash(licenseNumber, 10);

    const userInfo = new UserInfoModel({
      firstName,
      lastName,
      licenseNumber: hashedLicenseNumber,
      age,
      dob,
      make,
      model,
      year,
      plateNumber,
    });
    await userInfo.save();
    // res.render("g2");
    res.redirect("/g");
  } catch (error) {
    console.error("Error while saving user information:", error);
  }
};

module.exports = createUserInformation;
