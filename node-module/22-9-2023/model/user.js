const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },

  pass: {
    type: String,
  },
})

const usermodel = new mongoose.model('user', userSchema)

module.exports = { usermodel }
