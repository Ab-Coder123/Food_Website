import React from 'react'
import Nav from "../section/Nav";
import "./Order.css"
import imgorder from "../image/oder.png"
const Order = () => {
  return (
    <>

    {/* <Nav/> */}
    <div className="oder">
    <h1><span>Order</span>Now</h1>
    <div className="oder_main">
        <div className="oder_img">
            <img src={imgorder} />
        </div>
        <div className="oder_form">
            <h2>Home Delivery</h2>
            <div className="oder_list">
                <div className="oder_left">
                    <p>Full Name</p>
                    <input type="text" placeholder="John Deo" />
                    <p>Number</p>
                    <input type="number" placeholder="+94 12 345 6789" />
                    <p>Extra food</p>
                    <input type="text" placeholder="with cola" />
                    <p>Your Address</p>
                    <textarea placeholder="Enter Your Address"></textarea>
                </div>
                <div className="oder_right">
                    <p>Email</p>
                    <input type="email" placeholder="johndeo123@gmail.com" />
                    <p>Food Name</p>
                    <input type="text" placeholder="Pizza" />
                    <p>How Much</p>
                    <input type="number" placeholder="3" />
                    <p>Your Message</p>
                    <textarea placeholder="Enter Your Message"></textarea>
                </div>
            </div>
            <a href="#" className="oder_btn btn"><i className="fa-solid fa-burger"></i>Order Now</a>
        </div>
    </div>
</div>
    </>
  )
}

export default Order