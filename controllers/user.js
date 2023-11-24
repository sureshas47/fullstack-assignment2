const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// const createUser = async (req, res) => {
//   try {
//     // retrieve form data from req.body
//     const { username, password, repeatPassword, userType } = req.body;
//     // check if user already exists
//     const isUser = await UserModel.findOne({ username });
//     if (isUser) {
//       res.send("User already exists");
//     } else if (password !== repeatPassword) {
//       res.send("Passwords did not match");
//     } else {
//       // create new user

//       const user = new UserModel({
//         username,
//         password: await bcrypt.hash(password, 10),
//         userType,
//       });
//       await user.save();
//       res.redirect("login");
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

const createUser = async (req, res) => {
  try {
    // retrieve form data from req.body
    const { username, password, repeatPassword, userType } = req.body;
    // check if user already exists
    const isUser = await UserModel.findOne({ userName: username });

    if (isUser) {
      res.send("User already exists");
    } else if (password !== repeatPassword) {
      res.send("Passwords did not match");
    } else {
      // create new user
      const user = new UserModel({
        userName: username,
        password: await bcrypt.hash(password, 10),
        userType,
      });
      await user.save();
      res.redirect("login");
    }
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  //   res.render("login");
  try {
    const { username, password } = req.body;

    const isUser = await UserModel.findOne({ userName: username });
    console.log(isUser, "IS_USER");
    if (isUser) {
      const isMatch = await bcrypt.compare(password, isUser.password);
      if (isMatch) {
        console.log("Login successful");
        req.session.userId = isUser._id; // store user id in session
        // res.render("home");
        if (
          isUser.userType === "Driver" &&
          isUser.firstName === "default" &&
          isUser.lastName === "default" &&
          isUser.car_details.make === "default"
        ) {
          // Redirect to G2_page for adding information
          res.redirect("/g2");
        } else if (
          isUser.userType === "Examiner" &&
          isUser.firstName === "default" &&
          isUser.lastName === "default" &&
          isUser.car_details.make === "default"
        ) {
          // Redirect to Home
          res.redirect("/");
        } else if (
          isUser.userType === "Admin" &&
          isUser.firstName === "default" &&
          isUser.lastName === "default" &&
          isUser.car_details.make === "default"
        ) {
          // Redirect to Home
          res.redirect("/");
        } else {
          res.redirect("/g");
        }
      } else {
        console.log("Login failed");
        res.render("login", { message: "Invalid email or password" });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};

const logout = async (req, res) => {
  req.session.destroy();

  console.log("logout");
  res.redirect("/login");
};

module.exports = { createUser, login, logout };
