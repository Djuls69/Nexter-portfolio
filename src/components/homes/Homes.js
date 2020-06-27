import React from 'react'
import HomesCard from '../homesCard/HomesCard'
import data from '../../data/homesData'
import './Homes.css'

const Homes = () => {
  return (
    <section className='homes'>
      {data.map(({ index, img, title, location, rooms, superficie, price }) => {
        return (
          <HomesCard
            key={index}
            img={img}
            title={title}
            location={location}
            rooms={rooms}
            superficie={superficie}
            price={price}
          />
        )
      })}
    </section>
  )
}

export default Homes
