const express = require('express')
const { Getproduct } = require('../controller/product')
const { getdata } = require('../controller/product')

const router = express.Router()

router.route('/api').get(Getproduct)
router.route('/app').get(getdata)

module.exports = router
