var express = require("express");
//import express from 'express';

const app = express();
const port = 3000;
var info = require('./api/info');
app.use('/info', info);


app.listen(port, () => {
    console.log(" Server node listion port " + port);

});