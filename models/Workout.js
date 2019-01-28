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
  createdAt: {
    type: Date,
    default: Date.now()
  },
  exercises: [Exercise]
});

module.exports = {
  Tweet: mongoose.model("Workout", Workout),
  Comment: mongoose.model("Exercise", Exercise)
};
