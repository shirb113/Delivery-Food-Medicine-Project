
import React, { useEffect, useState } from 'react'
import Chat from '../../components/ChatBox/Chat'
import { serverGetUsersData } from '../../axios_requests'
import { Button, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import './ManagerChat.css'
import { sendGeneralMessage } from '../../socket_io'
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: "20em",
        color: 'black',
        backgroundColor: 'yellowgreen',
        fontWeight: 700,
        outline: 'none'
    },
    input: {
        display: ' inline-block',
        /* display: flex; */
        borderRadius: '20px',
        flexFlow: 'wrap',
        width: '13em',
        /* height: 41px; */
        padding: '8px',
        paddingLeft: '47px'
    },
    circleButton: {
        borderRadius: '209px',
        outline: 'none',
        border: 'none',
        color: 'black',
        position: 'absolute',
        top: '2px',
        left: '-3px',
        transform: 'rotateZ(-33deg)',
    }
}));
var usersList = []





const ManagerChat = ({ user: currentUser }) => {
    const classes = useStyles();
    const [inputSenderText, setSenderText] = useState();
    const [isOpen, setIsOpen] = useState(false)
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
        sendGeneralMessage(inputSenderText);

        alert(inputSenderText)
        //clear input field
        document.getElementById('chatTextInputField').value = ""
        setIsOpen(false)
    }
    const revealedInput = <div style={{ background: "#cbe2cf" }}>
        <form onSubmit={onSendButton} className={'form'}>
            <div style={{ direction: 'rtl' }}>
                <input className={classes.input} id="chatTextInputField" type="text" name="message" placeholder="הכנס טקסט..." onChange={handleChange}>
                </input>
                <Button variant="outlined" color="inherit" className={`sendAllMsgs ${classes.circleButton}`}>
                    {/* style={{ transform: 'rotateY(90deg)' }} */}
                    <SendIcon />
                </Button>
            </div>
        </form>
    </div>

    useEffect(() => {
        serverGetUsersData().then((users) => {
            users.forEach(user => {
                if (user.fullName !== currentUser.fullName) {
                    usersList.push(user)
                }
            })
        }).catch(err => {
        })
    }, [])


    const props = { user: currentUser, usersList }
    return <>

        <Chat {...props} />
        <div style={{ position: 'absolute', top: '211px', left: '19px' }}>
            <Button onClick={() => setIsOpen(!isOpen)} variant="outlined" color="inherit" className={classes.button}>
                <AddIcon />הודעה כללית
            </Button>
            {isOpen ? revealedInput : ''}
        </div>black
    </>
}
export default ManagerChat;