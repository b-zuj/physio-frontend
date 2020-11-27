import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styles from './Layout.module.css';
import Spinner from '../Spinner/Spinner';

const Layout = (props) => {
  return (
    <div className={styles.app}>
      <Navbar />
      {props.isLoading ? (
        <Spinner />
      ) : (
        <main className={styles.main}>{props.children}</main>
      )}
      <Footer />
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    isLoading: state.authReducer.isLoading,
  };
};

export default connect(mapStateToPros)(Layout);
