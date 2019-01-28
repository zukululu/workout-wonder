const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workout')

router.get('/', workoutController.show)
router.post('/', workoutController.create)
router.get('/new', workoutController.new)
router.post('/new', workoutController.create)
router.get('/:id', workoutController.display)

module.exports = router