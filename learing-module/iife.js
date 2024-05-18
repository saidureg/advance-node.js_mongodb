console.log(global);

((name) => {
  const a = 20; // block scope
  console.log(`I will execute immediately after defining. Hello, ${name}!`);
})("JavaScript");

// console.log(a); // ReferenceError: a is not defined
