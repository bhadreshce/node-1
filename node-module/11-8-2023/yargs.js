const yargs = require('yargs')
const fs = require('fs')
yargs.command({
  command: 'create',
  builder: {
    name: {
      type: String,
      demandOption: true,
    },
    surname: {
      type: Number,
      demandOption: true,
    },
  },

  handler: function (arg) {
    console.log(arg.name)
    console.log(arg.surname)

    fs.writeFile(
      'data.json',
      JSON.stringify({ name: arg.name, surname: arg.surname }),
      (res) => {
        console.log('file created succ')
      },
    )
  },
})

yargs.parse()
