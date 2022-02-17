var express = require("express");
//import express from 'express';

const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var info = require('./api/info');
app.use('/info', info);


app.listen(port, () => {
    console.log(" Server node listion port " + port);

});