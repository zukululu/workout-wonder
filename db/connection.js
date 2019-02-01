const mongoose = require("mongoose");
mongoose.Promise = Promise;
const mongoUri = 'mongodb://localhost/workouts'

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect(mongoUri);
}

module.exports = mongoose;