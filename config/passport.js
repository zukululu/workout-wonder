const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/User')
const bcrypt = require('bcrypt-nodejs')

const passportConfig = function(passport) {
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
      User.findOne({email: email}).then(user => {
        if(!user) {
          return calback(null, false, req.flash('loginMessage', 'No user with that email'))
        }
        if(!user.validPassword(password)) {
          return callback(null, false, req.flash('loginMessage', 'Password invalid'))
        }
        return callback(null, user)
      })

  }))

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
    User.findOne({email: email})
    .then(user => {
      if(user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already in use'))
      }

      let newUser = new User()
      newUser.email = email
      newUser.password = newUser.hash(password)

      newUser.save(function(err) {
        if(err) {
          throw err
        } return callback(null, newUser)
      })

    }).catch(err => {
      return callback(err)
    })
  }))

  passport.serializeUser(function(user, callback) {
    callback(null, user._id)
  })

  passport.deserializeUser(function(id, callback) {
    User.findById(id).then(user => {
      callback(null, user)
    }).catch(err => {
      callback(err)
    })
  })
}

module.exports = passportConfig