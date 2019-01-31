const mongoose = require("../db/connection");
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

const User = new Schema({
    // name: String,
  email: String,
  password: String,
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

User.methods.hash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("User", User);
