const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('hbs')
const cors = require('cors')

app.use(cors())
app.use(require('./controllers/workout.js'))
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(3000, () => console.log(`And we're live`))