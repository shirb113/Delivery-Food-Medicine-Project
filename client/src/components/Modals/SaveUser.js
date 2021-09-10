import React, { useState, useEffect } from 'react';
import './SaveUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import { useStyles } from './utils'
import { serverCreateNewUser, serverLocationIqRequest } from '../../axios_requests'



const SaveUser = ({ handleClose, display, handleSave }) => {
    const classes = useStyles();

    const [useridinfo, setUserId] = useState();
    const [userfullnameinfo, setUserfullName] = useState();
    const [usernameinfo, setUserName] = useState();
    const [userpasswordinfo, setUserPaswword] = useState();
    const [userphoneinfo, setUserPhone] = useState();
    const [useremailinfo, setUserEmail] = useState();
    const [useraddrssinfo, setUserAdress] = useState();
    const [usertypeinfo, setUserType] = useState();


    const createNewUser = (locationData) => {

        let lat_r = locationData[0]['lat'];
        let lon_r = locationData[0]['lon'];
        let newUser = {
            type: usertypeinfo,
            id: useridinfo,
            fullName: userfullnameinfo,
            userName: usernameinfo,
            password: userpasswordinfo,
            phone: userphoneinfo,
            email: useremailinfo,
            address: useraddrssinfo,
            image: "/assets/images/avatar00.png",
            lat: lat_r,
            lon: lon_r
        }
        serverCreateNewUser(newUser)
            .then(res => {
                console.log(res);
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    const saveUser = () => {
        console.log('save user')
        //let newUser = [usertypeinfo, useridinfo, userfullnameinfo, usernameinfo, userpasswordinfo, userphoneinfo, useremailinfo, useraddrssinfo, '']

        let israel = " ישראל";
        let location = (israel + " " + useraddrssinfo).replaceAll(' ', '%20');
        serverLocationIqRequest(location)
            .then(locationData => {
                createNewUser(locationData)
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleChange = (prop) => (event) => {
        console.log('on change')
        //setValues({ ...userInformation, [prop]: event.target.value });
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
                        <div className="col-lg-3">
                            <div className="card" style={{ height: "584px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="/assets/images/avatar0.jpg" alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
                                        <div className="mt-3">
                                            <h4>משתמש חדש במערכת</h4>
                                            <br />
                                            <h5 className="text-secondary mb-1">סמן טיפוס עובד</h5>
                                            {/*<p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}

                                            <br />
                                            {/* <button class="btn btn-primary" style={{ background: "#3bb6b1" }}>tttttt</button> */}
                                            <Select id="userType" style={{ width: "170px", height: "50px", background: "#3bb6b1" }} onChange={e => setUserType(e.target.value)}>
                                                <option style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }} value="מנהל">מנהל</option>
                                                <option style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }} value="עובד">עובד</option>
                                            </Select>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-9" dir="rtl">
                            <div className="card">
                                <div className="card-body row mb-3" dir="rtl">
                                    <TextField fullWidth
                                        label="תעודת זהות"
                                        id="userId"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('id')}
                                        onChange={e => setUserId(e.target.value)}
                                    />
                                    <TextField fullWidth
                                        label="שם מלא"
                                        id="userFullName"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('fullName')}
                                        onChange={e => setUserfullName(e.target.value)}
                                    />
                                    <TextField fullWidth
                                        label="שם משתמש"
                                        id="userName"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('userName')}
                                        onChange={e => setUserName(e.target.value)}

                                    />
                                    <TextField fullWidth
                                        label="סיסמה"
                                        id="userPassword"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('password')}
                                        onChange={e => setUserPaswword(e.target.value)}
                                    />
                                    <TextField fullWidth
                                        label="טלפון"
                                        id="userPhone"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('phone')}
                                        onChange={e => setUserPhone(e.target.value)}

                                    />
                                    <TextField fullWidth
                                        label="מייל"
                                        id="userMail"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('email')}
                                        onChange={e => setUserEmail(e.target.value)}

                                    />
                                    <TextField fullWidth
                                        label="כתובת"
                                        id="userAddress"
                                        className={clsx(classes.margin)}
                                        //onChange={handleChange('address')}
                                        onChange={e => setUserAdress(e.target.value)}

                                    />
                                    <div style={{ display: 'flex', width: '100%', 'justify-content': 'center', 'align-items': 'center' }} >
                                        <Input type="button" className="btn btn-primary px-4" onClick={() => { saveUser() }} value="הוסף משתמש" style={{ background: "#3bb6b1", fontWeight: 'bold' }} />
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





export default SaveUser;