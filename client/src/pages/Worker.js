import React, { useState, useEffect } from 'react';
import '../App.css';
import './Manager.css'
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Blog from '../components/Layout/Blog';
import WorkerInfo from '../components/Modals/workerInfo';
import WorkerChat from './workerPages/WorkerChat';
import WorkerMap from './workerPages/WorkerMap';
import PackageTable from './workerPages/PackageTable';
import { serverGetBlogData } from '../axios_requests'





const Worker = ({ pagesHandler, user }) => {
    pagesHandler([{ ref: "/WorkerHome", text: "דף הבית" }, { ref: "/UserInfo", text: "פרטי עובד" }, { ref: "/ContactManager", text: "פנייה למנהל" }, { ref: "/WorkerPackage", text: "חבילות" }, { ref: "/WorkerMap", text: "מפה" }]);
    const [listOfPosts, updateListOfPosts] = useState({
        leftPosts: [{}],
        rightPosts: [{}]
    });
    //console.log(user)


    useEffect(() => {
        let blogData = []
        serverGetBlogData()
            .then(data => {
                blogData = data;
                console.log(blogData);
                updateListOfPosts(blogData);

            })
            .catch(err => {
                console.log(err);
            })
        // },[]
        //get post from server?
    }, []);


    return (
        <div id="workerContainer" style={{ height: "fitContent", "paddingBottom": "106px", "paddingTop": "106px", background: "url(/assets/images/a0010.jpg)" }}>
            <Switch>
                <Route path="/UserInfo" >
                    <WorkerInfo user={user} />
                </Route>
                <Route path="/WorkerHome" >
                    <Blog listOfPosts={listOfPosts} />
                </Route>
                <Route path="/WorkerMap" >
                    <WorkerMap id={user.id} />
                </Route>
                <Route path="/WorkerPackage" >
                    <PackageTable user={user.id} />
                </Route>
                <Route path="/ContactManager" >
                    <WorkerChat user={user} />                </Route>
                <Redirect from="/" to="/WorkerHome" />
                to: object
            </Switch>
        </div >

    )

}

export default Worker;