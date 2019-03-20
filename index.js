// let store = {trips: [], passengers: []}

let driverId = 0

class Driver{
  constructor(name){
  this.id = ++driverId
  this.name = name

  // store.trips.push(this)
  // store.passengers.push(this)
 }
}

let driver  = new Driver('Sophie')

// store.trips[]
// store.passengers[]
//
// let store = {trips: [], passengers: []}
//
// let driverId = 0
//
// class Driver{
//   constructor(name){
//   this.id = ++driverId
//   this.name = name
//
//   store.trips.push(this)
//   store.passengers.push(this)
//  }
// }
//
// let driver = new Driver('Sophie')
//
// store.trips[]
// store.passengers[]
