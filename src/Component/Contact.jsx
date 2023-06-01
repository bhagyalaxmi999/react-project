import React from 'react'

function Contact(props) {
    return (
        <section id="contact">
            <div className="container">
                <section className="section-title mt-5">
                    <h3 className="text-title display-3 mt-5 text-center">contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis placeat unde necessitatibus quisquam ex possimus in, officiis totam, doloribus et sequi sit assumenda cum animi rem fugit eos tempora. Earum magnam similique ad amet quidem animi, expedita aliquam vero.</p>
                </section>
                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4 className="text-title">Location</h4>
                                <p>A1023 4thCross,Benglauru-560079</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4 className="text-title">Email Id</h4>
                                <p>js@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4 className="text-title">call</h4>
                                <p>9999999999</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 mt-2 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <form autoComplete='off' >
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name='name' id='name' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' id='email' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="msg" id="msg" cols="30" rows="10" className='form-control' required></textarea>
                                    </div>
                                    <div className="form-group mt-2">
                                        
                                        <input type="submit" value='submit' className='btn btn-outline-secondary'  />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
        
}

export default Contact