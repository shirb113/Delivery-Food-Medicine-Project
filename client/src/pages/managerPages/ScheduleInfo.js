import React, { useState } from 'react';
import 'date-fns';
import TableSchedule from '../../components/Modals/DeliverTable/TableSchedule';
import Schedule from '../../components/Accessories/Schedule';



const ScheduleInfo = () => {
    const [tableIsOpen, setopenTable] = useState(false);
    const [mapLocation, setMapLocation] = useState({});
    const [mapDate, setMapDate] = useState({});


    const handlers = {

        openTable: (location, date) => {
            setopenTable(true);
            handlers.updateLocationToOpen(location);
            handlers.updateDateToOpen(date);
        },
        closeTable: () => {

            setopenTable(false)
        },
        updateLocationToOpen: (location, date) => {
            setMapLocation(location);
        },
        updateDateToOpen: (date) => {
            setMapDate(date);
        }


    }


    return (
        <>
            <TableSchedule location={mapLocation.title} date={mapDate} display={tableIsOpen} handleClose={handlers.closeTable} ></TableSchedule>
            <Schedule handlers={handlers} ></Schedule>
        </>
    );

}
export default ScheduleInfo;