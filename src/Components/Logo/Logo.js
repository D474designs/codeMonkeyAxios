import React from 'react';
import Tilt from 'react-tilt';
import monkeyLogo from './monkeyLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3" className="logoImg">
          <img style={{paddingTop: '15px'}} alt='logo' src={monkeyLogo}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;