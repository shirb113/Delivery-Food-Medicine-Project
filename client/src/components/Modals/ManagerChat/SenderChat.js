import React from 'react'
import './Chat.css'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


const SenderChat = ({ avatarImg, chatText, date }) => {

    const msgDate = new Date(date)

    return (
        <>
            <div className="direct-chat-msg right">
                <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">אני</span>
                    <span className="direct-chat-timestamp pull-left" style={{ color: 'black' }}>{msgDate?.toDateString()}</span>
                </div>
                <img className="direct-chat-img" src={avatarImg ? avatarImg : "/assets/images/avatar4.png"} alt="Message User Image" />
                <div className="direct-chat-text">
                    {chatText ? chatText : 'יש לי משימה בשבילך'}
                </div>
            </div>
        </>
    )
}

export default SenderChat;
