import React, { useState } from 'react'
import ContextMenu from '../../components/Modals/ContextMenu/ContextMenu'
import { handleClick } from '../../components/Modals/ContextMenu/contextMenuUtils'
import '../../components/Modals/ContextMenu/contextMenu.css'


const CrewMsg = ({ initialState, chatText, date, uId, handleDeleteMsg }) => {
    const msgDate = new Date(date)
    const [state, setState] = useState(initialState);
    const getCopyElement = () => uId
    const clickHandler = (e) => handleClick(e, uId, setState)
    const handleDelMsg = () => {
        handleDeleteMsg(uId)
    }
    const props = { handleClick: clickHandler, state, setState, initialState, getCopyElement }


    return <>
        <div className="incoming_msg crewIn_msg">
            <div className="crew_msg">
                <div className="crewMsg" onContextMenu={clickHandler}>
                    <p id={uId} >{chatText ? chatText : '***'}</p>
                    <span className="time_date"> {msgDate?.toDateString()}</span>
                </div>
            </div>
        </div>
        <ContextMenu {...props} />
    </>
}

export default CrewMsg