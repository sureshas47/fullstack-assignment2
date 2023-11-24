const { createUser, login, logout } = require("../controllers/user");

const userRoute = (app) => {
  app.post("/signup", (req, res) => {
    createUser(req, res);
  });

  app.post("/login", (req, res) => {
    login(req, res);
  });

  app.get("/login", async (req, res) => {
    const user = await req.session.userId;
    res.render("login", { isUserLoggenIn: user || {} });
  });

  app.post("/logout", (req, res) => {
    logout(req, res);
  });
};

module.exports = { userRoute };
