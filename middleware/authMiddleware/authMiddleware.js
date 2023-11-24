const UserModel = require("../../models/userModel");
const { isUserLoggedIn } = require("../../controllers/logout.js");

const authMiddleware = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId); // userId is created during login, it would have stored in both server or client
    console.log(user);
    if (!user) {
      return res.redirect("login"); // show login when user is not logged in
    } else {
      next(); // call next middleware if user logged in, i.e. flow goes back to the homeRoute.js, and execute callback function, passed after the authMiddleware, thats why we are rendering home.ejs
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

const protectedRouteMiddleware = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId);
    if (user && user.userType === "Driver") {
      next(); // If userType is 'Driver', allow access to the routes
    } else {
      res.status(403).send("Unauthorized"); // If userType is not 'Driver', deny access
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

// Middleware to check if user is logged in
const isLoggedInMiddleware = (req, res, next) => {
  res.locals.isUserLoggedIn = isUserLoggedIn(req, res);
  next();
};

module.exports = {
  authMiddleware,
  protectedRouteMiddleware,
  isLoggedInMiddleware,
};
