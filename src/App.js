import React from 'react';
import Home from './Components/Home';
import './Components/index.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Coding from './Components/Coding';
import About from './Components/About';
import Navbar from './Components/Navbar';

const WithNav =() => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const App = () => {
  return (

      <Router>
        <Routes>
          <Route element={<WithNav/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/code" element={<Coding />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    
  )
}

export default App