import React from 'react';
import { ExitToApp, ArrowBack } from '@material-ui/icons';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../../images/logo_transparent_crop2.png';

import styles from './Navbar.module.css';

import * as authActions from '../../../redux/actions/auth';
import * as errorActions from '../../../redux/actions/errors';

const Navbar = (props) => {
  const { isAuth, user } = props;
  const history = useHistory();

  const activeStyles = {
    color: '#f77f00',
  };

  const renderLeft = () => {
    if (isAuth) {
      return (
        <>
          <li>
            <button className={styles.goBack} onClick={goToPrevPage}>
              <ArrowBack />
            </button>
          </li>
          <li>
            <NavLink activeStyle={activeStyles} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyles} to="/account">
              Account
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyles} to="/about">
              About
            </NavLink>
          </li>
        </>
      );
    }
  };

  const renderRight = () => {
    if (isAuth) {
      return (
        <>
          <li>
            <div className={styles.navNameContainer}>
              <div className={styles.navNameSmall}>Logged in as</div>
              <div className={styles.navName}>{user.name}</div>
            </div>
          </li>
          <li>
            <button className={styles.exitToApp} onClick={handleLogout}>
              {<ExitToApp />}
            </button>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <NavLink activeStyle={activeStyles} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyles} to="/signup">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyles} to="/about">
            About
          </NavLink>
        </li>
      </>
    );
  };

  const goToPrevPage = () => {
    Object.keys(props.formErrors).length !== 0 && props.cleanFormError('');
    history.goBack();
  };
  const handleLogout = () => {
    props.logout();
    history.push('/');
  };
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.frame}>
        <img src={logo} alt="pysIO logo" />
      </div>
      <ul className={styles.leftList}>{renderLeft()}</ul>
      <ul className={styles.rightList}>{renderRight()}</ul>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    session: state.sessionReducer,
    formErrors: state.errorReducer.formErrors,
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout()),
    cleanFormError: () => dispatch(errorActions.cleanFormError()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);
