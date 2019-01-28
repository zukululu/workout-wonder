const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/workouts");
mongoose.Promise = Promise;
module.exports = mongoose;
