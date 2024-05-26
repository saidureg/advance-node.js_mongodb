const express = require("express");

// routes
const postsRoute = require("./src/routes/posts.route");
const usersRoute = require("./src/routes/users.route");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  //   res.send("Hello World");
  //   res.json({ message: "Hello World" });
  res.sendFile(__dirname + "/index.html");
});

// app.post("/posts", (req, res) => {
//   const postData = req.body;
//   console.log(postData);

//   res.json({ message: "Post created successfully" });
// });

app.use("/posts", postsRoute);

app.use("/users", usersRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
