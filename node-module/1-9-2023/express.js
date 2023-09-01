const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const product = require('./route/product')

app.use('/', product)

app.listen(port, (err, res) => {
  console.log('app runing')
})
