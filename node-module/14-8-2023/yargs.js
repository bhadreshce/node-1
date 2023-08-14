const yargs = require('yargs')
const fs = require('fs')
yargs.command({
  command: 'create',
  builder: {
    name: {
      type: Object, //Array boolean string number 
      demandOption: true,
    },
    surname: {
      type: Number,
      demandOption: true,
    },
  },

  handler: function (arg) {
    console.log(arg.name.AGE)
  },
})

yargs.parse()
