import React, { useContext, useEffect, useState } from 'react'
import Users from '../../components/Accessories/Users';
import EditUser from '../../components/Modals/EditUser';
import SaveUser from '../../components/Modals/SaveUser';
import Chat from '../../components/Modals/ManagerChat/Chat';
import { serverGetUsersData, serverGetUserChatMsgs } from '../../axios_requests'
import { getChatMsgsOfUser } from '../../utils'
// import { , serverGetUserByNameData } from './axios_requests'

import { ChatMessages } from '../../App'

let users;
serverGetUsersData()
    .then(data => {
        users = data;
    })


const UsersInfo = ({ user: connectedUser }) => {
    // const  chatMsgs, setChatMsgs } = useContext(ChatMessages)
    const [chatMsgs, setChatMsgs] = useState([])
    const [editUserIsOpen, setEditUserIsOpen] = useState(false);
    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const [saveUserIsOpen, setSaveUserIsOpen] = useState(false);
    const [specificChatMsgs, setSpecificChatMsgs] = useState([])
    console.log('IF SAVED')
    console.log(chatMsgs)
    const requestForMsgs = () => {
        serverGetUserChatMsgs({ userName: window.name }).then((data) => {
            setChatMsgs(data)
            console.log(data)
        })

    }
    useEffect(() => {
        requestForMsgs()
        // serverGetUserChatMsgs({ userName: window.name }).then((data) => {
        //     setChatMsgs(data)
        // })
    }, [])

    const updatChatUserList = (user) => {
        const currentUser = user ? user : userToEdit
        setSpecificChatMsgs(
            getChatMsgsOfUser({ chatMsgs, currentUser, connectedUser }))

    }

    useEffect(() => {
        updatChatUserList()
        console.log('updated list: ', specificChatMsgs)
    }, [chatMsgs])



    const handlers = {
        //close an open
        closeHandle: () => {
            setEditUserIsOpen(!editUserIsOpen);
        },
        closeHandleSave: () => {
            setSaveUserIsOpen(!saveUserIsOpen);
        },
        openChat: (user) => {

            //maybe to delete:
            handlers.updateUserToEdit(user);
            // console.log(chatMsgs)
            // specificChatMsgs, setSpecificChatMsgs
            updatChatUserList(user)
            setChatIsOpen(true)
        },
        closeChat: () => {

            setChatIsOpen(false)
        },
        updateUserToEdit: (user) => {
            setUserToEdit(user)
        },
        saveUser: (user) => {

            handlers.updateUserToEdit(user);
            //Send user information to the server to save it -DB
            users[0] = user


            //clse window
            handlers.closeHandle()
            //change user information on view--> refresh page
            // window.location.reload(true);
        },
        editUser: (user) => {
            //Open the Window:
            handlers.closeHandle();
            //Show User Information
            handlers.updateUserToEdit(user);

        },

        newUser: () => {
            //Open the Window:
            handlers.closeHandleSave();
            //Show User Information
            //handlers.updateUserToEdit();

        },
        handleNewMsg: (msg) => {
            setChatMsgs([...chatMsgs, msg])

        },
        handleDeleteMsg: () => {
            requestForMsgs()
        }

    }
    console.log(userToEdit)
    return (
        <>
            <EditUser handleClose={handlers.closeHandle} display={editUserIsOpen} user={userToEdit} handleSave={handlers.saveUser} />
            <Users users={users} handlers={handlers} />
            <Chat handleDeleteMsg={handlers.handleDeleteMsg} senderName={connectedUser.fullName} handleNewMsg={handlers.handleNewMsg} handleClose={handlers.closeChat} display={chatIsOpen} reciverName={userToEdit.fullName} reciverIcon={userToEdit.image} msgs={specificChatMsgs} />
            <SaveUser handleClose={handlers.closeHandleSave} display={saveUserIsOpen} handleSave={handlers.saveUser} />

        </>


    )

}

export default UsersInfo