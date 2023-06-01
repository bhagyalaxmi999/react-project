import React from 'react'
import './styles/home.css'
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <section id="home" className="d-flex align-items-center">
            <div className="container d-flex flex-column align-items-center shadow-lg p-4">
                <h1 className='display-1'>JS</h1>
                <h2 className='display-6 text-center'>I'm a professional MERN Stack Web Developer</h2>
                <NavLink to={`/about`} className="btn btn-outline-info"><i className="bi bi-person-fill me-2"></i> About Me</NavLink>
            </div>
        
        </section>
    )
}

export default Home