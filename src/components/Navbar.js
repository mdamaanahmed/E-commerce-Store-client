import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/navbar.css'

const Navbar = () => {
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
          <div>
            <button className='outline_button1'>Sign in</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar