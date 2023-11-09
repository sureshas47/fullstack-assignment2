const homeRoute = (app) => {
  app.get("/", (req, res) => {
    res.render("home");
  });
};
module.exports = homeRoute;
