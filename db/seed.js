const mongoose = require('./connection')
const { Workout, Exercise } = require('../models/Workout')
const seeds  = require('./seedData')
const workout = new Workout


mongoose.Promise = Promise

// Workout.remove({}).then(_ => {
//   console.log('Dropped the DB')
//   Workout.collection.insert(seeds).then(seededEntries => {
//     console.log(seededEntries)
//     mongoose.connection.close()
//   })
// })

// Workout.deleteMany({}).then(_ => {
//   Exercise.deleteMany({}).then(_ => {
//     console.log(seeds)
//     console.log('Dropped the DB')
//     Exercise.collection.insertOne(seeds)
//     workout.exercises.push(seeds.name)
//     console.log(workout)
//     mongoose.connection.close()
//   })
// })