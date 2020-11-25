import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const db = {
  clients: [
    {
      id: '213',
      name: 'Adam Kowalsk',
      email: 'asdf@sdf.no',
      status: 'Pending',
    },
    {
      id: '34r',
      name: 'Jane Doe',
      email: 'assdfdf@sdf.no',
      status: 'Active',
    },
    {
      id: '23rfv',
      name: 'Pia Kekkajarvi',
      email: 'asdf@sdf.no',
      status: 'Active',
    },
  ],
};

const Client = () => {
  let { id } = useParams();

  const client = db.clients.find((element) => element.id === id);

  const renderClient = () => {
    if (!client) {
      return <h1>No maching client</h1>;
    }
    return (
      <>
        <h1>{client.name}</h1>
        <div>
          <h3>Client Details</h3>
          <p>Name: {client.name}</p>
          <p>Email: {client.email}</p>
          <p>Comments:</p>
          <p>{client.comment ? client.comment : 'No comments'}</p>
        </div>
        <div>
          <h3>Assigned sessions:</h3>
        </div>
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
