import React from 'react'
import Product from './Product'

const Products = () => {
  const condition = true;
  return (
    <div>Products:{condition ? "LoggedIn" : "LoggedOut"}
        <Product/>
    </div>
  )
}

export default Products