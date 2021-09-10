const lodash = require('lodash')
// const underscore = require('underscore')
var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models')("users");


/* POST users listing. */
router.post('/login', async function (req, res, next) {

  let { username: userName, password } = req.body
  //the password here is visable and its wrong!
  console.log("i am here")
  // Inquire all the users at once and get it as an array
  let users = [];
  try {
    users = await User.REQUEST();
  }
  catch (err) { console.log(`Failed: ${err}`) }

  let currentUser;
  let hashUser = '';
  users.forEach(user => {
    if ((user.Active) && (user.userName == userName)) {
      currentUser = user
      hashUser = user.password;
    }
  });

  bcrypt.compare(req.body.password, hashUser, function (err, result) {
    const userWithoutPass = lodash.omit(currentUser, ['password'])
    if (result) {
      const createToken = jwt.sign({ password }, 'jwtSecret', {
        expiresIn: 24 * 60 * 60 * 1000,
      })

      res.cookie('token', createToken, { httpOnly: true }); //MAKE SURE IT'LL WORK

      //res.session.user = currentUser;
      res.json({
        token: {
          "token": createToken,
          "type": userWithoutPass.type === "מנהל" ? 'manager' : 'worker',
          "userName": userWithoutPass.userName
        },
        message: "success",
        //user: currentUser
      });
    }
    else {
      res.sendStatus(404);
    }
  });

  // bcrypt.hash('', saltRounds, (err, hash) => {
  //   if (err){
  //     console.log(err);
  //   }
  //   console.log(hash)
  // });

})

router.post('/getUsers', async function (req, res, next) {
  // console.log("give me users");
  let users = [];
  try {
    users = await User.REQUEST();
  }
  catch (err) { console.log(`Failed: ${err}`) }

  //console.log(users);
  res.send(users);
})

router.post('/addUser', async function (req, res, next) {
  console.log("add user");
  let user = req.body;
  var newUser = {};
  console.log(user)

  await bcrypt.hash(user.password, saltRounds, async (err, hash) => {
    if (err) {
      console.log(err);
    }
    newuser = {
      type: user.type,
      id: user.id,
      fullName: user.fullName,
      userName: user.userName,
      password: hash,
      phone: user.phone,
      email: user.email,
      address: user.address,
      image: user.image,
      lat: user.lat,
      lon: user.lon
    }
    try {
      await User.create(newuser);
      res.send(200);
    }
    catch (err) { console.log(`Failed: ${err}`) }
  });

})


router.post('/updateUser', async function (req, res, next) {
  console.log("update user");
  let user = req.body;
  console.log(user)
  try {
    await User.UPDATEUSER(user);
    res.send(200);
  }
  catch (err) { console.log(`Failed: ${err}`) }
})

router.post('/getUserByName', async function (req, res, next) {
  console.log("getUserByName");
  let name = req.body.name;
  console.log(name);

  let user = {};
  try {
    user = await User.REQUESTBYNAME(name);
    res.send(user);
  }
  catch (err) { console.log(`Failed: ${err}`) }
})

module.exports = router;
