// Modules - encapsulated code (only shares minimum)
// CommonJS - every file is a module (by default)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
