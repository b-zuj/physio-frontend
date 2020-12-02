import React from 'react';
import classes from './Logo.module.css';

import logo from '../../../images/logo_transparent_crop2.png';
import SvgLogo from './SvgLogo';

const Logo = ({ comp }) => {
  let attachedClasses = classes.Logo;

  let logoHeight = 0;
  switch (comp) {
    case 'Navbar':
      logoHeight = 40;
      break;
    default:
      logoHeight = 50;
      break;
  }
  if (comp) {
    attachedClasses = [classes.Logo, classes[comp]].join(' ');
  }
  console.log(attachedClasses);
  return (
    <div className={attachedClasses}>
      <SvgLogo height={logoHeight} />
    </div>
  );
};

export default Logo;
