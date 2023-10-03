const route = require('express').Router()

const { usermodel } = require('../model/user')
const bcrypt = require('bcryptjs')
const { register } = require('../controller/register')
route.get('/', (req, res) => {
  res.render('login')
})

route.get('/do_register', (req, res) => {
  res.render('index')
})

route.post('/do_login', (req, res) => {
  email = req.body.email
  pass = req.body.password
  console.log(email)

  userdata = usermodel.findOne({ email: email }).then((data) => {
    console.log(data)

    if (!data) {
      res.render('login')
    } else {
      isvalid = bcrypt.compare(req.body.password, data.password).then((pas) => {
        if (pas) {
          res.redirect('/user')
        } else {
          res.render('login')
        }
      })
    }
  })
})

route.get('/delete/(:id)', (req, res) => {
  console.log(req.params.id)
  usermodel.deleteOne({ _id: req.params.id }).exec()
  res.redirect('/user')
})

route.get('/edit/(:id)', (req, res) => {
  console.log(req.params.id)
  usermodel.find({ _id: req.params.id }).then((data) => {
    console.log(data)
    res.render('editform', { userdata: data[0] })
  })
})

route.get('/user', (req, res) => {
  usermodel.find({}).then((data) => {
    res.render('listuser', { userdata: data })
  })
})

route.post('/update', (req, res) => {
  console.log(req.body.id)
  usermodel
    .updateOne(
      { _id: req.body.id },
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    )
    .exec()
  res.redirect('/user')
})

route.post('/register', register)

module.exports = route
