const fs = require("fs");

// const output = fs.readFile(__dirname + "/text.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw new Error(err, "Error reading file");
//   }

//   fs.writeFile(__dirname + "/write-async.txt", data, (err) => {
//     if (err) {
//       throw new Error(err, "Error writing file");
//     }
//   });
//   console.log(data);
// });

// stream buffer example
// create a readable stream
const readableStream = fs.createReadStream(__dirname + "/text.txt", "utf-8");

// create a writable stream
const writableStream = fs.createWriteStream(__dirname + "/write-stream.txt");

readableStream.on("data", (data) => {
  // write data to the writable stream
  writableStream.write(data, (err) => {
    if (err) {
      throw new Error(err, "Error writing file");
    }
    console.log("Data written to the file");
  });
  //   readableStream.pipe(writableStream); // this is the same as the above code
});

readableStream.on("error", (err) => {
  throw new Error(err, "Error reading file");
});
writableStream.on("error", (err) => {
  throw new Error(err, "Error writing file");
});

writableStream.on("finish", () => console.log("Finish writting file"));
