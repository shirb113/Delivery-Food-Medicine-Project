//const Blog = require('../models')("blog");
const RightPosts = require('../models')("rightPosts");
const LeftPosts = require('../models')("leftPosts");
var express = require('express');
var router = express.Router();

router.post('/', async function (req, res, next) {
    //the password here is visable and its wrong!
    console.log("i am at blog")

    // Inquire all the users at once and get it as an array
    let blogInfo = {};
    try {
        blogInfo.leftPosts = await LeftPosts.REQUEST();
        blogInfo.rightPosts = await RightPosts.REQUEST();
    }
    catch (err) { console.log(`Failed: ${err}`) }

    res.send(blogInfo);
})
router.post('/createRightPost', async function (req, res, next) {
    console.log("----I AM AT POST CREATE RIGHT POST---")
    const rightPost = req.body.rightPost;
    try {
        await RightPosts.CREATE(rightPost);
        res.sendStatus(200)
    }
    catch (err) { console.log(`Failed: ${err}`) }
});

module.exports = router;

