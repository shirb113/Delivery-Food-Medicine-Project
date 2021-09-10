var express = require('express');
var router = express.Router();

const Schedule = require('../models')("workSchedule");
const User = require('../models')("users");

const haversine = require('haversine');
const { forEach } = require('lodash');
const kmeans = require('node-kmeans');


router.post('/addSchedule', async function (req, res, next) {
    console.log('i am in addSchedule')
    let { date, id } = req.body;

    newSchedule = {
        date: date,
        id: id,
        packages: []
    }
    try {
        await Schedule.create(newSchedule);
        res.send(200);
    }
    catch (err) { console.log(`Failed: ${err}`) }
}),

    router.post('/getSchedule', async function (req, res, next) {
        console.log('i am in getSchedule')
        let date = req.body.date;
        let list_Schedule = [];
        //console.log(date)
        try {
            list_Schedule = await Schedule.REQUESTBYDATE(date);
            res.send(list_Schedule);
        }
        catch (err) { console.log(`Failed: ${err}`) }
    }),


    router.post('/setDistribution', async function (req, res, next) {
        console.log('i am in setDistribution')
        let package_list = req.body.package_list;
        let date = req.body.date;
        let data = [];
        let p_id = [];
        var g0 = [];
        var g1 = [];
        var g2 = [];
        var g3 = [];
        var d_g0 = [];
        var d_g1 = [];
        var d_g2 = [];
        var d_g3 = [];
        var p_g0 = [];
        var p_g1 = [];
        var p_g2 = [];
        var p_g3 = [];
        var g0_min = -1;
        var g1_min = -1;
        var g2_min = 1;
        var g3_min = -1;
        var flag = false;
        let today_schedule = await Schedule.REQUESTBYDATE(date);
        package_list.map((item) => {
            p_id.push([item.id, item.lat, item.lon])
            data.push([parseFloat(item.lat), parseFloat(item.lon)])
        });
        await kmeans.clusterize(data, { k: 4 }, async (err, res) => {
            if (err) console.error(err);
            else {
                for (i in res[0].clusterInd) {
                    g0.push(p_id[res[0].clusterInd[i]]);
                    p_g0.push(p_id[res[0].clusterInd[i]][0]);
                }
                for (i in res[1].clusterInd) {
                    g1.push(p_id[res[1].clusterInd[i]]);
                    p_g1.push(p_id[res[1].clusterInd[i]][0])
                }
                for (i in res[2].clusterInd) {
                    g2.push(p_id[res[2].clusterInd[i]]);
                    p_g2.push(p_id[res[2].clusterInd[i]][0])
                }
                for (i in res[3].clusterInd) {
                    g3.push(p_id[res[3].clusterInd[i]]);
                    p_g3.push(p_id[res[3].clusterInd[i]][0])
                }
                let startg0 = {
                    latitude: g0[0][1],
                    longitude: g0[0][2]
                }
                let startg1 = {
                    latitude: g1[0][1],
                    longitude: g1[0][2]
                }
                let startg2 = {
                    latitude: g2[0][1],
                    longitude: g2[0][2]
                }
                let startg3 = {
                    latitude: g3[0][1],
                    longitude: g3[0][2]
                }
                // console.log(p_g0);
                // console.log(p_g1);
                // console.log(p_g2);
                // console.log(p_g3);
                const promises = await today_schedule.map(async (item) => {
                    let id = item.id;
                    let user = await User.REQUESTBYID(id);
                    //console.log(user.address)
                    let end = {
                        latitude: user.lat,
                        longitude: user.lon
                    }
                    d_g0.push(haversine(startg0, end, { unit: 'mile' }));
                    d_g1.push(haversine(startg1, end, { unit: 'mile' }));
                    d_g2.push(haversine(startg2, end, { unit: 'mile' }));
                    d_g3.push(haversine(startg3, end, { unit: 'mile' }));
                });
                await Promise.all(promises)
                // console.log(d_g0);
                // console.log(d_g1);
                // console.log(d_g2);
                // console.log(d_g3);

                g0_min = d_g0.indexOf(Math.min(...d_g0));
                g1_min = d_g1.indexOf(Math.min(...d_g1));
                g2_min = d_g2.indexOf(Math.min(...d_g2));
                g3_min = d_g3.indexOf(Math.min(...d_g3));

                console.log(g0_min);
                console.log(g1_min);
                console.log(g2_min);
                console.log(g3_min);

                if ((g0_min != g1_min) && (g1_min != g2_min) && (g1_min != g3_min) && (g2_min != g3_min) && (g0_min != g3_min) && (g0_min != g2_min)) {
                    flag = true;
                    let s0 = {
                        id: today_schedule[g0_min].id,
                        date: date,
                        packages: p_g0
                    }
                    //console.log(s0);
                    await Schedule.UPDATEPACKAGE(s0)
                    let s1 = {
                        id: today_schedule[g1_min].id,
                        date: date,
                        packages: p_g1
                    }
                    await Schedule.UPDATEPACKAGE(s1)
                    //console.log(s1)
                    let s2 = {
                        id: today_schedule[g2_min].id,
                        date: date,
                        packages: p_g2
                    }
                    await Schedule.UPDATEPACKAGE(s2)
                    //console.log(s2)
                    let s3 = {
                        id: today_schedule[g3_min].id,
                        date: date,
                        packages: p_g3
                    }
                    //console.log(s3)
                    await Schedule.UPDATEPACKAGE(s3)
                }

            }
        });
    })

module.exports = router;

