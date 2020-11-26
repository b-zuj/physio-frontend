import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ClientDetails from '../components/Pro/Client/ClientDetails';
import SessionList from '../components/SessionList/SessionList';
import { Link } from 'react-router-dom';
import { db } from '../mock/mockDB';

const Client = () => {
  let { id } = useParams();

  const client = db.clients.find((element) => element.id === id);

  const renderClient = () => {
    if (!client) {
      return <h1>No maching client</h1>;
    }
    return (
      <>
        <ClientDetails client={client} />
        <SessionList title="Assigned sessions:" sessions={client.sessions} />
        <br />
        <Link to={`/session/create`}>
          <button type="button">Create a new session</button>
        </Link>
      </>
    );
  };

  return (
    <>
      <Layout>{renderClient()}</Layout>
    </>
  );
};

export default Client;
