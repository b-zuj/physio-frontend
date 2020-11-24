import React from 'react';
import styles from './Layout.module.css';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { isAuth } = props;

  const renderAuth = () => {
    if (props.isAuth) {
      return (
        <>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </>
    );
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <ul>
          {renderAuth}
          <li>
            <a href="/about">About</a>
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
