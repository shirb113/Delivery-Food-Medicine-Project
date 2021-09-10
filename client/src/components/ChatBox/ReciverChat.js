import React, { useState } from 'react'
import ContextMenu from '../../components/Modals/ContextMenu/ContextMenu'
import { handleClick } from '../../components/Modals/ContextMenu/contextMenuUtils'
import '../../components/Modals/ContextMenu/contextMenu.css'


const ReciverChat = ({ initialState, reciverName, avatarImg, chatText, date, uId }) => {
    const msgDate = new Date(date)
    const [state, setState] = useState(initialState);
    const getCopyElement = () => uId
    const clickHandler = (e) => handleClick(e, uId, setState)
    const props = { handleClick: clickHandler, state, setState, initialState, getCopyElement }


    return <>
        <div class="incoming_msg" style={{ paddingTop: '22px', }}>
            <div class="incoming_msg_img">
                <img src={avatarImg ? avatarImg : "https://ptetutorials.com/images/user-profile.png"} alt="sunil" />
            </div>
            <div class="received_msg">
                <div class="received_withd_msg" onContextMenu={clickHandler}>
                    <p id={uId} >{chatText}</p>
                    <span class="time_date"> {msgDate?.toDateString()}</span>
                </div>
            </div>
        </div>
        <ContextMenu {...props} />
    </>
}

export default ReciverChat