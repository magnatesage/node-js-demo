const express = require('express')
const app = express();

const ip = require("ip");

app.get('/', function (req, res) {
  res.send(`Hello World : ${ip.address()} | Niks Test | CICD Final test`)
})

app.listen(5555)
