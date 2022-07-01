import React from 'react'
import '../assets/css/shop.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Shop = () => {
  return (
    <>
      {/* search section */}
      <section className="search">
        <div className="content">
          <input type="text" placeholder='Search products here' />
          <div className="category">
            <div className='category_heading'>
              <p>categories</p>
              <MdOutlineKeyboardArrowDown className='icon' />
            </div>
            <div className="category_item">
              <p className="item">Shirts</p>
              <p className="item">T-Shirts</p>
              <p className="item">Watches</p>
              <p className="item">Shoes</p>
            </div>
          </div>
          <div className="icon">
            <FiSearch />
          </div>
        </div>
      </section>
      {/* search section end */}

    </>
  )
}

export default Shop