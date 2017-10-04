/*jshint esversion: 6*/

const express = require('express');
const loadAvg = express.Router();

loadAvg.get('/', (req, res) =>{
  console.log('hit loadAvg API');
  console.log(os.loadavg());
});

module.exports = loadAvg;