import React from 'react';
import Layout from '../components/Layout/Layout';
import ClientList from '../components/Dashboard/ClientList/ClientList';

const db = {
  clients: [
    { id: '213', name: 'Adam Kowalsk', status: 'Pending' },
    { id: '34r', name: 'Jane Doe', status: 'Active' },
    { id: '23rfv', name: 'Pia Kekkajarvi', status: 'Active' },
  ],
};

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
