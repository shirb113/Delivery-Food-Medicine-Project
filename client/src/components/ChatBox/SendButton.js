
import React, { useState, useEffect } from 'react'


console.log('in page')
const SendButton = ({ sendText }) => {
    const [inputSenderText, setSenderText] = useState();
    useEffect(() => {
        console.log('in')
        setSenderText("");
    }, []);
    const handleChange = (event) => {
        // console.log('on change: ', inputSenderText)
        setSenderText(event.target.value);
        // console.log('after change: ', inputSenderText)
    };


    const onSendButton = (e) => {
        e.preventDefault()
        sendText(inputSenderText);

        //clear input field
        document.getElementById('chatTextInputField').value = ""
    }

    return <div class="type_msg">
        <form onSubmit={onSendButton}>
            <div class="input_msg_write">
                <input id="chatTextInputField" type="text" class="write_msg" placeholder="הכנס טקסט..." style={{ background: 'white', direction: 'rtl', paddingRight: '48px' }} onChange={handleChange} />
                <button class="msg_send_btn" onClick={onSendButton}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>

        </form>
    </div>
}

export default SendButton