import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientList from './Dashboard/ClientList/ClientList';
import PendingList from './Dashboard/PendingList';

const ProDashboard = (props) => {
  const { clients } = props;

  const emails = ['one@gmail.com', 'two@gmail.com'];

  return (
    <>
      <h1>Dashboard</h1>
      <ClientList title="Active Clients" clients={clients} />
      <PendingList emails={emails} />
      {/* <ClientList title="Pending Clients" clients={pendingClients} /> */}
      <br />
      <Link to={`/invite`}>
        <button>Invite new clients</button>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
});

export default connect(mapStateToProps)(ProDashboard);
