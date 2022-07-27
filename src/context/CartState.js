import React, { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(product => product !== id));
    }

    // console.log(cart);

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;