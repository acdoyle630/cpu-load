/*jshint esversion: 6*/

const express = require('express');
const loadAvg = express.Router();
const os = require("os");

loadAvg.get('/', (req, res) =>{
  console.log('hit loadAvg API');
  let averageArray = (os.loadavg());
  res.json(averageArray);
});

module.exports = loadAvg;