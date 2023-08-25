//database connection
const mongoose = require('mongoose')
const dbUrl = 'mongodb://127.0.0.1:27017/std'
mongoose.set('strictQuery', true) //mongoose configuration
mongoose.connect(dbUrl).then(() => {})

// model creation for table

const stdSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

addData = new stdModel({
  username:34434,
  email: 'jayes1h@gmail.com',
  age: 20,
  marks: 30,
})

addData.save().then(() => {
  console.log('succ')
})
