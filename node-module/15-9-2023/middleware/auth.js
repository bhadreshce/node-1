const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  const tokenId = req.header('token')
  console.log(tokenId)
  //   try {
  //     const data = await jwt.verify(tokenId, 'mytoken')

  //     if (data) {
  //       next()
  //     } else {
  //       res.send('token is not valid')
  //     }
  //   } catch (error) {}
  //   res.send('token is not valid')
}

module.exports = { auth }
