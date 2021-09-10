import React, { useState } from 'react'
import './Chat.css'


const ReciverChat = ({ reciverName, avatarImg, chatText, date }) => {
    const msgDate = new Date(date)

    return (
        <>
            <div className="direct-chat-msg">
                <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">{reciverName ? reciverName : 'Alexander Pierce'}</span>
                    <span className="direct-chat-timestamp pull-right" style={{ color: 'black' }}>{msgDate?.toDateString()}</span>
                </div>
                <img className="direct-chat-img" src={avatarImg ? avatarImg : "https://bootdey.com/img/Content/user_1.jpg"} alt="Message User Image" />
                <div className="direct-chat-text">
                    {chatText ? chatText : "בסדר"}
                </div>
            </div>
        </>
    )
}

export default ReciverChat;
