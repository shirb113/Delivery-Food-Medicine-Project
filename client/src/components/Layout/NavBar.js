import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = ({ pages, userName, }) => {
    const logOut = () => {
        //maybe send message to the server??


        //earse Token from localStorage
        localStorage.removeItem('token')
        window.location.reload()
    }

    const logIn = () => {
        //Open SignIn Box
        window.openSingInBox()
    }




    return (
        <nav className="navbar navbar-default bootsnav navbar-fixed no-background white">
            {/* <div className="top-search">
                <div className="container" >
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div> */}
            {/* <!-- End Top Search --> */}


            <div className="container" style={{ display: 'block' }}>
                <div className="attr-nav" style={{ float: "left" }}>
                    <ul className="nav navbar-nav navbar-right">
                        <li id="log">
                            <a href="#myModal" data-toggle="modal" onClick={!userName && logIn}>
                                <span className="fa fa-user" ></span> {userName ? userName : 'התחבר'}
                                {
                                    userName && <div onClick={logOut} style={{ display: 'inline' }}><span className="fa fa-sign-out" style={{ marginLeft: '22px' }}></span>התנתק</div>
                                }
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Start Header Navigation --> */}
                <div className="navbar-header" style={{ float: "right", margin_left: "36px" }}>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="/">

                        <img src="/assets/images/iconYadToFriend3.svg" className="logo" alt="" width="93px" style={{ margin: '-4px' }} />
                    </a>

                </div>
                {/* <!-- End Header Navigation --> */}

                {/* <!-- navbar menu --> */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" style={{ "flexDirection": "row-reverse", display: "flex" }}>
                        <li style={{ width: "20px" }} />
                        {

                            pages.map((page) => {
                                let retVal;
                                page.ref[0] === '#' ? retVal = (<li key={page.text}><a href={page.ref}>{page.text}</a></li>) : retVal = (<li ><NavLink to={page.ref}>{page.text}</NavLink></li>);
                                return retVal
                            })
                        }
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default NavBar