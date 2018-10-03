const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "snapples are great"
  });
});

app.post("/myfacts", (req, res) => {
  console.log(req.body);
});
app.listen(5000, () => {
  console.log("Listening on Server http://localhost:5000");
});

// live timestamp https://youtu.be/JnEH9tYLxLk?t=31m35s
