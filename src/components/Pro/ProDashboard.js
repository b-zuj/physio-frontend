import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientList from './Dashboard/ClientList/ClientList';

const ProDashboard = (props) => {
  const { clients } = props;

  // const activeClients = db.clients.filter(
  //   (client) => client.status === 'Active'
  // );
  // const pendingClients = db.clients.filter(
  //   (client) => client.status === 'Pending'
  // );

  return (
    <>
      <h1>Dashboard</h1>
      <ClientList title="Active Clients" clients={clients} />
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
