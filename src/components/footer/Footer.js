import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='nav'>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Find your dream home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Request proposal
          </a>
        </li>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Download home planner
          </a>
        </li>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Contact us
          </a>
        </li>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Submit your property
          </a>
        </li>
        <li className='nav__item'>
          <a href='#!' className='nav__link'>
            Come work with us
          </a>
        </li>
      </ul>
      <p className='copyright'>
        &copy; Copyright 2020 by{' '}
        <a href='http://www.juliendelusseau.fr'>Julien Delusseau</a>. Designed
        by Jonas Schmedtmann &mdash; Page réalisée avec React.
      </p>
    </footer>
  )
}

export default Footer
