const express = require('express')
const router = express.Router()
const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')

router.get('/', (req, res) => {
  if( req.user ) {  User.findOne({ _id: req.user._id})
  .then(result => {
    Workout.find({ author: req.user._id})
    .then(workout => {
      res.render('index', { result, workout })
    })
  })
  } else {
    res.render('index')
  }
})

router.get('/workouts/:id', (req, res) => {
  Workout.findOne({_id: req.params.id})
  .then( result => {
    res.render('workouts/show', result )
  })
})

router.get('/new', (req, res) => {
  User.find({})
  .then(users => {
    res.render('workouts/new', { users })
  })
})

router.post("/new", (req, res) => {
  Workout.create({
    goal: req.body.goal,
    author: req.user._id
    })
  .then(result => {
    User.findOne({ _id: result._id})
    .then(user => {
      req.user.workouts.push(result)
      req.user.save(
        result.save()
      )
    })
    .then( created => {
    res.redirect(`workouts/${result._id}`)
    })
  })
})

router.put('/workouts/:id', (req, res) => {
  Workout.findOne({ _id: req.params.id})
  .then( result => {
    Exercise.create({
      name: req.body.name,
      muscle: req.body.muscle,
      reps: req.body.reps,
      sets: req.body.sets
    })
    .then( newExercise => {
      result.exercises.push(newExercise)
      result.save( done => {
        res.redirect(`${req.params.id}`)
      })
    })
  })
})

router.delete('/workouts/:id', (req, res) => {
  Workout.findOneAndRemove({ _id: req.params.id })
  .then( (result) => {
    res.redirect('/')
    })
})

router.get('/exercises/new', (req, res) => {
  res.render(`exercises/new`)
})


module.exports = router