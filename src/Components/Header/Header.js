import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( ) => {
  return (
    <header>
      {/* <img src={'https://i1.sndcdn.com/avatars-000517301901-4u4lgr-t300x300.jpg'} className="App-logo" alt="logo" /> */}
      <Link to='/'
        //   onClick={() => { doSomething() }}
        className='homeLink'>
        <h3 className='dashboard' data-cy='appName'>Dashboard</h3>
      </Link>
    </header>)
}

export default Header;