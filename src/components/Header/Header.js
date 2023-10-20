import React from 'react';
import titleImage from '../../assets/images/title2.png';

import classes from './Header.module.css';

function Header() {
   return <header>
      <img src={titleImage} alt="Secret Santa Organizer by PixelVoxel"/>      
   </header>
}

export default Header;