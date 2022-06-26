import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/shop' element={<Shop />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App