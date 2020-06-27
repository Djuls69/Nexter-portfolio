import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const imgCollection = []
  for (let i = 1; i <= 14; i++) {
    imgCollection.push(
      <figure key={i} className={`gallery__item gallery__item--${i}`}>
        <img
          src={require(`../../img/gal-${i}.jpeg`)}
          className='gallery__img'
          alt={`Gallery ${i}`}
        />
      </figure>
    )
  }
  return <section className='gallery'>{imgCollection}</section>
}

export default Gallery
