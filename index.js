const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const flash = require('connect-flash')
const hbs = require('hbs')
const session = require('express-session')
const methodOverride = require('method-override')
const passport = require('passport')
const LocalStrategy = require('passport-local')

require('./config/passport')(passport)
app.use(session({secret: 'WOMBO COMBO EXPRESS', saveUninitialized: true, resave: false}))
app.use(passport.initialize())
app.use(passport.session())
app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use(bodyParser.json())
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))
app.use(flash())
app.use(require('./controllers/workout.js'))
app.use(require('./controllers/user.js'))

  app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`yeet`)
  })