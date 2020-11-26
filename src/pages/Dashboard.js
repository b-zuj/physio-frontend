import React from 'react';
import Layout from '../components/Layout/Layout';
import ClientList from '../components/Dashboard/ClientList/ClientList';
import { db } from '../mock/mockDB';

const Dashboard = () => {
  const activeClients = db.clients.filter(
    (client) => client.status === 'Active'
  );
  const pendingClients = db.clients.filter(
    (client) => client.status === 'Pending'
  );

  return (
    <div>
      <Layout>
        <h1>Dashboardpage</h1>
        <ClientList title="Active Clients" clients={activeClients} />
        <ClientList title="Pending Clients" clients={pendingClients} />
        <br />
        <button>Invite new clients</button>
      </Layout>
    </div>
  );
};

export default Dashboard;
