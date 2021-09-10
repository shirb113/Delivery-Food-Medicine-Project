import React, { useState } from 'react'
import ContextMenu from '../../components/Modals/ContextMenu/ContextMenu'
import '../../components/Modals/ContextMenu/contextMenu.css'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { handleClick } from '../../components/Modals/ContextMenu/contextMenuUtils'



const SenderChat = ({ initialState, avatarImg, chatText, date, uId, handleDeleteMsg }) => {
    const msgDate = new Date(date)
    const [state, setState] = useState(initialState);
    const clickHandler = (e) => handleClick(e, uId, setState)
    const handleDelMsg = () => {
        handleDeleteMsg(uId)
    }
    const getCopyElement = () => uId
    const props = { getCopyElement, handleClick: clickHandler, state, setState, handleDelMsg, initialState }

    return <>
        <div class="outgoing_msg"  >
            <div class="outgoing_msg_img" >
                <img src={avatarImg ? avatarImg : "https://ptetutorials.com/images/user-profile.png"} alt="sunil" />
            </div>
            <div class="sent_msg" onContextMenu={clickHandler} style={{ cursor: 'context-menu' }} >
                <p id={uId} style={{ marginLeft: "-74px" }}>{chatText}</p>
                <span class="time_date"> {msgDate?.toDateString()}</span>
            </div>
            <div className={'deleteMsg'} onClick={handleDelMsg}>
                < DeleteOutlineOutlinedIcon />
            </div>

        </div>
        <ContextMenu {...props} />
    </>
}

export default SenderChat