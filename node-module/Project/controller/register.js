const { usermodel } = require('../model/user')

const register = async (req, res) => {
  const adddata = new usermodel(req.body)
  adddata.img = req.file.filename
  adddata.save()

  res.redirect('/')

  //   console.log(req.body)
}

module.exports = { register }
