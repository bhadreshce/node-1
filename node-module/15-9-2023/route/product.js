const express = require('express')
const { Getproduct } = require('../controller/product')
const { getdata, postuserdata } = require('../controller/product')
const { index, contact } = require('../controller/web')
const router = express.Router()

//auth
const { auth } = require('../middleware/auth')

// router.route('/user').get(Getproduct)
// router.route('/app').get(getdata)
// router.route('/userdata').post(postuserdata)

// view route
router.get('/prodata', auth, Getproduct)
// router.route('/contact').get(contact)

module.exports = router
