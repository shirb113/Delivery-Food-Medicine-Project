import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ReactMapGL, { Marker } from "react-map-gl";
// import Geocode from "react-geocode";
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// import MapGL from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'
import './map.css'
import { serverGetPackages, serverGetWorkSchedule } from '../../axios_requests';

var packages = [];
var schedule = [];
var lat_lon_fB = [];
var lat_lon_tB = [];
var lat_lon_fR = [];
var lat_lon_tR = [];
var lat_lon_fW = [];
var lat_lon_tW = [];
var lat_lon_fP = [];
var lat_lon_tP = [];

var date = new Date();
let string_date = date.toLocaleString();
let final_date = (string_date.split(',')[0]).replaceAll('.', '/')

let info = {
    date: final_date
}

//const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'


const Maps = () => {

    useEffect(() => {
        serverGetPackages()
            .then(packages => {
                serverGetWorkSchedule(info)
                    .then(schedule => {
                        let user = schedule[0];
                        user.packages.map((item_user) => {
                            packages.map((item) => {
                                if (item.id === item_user) {
                                    if (item.packageArrived === true) {

                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_tB.push(temp)
                                    }
                                    else {
                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_fB.push(temp)
                                    }
                                }
                            })
                        })
                        user = schedule[1];
                        user.packages.map((item_user) => {
                            packages.map((item) => {
                                if (item.id === item_user) {
                                    if (item.packageArrived === true) {

                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_tR.push(temp)
                                    }
                                    else {
                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_fR.push(temp)
                                    }
                                }
                            })
                        })
                        user = schedule[2];
                        user.packages.map((item_user) => {
                            packages.map((item) => {
                                if (item.id === item_user) {
                                    if (item.packageArrived === true) {

                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_tW.push(temp)
                                    }
                                    else {
                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_fW.push(temp)
                                    }
                                }
                            })
                        })
                        user = schedule[3];
                        user.packages.map((item_user) => {
                            packages.map((item) => {
                                if (item.id === item_user) {
                                    if (item.packageArrived === true) {

                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_tP.push(temp)
                                    }
                                    else {
                                        let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                                        lat_lon_fP.push(temp)
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
                    {lat_lon_fB.map(item => (
                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/n_blue.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_tB.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/blue.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_fR.map(item => (
                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/n_red.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_tR.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/red.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_fW.map(item => (
                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/n_green.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_tW.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/green.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_fP.map(item => (
                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/n_purple.png' />
                            </button>
                        </Marker>
                    ))}
                    {lat_lon_tP.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                            <button className='marker-btn'>
                                <img src='/assets/images/purple.png' />
                            </button>
                        </Marker>
                    ))}
                </ReactMapGL>

            </div>
        </div>
    );

}
export default Maps;




