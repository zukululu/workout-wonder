const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')

User.find({}).remove(() => {
  Workout.find({}).remove(() => {
    Exercise.find().remove(() => {
    })
  });
}).then(removed => {
User.create({
  email: "whatever@what.com",
  password: "testpassword1234"
}).then((newUser) => {
  Workout.create({
    goal: "Lose fat",
    author: newUser._id,
  }).then(newWorkout => {
    Exercise.create({
      workout: newWorkout._id,
      name: "Squat",
      muscle: "Legs"
    }).then((newExercise => {
      newWorkout.exercises.push(newExercise)
      newUser.workouts.push(newWorkout._id)
      newWorkout.save().then(saved => {
      newUser.save( done => {
      process.exit()
      })
      })
    })).catch(err => {
      console.error(err)
    })
  })
})

})