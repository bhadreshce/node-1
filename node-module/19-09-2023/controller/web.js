const { stdModel } = require('../model/user')

const index = async (req, res) => {
  res.render('index', { name: 'bhadresh' })
}

const contact = async (req, res) => {
  stdModel.find({}).then((result) => {
    res.render('contact', {
      data: result,
    })
  })
}

module.exports = { index, contact }
