/*jshint esversion: 6*/

const session = require('express-session');
const express = require('express');
const app = express();
const PORT = process.envPORT || 8000;
const bodyParser = require('body-parser');

const os = require("os");

app.use(bodyParser.json({extended: true}));

app.use('/api', require('./api'));

app.listen(PORT, () =>{
  console.log(os.loadavg());
  console.log(`listening on port ${PORT}`);
});