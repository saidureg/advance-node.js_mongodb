const express = require("express");
const router = express.Router();

router.get("/get-posts", (req, res) => {
  res.json({ message: "Posts retrieved successfully" });
});

router.post("/created-posts", (req, res) => {
  const postData = req.body;
  console.log(postData);

  res.json({ message: "Post created successfully from router" });
});

module.exports = router;
