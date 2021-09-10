import React, { useState, useEffect } from 'react';
import '../App.css';
import './Manager.css'
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Schedule from '../components/Accessories/Schedule';
import Chart from './managerPages/Chart';
import Maps from './managerPages/Maps';
import Blog from '../components/Layout/Blog';
import { Button } from '@material-ui/core';
import CreatePost from '../components/Modals/CreatePost'
import ScheduleInfo from './managerPages/ScheduleInfo';
import ManagerChat from './managerPages/ManagerChat';

import { serverGetBlogData, serverCreateRightPost } from '../axios_requests'






const Manager = ({ pagesHandler, user }) => {
  pagesHandler([{ ref: "/ManagerHome", text: "דף הבית" }, { ref: "/Users", text: "פרטי עובדים" }, { ref: "/Schedule", text: "סידור עבודה" }, { ref: "/ContactUsers", text: "צ'אט" }, { ref: "/Charts", text: "גרפים" }, { ref: "/Maps", text: "מפות" }]);
  const [isOpen, setIsOpen] = useState(false);
  const [listOfPosts, updateListOfPosts] = useState({
    leftPosts: [{}],
    rightPosts: [{}]
  });


  const requestListOfPosts = () => {
    let blogData = []
    serverGetBlogData()
      .then(data => {
        blogData = data;
        console.log(blogData);
        updateListOfPosts(blogData);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    requestListOfPosts()
  }, []);


  const openEditPost = () => {
    setIsOpen(true);
  }
  const closeEditPost = () => {
    setIsOpen(false);
  }

  const publishPost = (newPost) => {

    console.log(newPost)
    debugger
    //send to DB
    const body = { rightPost: newPost }
    serverCreateRightPost(body)
      .then(res => {
        console.log(res);
        //update list 
        requestListOfPosts()
      })
      .catch(err => console.log(err))

  }

  return (
    <div id="managerContainer" style={{ height: "fitContent", "paddingBottom": "106px", "paddingTop": "106px", background: "url(/assets/images/a0010.jpg)" }}>
      <Switch>
        <Route path="/Users" >
          <UsersInfo user={user} />
        </Route>
        <Route path="/Schedule" >
          <ScheduleInfo />
        </Route>
        <Route path="/ContactUsers" >
          <ManagerChat user={user} />
        </Route>
        <Route path="/Charts" >
          <Chart />
        </Route>
        <Route path="/Maps" >
          <Maps />
        </Route>
        <Route path="/ManagerHome" >
          <CreatePost handleClose={closeEditPost} display={isOpen} handleSave={publishPost} />
          <div style={{ background: 'transparent' }}>

            <Button onClick={openEditPost} variant="outlined" color="primary" style={{ background: 'white', right: '-87%', width: '159px', 'font-size': '23px', height: '61px', color: "black", border: '1px solid black' }}>
              פוסט חדש
            </Button>
          </div>
          <Blog listOfPosts={listOfPosts} />
        </Route>
        <Redirect from="/" to="/ManagerHome" />
        to: object
      </Switch>
    </div >



  )

}

export default Manager;