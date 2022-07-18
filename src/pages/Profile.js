import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { MdOutlinePersonOff } from 'react-icons/md';
import team1 from '../assets/images/team1.jpg'
import '../assets/css/profile.css'

const Profile = () => {
  const [showTab, setShowTab] = useState('details')
  const navigate = useNavigate()

  let openProfile = () => {
    navigate('/profile')
  }

  let activeParaColor = (e, value) => {
    let p = document.querySelectorAll('.activeStyle')
    let icon = document.querySelectorAll('.icon')

    p.forEach(element => {
      element.classList.remove('active_p_color')
    })
    icon.forEach(element => {
      element.classList.remove('active_p_color')
    })
    e.target.classList.add('active_p_color')
    e.target.firstChild.classList.add('active_p_color')
    setShowTab(value)
  }

  return (
    <>
      <div className="profile" onClick={openProfile}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidemenu">
                <h2>My Profile</h2>
                <div>
                  <p className='activeStyle active_p_color' onClick={(e) => activeParaColor(e, 'details')}><IoPersonCircleOutline className='icon active_p_color' />Details</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e, 'addresses')}><HiOutlineLocationMarker className='icon' />Addresses</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e, 'orders')}><MdOutlineShoppingBag className='icon' />Orders</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e)}><MdOutlinePersonOff className='icon' />Sign Out</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="profile_content">
                {
                  showTab === 'details' ?
                    <div className="details">
                      <form enctype='multipart/form-data'>
                        <div className="row">
                          <div className='col-lg-12'>
                            <h4>My details</h4>
                            <p>Personal Details</p>
                          </div>
                          <div className="img">
                            <img src={team1} alt="" />
                            <label className='change_image'>
                              Change Image
                              <input type="file" hidden />
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="name">Name :</label>
                            <input type="text" className='form-control' name='name' id='name' />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="dob">Date of Birth :</label>
                            <input type="date" className='form-control' name='dob' id='dob' />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="phone">Phone :</label>
                            <input type="number" className='form-control' name='phone' id='phone' />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="email">Email :</label>
                            <input type="email" className='form-control' name='email' id='email' />
                          </div>
                          <div>
                            <p>Password</p>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="email">Email :</label>
                            <input type="email" className='form-control' name='email' id='email' />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="password">Password :</label>
                            <input type="password" className='form-control' name='password' id='password' />
                          </div>
                          <div className="col-lg-3">
                            <button className='button_bg my-4'>Update Profile</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    :
                    showTab === 'addresses' ?
                      <div className="addresses">
                        <div className="row">
                          <div>
                            <h4>All Addresses</h4>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="data">
                              <HiOutlineLocationMarker className='icon' />
                              <div>
                                <h6>Jhon Doe</h6>
                                <h6>485/DF Loha Mandi, Agra - 282010</h6>
                                <h6>9557093828</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <p>Add new Address:</p>
                            <input type="text" className='form-control w-50' name='newAddress' placeholder='write your address' />
                            <button className='button_bg'>Save</button>
                          </div>
                        </div>
                      </div>
                      :
                      showTab === 'orders' ?
                        <div className="orders">
                          <div className="row">
                            <div>
                              <h4>My Orders</h4>
                            </div>
                            <div className="col-lg-6">

                            </div>
                          </div>
                        </div>
                        :
                        null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile