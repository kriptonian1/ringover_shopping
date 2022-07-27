import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cart, NavBar } from '../../components'
import shoesData from '../../data/data'
import ProductCard from './components/ProductCard'
import './product.css'

const Product = (props) => {
  let params = useParams()

  const shoeData = shoesData



  const shoe = shoeData.find((shoe) => shoe.id == params.id)
   
  return (
    <div>
      <NavBar />
      Product: {params.id}

      <div className='align'>
        <ProductCard id={shoe.id} name={shoe.name} image={shoe.image} price={shoe.price} />
        <Cart />
        
      </div>

    </div>
  )
}

export default Product