const mongoose = require('mongoose')
const stdSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
  },
})
const stdModel = new mongoose.model('user', stdSchema)

module.exports = { stdModel }
