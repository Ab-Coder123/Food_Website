import React , {useEffect , useRef} from "react";
import img1 from "../image/logo.png";
import img2 from "../image/main_img.png";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp,  faBurger} from '@fortawesome/free-solid-svg-icons' ;

const Nav = () => {
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.pageYOffset;
      let navHeight = scrollBtnRef.current.getBoundingClientRect().height;

      if (scrollY > navHeight) {
        scrollBtnRef.current.classList.add("show-scroll");
      } else {
        scrollBtnRef.current.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (

    
    <>
      {/* Start btn scroll */}
      <div className="scroll" ref={scrollBtnRef}>
        <button className="btn" onClick={handleButtonClick}>
          <h4 className="sh">UP</h4>
          <FontAwesomeIcon className="si" icon={faArrowUp} fade />
        </button>
      </div>



      {/* Start btn scroll */}
      <div className="scroll">
        <button className="btn">
          <h4 className="sh">UP</h4>
          <FontAwesomeIcon className="si" icon={faArrowUp} fade />
        </button>
      </div>

      <section id="Home">
        {/*Navigation Bar*/}

        <Navbar className="navbar navbar-expand-lg sticky-top">
          <Container className="container">
            <Link className="navbar-brand" to ="#">
              <img src={img1} width="100px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main"
              aria-controls="main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <FontAwesomeIcon icon={faBars} /> */}
            </button>

            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  className="nav-link p-lg-3 active" id="home" aria-current="page" to ="../Home.jsx" >  Home  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link p-lg-3" id="about" to ="../componant/About.jsx"> About </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link p-lg-3" id="menu" to ="../componant/Menu.jsx">
                    Menu
                  </Link>
                </li>


                <li className="nav-item">
                  <Link
                    className="nav-link p-lg-3"
                    id="gallary"
                    to ="../componant/Gallery.jsx"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link p-lg-3"
                    id="Contact"
                    to ="../componant/Contact.jsx"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="login">
              <Link  to ="/componant/Regsiter.jsx">Login</Link>
            </div>
            
            
          </Container>
        </Navbar>

        {/* main */}

        <div className="main anim">
          <div className="main_text">
            <h1>
              Get Fresh<span> Food</span>
              <br />
              in a Easy Way
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              minus magnam nobis quam impedit nemo quaerat ex necessitatibus
              ipsum totam voluptatum, fugit cupiditate provident, quasi
              perspiciatis blanditiis illo nesciunt quae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusantium odio tenetur
              laudantium corrupti impedit quidem dolore beatae, iure labore
              magni repellendus inventore, eaque obcaecati commodi ipsa numquam.
              Accusamus, molestiae veritatis.
            </p>
            <Link  to ="../componant/Order.jsx" className="btn">
              <FontAwesomeIcon className="i" icon={faBurger} /> 
              Order Now
            </Link>
          </div>
          <div className="main_image">
            <img src={img2} />
          </div>
        </div>
      </section>

    </>
  );
};

export default Nav;
