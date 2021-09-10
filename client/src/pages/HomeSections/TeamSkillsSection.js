import React from 'react'

const TeamSkillsSection = () => {
    return (
        // <!--Team And Skill Section-->
        <section id="" class="teams roomy-80">
            <div class="container">
                <div class="row">
                    <div class="main_teams_content fix">
                        <div class="col-md-6">
                            <div class="teams_item">
                                <div class="head_title">
                                    <h2 class="text-uppercase">Our <strong>Best Team & Skill</strong></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec fringilla iaculis
                                    facilisis morbi nulla lectus, luctus interdum eu ultricies tortor maecenas
                                    nec massa sit amet erat condimentum porttitorac quis turpis nulla
                                    lectus sit amet consectetur.</p>


                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="teams_item text-center sm-m-top-50">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img src="/assets/images/team1.jpg" alt="" class="img-circle" />
                                        <h4 class="m-top-20">John <strong>Doe</strong></h4>
                                        <h5>Lead Designer</h5>
                                        <div class="separator"></div>
                                        <ul class="list-inline">
                                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End off col-md-4 --> */}
                                    <div class="col-sm-4">
                                        <img src="/assets/images/team2.jpg" alt="" class="img-circle" />
                                        <h4 class="m-top-20">Sarah <strong>Smith</strong></h4>
                                        <h5>UX Designer</h5>
                                        <div class="separator"></div>
                                        <ul class="list-inline">
                                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End off col-md-4 --> */}
                                    <div class="col-sm-4">
                                        <img src="/assets/images/team3.jpg" alt="" class="img-circle" />
                                        <h4 class="m-top-20">Fabian <strong>Doe</strong></h4>
                                        <h5>Web Engineer</h5>
                                        <div class="separator"></div>
                                        <ul class="list-inline">
                                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End off col-md-4 --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- End off col-md-6 --> */}
                    </div>
                    {/* <!-- End off main Team --> */}

                    <div class="col-md-12">
                        <div class="skill">
                            <div class="team_content_details_skills m-top-50">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="teamskillbar clearfix m-top-50 text-uppercase" data-percent="80%">
                                            <label>Photoshop</label>
                                            <div class="teamskillbar-bar" style="width: 80%;"></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}

                                        <div class="teamskillbar clearfix m-top-50 text-uppercase" data-percent="75%">
                                            <label>Web Design</label>
                                            <div class="teamskillbar-bar" style="width: 75%;"></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="teamskillbar clearfix m-top-50 text-uppercase" data-percent="90%">
                                            <label>Development</label>
                                            <div class="teamskillbar-bar" style="width: 90%;"></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}

                                        <div class="teamskillbar clearfix m-top-50 text-uppercase" data-percent="98%">
                                            <label>Branding</label>
                                            <div class="teamskillbar-bar" style="width: 98%;"></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- End off skill --> */}
                    </div>
                    {/* <!-- End col-md-12 --> */}
                </div>
                {/* <!-- End off row --> */}
            </div>
            {/* <!-- End off container --> */}
        </section>
        // <!-- End off Team & Skill section -->
    )
}

export default TeamSkillsSection;