import React, { useState, useEffect } from 'react';
import './EditUser.css'
// import Input from '../../shared/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './utils'
import { serverUpdateUserData } from '../../axios_requests'

// import { create } from 'jss';
// import rtl from 'jss-rtl';




const EditUser = ({ user, handleClose, display, handleSave }) => {
    const classes = useStyles();
    //console.log(user)
    const [userInformation, setValues] = useState({});
    useEffect(() => {
        setValues(user);
    }, [user]);
    //console.log(userInformation)

    const updateUser = () => {
        console.log('update user')
        serverUpdateUserData(userInformation).then(data => {
            console.log(data);
            window.location.reload()
        })
            .catch(err => console.log(err))
    }

    const handleChange = (prop) => (event) => {
        console.log('on change')
        setValues({ ...userInformation, [prop]: event.target.value });
    };


    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        {/* closeIcon */}
                        <div className="col-lg-4">
                            <div className="card" style={{ height: "457px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={user.image} alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
                                        <div className="mt-3">
                                            <h4>{userInformation.fullName}</h4>
                                            {/* <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                                            <br />
                                            <br />
                                            <button class="btn btn-primary" style={{ background: "#3bb6b1" }}>{user.type}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-8" dir="rtl">
                            <div className="card">
                                <div className="card-body row mb-3" dir="rtl">
                                    <TextField fullWidth
                                        label="תעודת זהות"
                                        id="userId"
                                        className={clsx(classes.margin)}
                                        // style={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0% !important' }}
                                        value={userInformation.id}
                                        onChange={handleChange('id')}
                                        disabled
                                    />
                                    <TextField fullWidth
                                        label="שם מלא"
                                        id="userFullName"
                                        className={clsx(classes.margin)}
                                        // classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.fullName}
                                        onChange={handleChange('fullName')}

                                    />
                                    {/* <TextField fullWidth
                                        label="שם משתמש"
                                        id="userName"
                                        className={clsx(classes.margin)}
                                        // classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.userName}
                                        onChange={handleChange('userName')}

                                    />
                                    <TextField fullWidth
                                        label="סיסמה"
                                        id="userPassword"
                                        className={clsx(classes.margin)}
                                        // classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.password}
                                        onChange={handleChange('password')}

                                    /> */}
                                    <TextField fullWidth
                                        label="טלפון"
                                        id="userPhone"
                                        className={clsx(classes.margin)}
                                        value={userInformation.phone}
                                        onChange={handleChange('phone')}

                                    />
                                    <TextField fullWidth
                                        label="מייל"
                                        id="userMail"
                                        className={clsx(classes.margin)}
                                        value={userInformation.email}
                                        onChange={handleChange('email')}

                                    />
                                    <TextField fullWidth
                                        label="כתובת"
                                        id="userAddress"
                                        className={clsx(classes.margin)}
                                        value={userInformation.address}
                                        onChange={handleChange('address')}

                                    />
                                    <div style={{ display: 'flex', width: '100%', 'justify-content': 'center', 'align-items': 'center' }} >
                                        <Input type="button" onClick={() => { updateUser() }} className="btn btn-primary px-4" value="שמור שינויים" style={{ background: "#3bb6b1", fontWeight: 'bold' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    )
}





export default EditUser;