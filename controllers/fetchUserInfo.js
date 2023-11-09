const UserInfoModel = require("../models/userInformationModel");

const fetchUserInformation = async (req, res) => {
  try {
    const user = await UserInfoModel.findOne({
      licenseNumber: req.body.licenseNumber,
    });
    res.render("g", { userInfo: user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchUserInformation;
