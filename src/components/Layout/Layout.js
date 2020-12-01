import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styles from './Layout.module.css';
import Spinner from '../Spinner/Spinner';

import * as errorActions from '../../redux/actions/errors';

const Layout = props => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/login' || '/signup') {
      props.cleanFormError();
    }
  });
  return (
    <div className={styles.app}>
      <Navbar />

      <main className={styles.main}>
        {props.isLoading ? <Spinner /> : props.children}
      </main>

      <Footer />
    </div>
  );
};

const mapStateToPros = state => {
  return {
    isLoading: state.authReducer.isLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    cleanFormError: () => dispatch(errorActions.cleanFormError()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Layout);
