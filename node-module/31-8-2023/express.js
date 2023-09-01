const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const product = require('./route/product')
app.use('/', product)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, 'home.html'))
// })

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'about.html'))
// })

app.listen(port, (err, res) => {
  console.log('app runing')
})
