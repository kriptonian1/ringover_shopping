import React, { useContext } from 'react'
import { bag } from '../assets'
import cartContext from '../context/cartContext';
import shoesData from '../data/data';
import './style/cart.css'

const Cart = () => {

    const ctx = useContext(cartContext);

    const shoe = shoesData;

    return (
        <div className='shadow-box cart'>

            <div className='cart-top'>
                <span className='cart-heading'>CART</span>
                <img className='icon' src={bag} alt="bag" />
            </div>

            <div className='cart-body'>
                {(ctx.cart).length > 0 ? "there" : "wahat's stopping you, designer?"}
                {ctx.cart && (ctx.cart).map((item) => {
                    return (
                        <div key={1} className='cart-item'>
                            <div  className='cart-item-image'>
                                <img className='icon-shoe' src={shoe.find((shoe) => shoe.id === item).image} alt="product" />
                            </div>
                            <div className='cart-item-info'>
                                <div className='cart-item-name'>{shoe.find((shoe) => shoe.id === item).name}</div>
                                <div className='cart-item-price'>{shoe.find((shoe) => shoe.id === item).price}</div>
                            </div>
                            <button onClick={() => ctx.removeFromCart(item)}>remove</button>
                        </div>
                    )
                })}

            </div>


            <button className='order-btn'>order now</button>
                {console.log(ctx.cart)}

        </div>
    )
}

export default Cart