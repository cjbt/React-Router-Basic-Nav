import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='App'>
        <h1>React Router Mini</h1>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/about'>
          <div>About</div>
        </Link>
        <Link to='/contact'>
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
