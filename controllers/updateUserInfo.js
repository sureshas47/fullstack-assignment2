const UserInfoModel = require("../models/userInformationModel");
const updateUserInformation = async (req, res) => {
  try {
    const id = req.params.userId;

    const userData = {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      plateNumber: req.body.plateNumber,
    };

    const userInfo = await UserInfoModel.findByIdAndUpdate(id, userData, {
      new: true,
    });
    res.redirect("/g");
  } catch (error) {
    console.error("Error while updating user information:", error);
  }
};

module.exports = updateUserInformation;
