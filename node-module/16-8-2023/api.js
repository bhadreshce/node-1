const axios = require('axios')
var key = 'faed4d9eb29d483a866000c901ccb680'
var city = 'india'
const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`
    
axios.get(url).then((data) => {
  console.log(data.data.results)
})
