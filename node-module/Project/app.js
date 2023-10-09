const express = require('express')
const app = express()
const hbs = require('hbs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

PORT = 3000
const dbUrl = 'mongodb://127.0.0.1:27017/admin'

const viewpath = path.join(__dirname, './view')
const publicpath = path.join(__dirname, './public')

app.set('view engine', 'hbs')
app.set('views', viewpath)
app.use(express.static(publicpath))

app.use('/', require('./router/route'))
mongoose.connect(dbUrl).then(() => {
  console.log('connected')
})

app.listen(PORT, (req, res) => {
  console.log('app running')
})
