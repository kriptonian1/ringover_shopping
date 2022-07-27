import React from 'react'
import { NavBar } from '../components'
import "./style/team.css"
import { TeamContentWrap } from './wrap'
import { zidane, tonikroos, james, ikercasillas, christiano, facebookIMG, mediumIMG, linkedinIMG, dribbbleIMG } from '../assets'

const Team = () => {


  const data = [
    {
      name: 'Zidane',
      position: 'Leadership & management',
      image: zidane,
      social1: facebookIMG,
      social2: linkedinIMG,
      social3: mediumIMG,
    },
    {
      name: 'Toni Kroos',
      position: 'Product development',
      image: tonikroos,
      social1: linkedinIMG,
      social2: mediumIMG
    },
    {
      name: 'Iker Casillas',
      position: 'Marketing strategy',
      image: ikercasillas,
      social1: mediumIMG,
    },
    {
      name: 'James',
      position: 'Product designer',
      image: james,
      social1: dribbbleIMG,
      social2: mediumIMG,
    },
    {
      name: 'Christiano',
      position: 'Financial operations',
      image: christiano,
      social1: linkedinIMG,
      social2: facebookIMG,
    }
  ]

  return (
    <div>
      <NavBar />


      <div className='team'>
        <div className='head-text'>
          Without bounding and coordination, every project is a failure. Look at who makes KICKSUP great. ; &#41;
        </div>

        <div className='team-box'>

          {data.map((item, index) => {

            return (
              <TeamContentWrap>
                <div key={index} className='team-member'>
                  <div >
                    <img className='image-wrap' src={item.image} alt={item.name} />
                  </div>
                  <div className='center-name'>
                    <div className='name'>{item.name}</div>
                    <div className='position'>{item.position}</div>
                  </div>

                  <div className='social-wrap'>
                    <a href={item.social1}>
                      {typeof item.social1 === 'string' && <img className='logo' src={item.social1} alt={item.name} />}
                    </a>
                    <a href={item.social2}>
                      {typeof item.social2 === 'string' && <img className='logo' src={item.social2} alt={item.name} />}
                    </a>
                    <a href={item.social3}>
                      {typeof item.social3 === 'string' && <img className='logo' src={item.social3} alt={item.name} />}
                    </a>
                  </div>
                </div>
              </TeamContentWrap>
            )

          })}

        </div>


          <div className='last-text'>
            and You! ; &#41;
          </div>

      </div>



    </div>
  )
}

export default Team