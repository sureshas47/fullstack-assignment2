// const UserInfoModel = require("../models/userInformationModel");
// const bcrypt = require("bcrypt");

// const fetchUserInformation = async (req, res) => {
//   try {
//     const user = await UserInfoModel.findOne({
//       licenseNumber: req.body.licenseNumber,
//     });
//     res.render("g", { userInfo: user });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = fetchUserInformation;
const UserModel = require("../models/userModel");

const fetchUserInformation = async (req, res) => {
  try {
    const isUser = await UserModel.findById(req.session.userId);
    res.render("g", { userInfo: isUser || {} });
  } catch (error) {
    console.log("Error while fetching user information:", error);
  }
};
module.exports = fetchUserInformation;
