const express = require("express");
const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/pages", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("landing.html");
});

server.get("/login", (req, res) => {
  return res.render("login.html");
});

server.get("/register", (req, res) => {
  return res.render("register.html");
});

server.get("/forgot-password", (req, res) => {
  return res.render("forgot-password.html");
});

server.get("/portal-citizen", (req, res) => {
  return res.render("citizen.html");
});

server.get("/public-servant", (req, res) => {
  return res.render("public-servant.html");
});

server.get("/report", (req, res) => {
  return res.render("report.html");
});

server.get("/all-reports", (req, res) => {
  return res.render("free-access.html");
});

server.listen(3000);
