const express = require('express')
const { Workout, Exercise } = require('../models/Workout')
const mongoose = require('../db/connection')

module.exports = {
  show: (req, res) => {
    Exercise.find({})
    .then(work => {
      res.send(work)
    })
    // res.send(`wow`)
  }
}