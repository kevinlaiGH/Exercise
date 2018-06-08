"use strict";

const express = require("express");

let app = express();

// App settings
app.set("view engine", "pug");

// App middleware
app.use("/static", express.static("static"));

// App routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});

app.listen(3000);