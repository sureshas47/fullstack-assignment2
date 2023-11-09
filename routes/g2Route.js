const createUserInformation = require("../controllers/createUserInfo");

const g2Route = (app) => {
  app.get("/g2", (req, res) => {
    res.render("g2");
  });
  app.post("/g2", (req, res) => {
    createUserInformation(req, res);
  });
};

module.exports = g2Route;
