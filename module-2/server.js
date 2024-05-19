const http = require("node:http");

const postData = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    dateOfBirth: "01/01/1990",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    dateOfBirth: "01/01/1995",
  },
  {
    id: 3,
    name: "James Smith",
    age: 40,
    dateOfBirth: "01/01/1980",
  },
  {
    id: 4,
    name: "Jerry Smith",
    age: 35,
    dateOfBirth: "01/01/1985",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/home" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <DOCTYPE html>
    <html>
    <head>
    <title>Home Page</title>
    </head>
    <body>
    <h1>Welcome to the home page</h1>
    </body>
    </html>
      `);
  } else if (req.url === "/posts" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(postData));
  } else {
    res.end("Page not found");
  }

  //   res.end("Hello from server world");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on port 5000");
});
