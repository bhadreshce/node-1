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

// addData = new stdModel({
//   username: 'bhadresh',
//   email: 'bhadresh@gmail.com',
//   age: 20,
//   marks: 30,
// })

// addData.save().then(() => {
//   console.log('succ')
// })

// add1 = new stdModel({
//   username: 'rutvik',
//   email: 'rutvik@gmail.com',
//   age: 20,
//   marks: 30,
// })

// add2 = new stdModel({
//   username: 'rashmi',
//   email: 'rashmi@gmail.com',
//   age: 20,
//   marks: 30,
// })

// add3 = new stdModel({
//   username: 'rakhi',
//   email: 'rakhi@gmail.com',
//   age: 20,
//   marks: 30,
// })

// stdModel.insertMany([add1, add2, add3]).then(() => {
//   console.log('succ')
// })

// const getData = () => {
//   stdModel.find({ username: 'jayesh' }).then((data) => {
//     var newUser = data.filter((userdata) => {
//       return userdata.email == 'jayesh@gmail.com'
//     })

//     console.log(newUser)
//   })
// }

// getData()

stdModel.updateMany({ username: 'jayesh' }, { marks: 40 }).then((res) => {
  console.log(res)
})

stdModel.updateOne({ username: 'jayesh' }, { marks: 60 }).then((res) => {
  console.log(res)
})

stdModel.deleteMany({ marks: 40 }).then((res) => {
  console.log(res)
})
