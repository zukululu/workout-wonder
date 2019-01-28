const mongoose = require("mongoose");
mongoose.Promise = Promise;
const mongoUri = 'mongodb://localhost/workouts'

mongoose
  .connect(mongoUri) 
  .catch(connectionError => console.log('Connection failed!', connectionError))
module.exports = mongoose;