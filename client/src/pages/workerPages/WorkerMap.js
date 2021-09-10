import React, { useState, useEffect } from 'react';
import 'date-fns';
import ReactMapGL, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

import './map.css'
import { serverGetPackages, serverGetWorkSchedule } from '../../axios_requests';

var packages = [];
var schedule = [];
var lat_lon_f = [];
var lat_lon_t = [];
var user = {};

var date = new Date();
let string_date = date.toLocaleString();
let final_date = (string_date.split(',')[0]).replaceAll('.', '/')

let info = {
    date: final_date
}

//const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'


const WorkerMap = (id) => {

    useEffect(() => {
        serverGetPackages()
            .then(packages => {
                serverGetWorkSchedule(info)
                    .then(schedule => {
                        console.log(schedule)
                        schedule.forEach((user_p) => {
                            if (user_p.id === id.id) {
                                user = user_p;
                            }
                        })
                        console.log(user)
                        user.packages.forEach((item_user) => {
                            packages.forEach((item) => {
                                if (item.id === item_user) {
                                    if (item.packageArrived === true) {

                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_t.push(temp)
                                    }
                                    else {
                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_f.push(temp)
                                    }
                                }
                            })
                        })
                    })

                    .catch(err => {
                    })
            })
    }, [])


    // const [selectedDate, setSelectedDate] = React.useState(new Date());
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const [viewport, setViewport] = useState({
        latitude: 31.770809,
        longitude: 35.197460,
        zoom: 9,
        width: "80vw",
        height: "80vh",

    });



    return (

        <div>

            <div style={{ marginLeft: "100px" }}>
                <ReactMapGL {...viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'}
                    onViewportChange={(viewport) => { setViewport(viewport) }}
                    //mapStyle="mapbox://styles/shirmoriya/ckrksccrh23t417qro4j7tkyi"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                    {lat_lon_f.map(item => (
                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/n_brown.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_t.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/brown.png' />
                            </button>
                        </Marker>
                    ))}

                </ReactMapGL>

            </div>
        </div>
    );

}
export default WorkerMap;




