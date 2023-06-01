import React from 'react'
import './styles/resume.css'


function Resume(props) { 
    return (
        <section id="resume">
           <div className="container mt-5 p-3">
               <div className="section-title text-center">
                    <h2 className="text-title display-4">Resume</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum porro, incidunt quo commodi molestiae consequatur sed aliquam ex necessitatibus earum cumque veritatis! Nemo, eligendi qui praesentium cumque laudantium itaque.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Education</h6>
                        <div className="resume-item pb-0">
                            <h4>Masters Degree</h4>
                            <h5>2022-2023</h5>
                            <p>
                                <em>
                                    university/college name, cityname
                                </em>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint?</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>Degree</h4>
                            <h5>2018-2020</h5>
                            <p>
                                <em>
                                    university/college name, cityname
                                </em>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint?</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>Diploma</h4>
                            <h5>2015-2018</h5>
                            <p>
                                <em>
                                    university/college name, cityname
                                </em>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint?</p>
                        </div>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Certifications</h6>
                         
                        <div className="resume-item pb-0">
                            <h4>MERN STACK</h4>
                            <h5>2023</h5>
                            <p>
                                <em>
                                   Be-Practical Tech Solution, Bengaluru
                                </em>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint?</p>
                        </div>

                        <div className="resume-item pb-0">
                            <h4>WEB DEVELOPMENT</h4>
                            <h5>2023</h5>
                            <p>
                                <em>
                                   Be-Practical Tech Solution, Bengaluru
                                </em>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint?</p>
                        </div>

                    </div>

                </div>

            
                    


           </div>
        </section>

    )
        
}

export default Resume