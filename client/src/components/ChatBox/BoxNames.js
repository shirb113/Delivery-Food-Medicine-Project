import React, { useEffect, useState } from 'react'

const BoxNames = ({ isActive, user, setChoosenManager, managerSelected }) => {
    const [clickTarget, setClickTarget] = useState(isActive)

    useEffect(() => {
        if (user === managerSelected)
            setClickTarget(true)
        clickTarget && setClickTarget(false)
    }, [managerSelected])


    const onClickManagerUser = (e) => {
        setChoosenManager(user)
    }
    return <div id="ManagerUser" onClick={onClickManagerUser} class={`${clickTarget ? 'active_chat' : ''} `}>
        <div class="chat_people" style={{ display: 'flex', flexDirection: ' row-reverse', textAlign: 'right' }}>
            <div class="chat_img"> <img src={user.image} alt="sunil" /></div>
            <div class="chat_ib"><h5>{user.fullName} <span class="chat_date" style={{ float: 'left' }}>{`${user.type}/ת`}</span></h5>
            </div>
        </div>
    </div>






}


export default BoxNames