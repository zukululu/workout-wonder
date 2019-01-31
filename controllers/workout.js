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

router.get('/workouts/:id', (req, res) => {
  Workout.findOne({_id: req.params.id})
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

router.put('/workouts/:id', (req, res) => {             //add exercises
  Workout.findOne({ _id: req.params.id})
  .then( result => {
    Exercise.create({
      name: req.body.name,
      muscle: req.body.muscle
    })
    .then( newExercise => {
      result.exercises.push(newExercise)
      result.save( done => {
        res.redirect(`${req.params.id}`)
      })
    })
  })
})

// router.put('/workouts/:id', (req, res) => {                  this will change goal name
//   console.log(req.body)
//   Workout.findOneAndUpdate({ _id: req.params.id}, {goal: req.body.newGoal}, {new: true})
//   // console.log(req.body.newGoal)
//   .then(result => { 
//     console.log(result)
//     Workout.findOne({ _id: result.id})
//     .then( newGoalname =>{
//     res.render('workouts/show', newGoalname) 
//     })
//   })
// })

router.delete('/workouts/:id'), (req, res) => {
  Workout.findOneAndRemove({ _id: req.params.id})
  .then( result => {
    res.redirect('/')
    })
}

router.post("/new", (req, res) => {
  Workout.create({
    goal: req.body.goal,
    author: req.body.author
    })
  .then(result => {
    User.findOne({ _id: result.author})
    .then(user => {
      console.log(user)
      // user.workouts.push(result)
      user.save(
        result.save()
      )
    })
    .then( created => {
    res.redirect(`workouts/${result._id}`)
    // res.json(result)
    })
  })
})

router.get('/exercises/new', (req, res) => {
  res.render(`exercises/new`)
})

// router.post('/exercises/new', (req, res) => {

// })

module.exports = router