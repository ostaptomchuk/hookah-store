import './Cart.scss'
import React from "react";

const Cart = ({active, setActive}) => {

    return (
        <div className={active ? "cart active" : "cart"} onClick={() => setActive(false)}>
            <div className="cart-content" onClick={ e => e.stopPropagation()}>
                <h2 className="cart-title">Корзина</h2>
            </div>
        </div>
    )
}

export default Cart