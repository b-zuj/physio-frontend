import React from 'react';
import Layout from '../components/Layout/Layout';
import ClientList from '../components/Dashboard/ClientList/ClientList';

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <h1>Dashboardpage</h1>
        <ClientList title="Active Clients" status="Active" />
        <ClientList title="Pending Clients" status="Pending" />
      </Layout>
    </div>
  );
};

export default Dashboard;
