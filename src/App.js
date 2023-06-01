import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Broswerr=Router => Router Container
// Routes=>switch
// Route=> path and component

import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Menu from './Component/Menu'
import Pnf from './Component/Pnf'
import Project from './Component/Project'
import Resume from './Component/Resume'

function App(props) {
  return (
       <BrowserRouter>
          <Menu/>

          <Routes>
            <Route path={`/`} element={<Home/>} />
            <Route path={`/about`} element={<About/>} />
            <Route path={`/resume`} element={<Resume/>} />
            <Route path={`/project`} element={<Project/>} />
            <Route path={`/contact`} element={<Contact/>} />
            <Route path={`/*`} element={<Pnf/>} />    
          </Routes>

          <Footer/>

       </BrowserRouter>
       
  )
}

export default App


// wrong ayyithey 404-error chupistundhi eg:(right/home)==(/homeus wrong)