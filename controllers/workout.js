const express = require('express')
const router = express.Router()
const { Workout, Exercise } = require('../models/Workout')
const User = require('../models/User')

router.get('/', (req, res) => {
  if( req.user ) {  Workout.find({author: req.user._id})
  .then(result => {
    // res.send(result)
    console.log(result)
    res.render('index', { result })
  })
  } else {
    console.log(req.user)
    res.render('index')
  }
})

router.get('/workouts/:id', (req, res) => {
  Workout.findOne({_id: req.params.id})
  .then( result => {
    console.log(result)
    console.log(req.user)
    res.render('workouts/show', result )
    // console.log(result.goal)
    // res.json(result)
  })
})

router.get('/new', (req, res) => {
  User.find({})
  .then(users => {
    console.log(req.user)
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



router.post("/new", (req, res) => {
  Workout.create({
    goal: req.body.goal,
    author: req.user._id
    })
  .then(result => {
    console.log(result)
    User.findOne({ _id: result._id})
    .then(user => {
      console.log(user)
      console.log(req.user)
      console.log(user)
      req.user.workouts.push(result)
      req.user.save(
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
    console.log(req.user)
  res.render(`exercises/new`)
})

router.delete('/workouts/:id'), (req, res) => {
  Workout.findByIdAndRemove({ _id: req.params.id })
  .then( (result) => {
  console.log(result)
    // result.workouts.id(req.params.id).remove()
    // result.save()
    res.redirect('/')
    })
}
// router.post('/exercises/new', (req, res) => {

// })

module.exports = router