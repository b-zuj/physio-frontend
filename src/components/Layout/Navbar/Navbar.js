import React from 'react';
import styles from './Layout.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
  const { isAuth } = props;

  const renderAuth = () => {
    if (isAuth) {
      return (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Log out</NavLink>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </>
    );
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <ul>
          {renderAuth()}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToPros)(Navbar);
