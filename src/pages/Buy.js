import React, {useState} from 'react'
import '../assets/css/buy.css'
import s3 from '../assets/images/s3.png'
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import { GiRoundStar } from "react-icons/gi";

const Buy = () => {
    const [productQty, setProductQty] = useState(1)
    
    let decrement = () => {
        if(productQty > 1) setProductQty(productQty - 1); 
    }
    let increment = () => {
        if(productQty < 10) setProductQty(productQty  + 1); 
    }

    return (
        <>
            <div className="buy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to='/shop'><ImArrowLeft2 className='back_icon' />Go back</Link>
                            <div className="images">
                                <img src={s3} alt="" />
                                <div>
                                    <img src={s3} alt="" />
                                    <img src={s3} alt="" />
                                    <img src={s3} alt="" />
                                    <img src={s3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="content">
                                <h6>Free shipping</h6>
                                <h3>title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nemo, in inventore vitae ipsa quos corporis voluptatem minus suscipit sequi repellendus praesentium illum eaque aut veniam possimus distinctio voluptates.</p>
                                <div className="rating">
                                    <p>4.5 <span><GiRoundStar className='star' /></span></p>
                                    <p>Ratings</p>
                                </div>
                                <div className="price">
                                    <h2>$49</h2>
                                    <p>upto 50% off</p>
                                </div>
                                <div className="qty">
                                    <button onClick={decrement}>-</button>
                                    <h6>{productQty}</h6>
                                    <button onClick={increment}>+</button>
                                    <p>total price -</p>
                                    <p>${49*productQty}</p>
                                </div>
                                <div className="button">
                                    <button className='orange_button_outline me-4'>Add to Cart</button>
                                    <button className='button_bg'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy