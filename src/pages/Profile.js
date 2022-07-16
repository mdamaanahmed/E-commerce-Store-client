import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { MdOutlinePersonOff } from 'react-icons/md';
import '../assets/css/profile.css'

const Profile = () => {
  const navigate = useNavigate()

  let openProfile = () => {
    navigate('/profile')
  }

  function activeParaColor(e) {
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
                  <p className='activeStyle' onClick={(e) => activeParaColor(e)}><IoPersonCircleOutline className='icon' />Details</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e)}><HiOutlineLocationMarker className='icon' />Addresses</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e)}><MdOutlineShoppingBag className='icon' />Orders</p>
                  <p className='activeStyle' onClick={(e) => activeParaColor(e)}><MdOutlinePersonOff className='icon' />Sign Out</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="content">
                <div className="details">
                  <div className="row">
                    <div className="col-lg-6">

                    </div>
                  </div>
                </div>
                <div className="Addresses">
                  <div className="row">
                    <div className="col-lg-6">

                    </div>
                  </div>
                </div>
                <div className="orders">
                  <div className="row">
                    <div className="col-lg-6">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile