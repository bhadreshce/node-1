//mongo db is use for database managment . use for store data
const mongodb = require('mongodb')

// database url
const url = 'mongodb://127.0.0.1:27017'

// connect mogodb to node js
const MongoClient = mongodb.MongoClient

MongoClient.connect(url).then((res) => {
  console.log('connected succ')
})
