const express = require('express')
const app = express();

const ip = require("ip");

app.get('/', function (req, res) {
  res.send(`Hello World : ${ip.address()} | Check Service Node js Project 1`)
})

app.listen(5555)
