const fetchUserInformation = require("../controllers/fetchUserInfo");
const updateUserInformation = require("../controllers/updateUserInfo");

const gRoute = (app) => {
  app.get("/g", (req, res) => {
    res.render("g", { userInfo: {} });
  });

  app.post("/g", (req, res) => {
    fetchUserInformation(req, res);
  });

  app.post("/g/:userId", (req, res) => {
    updateUserInformation(req, res);
  });
};

module.exports = gRoute;
