import React from 'react'
import CTA from '../CTA/CTA'
import sprite from '../../img/sprite.svg'
import './HomesCard.css'

const HomesCard = ({ img, title, location, rooms, superficie, price }) => {
  return (
    <div className='home'>
      <img src={img} alt={title} />
      <svg className='home__like'>
        <use xlinkHref={`${sprite}#icon-heart-full`}></use>
      </svg>
      <h5 className='home__title'>{title}</h5>
      <div className='home__location'>
        <svg>
          <use xlinkHref={`${sprite}#icon-map-pin`}></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className='home__rooms'>
        <svg>
          <use xlinkHref={`${sprite}#icon-profile-male`}></use>
        </svg>
        <p>{`${rooms} rooms`}</p>
      </div>
      <div className='home__area'>
        <svg>
          <use xlinkHref={`${sprite}#icon-expand`}></use>
        </svg>
        <p>{`${superficie} m²`}</p>
      </div>
      <div className='home__price'>
        <svg>
          <use xlinkHref={`${sprite}#icon-key`}></use>
        </svg>
        <p>{price}</p>
      </div>
      <CTA value='Contact realtor' stretch />
    </div>
  )
}

export default HomesCard
