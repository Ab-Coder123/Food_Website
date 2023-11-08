import React from "react";
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBurger,faMarsStroke,faStar,} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import Footer from "../section/Foot";
import Nav from "../section/Nav";

import img1 from "../image/menu_1.jpg";
import img2 from "../image/menu_2.jpg";
import img3 from "../image/menu_3.png";
import img4 from "../image/menu_4.jpg";
import img5 from "../image/menu_5.webp";
import img6 from "../image/menu_6.jpg";
import img7 from "../image/menu_7.webp";
import img8 from "../image/menu_8.jpg";
import img9 from "../image/menu_9.jpg";
import img10 from "../image/menu_10.jpg";
import img11 from "../image/menu_11.jpg";
import img12 from "../image/menu_12.jpg";
import img13 from "../image/menu_13.jpg";
import img14 from "../image/menu_14.jpg";
import img15 from "../image/menu_15.jpg";
import img16 from "../image/menu_16.jpg";
import img17 from "../image/menu_17.jpg";
import img18 from "../image/menu_18.webp";
import img19 from "../image/menu_19.jpg";
import img20 from "../image/noodles.jpg";
import img21 from "../image/menu_21.jpg";
import img22 from "../image/menu_22.jpg";
import img23 from "../image/menu_23.jpg";
import img24 from "../image/bashamel.jpg";

const Menu = () => {
  const start = true;
  const sliderRef = useRef(null);

const handlePrevious = () => {
  sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth * -1, behavior: 'smooth' });
};

const handleNext = () => {
  sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
};
  return (
    <>
      <Nav />

      {/*Banner*/}
      <div className="banner_bg">
        <h1>
          Our<span>Menu</span>
        </h1>
      </div>

      {/*Menu*/}

      <div className="slider" x-data="{start: true, end: false}">
        <div
          className="slider__content"
          x-ref="slider"
          x-on="{scroll.debounce=$refs.slider.scrollLeft == 0 ? start = true : start = false; Math.abs(($refs.slider.scrollWidth - $refs.slider.offsetWidth) - $refs.slider.scrollLeft) < 5 ? end = true : end = false;}"
        >
          <div className="slider__item">
            <div className="menu_img">
              <img className="slider__image" src={img1} alt="Image" />
            </div>
            <div className="menu_text">
              <h2>Buger</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img2} alt="Image" />
            <div className="menu_text">
              <h2>Milk and ChoKllet</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img3} alt="Image" />
            <div className="menu_text">
              <h2>Pizza</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img4} alt="Image" />
            <div className="menu_text">
              <h2>Onion Ring</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img5} alt="Image" />
            <div className="menu_text">
              <h2>Biryani</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img6} alt="Image" />
            <div className="menu_text">
              <h2>Potato Chips</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img7} alt="Image" />
            <div className="menu_text">
              <h2>Lasagna</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img8} alt="Image" />
            <div className="menu_text">
              <h2>Ice-Cream</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img9} alt="Image" />
            <div className="menu_text">
              <h2>Chocolate</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div  className="slider__nav">
        <button  className={`slider__nav__button ${start ? '' : 'slider__nav__button--active'}`} onClick={() => {
  const slider = document.querySelector('.slider');
  slider.scrollBy({ left: slider.offsetWidth * -1, behavior: 'smooth' });
}}>Previous</button>

<button  className={`slider__nav__button ${start ? 'slider__nav__button--active' : ''}`} onClick={() => {
  const slider = document.querySelector('.slider');
  slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
}}>Next</button>
       </div>
      </div>



      <div className="slider" x-data="{start: true, end: false}">
        <div
          className="slider__content"
          x-ref="slider"
          x-on="{scroll.debounce=$refs.slider.scrollLeft == 0 ? start = true : start = false; Math.abs(($refs.slider.scrollWidth - $refs.slider.offsetWidth) - $refs.slider.scrollLeft) < 5 ? end = true : end = false;}"
        >
          <div className="slider__item">
            <img className="slider__image" src={img10} alt="Image" />
            <div className="menu_text">
              <h2>Pasta</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img11} alt="Image" />
            <div className="menu_text">
              <h2>Starbucks</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img12} alt="Image" />
            <div className="menu_text">
              <h2>Hot Dog</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img13} alt="Image" />
            <div className="menu_text">
              <h2>Sandwich</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img14} alt="Image" />
            <div className="menu_text">
              <h2>Muffin</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img15} alt="Image" />
            <div className="menu_text">
              <h2>sausage</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img16} alt="Image" />
            <div className="menu_text">
              <h2>Cake</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img17} alt="Image" />
            <div className="menu_text">
              <h2>tortialla</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img18} alt="Image" />
            <div className="menu_text">
              <h2>Bacon</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img19} alt="Image" />
            <div className="menu_text">
              <h2>Donuts</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img20} alt="Image" />
            <div className="menu_text">
              <h2>Noodle</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img21} alt="Image" />
            <div className="menu_text">
              <h2>Pancake</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img22} alt="Image" />
            <div className="menu_text">
              <h2>Pretzel</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img23} alt="Image" />
            <div className="menu_text">
              <h2>Toko</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>

          <div className="slider__item">
            <img className="slider__image" src={img24} alt="Image" />
            <div className="menu_text">
              <h2>Bashamel</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                animi nesciunt magni molestiae
              </p>
              <div className="menu_icon">
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faStar} />
                <FontAwesomeIcon Icon={faMarsStroke} />
              </div>
              <p className="price">
                $100.00
                <sub>
                  <del>$120.00</del>
                </sub>
              </p>
              <Link href="order.html" className="menu_btn">
                <FontAwesomeIcon Icon={faBurger} />
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="slider__nav">
        <button className={`slider__nav__button ${start ? '' : 'slider__nav__button--active'}`} onClick={() => {
  const slider = document.querySelector('.slider');
  slider.scrollBy({ left: slider.offsetWidth * -1, behavior: 'smooth' });
}}>Previous</button>

<button className={`slider__nav__button ${start ? 'slider__nav__button--active' : ''}`} onClick={() => {
  const slider = document.querySelector('.slider');
  slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
}}>Next</button>
       </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
