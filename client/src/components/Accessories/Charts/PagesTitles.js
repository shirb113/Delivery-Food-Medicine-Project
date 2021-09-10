import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './PagesTitles.css'

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`
    };
}
export default function PagesTitles({ value, setValue, listOfTabs }) {

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
        >
            {
                listOfTabs.map(tab => <Tab label={tab.label} icon={tab.icon} {...a11yProps(1)} />)
            }
        </Tabs>
    </AppBar>
}