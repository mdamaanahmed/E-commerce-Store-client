import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/navbar.css'
import { IoBagHandleOutline } from "react-icons/io5";
import Cart from './Cart';
import team1 from '../assets/images/team1.jpg'

const Navbar = () => {
  let navigate = useNavigate()

  const redirectOnLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">E-commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='button'>
            <button type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><IoBagHandleOutline /> <span>1</span></button>
            <Cart />
            <button className='outline_button1' onClick={redirectOnLogin}>Sign in</button>
            <div className="profile">
              <Link to="/profile">
                <img src={team1} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar