import React from 'react'

const AboutSection = () => {

    return (
        // <!--Featured Section-->
        <section id="features" className="features bg-white">
            <div className="container">
                <div className="row">
                    <div className="main_features fix roomy-70">

                        <div className="col-md-5">
                            <div className="features_item"  style={{marginTop: "-30px"}}>
                                <div className="head_title">
                                    <h2 className="text-uppercase" style={{ borderColor: "#6ea0dd", borderLeftWidth: "10px" }}> <strong>אודותינו</strong></h2>
                                </div>
                                <div className="featured_content">
                                    <p>כולנו עוברים תקופה קשה…
                                        אבל יש כאלה שקשה להם אפילו יותר
                                        זה הזמן לעזור להם ולתרום
                                        תרמו לקשישים, ניצולי שואה ומשפחות נזקקות כמיטב יכולתכם
                                    </p>

                                    <a href="" className="btn btn-default m-top-40" style={{ color: "black", background: "#6ea0dd", borderColor: "#6ea0dd" }}>קראו עוד</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                            <div className="features_item2_area">
                                <div className="features_item2 text-center">
                                    <div className="divider_horizontal"></div>
                                    <div className="divider_vertical"></div>
                                    <div className="col-xs-6 ">
                                        <div className="features_item_text">
                                            <img src="/assets/images/food.JPG" alt="" className="img-circle" style={{marginTop: "-10px"}}/>
                                            {/* <p className="m-top-20">מזון</p> */}
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="features_item_text">
                                            <img src="/assets/images/rsz_center.jpg" alt="" className="img-circle" style={{marginTop: "-15px"}}/>
                                            {/* <p className="m-top-20">תרופות</p> */}
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="features_item_text m-top-50">
                                            <img src="/assets/images/rsz_plan.jpg" alt="" className="img-circle" />
                                            {/* <p className="m-top-20">מוצרים</p> */}
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="features_item_text m-top-50">
                                            <img src="/assets/images/rsz_law.jpg" alt="" className="img-circle" />
                                            {/* <p className="m-top-20">ציוד</p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End off row --> */}
            </div>
            {/* <!-- End off container --> */}
        </section>
        // <!-- End off Featured Section-->

    )
}

export default AboutSection