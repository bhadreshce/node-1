//one by one calling function
// one output depents on onther output

// 1
// var sum = (a, b) => {
//   return a + b
// }
// var multi = (b) => {
//   return b * 13
// }

// var s = sum(2, 5)
// var m = multi(s)
// console.log(m)

// var multi = (b) => {
//   return b * 4
// }

// var sum = (a, b, callback) => {
//     c = a + b
//   return callback(c)
// }

// var mul = sum(2, 5, multi)
// console.log(mul)

//2
// var multi = (b) => {
//   return b * 3
// }

// var div = (d) => {
//   return d / 2
// }

// var sum = async (a, b) => {
//   c = a + b
//   var v = await multi(c)
//   var d = await div(c)
//   console.log(d)
// }
// console.log(sum(3, 4))

//3

// var sum = (a, b) => {
//   return new Promise((resolv, reject) => {
//     resolv(a + b)
//   })
// }

// var multi = (b) => {
//   return new Promise((resolv, reject) => {
//     resolv(b * 2)
//   })
// }
// sum(3, 5)
//   .then((result) => {
//     return multi(result)
//   })
//   .then((re) => {
//     console.log(re)
//   })

var sum = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b)
  })
}

var multi = (c) => {
  return new Promise((resolve, reject) => {
    resolve(c * 2)
  })
}

sum(2, 3)
  .then((res) => {
    return multi(res)
  })
  .then((result) => {
    console.log(result)
  })
