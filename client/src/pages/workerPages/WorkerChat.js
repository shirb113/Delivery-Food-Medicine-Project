
import React from 'react'
import Chat from '../../components/ChatBox/Chat'

import { serverGetUsersData } from '../../axios_requests'

var usersList = []
serverGetUsersData().then((users) => {
    users.forEach(user => {
        if (user.type === "מנהל") {
            usersList.push(user)
        }
    })
}).catch(err => {
})

const WorkerChat = ({ user }) => {

    const props = { user, usersList }
    return <Chat {...props} />
}
export default WorkerChat;