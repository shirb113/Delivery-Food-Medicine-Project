import React, { useEffect, useState } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import { serverUpdatePackage } from '../../../axios_requests'
// import { withStyles } from '@material-ui/core/styles';
// import { cyan } from '@material-ui/core/colors';


// const SwitchColor = withStyles({
//     switchBase: {
//         color: cyan[700],
//         '&$checked': {
//             color: cyan[500],
//         },
//         '&$checked + $track': {
//             backgroundColor: cyan[500],
//         },
//     },
//     checked: {},
//     track: {},
// })(Switch);


const PackageRow = ({ packageToSend }) => {

    const [state, setState] = React.useState(packageToSend.packageArrived);

    const handleChange = (event) => {
        setState(event.target.checked);
        //send changes to the server


        const updatedPackage = { ...packageToSend, ...{ packageArrived: event.target.checked } }

        console.log(updatedPackage)
        //updatePackage
        serverUpdatePackage(updatedPackage)
            .then(res => {
                console.log(res);
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })


    };

    return (
        <TableRow style={{ height: "50px" }}>
            <TableCell>
                <Switch
                    checked={state}
                    onChange={handleChange}
                    color="primary"
                    name="state"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />

            </TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{packageToSend.address}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{packageToSend.phone}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{packageToSend.email}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{packageToSend.fullName}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{packageToSend.id}</TableCell>
        </TableRow>
    )

}

export default PackageRow