import React, { useContext } from 'react'
import cartContext from '../../../context/cartContext'
import './productCard.css'

const ProductCard = ({ id, name, image, price }) => {

  const ctx = useContext(cartContext);


  return (
    <div className='card'>
      <span className='design-text'>your design space</span>

      <div className='align'>
        <div className='image-section'>
          <img className='card-image' src={image} alt='product' />
        </div>

        <div>
          <h2 className='card-name'>{name}</h2>
          <div>{price}</div>
        </div>
      </div>

      <button onClick={() => ctx.addToCart(id)} className='card-btn'>Add to cart</button>


    </div>
  )
}

export default ProductCard