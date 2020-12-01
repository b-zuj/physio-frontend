import React from 'react';
import { connect } from 'react-redux';
import SessionList from '../SessionList/SessionList';

const ClientDashboard = props => {
  const { sessions, clientId } = props;

  return (
    <>
      <h1>Dashboard</h1>
      <SessionList title="Sessions:" sessions={sessions} clientId={clientId} />
      <br />
    </>
  );
};

const mapStateToProps = state => ({
  sessions: state.authReducer.user.sessions,
  clientId: state.authReducer.user._id,
});

export default connect(mapStateToProps)(ClientDashboard);
