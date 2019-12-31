const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheMa = new Schema({
   uid: String,
   username: String,
   password: String,
   name: String,
   gender: String,
   phone: String,
   email: String,
});

module.exports = mongoose.model('users', userScheMa);