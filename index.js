const express = require('express')
const app = express();

const ip = require("ip");

app.get('/', function (req, res) {
  res.send(`Hello World : ${ip.address()} | nevil test ec2 test with anjali`)
})

app.listen(5555)
