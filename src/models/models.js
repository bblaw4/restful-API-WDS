const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  bench: {
    required: true,
    type: Number
  },
  squat: {
    required: true,
    type: Number
  },
  deadlift: {
    required: true,
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
    require: true
  }
});

const Person = mongoose.model("Person", schema);

module.exports = Person;
