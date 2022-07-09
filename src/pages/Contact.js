import React from 'react'
import { RiPhoneFill } from 'react-icons/ri';
import { IoMailSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import '../assets/css/contact.css'

const Contact = () => {
  return (
    <>
    <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading_design1">
              <h1>Contact Us</h1>
              <p>any question or remarks? just write us a message!</p>
            </div>
            <div className="col-lg-12 main_box">
              <div className="row">
                <div className="col-lg-5">
                  <div className="left_content">
                    <div className="content_heading">
                      <h3>Contact Information</h3>
                      <p>Fill up The form and our Team will get back to you within 24 hours.</p>
                    </div>
                    <div className="info">
                      <p><RiPhoneFill className='info_icon' />+91 8603485082</p>
                      <p><IoMailSharp className='info_icon' />info@elearners.com</p>
                      <p><MdLocationOn className='info_icon' />543/d Street 4656 Delhi</p>
                    </div>
                    <div className="social_midea">
                      <div>
                        <FaFacebookF className='social_icon' />
                      </div>
                      <div>
                        <BsTelegram className='social_icon' />
                      </div>
                      <div>
                        <SiInstagram className='social_icon' />
                      </div>
                      <div>
                        <FaLinkedinIn className='social_icon' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="right_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="firstname">First Name *</label>
                        <input type="text" id='firstname' name='firstname' placeholder='your first name' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="lastname">Last Name *</label>
                        <input type="text" id='lastname' name='lastname' placeholder='your last name' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id='email' name='email' placeholder='email address' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="phone">Phone *</label>
                        <input type="number" id='phone' name='phone' placeholder='phone number' />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id='msg' rows="4" placeholder='write your message here...'></textarea>
                      </div>
                      <div className="col-lg-12 send_button">
                        <button className='button_bg'>Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact