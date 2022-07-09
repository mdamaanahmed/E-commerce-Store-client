import React, {useState} from 'react'
import '../assets/css/shop.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Shop = () => {
  const [showCategories, setShowCategories] = useState(false)

  let toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <>
      {/* search section */}
      <section className="search">
        <div className="content">
          <input type="text" placeholder='Search products here' />
          <div className="category">
            <div className='category_heading' onClick={()=> toggleCategories()}>
              <p>categories</p>
              <MdOutlineKeyboardArrowDown className={showCategories ? 'icon rotate' : 'icon'} />
            </div>
            <div className={ showCategories ? 'category_items show' : 'category_items'}>
              <p className="item">Shirts</p>
              <p className="item">T-Shirts</p>
              <p className="item">Watches</p>
              <p className="item">Shoes</p>
            </div>
          </div>
          <div className="search_icon">
            <FiSearch className='icon' />
          </div>
        </div>
      </section>
      {/* search section end */}
    </>
  )
}

export default Shop