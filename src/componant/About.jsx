import React from 'react';
import img2 from '../image/about.png' ;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faPlay, faTruck , faBurger } from '@fortawesome/free-solid-svg-icons' ;
import "./About.css"
import Footer from "../section/Foot";
import Nav from "../section/Nav";

const About = () => {
    return (
        <>
            <Nav />

            {/*Banner*/}
  <div className="banner_bg">
    <h1>
      <span>About</span>Us
    </h1>
  </div>

     {/*About*/}

      <div className="about">
        <div className="about_main">
          <div className="about_image">
            <img src={img2} />
          </div>
          <div className="about_text">
            <h1><span>About</span>Us</h1>
            <h3>why food choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque recusandae dolore tempora fugiat quisquam illum,
              veniam adipisci iusto consequuntur porro explicabo
              repudiandae nam quis beatae obcaecati. Magnam provident
              fuga aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum minus facilis placeat sint repellendus
              dolorum nostrum, corrupti magni ducimus, et neque nihil enim.
              Tempore quia rerum placeat laboriosam, sit quasi!
            </p>
            <div className="about_services">
              <div className="s_1">
              <FontAwesomeIcon className="i" icon={faTruck} /> 
                <Link to="#">Fast Delivery</Link> 
              </div>
              <div className="s_1">
              <FontAwesomeIcon className="i" icon={faPlay} /> 
                <Link to="#">Easy Payment</Link> 
              </div>
              <div className="s_1">

              <FontAwesomeIcon className="i" icon={faHeadset} /> 
                <Link to="#">24 x 7 Services</Link> 
              </div>
            </div>
            <Link to="order.html" className="about_btn btn">
            <FontAwesomeIcon className="i" icon={faBurger}/> Order Now
            </Link> 
          </div>
        </div>
      </div>
      <Footer />
        </>
    );
}

export default About;
