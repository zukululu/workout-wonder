const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Exercise = new Schema({
  name: String,
  muscle: String,
  sets: Number,
  reps: Number 
});

const Workout = new Schema({
  goal: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  exercises: [Exercise]
});

module.exports = {
  Workout: mongoose.model("Workout", Workout),
  Exercise: mongoose.model("Exercise", Exercise)
};
