import React from 'react'
import { useNavigate } from 'react-router-dom'
import { search } from '../assets'
import shoesData from '../data/data'
import './style/shoes.css'

const Shoes = () => {

    const shoes = shoesData;

    const navigate = useNavigate();

    return (
        <div className='shadow-box width-item shoes'>
            <div className='shoes-top'>
                <span className='shoes-heading'>SHOES</span>
                <div className='allign-prt'>
                    <img className='icon' src={search} alt="shoes" />
                    <button className='sort-btn'>sort by</button>
                </div>
            </div>

            <div className='allign-product'>
                {shoes.map((shoe) => {

                    return (
                        <div onClick={() => navigate(`/product/${shoe.id}`)} className='shoe-card'>
                            <div >
                                <img className='shoe-image' src={shoe.image} alt="shoe" />
                            </div>
                            <div className='shoe-name'>{shoe.name}</div>
                            <div className='shoe-price'>{shoe.price}</div>
                        </div>
                    )
                })}


            </div>



        </div>
    )
}

export default Shoes