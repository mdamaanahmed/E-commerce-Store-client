import React, { useState } from 'react'
import '../assets/css/cart.css'
import CardItem from './CartItem'

const Cart = () => {
    const [productQty, setProductQty] = useState(1)

    let decrement = () => {
        if (productQty > 1) setProductQty(productQty - 1);
    }
    let increment = () => {
        if (productQty < 10) setProductQty(productQty + 1);
    }

    return (
        <>
            <div className="cart">
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">My Cart</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <CardItem decrement={decrement} increment={increment} productQty={productQty} />
                                <CardItem decrement={decrement} increment={increment} productQty={productQty} />
                                <CardItem decrement={decrement} increment={increment} productQty={productQty} />
                                <CardItem decrement={decrement} increment={increment} productQty={productQty} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="button_outline">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart