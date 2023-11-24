const fetchUserInformation = require("../controllers/fetchUserInfo");
const updateUserInformation = require("../controllers/updateUserInfo");
const {
  protectedRouteMiddleware,
} = require("../middleware/authMiddleware/authMiddleware");
const UserModel = require("../models/userModel.js");
const { isUserDataDefault } = require("../utility/isUserDataDefault"); // utility

const gRoute = (app) => {
  app.get("/g", protectedRouteMiddleware, async (req, res) => {
    try {
      // Check if the user is logged in
      if (!req.session.userId) {
        return res.status(403).send("Forbidden: User not logged in");
      }
      const userInfo = await UserModel.findById(req.session.userId);

      // Check if all data is default
      if (isUserDataDefault(userInfo)) {
        // Redirect to G2_Page to add information
        console.log("User data is default so we are redirecting to G2_Page");
        return res.redirect("/g2");
      }

      fetchUserInformation(req, res);
    } catch (error) {
      console.error("Error while fetching user information:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post("/g/:userId", async (req, res) => {
    try {
      await updateUserInformation(req, res);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = gRoute;
