const express = require("express");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
