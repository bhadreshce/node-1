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

module.exports = { Getproduct, getdata }
