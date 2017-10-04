/*jshint esversion: 6*/

const session = require('express-session');
const express = require('express');
const app = express();
const PORT = process.envPORT || 8000;
const os = require("os");

app.listen(PORT, () =>{
  console.log(os.loadavg());
  console.log(`listening on port ${PORT}`);
});