const {
  authMiddleware,
} = require("../middleware/authMiddleware/authMiddleware");

const homeRoute = (app) => {
  //    if "/" route comes, call authMiddleware
  app.get("/", authMiddleware, async (req, res) => {
    res.render("home"); // render home.ejs
  });

  // Logout route
  app.get("/logout", async (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        res.sendStatus(500);
      } else {
        // Clear cookies
        res.clearCookie("connect.sid");
        res.redirect("/login"); // Redirect to login after logout
      }
    });
  });
};
module.exports = homeRoute;
