const { stdModel } = require('../model/user')

const Getproduct = async (req, res) => {
  stdModel.find({ marks: 60 }).then((result) => {
    console.log(result)
    res.status(200).json(result)
  })
}

const getdata = async (req, res) => {
  res.status(200).json({ name: 'ramesh' })
}

const postuserdata = async (req, res) => {
  // console.log(req.body)
  stdModel.collection.insertOne(req.body)
  res.status(200).json(req.body)
}

const updata = async (req, res) => {
  var data = req.body
  console.log(data[1])

  stdModel.updateOne({ age: data[0].age }, { $set: data[1] }).then((result) => {
    console.log(result)
  })
}

module.exports = { Getproduct, getdata, postuserdata, updata }
