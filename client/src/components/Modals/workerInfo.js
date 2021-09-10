import React, { useState, useEffect } from 'react';
import './EditUser.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './utils'
import { serverUpdateUserData } from '../../axios_requests'



const WorkerInfo = ({ user, handleSave }) => {
    const classes = useStyles();
    //console.log(user)
    const [userInformation, setValues] = useState({});
    useEffect(() => {
        setValues(user);
    }, [user]);

    const updateUser = () => {
        console.log('update user')
        console.log(userInformation)
        serverUpdateUserData(userInformation).then(res => {
            console.log(res);
            window.location.reload()
        })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (prop) => (event) => {
        console.log('on change')
        setValues({ ...userInformation, [prop]: event.target.value });
    };


    /**************************************************************** */


    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="main-body">
                <div className="row" style={{ display: "flex" }}>
                    <div className="col-lg-4">
                        <div className="card" style={{ height: "456px" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={userInformation.image} alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
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

                                    />  */}
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
                                    <Input type="button" className="btn btn-primary px-4" onClick={() => updateUser(userInformation)} value="שמור שינויים" style={{ background: "#3bb6b1", fontWeight: 'bold' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default WorkerInfo;