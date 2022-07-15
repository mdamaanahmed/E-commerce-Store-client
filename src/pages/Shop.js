import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/shop.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProductItemCard from '../components/ProductItemCard'
import ts1 from '../assets/images/t-s1.webp'
import ts2 from '../assets/images/t-s2.webp'
import ts3 from '../assets/images/t-s3.webp'
import ts4 from '../assets/images/t-s4.webp'
import s1 from '../assets/images/s1.webp'
import s2 from '../assets/images/s2.webp'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.webp'
import shoe1 from '../assets/images/shoe1.webp'
import shoe2 from '../assets/images/shoe2.webp'
import shoe3 from '../assets/images/shoe3.webp'
import shoe4 from '../assets/images/shoe4.webp'
import w1 from '../assets/images/w1.webp'
import w2 from '../assets/images/w2.webp'
import w3 from '../assets/images/w3.webp'
import w4 from '../assets/images/w4.webp'
import b1 from '../assets/images/b1.png'
import b2 from '../assets/images/b2.jpg'
import b3 from '../assets/images/b3.png'
import b4 from '../assets/images/b4.png'
import b5 from '../assets/images/b5.png'
import b6 from '../assets/images/b6.png'
import b7 from '../assets/images/b7.png'
import b8 from '../assets/images/b8.png'
import b9 from '../assets/images/b9.png'
import reco1 from '../assets/images/reco1.jpg'
import reco2 from '../assets/images/reco2.jpg'
import reco3 from '../assets/images/reco3.jpg'
import reco4 from '../assets/images/reco4.jpg'
import { VscSettings } from 'react-icons/vsc';

const Shop = () => {
  const [showCategories, setShowCategories] = useState(false)
  let navigate = useNavigate()

  let toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  let showBuyPage = () => {
    navigate('/buy')
  }

  return (
    <>
      {/* search section */}
      <section className="search">
        <div className="content">
          <input type="text" placeholder='Search products here' />
          <div className="category">
            <div className='category_heading' onClick={() => toggleCategories()}>
              <p>categories</p>
              <MdOutlineKeyboardArrowDown className={showCategories ? 'icon rotate' : 'icon'} />
            </div>
            <div className={showCategories ? 'category_items show' : 'category_items'}>
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

      {/* product section start */}
      <section className="shop_products">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-2 p-0">
              <div className="sort_products">
                <h6>Sort by <VscSettings className='sort_icon' /></h6>
                <div>
                  <h6>Categories</h6>
                  <p>shirt</p>
                  <p>t-shirt</p>
                  <p>shoes</p>
                  <p>watch</p>
                </div>
                <div>
                  <h6>Date</h6>
                  <p>newest</p>
                  <p>oldest</p>
                  <p>this week</p>
                  <p>this month</p>
                </div>
              </div>
            </div>
            <div className="col-lg-10 p-0">
              <div className="current_category">
                <button className='button_outline'>All</button>
                <button className='button_outline'>Shirts</button>
                <button className='button_outline'>T-Shirts</button>
                <button className='button_outline'>Watches</button>
                <button className='button_outline'>Shoes</button>
              </div>
              <div className="products">
                <div className="row m-0">
                  <ProductItemCard showbuypage={showBuyPage} img={ts1} title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' price='35$' discount='upto 45% 0ff' review='3354' />
                  <ProductItemCard showbuypage={showBuyPage} img={s1} title='Summer Shirt' company='Allen Solly' rating='4.8' price='45$' discount='upto 40% 0ff' review='4384' />
                  <ProductItemCard showbuypage={showBuyPage} img={w1} title='Format Watch' company='Fossil India' rating='3.9' price='39$' discount='upto 35% 0ff' review='3954' />
                  <ProductItemCard showbuypage={showBuyPage} img={ts4} title='Funkey T-Shirt' company='Calvin Klein' rating='5.0' price='50$' discount='upto 20% 0ff' review='2354' />
                  <ProductItemCard showbuypage={showBuyPage} img={shoe3} title='Casual Shoe' company='Sparx' rating='3.4' price='49$' discount='upto 50% 0ff' review='3890' />
                  <ProductItemCard showbuypage={showBuyPage} img={s4} title='Summer Shirt' company='Calvin Klein' rating='4.9' price='40$' discount='upto 50% 0ff' review='4934' />
                  <ProductItemCard showbuypage={showBuyPage} img={shoe2} title='Casual Shoe' company='Sparx' rating='4.8' price='39$' discount='upto 30% 0ff' review='3354' />
                  <ProductItemCard showbuypage={showBuyPage} img={ts2} title='Funkey T-Shirt' company='Allen Solly' rating='4.9' price='42$' discount='upto 50% 0ff' review='2934' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product section end */}
    </>
  )
}

export default Shop