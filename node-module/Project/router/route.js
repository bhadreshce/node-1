const route = require('express').Router()

const { usermodel } = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { register } = require('../controller/register')
const auth = require('../middleware/auth')

const multer = require('multer')

const storageEngine = multer.diskStorage({
  destination: './public/img',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`)
  },
})

const upload = multer({
  storage: storageEngine,
})

route.get('/', (req, res) => {
  res.render('login')
})

route.get('/do_register', (req, res) => {
  res.render('index')
})

route.get('/logout', (req, res) => {
  res.clearCookie('jwt')
  res.redirect('/')
})

route.post('/do_login', async (req, res) => {
  email = req.body.email
  pass = req.body.password
  console.log(email)

  userdata = await usermodel.findOne({ email: email })
  console.log(userdata)
  var isvalid = await bcrypt.compare(pass, userdata.password)

  console.log(isvalid)
  if (isvalid) {
    var token = await jwt.sign({ _id: userdata._id }, 'mytoken')
    userdata.Tokens = userdata.Tokens.concat({ token: token })

    userdata.save()
    res.cookie('jwt', token)
    res.redirect('/user')
  } else {
    res.render('login')
  }
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

route.get('/user', auth, (req, res) => {
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

route.post('/register', upload.single('file'), register)

module.exports = route
