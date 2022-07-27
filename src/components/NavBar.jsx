import React from 'react'
import "./style/navbar.css"
import { websitelogo, user } from "../assets"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className='nav'>

            <img className='nav-logo' src={websitelogo} alt="logo" />

            <div className='nav-links'>
                <div className='nav-text' onClick={() => navigate("/")}>Home</div>
                <div className='nav-text' onClick={() => navigate("/the-journey")}>The Journey</div>
                <div className='nav-text' onClick={() => navigate("/team")}>Team</div>
                <div className='nav-text' onClick={() => navigate("/store")}>Store</div>
                <div className='nav-text' onClick={() => navigate("/contact")}>Contact</div>
            </div>

            {/*  user profile */}
            <div className='nav-profile'>   
                <img className='nav-profile-pic' src={user} alt="profile" />
                <p>
                    GANJA
                </p>
            </div>
        </div>
    )
}

export default NavBar