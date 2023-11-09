const mongoose = require("mongoose");

const dbConnection = async () => {
  const uri =
    "mongodb+srv://aloneas47:38HpgXvutRe0T8vk@cluster0.bjd1tkm.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected :)");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
