import './App.css';
import React, { useState, useEffect, createContext, useMemo } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Manager from './pages/Manager';
import Worker from './pages/Worker';
import Preloder from './components/Layout/Preloader';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
// import socketClient from "socket.io-client";
import { connectToSocketIo, socket } from './socket_io'
import { serverGetUserChatMsgs, serverGetUserByNameData } from './axios_requests'
// localStorage['token'] && connectToSocketIo()

connectToSocketIo()
export const ChatMessages = createContext(null)

const App = () => {


  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt);
  const [pages, setPages] = useState([]);
  const [returnVal, setReturnVal] = useState(null);
  // const [chatMsgs, setChatMsgs] = useState([])
  const authenticateHandler = ({ token }) => {


    //save token
    localStorage.setItem('token', JSON.stringify(token));
    console.log(token)
    setJwt(JSON.stringify(token));



    //CONNECT TO SOCKET IO
    // connectToSocketIo()

    //GET USER MESSAGES
    // serverGetUserChatMsgs({ userName: token.userName, handler: setChatMsgs }).then((data) => {
    //   //  export createContext(chatMsgs)
    //   setChatMsgs(data)


    // })

  }
  const setPagesHandler = (pages) => {
    setPages(pages)
  }


  useEffect(() => {
    setPages(pages)
  }, [pages,])



  const onLoad = () => {
    if (jwt) { //-------------->Manager/User
      window.name = JSON.parse(jwt).userName;
      const type = JSON.parse(jwt).type;
      serverGetUserByNameData({ name: window.name }).then(user => {
        if (type === "manager") {
          setReturnVal(<><Manager pagesHandler={setPagesHandler} user={user} /></>)
          // : setReturnVal(<><Manager /></>)

        }
        else if (type === "worker") {
          setReturnVal(<><Worker pagesHandler={setPagesHandler} user={user} /></>)
          //  : setReturnVal(<><Worker /></>)
        }

      })
    }
    else {
      setPagesHandler([{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
      )
      setReturnVal(<Home authenticate={authenticateHandler} token={jwt} />)
    }
  }
  useEffect(onLoad, [jwt])

  // const providerValue = useMemo(() => ({ chatMsgs, setChatMsgs }), [chatMsgs, setChatMsgs])
  return <Router>
    <Preloder />
    <NavBar pages={pages} userName={JSON.parse(jwt)?.userName} />
    {/* <ChatMessages.Provider value={providerValue}> */}

    {returnVal}
    {/* </ChatMessages.Provider> */}
    <Footer />
  </Router>
}


export default App;