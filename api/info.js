const express = require("express");
var router = express.Router();
router.route('/getInfo').get(getInfo);
router.route('/getTime').post(getTime);

function getInfo(req, res) {
    res.send("helo co ba 1");
}
function getTime(req, res) {
    let servertime = "" + new Date().toISOString();

    res.send("Time: " + servertime.toString());
}
module.exports = router;