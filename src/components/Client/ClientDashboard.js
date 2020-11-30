import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Button from '../Button/Button';
import SessionList from '../SessionList/SessionList';


const ClientDashboard = (props) => {
  const { sessions, clientId } = props;

  return (
    <>
      <h1>Dashboard</h1>
      {/* <ClientList title="Active Clients" clients={clients} />
      <PendingList invitations={invitations} /> */}
        <SessionList
          title="Sessions:"
          sessions={sessions}
          clientId={clientId}
        />
      <br />
    </>
  );
};


const mapStateToProps = (state) => ({
  sessions: state.authReducer.user.sessions,
  clientId: state.authReducer.user._id,
  // invitations: state.authReducer.user.invitations,
});

export default connect(mapStateToProps)(ClientDashboard);
