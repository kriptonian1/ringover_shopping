import React from 'react'
import { NavBar } from '../components'
import "./style/contact.css"
import { facebookIMG, instagramIMG, twitterIMG } from '../assets'

const Contact = () => {

  const data = [
    {
      email: 'support@kicksup.com',
      info: 'for any technical support',
    }, {
      email: 'info@kicksup.com',
      info: 'for more info',
    }, {
      email: 'feedback@kicksup.com',
      info: 'for send your feedback',
    }, {
      email: 'jobs@kicksup.com',
      info: 'to work with us',
    },

  ]

  const social = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/kicksup',
      image: facebookIMG
    }, {
      name: 'instagram',
      url: 'https://www.instagram.com/kicksup',
      image: instagramIMG
    }, {
      name: 'twitter',
      url: 'https://twitter.com/kicksup',
      image: twitterIMG
    }
  ]

  return (
    <div>
      <NavBar />

      <div className='allign-center'>
        <div className='wrap'>
          <span className='reach-us'> REACH US AT  </span>

          {data.map((item, index) => {
            return (
              <div key={index} className='contact-info'>
                <div onClick={(e) => {
                        window.location.href = `mailto:${item.email}`;
                        e.preventDefault();
                    }} className='email'>{item.email}</div>
                <div className='info'>{item.info}</div>
              </div>
            )
          })}
        </div>

        <div className='social-wrap'>
          <span className='hate-css'> stay in touch </span>
          
          <div className='social-icon'>
            {social.map((item, index) => {
              return (

                <a key={index} href={item.url}>
                  <img className='logo' src={item.image} alt={item.name} />
                </a>

              )

            })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact