import React, { useState, useEffect } from 'react'
import './Chat.css'
// import $ from 'jquery';

// $(document).ready(function () {

//     $('#chatTextInputField').keypress(function (e) {
//         if (e.which === 13)
//             $('#sendButton').click();
//     });

// });

const SendButton = ({ sendText }) => {

    const [inputSenderText, setSenderText] = useState();
    useEffect(() => {
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

    return (
        <>
            <div className="box-footer" style={{ background: "#cbe2cf" }}>
                <form onSubmit={onSendButton}>
                    <div style={{ direction: 'rtl' }} className="input-group">
                        <input id="chatTextInputField" type="text" name="message" placeholder="הכנס טקסט..." className="form-control" onChange={handleChange}>
                        </input>
                        <span className="input-group-btn">
                            <button id="sendButton" type="submit" onClick={onSendButton} style={{ background: "#2ec365" }} className="btn btn-primary btn-flat">שלח</button>
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SendButton;
