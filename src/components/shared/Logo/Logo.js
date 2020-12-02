import React from 'react';
import classes from './Logo.module.css';

import logo from '../../../images/logo_transparent_crop2.png';

const Logo = ({ comp }) => {
  let attachedClasses = classes.Logo;
  if (comp) {
    attachedClasses = [classes.Logo, classes[comp]].join(' ');
  }

  return <img className={attachedClasses} src={logo} alt="Physio Logo" />;
};

export default Logo;
