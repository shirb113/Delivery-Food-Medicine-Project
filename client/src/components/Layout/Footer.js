import React from 'react'

const Footer = () => {
    return (

        <footer id="contact" className="footer action-lage bg-black p-top-80" style={{ direction: "rtl", textAlign: "right" }}>
            {/* <!--<div className="action-lage"></div>--> */}
            <div className="container">
                <div className="row">
                    <div className="widget_area">

                        <div className="col-md-3">
                            <div className="widget_item widget_newsletter sm-m-top-50">
                                <h5 className="text-white">הצטרפו לניוזלטר שלנו</h5>
                                <form className="form-inline m-top-30">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter you Email" />
                                        <button type="submit" className="btn text-center"><i className="fa fa-arrow-right"></i></button>
                                    </div>

                                </form>
                                {/* <div className="widget_brand m-top-40">
                                    <a href="" className="text-uppercase">Your Logo</a>
                                    <p>Lorem ipsum dolor sit amet consec tetur
                                        adipiscing elit nulla aliquet pretium nisi in</p>
                                </div> */}
                                <ul className="list-inline m-top-20">
                                    <li>-  <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.google.co.il/"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href=""><i className="fa fa-behance"></i></a></li>
                                    <li><a href=""><i className="fa fa-dribbble"></i></a>  - </li> 
                                </ul>

                            </div>
                            {/* <!-- End off widget item --> */}
                        </div>
                        {/* <!-- End off col-md-3 --> */}

                        <div className="col-md-3">
                            <div className="widget_item widget_service sm-m-top-50">
                                <h5 className="text-white">המטרות שלנו</h5>
                                <ul className="m-top-20">
                                    <li className="m-top-20"> <label><i className="fa fa-angle-left"></i> לפעול לצמצום העוני למען יצירת חברה צודקת וטובה יותר</label></li>
                                    <li className="m-top-20"> <label><i className="fa fa-angle-left"></i> סיוע לאוכלוסיות במצוקה על בסיס אוניברסלי</label></li>
                                    <li className="m-top-20"> <label><i className="fa fa-angle-left"></i> הנעת החברה האזרחית לערבות הדדית ונתינה</label></li>
                                    <li className="m-top-20"> <label><i className="fa fa-angle-left"></i> הובלת שינוי בסדר העדיפויות הלאומי</label></li>
                                    {/* <li className="m-top-20"> <a href="#"><i className="fa fa-angle-right"></i> Support Forums</a></li> */}
                                </ul>

                            </div>
                            {/* <!-- End off widget item --> */}
                        </div>
                        {/* <!-- End off col-md-3 --> */}


                        <div className="col-md-3">
                            <div className="widget_item widget_latest sm-m-top-50">
                                <h5 className="text-white">אירועי העמותה</h5>
                                <div className="widget_latst_item m-top-30">
                                    <div className="item_icon"><img src="/assets/images/rsz_mic.jpg" alt="" /></div>
                                    <div className="widget_latst_item_text">
                                        <p>מופע התרמה בסיוע מהאומנים הטובים במדינה</p>
                                        <label>21<sup>th</sup> 2021 ינואר</label>
                                    </div>
                                </div>
                                <div className="widget_latst_item m-top-30">
                                    <div className="item_icon"><img src="/assets/images/rsz_1color-balloons.jpg" alt="" /></div>
                                    <div className="widget_latst_item_text">
                                        <p> אירוע חנוכת בית למרכז החדש בדרום הארץ</p>
                                        <label>12<sup>th</sup> מרץ 2021</label>
                                    </div>
                                </div>
                                <div className="widget_latst_item m-top-30">
                                    <div className="item_icon"><img src="/assets/images/rsz_food_pk.jpg" alt="" /></div>
                                    <div className="widget_latst_item_text">
                                        <p>מבצע ארצי לאיסוף חבילות מזון לנדקקים, פרטים נוספים יעלו בהמשך</p>
                                        <label>8<sup>th</sup> יוני 2021</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End off widget item --> */}
                        </div>
                        {/* <!-- End off col-md-3 --> */}


                        <div className="col-md-3">
                            <div className="widget_item widget_about">
                                <h5 className="text-white">אודותינו</h5>
                                <p className="m-top-30">העמותה הוקמה לפני כשנתיים עקב משבר הקורונה שפקד את הארץ, ומונה כמאות מתנדבים ברחבי הארץ, כיום כ500 משפחות נעזרות בעמותה זו</p>
                                <div className="widget_ab_item m-top-30">
                                    <div className="item_icon"><i className="fa fa-location-arrow"></i></div>
                                    <div className="widget_ab_item_text">
                                        <h6 className="text-white">כתובת</h6>
                                        <p>
                                            ישראל, ירושלים, בית הדפוס 7 גבעת  שאול</p>
                                    </div>
                                </div>
                                <div className="widget_ab_item m-top-30">
                                    <div className="item_icon"><i className="fa fa-phone"></i></div>
                                    <div className="widget_ab_item_text">
                                        <h6 className="text-white">טלפון </h6>
                                        <p>+1 2345 6789</p>
                                    </div>
                                </div>
                                <div className="widget_ab_item m-top-30">
                                    <div className="item_icon"><i className="fa fa-envelope-o"></i></div>
                                    <div className="widget_ab_item_text">
                                        <h6 className="text-white">כתובת מייל </h6>
                                        <p>friendForYou@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End off widget item --> */}
                        </div>
                        {/* <!-- End off col-md-3 --> */}




                    </div>
                </div>
            </div>
            <div className="main_footer fix bg-mega text-center p-top-40 p-bottom-30 m-top-80">
                <div className="col-md-12">
                    <p className="wow fadeInRight" data-wow-duration="1s">
                        <i className="fa fa-heart"></i>
                        יד לחבר
                        <i className="fa fa-heart"></i>

                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;