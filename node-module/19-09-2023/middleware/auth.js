var jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  const token = req.header('token')

  try {
    const data = await jwt.verify(token, 'mytoken')
    if (data) {
      next()
    } else {
      res.send('invalid key')
    }
  } catch (error) {
    res.send('invalid key')
  }
}

module.exports = { auth }
