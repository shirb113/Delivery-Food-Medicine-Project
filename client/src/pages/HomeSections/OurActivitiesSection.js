import React from 'react'

const OurActivitiesSection = () => {
    return (
        // <!--Choose section-->
        <section id="activity" className="choose bg-white roomy-80">
            <div className="container">
                <div className="row">
                    <div className="main_choose">
                        <div className="col-md-4" style={{marginRight: "50px"}}>
                            <div className="choose_mac" style={{ background: "transparent", width: "700px", margin: "0px -50px 0px" }}>
                                <div className="choose_slide"  style={{marginRight: "400px"}}>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_hands-2847508_1920.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_elderly1.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_96fde52e-5f9b-c571-39f5-82d839be3fe2.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_rj811clxdu_0_0_1000_563_x-large.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_c79c4ef72a7ac5c1d93a6d6b1784ae79.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                    <div className="choose_item">
                                        <img src="/assets/images/rsz_hands-2906458_1920.jpg" alt="" style={{ marginLeft: "0px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End off col-md-6 --> */}

                        <div className="col-md-5 col-md-offset-2">
                            <div className="choose_content sm-m-top-40" style={{ margin: "-40px 60px 0px" , width: "800px"}}>
                                <div className="head_title">
                                    <h2 className="text-uppercase" style={{ borderColor: "#9586d7", borderLeftWidth: "10px" }}>הפעילות <strong>שלנו</strong></h2>
                                </div>
                                <div className="choose_item_text fix">
                                    <h6><i className="fa fa-check-square-o" style={{ color: "#9586d7" }}></i> סיוע לחיים</h6>
                                    <p>סיוע ורשת תמיכה בנזקקים ובעלי מוגבלויות </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o" style={{ color: "#9586d7" }}></i> ביטחון תזונתי</h6>
                                    <p>צמצום בעיית אי הביטחון התזונתי </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o" style={{ color: "#9586d7" }}></i> ביטחון תרופתי</h6>
                                    <p>דאגה והספקה של תרופות  </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o" style={{ color: "#9586d7" }}></i> העלאת מודעות</h6>
                                    <p>העלאת המודעות לבעיית העוני והובלת שינוי </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End off col-md-6 --> */}
                    </div>
                </div>
                {/* <!-- End off row --> */}
            </div>
            {/* <!-- End off container --> */}
        </section>
        // <!-- End off choose section -->
    )
}

export default OurActivitiesSection