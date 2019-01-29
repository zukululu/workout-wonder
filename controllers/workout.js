const express = require('express')
const router = express.Router()
const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')
const mongoose = require('../db/connection')

router.get('/', (req, res) => {
  Workout.find({})
  // .populate('author')
  .then(result => {
    // res.send(result)
    res.render('index', {result})
  })
})

router.get('/workouts/:_id', (req, res) => {
  Workout.find({_id: req.params._id})
  .then( result => {
    res.render('workouts/show', result)
  })
})

router.get('/new', (req, res) => {
  res.render('workouts/new')
})

router.post("/new", (req, res) => {
  Workout.create(req.body)
  .then(result => {
    res.redirect(`/${req._id}`, result)
    res.json(result)
  })
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