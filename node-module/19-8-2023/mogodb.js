//mongo db is use for database managment . use for store data
const mongodb = require('mongodb')

// database url
const url = 'mongodb://127.0.0.1:27017'

// connect mogodb to node js
const MongoClient = mongodb.MongoClient

MongoClient.connect(url).then((res) => {
  const mydb = res.db('emp')
  mydb.createCollection('students').then(() => {

  })
  //insert data in table
  mydb
    .collection('employee')
    .insertOne({ id: 2, name: 'rajesh', age: 20, salary: 60000 })
    .then((res) => {
      console.log(res)
    })

//  insert many data
  mydb.collection('temp').insertMany([
    { id: 3, name: 'rajesh', age: 20, salary: 60000 },
    { id: 4, name: 'ramesh', age: 40, salary: 60000 },
  ])

  //edit data

  mydb
    .collection('temp')
    .updateOne({ id: 3 }, { $set: { name: 'ramesh' } })
    .then((res) => {
      console.log(res)
    })

  //update multiple

  mydb
    .collection('temp')
    .updateMany({ name: 'ramesh' }, { $set: { salary: 100000 } })

  //delete one

  mydb
    .collection('temp')
    .deleteOne({ id: 3 })
    .then(() => {})

  //delete many

  mydb
    .collection('temp')
    .deleteMany({ id: 4 })
    .then(() => {})

  // console.log(database)
})
