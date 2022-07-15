import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Buy from './pages/Buy'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route exact path='/' element={<ProtectedRoute />} > */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/buy' element={<Buy />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        {/* </Route> */}
        {/* <Route exact path='/' element={<PublicRoute />} >
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Route> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App