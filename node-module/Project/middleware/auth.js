const jwt = require('jsonwebtoken')
const { usermodel } = require('../model/user')

const auth = async (req, resp, next) => {
  token = req.cookies.jwt

  if (token == undefined) {
    resp.render('login')
  }
  console.log(token)
  try {
    const data = await jwt.verify(token, 'mytoken')
    // console.log(data._id)

    if (data) {
      const udata = await usermodel.findOne({ _id: data._id })
      let verifytoken = udata.Tokens.filter((result) => {
        return result.token == token
      })

      if (verifytoken == undefined) {
        resp.render('login')
      } else {
        console.log('data')
        next()
      }
    } else {
      resp.render('login')
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = auth
