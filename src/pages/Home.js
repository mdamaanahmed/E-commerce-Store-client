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
            <FeatureCard className='i' img={ts1} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
            <FeatureCard img={ts2} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
            <FeatureCard img={ts3} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
            <FeatureCard img={ts4} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
            <FeatureCard img={ts4} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
            <FeatureCard img={ts4} title='Funkey T-Short' company='Calvin Klein' rating='3.8' price='35$' review='2354' />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home