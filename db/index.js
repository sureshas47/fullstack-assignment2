const mongoose = require("mongoose");
const {} = require("dotenv").config();

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected :)");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
