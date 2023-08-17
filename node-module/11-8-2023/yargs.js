const yargs = require('yargs')
const fs = require('fs')
yargs.command({
  command: 'create',
  builder: {
    name: {
      type: String,
      demandOption: true,
    },
    age: {
      type: Number,
      demandOption: true,
    },
  },

  handler: function (arg) {
    s = { name: arg.name, age: arg.age }
    fs.writeFile('db.json', JSON.stringify(s), () => {
      console.log('file write succ')
    })
  },
})

yargs.parse()
