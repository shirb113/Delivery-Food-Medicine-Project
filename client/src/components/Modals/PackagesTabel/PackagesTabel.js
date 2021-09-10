import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PackageRow from './PackageRow';
import { useStyles } from '../utils'


const PackagesTabel = ({ packages }) => {
    const classes = useStyles();


    return (
        <TableContainer component={Paper} style={{ margin: "auto", width: "80%", boxShadow: " 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" }}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow style={{ background: "#3bb6b1" }}>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">סטטוס</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">כתובת</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">טלפון</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">אימייל</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">שם מלא</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">תעודת זהות</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        packages.map((packageToSend) => <PackageRow packageToSend={packageToSend} />)
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PackagesTabel