const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to Guestbook v2");
});

app.listen(PORT, () => {
  console.log(`Guestbook app listening at http://localhost:${PORT}`);
});
