/*jshint esversion: 6*/

const express = require('express');
const Router = express.Router();

Router.use('/loadAvg', require('./loadAvg'));

module.exports = Router;