const fs = require("fs");

const output = fs.readFile(__dirname + "/text.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err, "Error reading file");
  }

  console.log(data);
});

fs.writeFile(__dirname + "/write-async.txt", "Hi developers", (err) => {
  if (err) {
    throw new Error(err, "Error writing file");
  }
});
