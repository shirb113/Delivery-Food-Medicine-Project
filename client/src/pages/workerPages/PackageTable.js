
import React, { useEffect, useState } from 'react';
import PackagesTabel from '../../components/Modals/PackagesTabel/PackagesTabel';
import { serverGetPackages, serverGetWorkSchedule } from '../../axios_requests'



var packages_list = [];
var schedule = [];
var my_user = {};


var date = new Date();
let string_date = date.toLocaleString();
let final_date = (string_date.split(',')[0]).replaceAll('.', '/')

let info = {
    date: final_date
}


const PackageTable = (user) => {

    const [packages, setPackages] = useState([]);

    function createData(id, fullName, email, phone, address, packageArrived) {
        return { id, fullName, email, phone, address, packageArrived };
    }

    useEffect(() => {
        let rows = [];
        serverGetPackages()
            .then(packages_list => {
                serverGetWorkSchedule(info)
                    .then(schedule => {
                        console.log(schedule)
                        schedule.forEach((user_p) => {
                            if (user_p.id === user.user) {
                                my_user = user_p;
                            }
                        });
                        console.log(my_user)
                        if (my_user) {
                            my_user.packages?.forEach((packeage_id) => {
                                packages_list.forEach((item) => {
                                    if (item.id === packeage_id) {
                                        rows.push(createData(item.id, item.fullName, item.email, item.phone, item.address, item.packageArrived))
                                    }
                                });
                            });
                            setPackages(rows);
                            console.log(rows)

                        }
                    });
            });

    }, [])

    console.log('packages', packages)

    return (
        <div>
            <PackagesTabel packages={packages} />
        </div>
    )
}

export default PackageTable;