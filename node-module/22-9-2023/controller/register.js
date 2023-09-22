const { usermodel } = require('../model/user')

const register = async (req, res) => {
  const adddata = new usermodel(req.body)
  adddata.save()

  res.render('index', { msg: 'data inserted suscce' })

  //   console.log(req.body)
}

module.exports = { register }
