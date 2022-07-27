import React from 'react'
import './teamWrap.css'

const TeamContentWrap = (props) => {

  return (
    <div className='wrap-team'>

      {props.children}

    </div>
  )
}

export default TeamContentWrap