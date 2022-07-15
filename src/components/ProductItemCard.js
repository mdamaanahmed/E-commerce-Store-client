import React from 'react'
import { GiRoundStar } from 'react-icons/gi';
import '../assets/css/productItemCard.css'

const ProductItemCard = ({ img, title, company, rating, price, discount, review, showbuypage }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="box" onClick={showbuypage}>
                    <div className="img">
                        <img src={img} alt="" height="100%" />
                    </div>
                    <div className="content">
                        <p>{company}</p>
                        <h2>{title}</h2>
                        <h3>{price} <span>{discount}</span></h3>
                        <div className="price">
                            <h5>{review} reviews</h5>
                            <p>{rating} <GiRoundStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItemCard