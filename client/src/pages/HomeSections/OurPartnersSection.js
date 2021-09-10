import React from 'react'

const OurPartnersSection = () => {
    return (
        // <!--Test section-->
        <section id="text" className="test bg-white roomy-60 fix">
            <div className="container">
                <div className="row">
                    <div className="main_test fix">
                        <div className="col-md-6 sm-m-top-40">
                            <div className="test_item1 fix " style={{marginTop: "-30px"}}>
                                <div className="head_title fix">
                                    <h2 className="text-uppercase" style={{ borderColor: "#feb099", borderLeftWidth: "10px" }}>השותפים <strong>שלנו</strong></h2>
                                </div>
                                <div className="item_img">
                                    <img className="img-circle" src="/assets/images/avatar.jpg" alt="" />
                                    <i className="fa fa-quote-left" style={{ color: "#feb099" }}></i>
                                </div>

                                <div className="item_text">
                                    <h5>שרה כהן</h5>
                                    <h6>יו"ר ומייסדת הארגון</h6>

                                    <p>הארגון הוקם במטרה לענות לצרכי החברה ולהוביל לשינוי בסדר היום הלאומי </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="cbrand text-center">
                                <br/>
                                <div className="divider_horizontal"></div>
                                <div className="divider_vertical"></div>
                                <div className="col-xs-6">
                                    <div className="cbrand_item">
                                        <img src="/assets/images/friends.jpg" alt="" style={{marginTop: "-30px"}}/>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="cbrand_item">
                                        <img src="/assets/images/intel.jpg" alt="" style={{marginTop: "-30px"}}/>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="cbrand_item m-top-40">
                                        <img src="/assets/images/mako.jpg" alt="" style={{marginTop: "-35px"}}/>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="cbrand_item m-top-40">
                                        <img src="/assets/images/store.jpg" alt="" style={{marginTop: "-45px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        // <!-- End off test section -->
    )
}

export default OurPartnersSection


