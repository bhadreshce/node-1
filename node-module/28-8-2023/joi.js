//database connection
const mongoose = require('mongoose')
const Joi = require('joi')

const dbUrl = 'mongodb://127.0.0.1:27017/std'
mongoose.set('strictQuery', true) //mongoose configuration

mongoose.connect(dbUrl).then(() => {})

function userValidate(user) {
  const JoiSchema = Joi.object({
    username: Joi.string().max(3),
    email: Joi.string().email(),
    age: Joi.number(),
    marks: Joi.number(),
  })

  return JoiSchema.validate(user)
}
const user = {
  username: 233232,
  email: 'bhadresh@gmail.com',
  age: 20,
  marks: 30,
}

const getRespose = userValidate(user)
// console.log(getRespose)

if (getRespose.error) {
  console.log(getRespose.error.details[0].message)
}
