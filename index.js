const express = require('express')
const app = express();

const ip = require("ip");

app.get('/', function (req, res) {
  res.send(`Hello World : ${ip.address()} | CICD RUN | ${new Date()}`)
})

app.listen(5555)
