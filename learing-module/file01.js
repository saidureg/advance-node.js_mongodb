const { a, add, b } = require("./file02.js");
const { a: a3, add: add3, b: b3 } = require("./file03.js"); // a3, add3, b3 are aliases(name aliasing)

console.log(a3); // 20
console.log(b); // 30
console.log(add(a, b)); // 50
