// package import
const express = require("express");
const bodyParser = require("body-parser");

// local import
const dbConnection = require("./db/index");
const { userRoute } = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");
const gRoute = require("./routes/gRoute");
const g2Route = require("./routes/g2Route");

const app = express();
app.use(express.static("public"));

// informs express app to use EJS for rendering dynamic views in web application
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse application/json

dbConnection(); // database connection

homeRoute(app); // home route
gRoute(app); // g route
g2Route(app); // g2 route
userRoute(app); // login route

// node server
const port = 7080;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
