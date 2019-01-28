const mongoose = require('./connection')
const { Workout, Exercise } = require('../models/Workout')
const seeds  = require('./seedData')


mongoose.Promise = Promise

// Workout.remove({}).then(_ => {
//   console.log('Dropped the DB')
//   Workout.collection.insert(seeds).then(seededEntries => {
//     console.log(seededEntries)
//     mongoose.connection.close()
//   })
// })

Workout.remove({}).then(_ => {
  console.log('Dropped the DB')
  Exercise.collection.insert(seeds)
  .then(seededEntries => {
    Workout.exercises.push(seededEntries)
    console.log(seededEntries)
  })
  .then(exerciseSeeds => {
    // console.log(Workout)
    // Workout.exercises.push(exerciseSeeds)
    console.log(`wowie zowie`)
    mongoose.connection.close()
  })
})