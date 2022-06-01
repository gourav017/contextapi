import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const {count,setcount} = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={()=>setcount(count+1)}>add to cart</button>
    </div>
  )
}

export default Cart