const Packages = require('../models')("packages");
var express = require('express');
var router = express.Router();

router.post('/getPackages', async function (req, res, next) {
    //the password here is visable and its wrong!
    console.log("i am at packages")

    // Inquire all the users at once and get it as an array
    let packages = {};
    try {
        packages = await Packages.REQUEST();
    }
    catch (err) { console.log(`Failed: ${err}`) }

    res.send(packages);
})

router.post('/updatePackage', async function (req, res, next) {
    console.log("update package");
    let package = req.body;
    console.log(package)
    try {
        await Packages.UPDATE(package);
        res.send(200);
    }
    catch (err) { console.log(`Failed: ${err}`) }
})


module.exports = router;

