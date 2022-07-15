import React from 'react'
import s4 from '../assets/images/s4.webp'
import { AiOutlineDelete } from 'react-icons/ai';
import '../assets/css/cartItem.css'

const CartItem = ({decrement, increment, productQty}) => {
    return (
        <>
            <div className="content">
                <div className="image">
                    <img src={s4} alt="" />
                    <div className="title">
                        <h5>title</h5>
                        <p>description</p>
                        <p>in stock</p>
                        <div>
                            <h4>$49</h4>
                            <p>upto 50% off</p>
                        </div>
                    </div>
                </div>
                <div className="qty">
                    <button onClick={decrement}>-</button>
                    <h6>{productQty}</h6>
                    <button onClick={increment}>+</button>
                </div>
                <div className="total">
                    <div>
                        <AiOutlineDelete className='delete_icon' />
                    </div>
                    <div>
                        <p>total price</p>
                        <p>${49 * productQty}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem