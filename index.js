const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(require('./routes/workout.js'))

app.listen(3000, () => console.log(`And we're live`))