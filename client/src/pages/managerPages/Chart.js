import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultPieChart from '../../components/Accessories/Charts/DefaultPieChart';
import PagesTitles from "../../components/Accessories/Charts/PagesTitles";
import ViewDayIcon from '@material-ui/icons/ViewDay';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TabPanel from "../../components/Accessories/Charts/TabPanel";
import DayChart from "./PieCharts/DayChart";
import WeekChart from "./PieCharts/WeekChart";
import MonthChart from "./PieCharts/MonthChart";
import DayBarChart from "./PieCharts/DayBarChart";
import WeekBarChart from "./PieCharts/WeekBarChart";
import MonthBarChart from "./PieCharts/MonthBarChart";
import './Chart.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    borderLeftSize: {
        borderLeftStyle: 'dotted',
        borderColor: 'cadetblue',
        borderWidth: '4px',
    }
}));

const Chart = ({ }) => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const listOfTabs = [
        { label: "חתך יומי", icon: <PieChartIcon /> },
        { label: " חתך יומי", icon: <BarChartIcon /> },
        { label: "חתך שבועי", icon: <PieChartIcon /> },
        { label: "חתך שבועי", icon: <BarChartIcon /> },
        { label: "חתך חודשי", icon: <PieChartIcon /> },
        { label: "חתך חודשי", icon: <BarChartIcon /> },
    ]

    return (

        <div className={classes.root} style={{ direction: "rtl", background: "transparent" }} >
            <PagesTitles value={value} setValue={setValue} listOfTabs={listOfTabs} />

            {/* Pages Itself */}
            <TabPanel value={value} index={0}>
                <DayChart />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <WeekChart />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <MonthChart />
            </TabPanel>

            <TabPanel value={value} index={1}  >
                <DayBarChart />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <WeekBarChart />
            </TabPanel>

            <TabPanel value={value} index={5}>
                <MonthBarChart />
            </TabPanel>
        </div>
    );

}
export default Chart;












