const axios = require('axios')
axios.get('https://fakestoreapi.com/products').then((res) => {
  var j = res.data.filter((result) => {
    return result.id == 5
  })
  console.log(j)
})
