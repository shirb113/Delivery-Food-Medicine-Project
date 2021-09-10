const ChatMSG = require('../models')("chatMsg");
var express = require('express');
var router = express.Router();
const User = require('../models')("users");

/*******************************************/
/*              Utils Functions            */
/*******************************************/

const datesAreOnSameDay = (first, second = new Date()) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

const isDeletable = ({ uId, userName }) => {
    console.log('is deletable')
    const user = POSSIBLE_USERS[userName]
    return ChatMSG.GET_MSG({ uId }).then(msg => {

        console.log('find msg')
        if (datesAreOnSameDay(new Date(msg.date)) && (user === msg.from))
            return true

        return false

    }

    )
}

/*******************************************/
/*         Chat Messages Functions         */
/*******************************************/

let POSSIBLE_USERS;
User.REQUEST().then(list => {
    POSSIBLE_USERS = list.reduce((allUsers, user) => {
        if (!(user.userName in allUsers)) {
            allUsers[user.userName] = user.fullName
        }
        return allUsers
    }, {})
    console.log('******************************')
}).catch((msg) => { })


router.post('/getUserMsg', async function (req, res, next) {
    console.log("I AM AT get CHAT MESSAGE")

    if (POSSIBLE_USERS) {
        const user = POSSIBLE_USERS[req.body.userName]
        console.log(user)
        ChatMSG.REQUEST_BY_USER(user).then(msgs => res.send(msgs)).catch(err => console.log(`Failed: ${err}`))

    }
})

router.post('/deleteMsg', async function (req, res, next) {
    const uId = req.body.uId;
    const userName = req.body.userName;
    isDeletable({ uId, userName }).then(isDel => isDel && ChatMSG.DELETE_MSG(uId)
    )
        .then(() => ChatMSG.REQUEST_BY_USER(POSSIBLE_USERS[userName])).then(msgs => {

            console.log(msgs)
            res.send(msgs)
        }).catch(err => console.log(`Failed: ${err}`))

})

module.exports = router;

