const express = require("express");

const router = express.Router();

router.get("/get-users", (req, res) => {
  res.json({ message: "Users retrieved successfully" });
});

router.post("/created-users", (req, res) => {
  const postData = req.body;
  console.log(postData);

  res.json({ message: "User created successfully from router" });
});

module.exports = router;
