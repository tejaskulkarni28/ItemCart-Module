import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const Cart = ()=>{
    const navigate = useNavigate()
    const cartItems = useSelector((state)=>state.cart.items)
    const [getCartItems, setCartItems] = useState([])

    useEffect(()=>{
        setCartItems(cartItems)
        console.log(cartItems)
    },[cartItems])

    const handlePrevious = ()=>{
        // while I click next button it should also process the redux-toolkit 
        navigate('/order')
    }
    return(
        <div className="container">
            <div className="content">
            <h1>Your Cart</h1>
            {
                getCartItems.map((value, index)=>(
                    <div key={index}>
                    <p>{value.count}</p>
                    <p>{value.id}</p>
                    </div>
                ))
            }
            <button onClick={()=>{handlePrevious()}}>Previous</button>
            </div>
        </div>
    )
}

export default Cart;