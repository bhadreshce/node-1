const route = require('express').Router()
const { register } = require('../controller/register')
route.get('/', (req, res) => {
  res.render('index')
})

route.post('/register', register)

module.exports = route
