import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientList from './Dashboard/ClientList/ClientList';
import { db } from '../../mock/mockDB';

const ProDashboard = () => {
  const activeClients = db.clients.filter(
    (client) => client.status === 'Active'
  );
  const pendingClients = db.clients.filter(
    (client) => client.status === 'Pending'
  );

  return (
    <>
      <div>Pro Dashboard</div>
      <ClientList title="Active Clients" clients={activeClients} />
      <ClientList title="Pending Clients" clients={pendingClients} />
      <br />
      <Link to={`/invite`}>
        <button>Invite new clients</button>
      </Link>
    </>
  );
};

export default connect()(ProDashboard);
