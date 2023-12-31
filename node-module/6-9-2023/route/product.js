const express = require('express')
const { Getproduct } = require('../controller/product')
const { getdata, postuserdata, updata } = require('../controller/product')

const router = express.Router()

router.route('/user').get(Getproduct)
router.route('/app').get(getdata)
router.route('/userdata').post(postuserdata)
router.route('/updata').post(updata)

module.exports = router
