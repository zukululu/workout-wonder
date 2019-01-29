const mongoose = require('mongoose');
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
  author: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  exercises: [Exercise]
});

module.exports = {
  Workout: mongoose.model("Workout", Workout),
  Exercise: mongoose.model("Exercise", Exercise)
}
