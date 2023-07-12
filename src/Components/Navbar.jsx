import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>D</span>e v <span>R</span>o c h a k
        </h2>
      </div>

      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/code">Coding Skills</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar