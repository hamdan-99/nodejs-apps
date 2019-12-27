const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const fs = require("fs").promises;
const PORT = process.env.PORT || 3000;
const { caesarize } = require("./core");
const { add, subtract, divide, multiply } = require("./calc");
const OPERATIONS = { add, subtract, divide, multiply, caesarize };
app.use(bodyParser.json());
app.use(express.static("static"));
app.use("/api/caesars", express.static("static/caesars"));
app.use("/api/calc", express.static("static/calc"));
app.use("/api/about", express.static("static/about"));

app.get("/api", function(req, res) {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/api/about", function(req, res) {
  res.sendFile(path.join(__dirname, "static", "about", "about.html"));
});

app.get("/api/calc", function(req, res) {
  res.sendFile(path.join(__dirname, "static", "calc", "index.html"));
});
app.post("/api/caesars", (req, res) => {
  let strToCaesarize = req.body.strToCaesarize;
  let shiftNumber = req.body.shiftNumber;
  shiftNumber = Number(shiftNumber);
  if (isNaN(shiftNumber)) {
    res.json({ status: "error", message: "Give me numbers " });
    return;
  }
  let opFun = OPERATIONS.caesarize;
  const result = opFun(strToCaesarize, shiftNumber);
  res.json({ status: "ok", result });
  console.log("Result :", result);
});

app.post("/api/calc/:op", (req, res) => {
  let number1 = req.body.number1;
  let number2 = req.body.number2;
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  if (isNaN(number1) || isNaN(number2)) {
    res.json({ status: "error", message: "Give me numbers " });
    return;
  }
  const op = req.params.op;
  if (!Object.keys(OPERATIONS).includes(op)) {
    res.json({ status: "error", message: "Invalid Operation" });
    return;
  }
  const opFun = OPERATIONS[op];
  const result = opFun(number1, number2);
  res.json({ status: "ok", result });
  console.log("Result :", result);
});
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
