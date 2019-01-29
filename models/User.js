const mongoose = require("../db/connection");
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

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", User);
