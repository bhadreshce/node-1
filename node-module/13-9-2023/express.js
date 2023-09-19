const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const product = require('./route/product')
const hbs = require('hbs')
app.use(express.json())

//view setting
const viewpath = path.join(__dirname, './view')

app.set('view engine', 'hbs')
app.set('views', viewpath)
//mongoose conection
const mongoose = require('mongoose')
const dbUrl = 'mongodb://127.0.0.1:27017/std'
mongoose.set('strictQuery', true) //mongoose configuration
mongoose.connect(dbUrl).then(() => {})

app.use('/', product)

app.listen(port, (err, res) => {
  console.log('app runing')
})
