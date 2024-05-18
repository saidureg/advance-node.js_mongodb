const fs = require("fs");

// const output = fs.readFileSync("module-2/text.txt", "utf8");
const output = fs.readFileSync(__dirname + "/text.txt", "utf8");
console.log(output);

const text = "Hello from Level Up!";
fs.writeFileSync("module-2/write.txt", text);
