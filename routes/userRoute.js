const { createUser, login } = require("../controllers/user");

const userRoute = (app) => {
  app.post("/signup", (req, res) => {
    createUser(req, res);
  });

  app.post("/login", (req, res) => {
    login(req, res);
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/", (req, res) => {
    res.render("home");
  });
};

module.exports = { userRoute };
