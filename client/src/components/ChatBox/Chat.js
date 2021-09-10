import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './ChatBox.css'
import { serverGetUserChatMsgs } from '../../axios_requests'
import { getChatMsgsOfUser } from '../../utils'
import BoxNames from './BoxNames'
import ChatViewBox from './ChatViewBox'
import { serverDeleteMsg } from '../../axios_requests'
import { serverDeleteChatAlert, socket } from '../../socket_io'


const Chat = ({ user: connectedUser, usersList }) => {
    const [chatMsgs, setChatMsgs] = useState([])
    const [managerSelected, setChoosenManager] = useState({})
    const [specificChatMsgs, setSpecificChatMsgs] = useState([])

    const requestForMsgs = () => {
        serverGetUserChatMsgs({ userName: window.name }).then((data) => {
            setChatMsgs(data)
        })

    }

    useEffect(() => {
        socket.on("delete_msg", () => {
            //ask for msgs again
            requestForMsgs()
        })
    })
    useEffect(() => {
        requestForMsgs()
    }, [])

    const updatChatUserList = (user) => {
        const currentUser = user ? user : managerSelected
        setSpecificChatMsgs(
            getChatMsgsOfUser({ chatMsgs, currentUser, connectedUser }))

    }

    useEffect(() => {
        updatChatUserList()
    }, [chatMsgs])


    const handlers = {
        handleNewMsg: (msg) => {
            setChatMsgs([...chatMsgs, msg])

        },
        handleClickOnUser: (user) => {
            setChoosenManager(user)
            updatChatUserList(user)
        },
        handleDeleteMsg: (uId) => {
            serverDeleteMsg({ userName: window.name, uId, }).then((msgs) => {
                setChatMsgs(msgs)
            })
            serverDeleteChatAlert();
        }
    }

    return <>
        <h1 style={{ textAlign: 'center', background: 'white' }}> ניהול שיחות</h1>
        <div class="messaging" onContextMenu={(e) => e.preventDefault()}>
            <div class="inbox_msg" style={{ display: 'flex', flexDirection: ' row-reverse' }}>
                <div class="inbox_people">
                    <div class="inbox_chat scroll">
                        {/* List of Managers */}

                        {
                            usersList.map(user => <BoxNames isActive={false} user={user} setChoosenManager={handlers.handleClickOnUser} managerSelected={managerSelected} />)
                        }

                    </div>
                </div>
                <ChatViewBox handleDeleteMsg={handlers.handleDeleteMsg} senderIcon={connectedUser.image} senderName={connectedUser.fullName} reciverIcon={managerSelected.image} reciverName={managerSelected.fullName} msgs={specificChatMsgs} handleNewMsg={handlers.handleNewMsg} />
            </div>
        </div>
    </>
}
export default Chat;