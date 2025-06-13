const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ejs_mongodb");

const userSchema = new mongoose.Schema({
  name: String,
  image: String,
  email: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
