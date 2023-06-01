import React from 'react'
import './styles/abou.css'

const url='https://drive.google.com/drive/folders/1OM3kR_Lo0HqOLk01wL19rnH-HWZTDrLO?usp=sharing'
function About(props) {
    return (
        <section id="about">
            <div className="container mt-5 p-3">
                <div className="section-title text-center">
                    <h2 className='text-title display-4'>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis expedita magnam unde eum. Rerum dolor facere voluptate iusto, voluptatum eaque cumque officiis adipisci dicta quia, id cum, necessitatibus assumenda fugiat rem accusantium. Voluptatem odio, sed quam saepe obcaecati voluptatibus.</p>
                </div>
                {/* personal info */}
                <div className="row">
                    <div className="col-md-4 col-lg-4 ">
                        <img src={'https://picsum.photos/id/544/500/500'} alt="shown" className='img-fluid img-thumbnail profile-img' />
                       
                    </div>
                    <div className="col-lg-8 col-md-8 pt-lg-0 content">
                        <h3>Web & FullStack Developer</h3>
                        <p className="text-secondary">
                            <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, expedita aut! Beatae culpa quasi eveniet praesentium unde error aspernatur numquam.
                            </em>
                        </p>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        <strong>Email</strong>
                                        <span className="text-success float-end">js@gmail.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-phone-fill me-2"></i>
                                        <strong>Mobile</strong>
                                        <span className="text-success float-end">99999999999</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-browser-edge me-2"></i>
                                        <strong>Website</strong>
                                        <span className="text-success float-end">www.js.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-globe me-2"></i>
                                        <strong>City</strong>
                                        <span className="text-success float-end">Benglauru</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-6">

                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="bi bi-book me-2"></i>
                                        <strong>Qualification</strong>
                                        <span className="text-success float-end">Masters</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-patch-check me-2"></i>
                                        <strong>Certification</strong>
                                        <span className="text-success float-end">MERN STACK</span>
                                    </li>
                                    {/* <li className="list-group-item">
                                        <i className="bi bi-broswer-edge me-2"></i>
                                        <strong>Website</strong>
                                        <span className="text-success float-end">www.jesussai.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-globle"></i>
                                        <strong>City</strong>
                                        <span className="text-success float-end">with you</span>
                                    </li> */}
                                    <li className="list-group-item d-grid">
                                        <a href={url} target='_blank' className='btn btn-outline-info' rel="noreferrer" >
                                            <i className="bi bi-arrow"></i>Download cv

                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>                      
                     </div>
                </div>

                {/* skills */}

                <div className="section-title text-center mt-3">
                    <h2 className='text-title display-4'>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis expedita magnam unde eum. Rerum dolor facere voluptate iusto, voluptatum eaque cumque officiis adipisci dicta quia, id cum, necessitatibus assumenda fugiat rem accusantium. Voluptatem odio, sed quam saepe obcaecati voluptatibus.</p>
                </div>
                

                <div className="row skills-content">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-success">HTML <i className ="val float-end">98%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:'98%'}}>98%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                        <strong className="text-primary">Css &Css3 <i className ="val float-end">88%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:'88%'}}>88%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                        <strong className="text-success">JavaScript <i className ="val float-end">80%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:'80%'}}>80%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                        <strong className="text-secondary">Jquery<i className ="val float-end">89%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:'89%'}}>89%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">

                       <div className="skill-block mt-3 mb-3">
                            <strong className="text-info">Bootstrap<i className ="val float-end">86%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:'86%'}}>86%</div>
                            </div>
                        </div>
                       <div className="skill-block mt-3 mb-3">
                            <strong className="text-primary">Nodejs and Express js<i className ="val float-end">89%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:'89%'}}>89%</div>
                            </div>
                        </div>
                       <div className="skill-block mt-3 mb-3">
                            <strong className="text-warning">React js<i className ="val float-end">82%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'82%'}}>82%</div>
                            </div>
                        </div>
                       <div className="skill-block mt-3 mb-3">
                            <strong className="text-primary">Mongo Db<i className ="val float-end">85%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:'85%'}}>85%</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
                
    )
}

export default About