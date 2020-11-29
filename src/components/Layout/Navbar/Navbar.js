import React from 'react';
import { ExitToApp, ArrowBack } from '@material-ui/icons';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import styles from './Navbar.module.css';

import * as authActions from '../../../redux/actions/auth';
import * as errorActions from '../../../redux/actions/errors';

const Navbar = (props) => {
  const { isAuth } = props;
  const history = useHistory();

  const activeStyles = {
    color: '#f77f00',
  };

  const renderAuth = () => {
    if (isAuth) {
      return (
        <>
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
      {isAuth && (
        <button className={styles.goBack} onClick={goToPrevPage}>
          <ArrowBack />
        </button>
      )}
      <ul>
        {renderAuth()}
        <li>
          <NavLink activeStyle={activeStyles} to="/about">
            About
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <button className={styles.exitToApp} onClick={handleLogout}>
              {<ExitToApp />}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    formErrors: state.errorReducer.formErrors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout()),
    cleanFormError: () => dispatch(errorActions.cleanFormError()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);
