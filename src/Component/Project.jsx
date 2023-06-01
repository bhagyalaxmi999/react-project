import React from 'react'
import './styles/project.css'
function Project(props) {
    return (
        <section id="project">
            <div className="container">
              <div className="row">
                 <div className="col-md-12 text-center mt-5">
                    <h3 className="display-3 text-title">Project</h3>
                 </div>
              </div>
              <div className="row">
               <div className="col-md-12 mt-5 mb-3 d-flex justify-content-center">
                   <ul className="nav nav-pills" id="project" role="tablist">
                        <li className="nav-item">
                            <button className="nav-link active" id="html" data-bs-toggle="tab" data-bs-target="#nav-html">HTML&CSS</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link " id="js" data-bs-toggle="tab" data-bs-target="#nav-js">JAVASCRIPT</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link " id="react" data-bs-toggle="tab" data-bs-target="#nav-react">REACT</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link " id="react-api" data-bs-toggle="tab" data-bs-target="#nav-react-api">REACT-API</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link " id="mern" data-bs-toggle="tab" data-bs-target="#nav-mern">MERN STACK</button>
                        </li>
                   </ul>
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
                    <div className="tab-content mt-3 md-3" id='project-tab'>
                        {/* first panel */}
                        <div className="tab-pane fade show active" id="nav-html">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-success text-success text-center">HTML & CSS PROJECT</h5>
                                </div>
                                <div className="card-body">
                                    {/* projects */}
                                    <div className="row">
                                        <div className="col-md-3 mt-2">
                                            <div className="card show-lg">
                                                <img src='https://picsum.photos/id/243/400/400' alt="dont show" className='card-img-top' />
                                                <div className="card-body">
                                                    <h5 className="text-center">project-1</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a target="_blank" href="#" className="btn btn-outline-success btn-sm">preview</a>
                                                        <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">code</a>
                                                    </div>                                               
                                                 </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <div className="card show-lg">
                                                <img src='https://picsum.photos/id/243/400/400' alt="dont show" className='card-img-top' />
                                                <div className="card-body">
                                                    <h5 className="text-center">project-1</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a target="_blank" href="#" className="btn btn-outline-success btn-sm">preview</a>
                                                        <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">code</a>
                                                    </div>                                               
                                                 </div>
                                            </div>

                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <div className="card show-lg">
                                                <img src='https://picsum.photos/id/243/400/400' alt="dont show" className='card-img-top' />
                                                <div className="card-body">
                                                    <h5 className="text-center">project-1</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a target="_blank" href="#" className="btn btn-outline-success btn-sm">preview</a>
                                                        <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">code</a>
                                                    </div>                                               
                                                 </div>
                                            </div>

                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <div className="card show-lg">
                                                <img src='https://picsum.photos/id/243/400/400' alt="dont show" className='card-img-top' />
                                                <div className="card-body">
                                                    <h5 className="text-center">project-1</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a target="_blank" href="#" className="btn btn-outline-success btn-sm">preview</a>
                                                        <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">code</a>
                                                    </div>                                               
                                                 </div>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* project end */}
                                </div>
                            </div>                            
                        </div>
                        {/* second panel */}
                        <div className="tab-pane fade" id='nav-js'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-primary text-center">JAVASCRIPT</h5>
                                    </div>
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            {/* third panel */}
                            <div className="tab-pane fade" id='nav-react'>
                                <div className="card">
                                   <div className="card-header">
                                    <h5 className="text-success text-primary text-center">REACT project</h5>
                                   </div>
                                   <div className="card-body"></div>
                                </div>
                            </div>
                           {/* fourth panel */}
                           <div className="tab-pane fade" id='nav-react-api'>
                                <div className="card">
                                   <div className="card-header">
                                    <h5 className="text-success text-primary text-center">REACT project</h5>
                                   </div>
                                   <div className="card-body"></div>
                                </div>
                            </div>
                           {/* fifth panel */}
                           <div className="tab-pane fade" id='nav-mern'>
                                <div className="card">
                                   <div className="card-header">
                                    <h5 className="text-success text-primary text-center">REACT project</h5>
                                   </div>
                                   <div className="card-body"></div>
                                </div>
                            </div>

                    </div>
               </div>
           </div>

           </div>
           
        </section>

    )
        
}

export default Project