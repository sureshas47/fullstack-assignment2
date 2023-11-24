const UserModel = require("../models/userModel");
const updateUserInformation = async (req, res) => {
  try {
    const id = req.params.userId;

    const user = await UserModel.findById(id).exec();

    if (user) {
      user.car_details = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        plateNumber: req.body.plateNumber,
      };
      const updatedUserInfo = await user.save();
      console.log("User information updated successfully", updatedUserInfo);
      res.redirect("/g");
    }
  } catch (error) {
    console.log("Error while updating user information:", error);
  }
};

module.exports = updateUserInformation;
