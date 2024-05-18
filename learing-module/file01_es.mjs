// const { a, add, b } = require("./file02.js");
// const { a: a3, add: add3, b: b3 } = require("./file03.js"); // a3, add3, b3 are aliases(name aliasing)

import jeknoName, { a, b } from "./file02_es.mjs"; // jecknoName is default export, a and b are named exports
import { a as a3, b as b3, add as add3 } from "./file03_es.mjs";

console.log(a); // 20
console.log(b); // 30
console.log(jeknoName(a, b)); // 50

console.log(a3); // 10
console.log(b3); // 20
console.log(add3(a3, b3)); // 30
