// const mongoose = require('./connection')
const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')
// const seeds  = require('./seedData')
// const workout = new Workout


// mongoose.Promise = Promise

// Workout.deleteMany({}).then(_ => {
//   Exercise.deleteMany({}).then(_ => {
//     console.log(seeds)
//     console.log('Dropped the DB')
//     Workout.collection.insertOne(seeds)
//     console.log(workout)
//     mongoose.connection.close()
//   })
// })

User.find({}).remove(() => {
  Workout.find({}).remove(() => {
    Exercise.find().remove(() => {
      console.log('everything is empty now')
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
      workout: newWorkout,
      name: "Squat",
      muscle: "Legs"
    }).then((newExercise => {
      Workout.update({_id: newWorkout._id}, {$push: {exercises: newExercise}})
      newWorkout.exercises.push(newExercise)
      console.log(newExercise)
      newUser.workouts.push(newWorkout._id)
      console.log('done??!??')
      process.exit()
    })).catch(err => {
      console.error(err)
    })
  })
})

})