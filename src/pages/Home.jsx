import React from 'react'
import { NavBar } from '../components'
import "./style/home.css"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='home'>
        Welcome Back to the Home Page
      </div>
      
    </div>
  )
}

export default Home