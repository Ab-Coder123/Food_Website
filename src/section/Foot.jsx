import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from "react-bootstrap/Container";
import "./section.css"
import {faBook , faTwitter , faLinkedin , faInstagram} from '@fortawesome/free-solid-svg-icons' ;
const Footer = () => {
    return (
<>
  {/* Site footer */}
  <footer className="site-footer">

      
    <Container className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © By
            <Link to="#">  AB-Coder</Link>.
          </p>
        </div>
       
      </div>
    </Container>
  </footer>
            
        </>
    );
}

export default Footer;

