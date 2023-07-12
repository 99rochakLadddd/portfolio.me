import React from 'react';
import { FontAwesomeIcon } from 'react-icons-next';

const Home = () => {
  return (
    <>
    <div className="line-1"></div>
    <div  className="main-page">
      <h1 className="my-name">Rochak Neupane</h1>
      <h3 className= "developer-posi"> Web Developer | Web Designer</h3>
      <p className= "my-intro">Hello! I am Web Developer from Nepal, Kathmandu. I have good enough experience in Website design and building, also i am passionate in Graphic designing.</p>
    </div>
    <div  className="social-media">
      <FontAwesomeIcon icon="fa-facebook" />
      <FontAwesomeIcon icon="fa-twitter" />
      <FontAwesomeIcon icon="fa-linkedin" />
      <FontAwesomeIcon icon="fa-instagram" />
    </div>
    </>
  )
};

export default Home