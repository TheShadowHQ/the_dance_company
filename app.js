const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("pages/Home");
});

app.get("/booking", (req, res) => {
  res.render("booking");
});

app.get("/contact_us", (req, res) => {
  res.render("ContactUs");
})

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
