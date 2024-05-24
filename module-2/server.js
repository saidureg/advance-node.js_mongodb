const http = require("node:http");
const fs = require("fs");

// const postData = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 30,
//     dateOfBirth: "01/01/1990",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     age: 25,
//     dateOfBirth: "01/01/1995",
//   },
//   {
//     id: 3,
//     name: "James Smith",
//     age: 40,
//     dateOfBirth: "01/01/1980",
//   },
//   {
//     id: 4,
//     name: "Jerry Smith",
//     age: 35,
//     dateOfBirth: "01/01/1985",
//   },
// ];

const server = http.createServer((req, res) => {
  const parsedURL = new URL(req.url, `http://${req.headers.host}`);

  const pathName = parsedURL.pathname;

  if (pathName === "/home" && req.method === "GET") {
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
  } else if (pathName === "/posts" && req.method === "GET") {
    // const query = parsedURL.searchParams;
    // const postId = query.get("id");

    // const expectedPost = postData.find((post) => post.id === Number(postId));

    fs.readFile(__dirname + "/posts.json", "utf-8", (err, data) => {
      if (err) {
        throw new Error(err, "Error reading file");
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(expectedPost));
  } else {
    res.end("Page not found");
  }

  //   res.end("Hello from server world");
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`Server is running on port ${5000}`);
});
