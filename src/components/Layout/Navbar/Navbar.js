import React from 'react';
import styles from './Navbar.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../../redux/actions/auth';

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
          {isAuth && (
            <li>
              <button onClick={props.logout}>Log out</button>
            </li>
          )}
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
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);
