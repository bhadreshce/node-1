// var sum = (a, b) => {
//   return a + b
// }
// var c = sum(2, 3)

// var multi = (c, d) => {
//   return c * d
// }

// // multi(c,4)

// var sum = (a, b, callback) => {
//   c = a + b
//   return bbb(c, 3)
// }

// var h = sum(2, 3, multi)
// console.log(h)
var celsiTokelvin = (c) => {
  return c + 273.15
}
var ferenTocelsi = (f, callback) => {
  c = ((f - 32) * 5) / 9
  return callback(c)
}
kelvin = ferenTocelsi(0, celsiTokelvin)
console.log(kelvin)
