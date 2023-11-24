// package import
const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");

// local import
require("dotenv").config();
const dbConnection = require("./db/index");
const { userRoute } = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");
const gRoute = require("./routes/gRoute");
const g2Route = require("./routes/g2Route");
const {
  isLoggedInMiddleware,
} = require("./middleware/authMiddleware/authMiddleware.js");

const app = express();
app.use(express.static("public"));

// informs express app to use EJS for rendering dynamic views in web application
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse application/json

dbConnection(); // database connection

// session
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// middleware using
app.use((req, res, next) => {
  isLoggedInMiddleware(req, res, next);
});

// routes
homeRoute(app); // home route
gRoute(app); // g route
g2Route(app); // g2 route
userRoute(app); // login route

// node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
