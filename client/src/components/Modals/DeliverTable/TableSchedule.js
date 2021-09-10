import React, { useState, useEffect } from 'react';
import '../EditUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from '../utils'
import { serverGetUsersData, serverAddSchedule } from '../../../axios_requests'
import DeliversTabel from './DeliversTabel';
import { without } from 'lodash'
// import $ from 'jquery'

let users
serverGetUsersData().then(data => { users = data })
    .catch(err => console.log(err))
var cityDict = {
    'צפון': ['עפולה'],
    'דרום': ['אשקלון', 'אשדוד'],
    'מרכז': ['רמת-גן', 'חולון', 'תל-אביב'],
    'ירושלים': ['ירושלים']
}

const TableSchedule = ({ location, date, handleClose, display, handleSave }) => {
    const [deliversList, setDeleverList] = useState()
    const manageDeliversSelection = (isChecked, deliverId) => {
        isChecked ? deliversList.push(deliverId) : deliversList.includes(deliverId) && setDeleverList(without(deliversList, deliverId))
    }



    const classes = useStyles();
    const [mapLocation, setMapLocation] = useState({});
    const [mapDate, setMapDate] = useState({});
    useEffect(() => {
        setMapDate(date);
    }, [date]);

    function createData(id, fullName, address) {
        return { id, fullName, address };
    }

    const rows = [];
    let cityList = cityDict[location];
    if (cityList) {
        users.forEach((user) => {
            let usercity = user.address.split(' ')[0];
            if (user.type == 'עובד') {
                cityList.forEach((city) => {
                    if (usercity == city) {
                        rows.push(createData(user.id, user.fullName, user.address))
                    }
                })
            }
        })
    }

    useEffect(() => {
        setMapLocation(location);
        setDeleverList([])
    }, [location]);

    const addSchedule = () => {

        //Can Save only if DeliverLIst is not Empty otherwise- drop an error
        if (!deliversList.length) {
            alert('לא נבחר מחלק')
        }
        else {


            var string_date = date.toLocaleString();
            var today = (string_date.split(',')[0]).replaceAll('.', '/')
            console.log(today);
            let workerid = deliversList[0]

            const info = {
                date: today,
                id: workerid
            }
            console.log(info)
            serverAddSchedule(info)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))

            //use deliverList


            //close pop up
            handleClose()
        }
    }

    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        <div className="col-lg-12">
                            <div className="card" style={{ height: "375px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <br /><br />
                                    {/* {deliversTable} */}
                                    <DeliversTabel location={location} rows={rows} classes={classes} manageDeliversSelection={manageDeliversSelection} />

                                    <br />
                                    <div style={{ background: "transparent" }}>
                                        <input type="button" onClick={() => addSchedule()} className="btn btn-primary px-4" value="שמור לוז עבודה" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "50px", marginTop: "27px" }} />
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





export default TableSchedule;