const route = require('express').Router()

const { usermodel } = require('../model/user')

const { register } = require('../controller/register')
route.get('/', (req, res) => {
  res.render('index')
})

route.get('/delete/(:id)', (req, res) => {
  console.log(req.params.id)
  usermodel.deleteOne({ _id: req.params.id }).exec()
  res.redirect('/user')
})

route.get('/user', (req, res) => {
  usermodel.find({}).then((data) => {
    res.render('listuser', { userdata: data })
  })
})

route.post('/register', register)

module.exports = route
