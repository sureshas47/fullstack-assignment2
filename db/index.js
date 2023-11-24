const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  const URI = process.env.URI;
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected :)");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
