const fs = require('fs')

var std = [
  { name: 'bhadresh', age: 20 },
  { name: 'sagar', age: 22 },
  { name: 'aman', age: 23 },
]
// fs.writeFile('db.json', JSON.stringify(std), () => {
//   console.log('file created')
// })

fs.readFile('db.json', 'utf-8', (err, res) => {
  var obj = JSON.parse(res)
  var stdd = obj.map((res) => {
    return { name: res.name + ' savaliya', age: res.age + 5 }
  })

  var s = stdd.filter((res) => {
    return res.age > 25
  })

  fs.writeFile('db.json', JSON.stringify(s), () => {
    console.log('file write succ')
  })
  console.log(s)
})
