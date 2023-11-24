const UserModel = require("../models/userModel.js");
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

    // current logged-in user
    const user = await UserModel.findById(req.session.userId).exec();

    if (user) {
      // Check if G2 data already exists, if yes, update; if not, create
      if (user.firstName === "default" || user.lastName === "default") {
        user.firstName = firstName;
        user.lastName = lastName;
        user.licenseNumber = hashedLicenseNumber;
        user.age = age;
        user.dob = dob;
        user.car_details = {
          make: make,
          model: model,
          year: year,
          plateNumber: plateNumber,
        };
        const updatedUserInfo = await user.save();
        console.log("updatedUserInfo", updatedUserInfo);
        res.redirect("/g");
      } else {
        // G2 data already exists
        res.send("G2 data already exists");
      }
    } else {
      res.send("error while creating user information");
    }
  } catch (error) {
    console.error("Error while saving/updating user information:", error);
  }
};

module.exports = createUserInformation;
