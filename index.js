let store = {trips: [], passengers: []}

let driverId = 0

class Driver{
  constructor(name){
  this.id = ++driverId
  this.name = name

  store.trips.push(this)
 }
}

let driver = new Driver(2, 'Sophie')
