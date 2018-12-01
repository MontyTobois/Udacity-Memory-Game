const express = require('express');

const app = express();

// Set port
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("app is running");
});
