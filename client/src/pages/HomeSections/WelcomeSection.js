import React from 'react'
const WelcomeSection = () => {
    return (
        <section id="home" className="home bg-white fix" >
            <div className="overlay" style={{ background: "url(/assets/images/a006.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="main_home text-center">
                        <div className="col-md-12">
                            <div className="hello">
                                <div className="slid_item">
                                    <div className="home_text ">
                                        {/* <h1 className="text-yellow">ברוכים הבאים</h1> */}
                                        <h1 className="text-yellow">
                                            <p>ברוכים הבאים</p><br />
                                            <p>ליד לחבר</p>
                                        </h1>
                                        <h3 className="text-white text-uppercase"> </h3>
                                    </div>
                                </div>
                                {/* <!-- End off slid item --> */}

                            </div>
                        </div>

                    </div>


                </div>
                {/* <!--End off row--> */}
            </div>
            {/* <!--End off container --> */}
        </section>
        //  <!--End off Home Sections-->

    )
}

export default WelcomeSection