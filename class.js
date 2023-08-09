//class is combination of varible constructor and method
// class Car {
//   constructor(speed, average) {
//     this.s = speed
//     this.a = average
//   }
//   createCar() {
//     console.log('your car with speed ' + this.s + 'average is ' + this.a)
//   }
// }

// var carObj = new Car(200, 80)
// var maruti = new Car(300, 10)
// carObj.createCar()
// maruti.createCar()

class Sum {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  Vsum() {
    console.log(this.a + this.b)
  }
}

sum1 = new Sum(2, 3)
sum1.Vsum()
sum2 = new Sum(5, 3)
sum2.Vsum()
sum3 = new Sum(2, 7)
sum3.Vsum()
