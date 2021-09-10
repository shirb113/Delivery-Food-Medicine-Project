import React, { useState } from 'react'
import WelcomeSection from './HomeSections/WelcomeSection'
import OpenningSection from './HomeSections/OpenningSection'
import AboutSection from './HomeSections/AboutSection'
import OurActivitiesSection from './HomeSections/OurActivitiesSection'
import OurPartnersSection from './HomeSections/OurPartnersSection'
import SignIn from '../components/Modals/SignIn'
import { Switch, Redirect } from 'react-router-dom'
const Home = ({ authenticate, token }) => {
    // const Home = ({ authenticate, token, isOpen, openSignInPopUp, closeSignInPopUp }) => {

    const [isOpen, setIsOpen] = useState(false);
    const openSignInPopUp = () => {
        setIsOpen(true);
    }
    const closeSignInPopUp = () => {
        setIsOpen(false);
    }

    window.openSingInBox = openSignInPopUp;

    // console.log(token, "is here?")
    // console.log(closeSignInPopUp)
    return (<div>
        <div className="culmn">
            {
                (!token) ? (
                    <Switch>
                        <Redirect to="/" exact />
                    </Switch>) : ""

            }
            <SignIn handleClose={closeSignInPopUp} display={isOpen} authenticate={authenticate} />
            {/* setToken={setToken} /> */}
            <WelcomeSection />
            <OpenningSection signInPopUp={openSignInPopUp} />
            <AboutSection />
            <OurActivitiesSection />
            <OurPartnersSection />
        </div>
    </div>
    )
}


export default Home