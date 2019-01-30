const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('hbs')
const cors = require('cors')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs');
app.use(require('./controllers/workout.js'))
app.use(cors())

app.listen(3000, () => console.log(`And we're live`))