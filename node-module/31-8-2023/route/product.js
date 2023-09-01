const express = require('express')
const { getData } = require('../controller/product')

const router = express.Router()

router.route('/api').get(getData)

module.exports = { router }
