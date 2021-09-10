import React, { useState, useEffect } from 'react'
import SenderChat from './SenderChat'
import ReciverChat from './ReciverChat'
import SendButton from './SendButton'
import { onSendMessage, socket } from '../../socket_io'
import CrewMsg from './CrewMsg'

const ChatViewBox = ({ senderName, senderIcon, reciverIcon, reciverName, msgs, handleNewMsg, handleDeleteMsg }) => {


    const [chat, setChat] = useState([]);
    useEffect(() => {
        setChat(msgs)
        console.log(msgs)
    }, [msgs])

    useEffect(() => {

        socket.on("private_message", ({ from, to, msg, date, uId }) => {
            handleNewMsg({ from, to, msg, date, uId }) //to make sure only the right messages will be here
            console.log('update', from, to, msg, date, uId)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        onSendMessage({ from: senderName, msg: senderText, to: reciverName })


    }


    const initialState = {
        mouseX: null,
        mouseY: null,
    };

    if (!reciverName) return ""

    return <div class="mesgs" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }}>
        <div class="msg_history" >
            {/* msgs.map */}
            {
                chat?.map(({ from, to, msg, date, uId }, index) => {
                    // if(to==='*'){
                    return from === 'צוות יד לחבר' ? <CrewMsg handleDeleteMsg={handleDeleteMsg} initialState={initialState} chatText={msg} date={date} uId={uId} /> :
                        // }
                        from !== reciverName ? <SenderChat initialState={initialState} uId={uId} avatarImg={senderIcon} chatText={msg} date={date} handleDeleteMsg={handleDeleteMsg} /> : <ReciverChat uId={uId} initialState={initialState} avatarImg={reciverIcon} reciverName={reciverName} chatText={msg} date={date} handleDeleteMsg={handleDeleteMsg} />
                })
            }
        </div>
        <SendButton sendText={sendText} />
    </div>


}


export default ChatViewBox