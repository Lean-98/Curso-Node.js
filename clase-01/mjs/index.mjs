// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, sub, multi } from './sum.mjs'

console.log(sum(4, 3))
console.log(sub(4, 3))
console.log(multi(4, 3))
