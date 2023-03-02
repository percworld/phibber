import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import lotusLogo from '../Icons/celtic_logo_thick2-removebg-preview.png';

const Header = ( ) => {
  return (
    <header>
      {/* <img src={'https://i1.sndcdn.com/avatars-000517301901-4u4lgr-t300x300.jpg'} className="App-logo" alt="logo" /> */}
      <Link to='/'
        //   onClick={() => { doSomething() }}
        className='dashLink'>
        <h3 className='dashboard' data-cy='dashboard'>Development</h3>
      </Link>
      <Link to='/'
        className='dashLink'>
        <h3 className='dashboard' data-cy='dashboard'>Drums</h3>
      </Link>
      <Link to='/'
        className='dashLink'>
        {/* <p backgroundImage='lotusLogo' alt='lotus celtic logo'>{lotusLogo}</p> */}
        <h3 className='dashboard' data-cy='dashboard'>Percussion</h3>
      </Link>
    </header>)
}

export default Header;