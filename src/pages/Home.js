import React from 'react'
import '../assets/css/home.css'
import ts1 from '../assets/images/t-s1.webp'
import ts2 from '../assets/images/t-s2.webp'
import ts3 from '../assets/images/t-s3.webp'
import ts4 from '../assets/images/t-s4.webp'
import s1 from '../assets/images/s1.webp'
import s2 from '../assets/images/s2.webp'
import s3 from '../assets/images/s3.webp'
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
import FeatureCard from '../components/FeatureCard'
import '../assets/css/featureCard.css'

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="content">
                <div className="heading">
                  <h5>Clothes, Shoes, Accessories.</h5>
                  <h1>One online store for all your needs.</h1>
                  <p>find which is better for you....</p>
                  <button className="outline_button2">Explore Online Shop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* feature section */}
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Feature Products</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum atque.</p>
            </div>
            <FeatureCard img={ts1} title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' price='35$' review='3354' />
            <FeatureCard img={s1} title='Summer Shirt' company='Allen Solly' rating='4.8' price='45$' review='4384' />
            <FeatureCard img={w1} title='Format Watch' company='Fossil India' rating='3.9' price='39$' review='3954' />
            <FeatureCard img={ts4} title='Funkey T-Shirt' company='Calvin Klein' rating='5.0' price='50$' review='2354' />
            <FeatureCard img={shoe3} title='Casual Shoe' company='Sparx' rating='3.4' price='49$' review='3890' />
            <FeatureCard img={s4} title='Summer Shirt' company='Calvin Klein' rating='4.9' price='40$' review='4934' />
            <FeatureCard img={shoe2} title='Casual Shoe' company='Sparx' rating='4.8' price='39$' review='3354' />
            <FeatureCard img={ts2} title='Funkey T-Shirt' company='Allen Solly' rating='4.9' price='42$' review='2934' />
          </div>
        </div>
      </section>
      {/* feature section end */}

      {/* brand section */}
      <section className="brand">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <img src={b3} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={b4} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={b5} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={b6} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={b7} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={b8} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* brand section end */}

      {/* top rated section */}
      <section className="top_rated">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Feature Products</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum atque.</p>
            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      </section>
      {/* top rated section end */}

    </>
  )
}

export default Home