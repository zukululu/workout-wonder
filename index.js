const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('hbs')

app.use(require('./routes/workout.js'))
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log(`And we're live`))