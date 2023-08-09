const fs = require('fs')

// synck file
// write file
fs.writeFile('data.txt', 'hii this is my file', (err, res) => {
  if (err) {
    console.log('file not writed')
  } else {
    console.log('file writed succ')
  }
})

//read file
fs.readFile('data.txt', (err, res) => {
  if (err) {
    console.log('file not read')
  } else {
    console.log(res.toString())
  }
})
