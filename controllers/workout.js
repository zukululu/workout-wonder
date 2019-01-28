const express = require('express')
const router = express.Router()
const { Workout, Exercise } = require('../models/Workout')
const mongoose = require('../db/connection')

router.get('/', (req, res) => {
  Workout.find({})
  .then(result => res.render('index'))
})

router.get('/:_id', (req, res) => {
  Exercise.find({_id: req.params._id})
  .then( result => res.send(result))
})

module.exports = router

// module.exports = {
//   show: (req, res) => {
//     Exercise.find({})
//     .then(exercises => {
//       console.log(exercises)
//       res.render('index', exercises)
//     })
//     // res.send(`wow`)
//   },
//   create: (req, res) => {
//     Exercise.create({
//       name: 'Squat',
//       muscle: 'legs'
//     })
//     .then( exercise => {
//       Exercise.collection.insertOne(exercise)
//       res.redirect(`/${req._id}`)
//     })
//     .catch(err => console.log(err))
//   },
//   new: (req, res) => {
//     res.render('workouts/new')
//   },
//   display: (req, res) => {
//     Exercise.find({ _id: req.params.id})
//     .then(exercise => {
//       console.log(exercise)
//       res.json(exercise)
//     })
//   }
// }