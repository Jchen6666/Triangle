const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req, res) {
      res.render("triangle.ejs")
  });

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => console.log(`Application listening on port ${process.env.PORT}!`))
