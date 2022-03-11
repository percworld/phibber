import './Footer.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Monster } from '../Icons/github.svg'

const Footer = () => {
  return (
    <footer>
      <NavLink to='/' activeClassName='activeLink'>Home</NavLink>
      
      <a href='https://github.com/percworld' target="_blank" rel="noopener noreferrer">
        <Monster className='monster'></Monster>
      </a>
    </footer>
  )
}

export default Footer;
