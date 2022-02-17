const express = require("express");
const fs = require('fs');
var router = express.Router();

var configManager = require("./configManager");

router.route('/getInfo').get(getInfo);
router.route('/getTime').post(getTime);
router.route('/signin').post(signin);
router.route('/signup').post(signup);
function getInfo(req, res) {
    res.send("helo co ba 1");
}
function getTime(req, res) {
    let servertime = "" + new Date().toISOString();

    res.send("Time: " + servertime.toString());
}
function signin(req, res) {

    let username = req.body['username'];
    let pw = req.body['password'];
    let jwt = req.header('jwt');
    var data = {
        username: username,
        password: pw
    }
    let configUser = configManager.configUser.records.find(x => x.username == username);
    if (configUser != undefined) {
        if (configUser.username === username && configUser.password === pw) {
            res.send(data);
        }
        else {
            res.send("pass word ko dung");
        }
    }
    else {
        res.send("tai khoan  khong dung");
    }


}
function signup(req, res) {

    let username = req.body['username'];
    let pw = req.body['password'];

    var data = {
        username: username,
        password: pw
    }

    let configUser = configManager.configUser.records.find(x => x.username == username);
    if (configUser == undefined) {


        configManager.configUser.records.push(data);
        const dataJson = JSON.stringify(configManager.configUser);
        fs.writeFile('./config/ConfigUser.json', dataJson, 'utf8', (err) => {

            if (err) {
                res.send(`Error writing file: ${err}`);
            } else {
                res.send(" tao tai khoan thanh cong");
            }

        });
    }
    else {
        res.send(" tai khoan da ton tai ");
    }



}
module.exports = router;