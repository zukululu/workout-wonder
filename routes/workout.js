const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workout')

router.get('/', workoutController.show)

module.exports = router