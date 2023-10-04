const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { string } = require('joi')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  Tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
})

userSchema.pre('save', async function save(next) {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10)
      return next()
    }
  } catch (error) {
    console.log(error)
  }
})

const usermodel = new mongoose.model('user', userSchema)

module.exports = { usermodel }
