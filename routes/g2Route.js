const createUserInformation = require("../controllers/createUserInfo.js");
const {
  protectedRouteMiddleware,
} = require("../middleware/authMiddleware/authMiddleware");

const g2Route = (app) => {
  app.get("/g2", protectedRouteMiddleware, (req, res) => {
    res.render("g2");
  });

  app.post("/g2", (req, res) => {
    createUserInformation(req, res);
  });
};

module.exports = g2Route;
