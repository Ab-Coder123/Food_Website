import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./section/Nav"
import Footer from './section/Foot';
import img2 from './image/about.png' ;
import img3 from  './image/rsx5wrp11sxpwxqvsmty.png' ;
import img4 from './image/d44pzkqaqr8nkxpyyzhr.png' ;
import img5 from './image/aaeehszcbm9grqekfplw.png' ;
import img6 from "./image/offer_1.jpg" ;
import img7 from "./image/offer_2.png" ;
import img8 from "./image/team_1.jpg" ;
import img9 from "./image/team_2.jpg" ;
import img10 from "./image/team_3.jpg" ;
import img11 from "./image/team_4.jpg" ;
import img12 from "./image/blog_1.jpeg" ;
import img13 from "./image/blog_2.jpg" ;
import img14 from "./image/blog_3.jpg" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faPlay, faTruck , faBurger, faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons' ;
const Home = () => {
    return (
        <>
            <Nav />

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


      {/*Menu*/}

    <div className="banner">
    <h1>Special Offer</h1>
    <div className="banner_center">
      <h2>
        50%<span>Off</span>
      </h2>
    </div>
    <Link to="order.html" className="banner_btn">
      <FontAwesomeIcon className='i' icon={faBurger} />
      Order Now
    </Link> 
  </div>


  {/*Gallery*/}
  <div className="gallery">
    <h1>
      Popular<span>Gallery</span>
    </h1>
    <div className="gallery_box">
      <div className="gallery_image">
        <img src={img3} />
      </div>
      <div className="gallery_image">
        <img src={img4} />
      </div>
      <div className="gallery_image">
        <img src={img5} />
      </div>
    </div>
  </div>


  {/*Offer*/}

  <div className="offer">
    <div className="offer_box">
      <div className="offer_card_1">
        <div className="offer_img">
          <img src={img6} />
        </div>
        <div className="offer_tag">
          <h2>Triplae Food</h2>
          <h1>40%</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam quas distinctio sit? Corrupti necessitatibus modi nobis?
          </p>
          <Link to="order.html" className="offer_btn">
            <FontAwesomeIcon icon={faBurger}/>
            Order Now
          </Link> 
        </div>
      </div>
      <div className="offer_card_2">
        <div className="offer_img">
          <img src={img7} />
        </div>
        <div className="offer_tag">
          <h2>
            Buy 2 pizza and get a <br />
            free Drink
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam quas distinctio sit? Corrupti necessitatibus modi nobis?
          </p>
          <Link to="order.html" className="offer_btn">
          <FontAwesomeIcon icon={faBurger}/>
            Order Now
          </Link> 
        </div>
      </div>
    </div>
  </div>

  {/*Team*/}

  <div className="team">
    <h1>
      Our<span>Team</span>
    </h1>
    <div className="team_line_1" />
    <div className="team_line_2" />
    <div className="team_box">
      <div className="team_card">
        <div className="team_img">
          <img src={img8} />
        </div>
        <div className="team_tag">
          <h2>John Deo</h2>
          <p className="job">Cook</p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cupiditate deserunt odio in fugiat dolore! Veniam sit quod iusto
            quas eligendi. Natus numquam aspernatur alias illo voluptates
            dolorem, id ad.
          </p>
        </div>
      </div>
      <div className="team_card">
        <div className="team_img">
        <img src={img9} />
        </div>
        <div className="team_tag">
          <h2>John Deo</h2>
          <p className="job">Cook</p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cupiditate deserunt odio in fugiat dolore! Veniam sit quod iusto
            quas eligendi. Natus numquam aspernatur alias illo voluptates
            dolorem, id ad.
          </p>
        </div>
      </div>
      <div className="team_card">
        <div className="team_img">
        <img src={img10} />
        </div>
        <div className="team_tag">
          <h2>John Deo</h2>
          <p className="job">Cook</p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cupiditate deserunt odio in fugiat dolore! Veniam sit quod iusto
            quas eligendi. Natus numquam aspernatur alias illo voluptates
            dolorem, id ad.
          </p>
        </div>
      </div>
      <div className="team_card">
        <div className="team_img">
        <img src={img11} />
        </div>
        <div className="team_tag">
          <h2>John Deo</h2>
          <p className="job">Cook</p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cupiditate deserunt odio in fugiat dolore! Veniam sit quod iusto
            quas eligendi. Natus numquam aspernatur alias illo voluptates
            dolorem, id ad.
          </p>
        </div>
      </div>
    </div>
  </div>


  {/*Blog*/}

  <div className="blog">
    <h1>
      Our<span>Blog</span>
    </h1>
    <div className="blog_box">
      <div className="blog_card">
        <div className="blog_img">
          <img src={img12} />
        </div>
        <div className="blog_tag">
          <div className="blog_date">
            <p>
              18 May 2022
              <FontAwesomeIcon className='blogi' icon={faCalendar} fade />
            </p>
          </div>
          <h3 className="blog_heading">
            Do Not Leave toko before Eating this remen
          </h3>
          <p className="blog_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum
            commodi fugiat eum assumenda vel cumque eaque totam doloribus.
          </p>
          <hr />
          <div className="view_and_like">
            <div className="view">
              <p>15.3K Views</p>
              <p className="b_comm">786 comments</p>
            </div>
            <div className="like">
              <p>3K</p>
              <FontAwesomeIcon className='blogi' icon={faHeart} fade   />
            </div>
          </div>
        </div>
      </div>




      <div className="blog_card">
        <div className="blog_img">
          <img src={img13} />
        </div>
        <div className="blog_tag">
          <div className="blog_date">
            <p>
              18 May 2022
              <FontAwesomeIcon className='blogi'  icon={faCalendar} fade   />
            </p>
          </div>
          <h3 className="blog_heading">
            Do Not Leave toko before Eating this remen
          </h3>
          <p className="blog_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum
            commodi fugiat eum assumenda vel cumque eaque totam doloribus.
          </p>
          <hr />
          <div className="view_and_like">
            <div className="view">
              <p>15.3K Views</p>
              <p className="b_comm">786 comments</p>
            </div>
            <div className="like">
              <p>3K</p>
              <FontAwesomeIcon className='blogi' icon={faHeart} fade   />
            </div>
          </div>
        </div>
      </div>
      <div className="blog_card">
        <div className="blog_img">
          <img src={img14} />

        </div>
        <div className="blog_tag">
          <div className="blog_date">
            <p>
              18 May 2022
              <FontAwesomeIcon className='blogi' icon={faCalendar} fade   />
            </p>
          </div>
          <h3 className="blog_heading">
            Do Not Leave toko before Eating this remen
          </h3>
          <p className="blog_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum
            commodi fugiat eum assumenda vel cumque eaque totam doloribus.
          </p>
          <hr />
          <div className="view_and_like">
            <div className="view">
              <p>15.3K Views</p>
              <p className="b_comm">786 comments</p>
            </div>
            <div className="like">
              <p>3K</p>
              <FontAwesomeIcon icon={faHeart} fade   />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>


    );
}

export default Home;
