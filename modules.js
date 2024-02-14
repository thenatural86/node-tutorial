const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
}

console.log(currentOS)

// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./alternative')
// require('./mind')
// sayHi('susan')
// sayHi(names.philip)
// sayHi(names.alice)
