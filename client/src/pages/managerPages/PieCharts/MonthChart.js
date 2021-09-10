import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultPieChart from "../../../components/Accessories/Charts/DefaultPieChart";
import { serverGetPackages } from '../../../axios_requests'


let num_true = 0;
let num_false = 0;

serverGetPackages()
    .then(package_list => {
        package_list.map((item) => {
            if (item.packageArrived == true) {
                num_true += 1
            }
            else {
                num_false += 1
            }
        })
        num_true = num_true * 28;
        num_false = num_false * 28;
    })
    .catch(err => console.log(err))






const MonthChart = ({ }) => {

    return (
        <DefaultPieChart data={[
            { title: 'לא הגיעו', value: num_true * 0.45, color: '#C13C37' },
            { title: 'הגיעו', value: num_false * 0.55, color: '#009999' },
            // { title: 'Three', value: 20, color: '#6A2135' },
        ]} />
    )
}

export default MonthChart