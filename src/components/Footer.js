import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsSlack } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { SiSkypeforbusiness } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import '../assets/css/footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1>E-commerce</h1>
                        </div>
                        <div className="col-lg-3">
                            <h5>Products</h5>
                            <a href='#'>T-Shirt</a>
                            <a href='#'>Shirt</a>
                            <a href='#'>Watches</a>
                            <a href='#'>Shoes</a>
                        </div>
                        <div className="col-lg-3">
                            <h5>Explore more</h5>
                            <a href='#'>Home</a>
                            <a href='#'>Shop</a>
                            <a href='#'>About</a>
                            <a href='#'>Contact Us</a>
                        </div>
                        <div className="col-lg-3">
                            <h5>Find Us on Social Media</h5>
                            <div className="Social_icons">
                                <FaFacebook className='icon' />
                                <BsSlack className='icon' />
                                <SiInstagram className='icon' />
                                <SiSkypeforbusiness className='icon' />
                                <BsTelegram className='icon' />
                                <BsLinkedin className='icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer