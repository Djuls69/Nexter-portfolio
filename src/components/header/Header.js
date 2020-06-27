import React from 'react'
import CTA from '../CTA/CTA'
import logo from '../../img/logo.png'
import bbc from '../../img/logo-bbc.png'
import forbes from '../../img/logo-forbes.png'
import techcrunch from '../../img/logo-techcrunch.png'
import business from '../../img/logo-bi.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Nexter Logo' className='header__logo' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <CTA value='View our properties' start />
      <div className='header__seenon-text'>Seen on</div>
      <div className='header__seenon-logos'>
        <img src={bbc} alt='Seen on bbc' />
        <img src={forbes} alt='Seen on forbes' />
        <img src={techcrunch} alt='Seen on techcrunch' />
        <img src={business} alt='Seen on business insider' />
      </div>
    </header>
  )
}

export default Header
