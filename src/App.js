import React from 'react';
import { connect } from 'react-redux';
import { login } from './redux/actions/auth';
import Layout from './components/Layout/Layout';

import './App.css';

const App = (props) => {
  console.log({ props });
  return (
    <div className="App">
      <Layout>
        <h1>app</h1>
        <button onClick={props.login}>Login</button>
      </Layout>
    </div>
  );
};
const mapStateToPros = (state) => {
  console.log('asdbaksbdahksb', state);
  return {
    greatState: state.authReducer.something,
    authState: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});
export default connect(mapStateToPros, mapDispatchToProps)(App);
