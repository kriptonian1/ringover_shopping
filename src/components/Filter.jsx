import React from 'react'
import { filter } from '../assets'
import './style/filter.css'

const Filter = () => {
  return (
    <div className='shadow-box filter'>

    <div className='filter-top'>
      <span className='filter-heading'>FILTERS</span>
      <img className='icon' src={filter} alt="filter" />
    </div>

    <div>
      Cost
      <div className='chkbox'>
        <div>
          <input type="checkbox" name="price" id="price" />
          <label htmlFor="price">Rs. 1500-4000</label>
        </div>
        <div>
          <input type="checkbox" name="price" id="price" />
          <label htmlFor="price">Rs. 4001-7000</label>
        </div>
        <div>
          <input type="checkbox" name="price" id="price" />
          <label htmlFor="price">Rs. 7001+</label>
        </div>
      </div>
    </div>

    <div>
      Colour
      <div className='align-color'>
        <div className='color1'></div>
        <div className='color2'></div>
        <div className='color3'></div>
      </div>
    </div>

    <div>
      Design templates
      <div className='chkbox'>
        <div>
          <input type="checkbox" name="design" id="design" />
          <label htmlFor="design">2</label>
        </div>
        <div>
          <input type="checkbox" name="design" id="design" />
          <label htmlFor="design">3</label>
        </div>
        <div>
          <input type="checkbox" name="design" id="design" />
          <label htmlFor="design">3+</label>
        </div>

      </div>
    </div>

    <div>
      Type
      <div className='chkbox'>
        <div>
          <input type="checkbox" name="type" id="type" />
          <label htmlFor="type">Loafers</label>
        </div>
        <div>
          <input type="checkbox" name="type" id="type" />
          <label htmlFor="type">Sneakers</label>
        </div>

      </div>
    </div>

    <button className='apply-btn'>Apply</button>

  </div>
  )
}

export default Filter