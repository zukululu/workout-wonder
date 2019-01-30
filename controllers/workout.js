const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const mongoose = require('../db/connection')
const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')

router.get('/', (req, res) => {
  Workout.find({})
  // .populate('author')
  .then(result => {
    // res.send(result)
    res.render('index', { result })
  })
})

router.get('/workouts/:_id', (req, res) => {
  Workout.findOne({_id: req.params._id})
  .then( result => {
    console.log(result)
    res.render('workouts/show', result )
    // console.log(result.goal)
    // res.json(result)
  })
})

router.get('/new', (req, res) => {
  User.find({})
  .then(users => {
    res.render('workouts/new', { users })
  })
})

router.put('/workouts/:id', (req, res) => {
  Workout.findOneAndUpdate({ _id: req.params._id}, { goal: req.body})
  console.log(req.body)
  .then(result => res.render('workouts/show', { result }))
})

router.delete('/workouts/:_id'), (req, res) => {
  Workout.findOneAndRemove({ _id: req.params._id})
  .then( res.redirect('/'))
}
// router.get('/workouts/show/:id', (req, res)) => {
//   Workout.find({ _id : ${req:id}
//   }).then(result => {
//     res.send('hello')
//   }
// }

router.post("/new", (req, res) => {
  Workout.create({
    goal: req.body.goal,
    author: req.body.author
    })
  .then(result => {
    // res.render('workouts/show', result)
    res.redirect(`workouts/${result._id}`)
    // res.json(result)
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