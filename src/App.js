import { useState, useEffect } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./componant/About";
import Contact from "./componant/Contact";
import Gallery from "./componant/Gallery";
import Menu from "./componant/Menu";
import Navbar from "./section/Nav";
import Footer from "./section/Foot";
import Order from "./componant/Order";
import Regist from "./componant/Regsiter.jsx"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Set the time delay in milliseconds
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="load">
          <div className="preloader">
            <svg
              className="cart"
              role="img"
              aria-label="Shopping cart line animation"
              viewBox="0 0 128 128"
              width="128px"
              height="128px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              >
                <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
                  <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
                  <circle cx="43" cy="111" r="13" />
                  <circle cx="102" cy="111" r="13" />
                </g>
                <g className="cart__lines" stroke="currentColor">
                  <polyline
                    className="cart__top"
                    points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                    strokeDasharray="338 338"
                    strokeDashoffset="-338"
                  />
                  <g className="cart__wheel1" transform="rotate(-90,43,111)">
                    <circle
                      className="cart__wheel-stroke"
                      cx="43"
                      cy="111"
                      r="13"
                      strokeDasharray="81.68 81.68"
                      strokeDashoffset="81.68"
                    />
                  </g>
                  <g className="cart__wheel2" transform="rotate(90,102,111)">
                    <circle
                      className="cart__wheel-stroke"
                      cx="102"
                      cy="111"
                      r="13"
                      strokeDasharray="81.68 81.68"
                      strokeDashoffset="81.68"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <>
          <Routes>
            {/* main  */}
            <Route path="/" element={<Home />} />
            <Route path="/componant/About.jsx" element={<About />} />
            <Route path="/componant/Contact.jsx" element={<Contact />} />
            <Route path="/componant/Menu.jsx" element={<Menu />} />
            <Route path="/componant/Gallery.jsx" element={<Gallery />} />
            <Route path="/componant/Order.jsx" element={<Order />} />
            <Route path="/componant/Regsiter.jsx" element={<Regist />} />


            {/* sections  */}
            <Route path="/section/Nav" element={<Navbar />} />
            <Route path="/section/Foot" element={<Footer />} />
            </Routes>

    
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
