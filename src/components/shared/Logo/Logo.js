import React from 'react';
import classes from './Logo.module.css';

import logo from '../../../images/logo_transparent_crop2.png';
import SvgLogo from './SvgLogo';

const Logo = ({ comp }) => {
  let attachedClasses = classes.Logo;

  if (comp) {
    attachedClasses = [classes.Logo, classes[comp]].join(' ');
  }
  console.log(attachedClasses);
  return (
    <div className={attachedClasses}>
      <SvgLogo />
    </div>
  );
};

export default Logo;
