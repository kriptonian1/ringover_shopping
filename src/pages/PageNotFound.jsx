import React from 'react'
import { NavBar } from '../components'
import './style/notFound.css'

const PageNotFound = () => {
    return (
        <div>
            <NavBar />
            <div className='ooops'>
                Oops 404, Page not found
            </div>
            
        </div>
    )
}

export default PageNotFound