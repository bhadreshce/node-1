const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const product = require('./route/product')
// app.use(express.json())

//mongoose conection
const mongoose = require('mongoose')
const dbUrl = 'mongodb://127.0.0.1:27017/std'
mongoose.set('strictQuery', true) //mongoose configuration
mongoose.connect(dbUrl).then(() => {})

app.use('/', product)

app.listen(port, (err, res) => {
  console.log('app runing')
})
