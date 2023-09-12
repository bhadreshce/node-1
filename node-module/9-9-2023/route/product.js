const express = require('express')
const { Getproduct } = require('../controller/product')
const { getdata, postuserdata } = require('../controller/product')

const router = express.Router()

router.route('/user').get(Getproduct)
router.route('/app').get(getdata)
router.route('/userdata').post(postuserdata)

module.exports = router
