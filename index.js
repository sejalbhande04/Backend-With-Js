// both line 3 and 4 are same just diff styles syntax

// import express from "express"
require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("sejal31");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login further</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
