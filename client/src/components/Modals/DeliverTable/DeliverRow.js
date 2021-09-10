import React, { useEffect, useState } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';

const DeliverRow = ({ name, manageDeliversSelection, address, fullName, id, location }) => {

    const [isChecked, setIsChecked] = useState(false)
    console.log(isChecked)
    useEffect(() => {
        setIsChecked(false)

        //later we need to fix it to be who he already choosen
    }, [location])

    return (
        <TableRow key={name} style={{ height: "50px" }}>
            <TableCell align="right" padding="checkbox">

                <Checkbox checked={isChecked} style={{ color: "#3bb6b1" }} onChange={(e) => {
                    manageDeliversSelection(!isChecked, id)
                    setIsChecked(!isChecked)

                }} />
            </TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{address}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{fullName}</TableCell>
            <TableCell style={{ fontSize: "15px" }} align="right">{id}</TableCell>
        </TableRow>
    )


}

export default DeliverRow