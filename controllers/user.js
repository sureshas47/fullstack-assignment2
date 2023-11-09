const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    // retrieve form data from req.body
    const { name, email, password, role } = req.body;
    // check if user already exists
    const isUser = await UserModel.findOne({ email });
    if (isUser) {
      res.send("User already exists");
    } else {
      // create new user
      const user = new UserModel({
        name,
        email,
        password,
        role,
      });
      await user.save();
      res.render("login");
    }
  } catch (error) {
    res.send(error);
  }
};
const login = async (req, res) => {
  //   res.render("login");
  try {
    // get user data from input
    const { email, password } = req.body;
    // get user if exists
    const user = await UserModel.findOne({ email });

    if (user.password !== password) {
      res.render("login", { message: "Invalid email or password" });
    }
    // successfull login
    res.render("home");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createUser, login };
