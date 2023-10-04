const jwt = require('jsonwebtoken')
const User = require('../model/user')

const auth = async (req, resp, next) => {
  token = req.cookies.jwt
  console.log(token)
  try {
    const data = await jwt.verify(token, 'mytoken')
    console.log(data)
  } catch (error) {}
}

module.exports = auth
