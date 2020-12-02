import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLink.module.css';

const NavItem = ({ link, children }) => {
  let attachedClasses = classes.NavLink;

  const activeStyles = {
    color: '#f77f00',
  };
  return (
    <li className={attachedClasses}>
      <NavLink to={link} activeStyle={activeStyles}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
