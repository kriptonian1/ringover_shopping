import React from 'react'
import { Shoes, Filter, NavBar, Cart } from '../components'
import './style/store.css'

const Store = () => {
  return (
    <div>
      <NavBar />
      <div className='align-content'>
        <Filter/>
        <Shoes/>
        <Cart />
      </div>

    </div>
  )
}

export default Store