import React, { useState } from "react";
import { ColumnChart } from '@ui5/webcomponents-react-charts';
import './Chart.css'



export default function DefaultBarChart(props) {
    return (
        <ColumnChart
            dataset={props.dataset}

            dimensions={[
                {
                    accessor: 'name',
                    //formatter: function noRefCheck() { }
                }
            ]}
            measures={[
                {
                    accessor: 'package_arrived_true',
                    //formatter: function noRefCheck() { },
                    label: 'הגיעו',
                    color: '#009999'
                },
                {
                    accessor: 'package_arrived_false',
                    label: "לא הגיעו",
                    color: '#C13C37'
                }
            ]}
            
            onClick={function noRefCheck() { }}
            onDataPointClick={function noRefCheck() { }}
            onLegendClick={function noRefCheck() { }}
            style={{
                height: '40vh',
                width: '95%',
                direction: "ltr",
            }}
        />
    );
}