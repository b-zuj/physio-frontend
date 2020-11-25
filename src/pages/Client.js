import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ClientDetails from '../components/Client/ClientDetails/ClientDetails';
import SessionList from '../components/Client/SessionList/SessionList';
import { Link } from 'react-router-dom';

const db = {
  clients: [
    {
      id: '213',
      name: 'Adam Kowalsk',
      email: 'asdf@sdf.no',
      status: 'Pending',
      comments: '',
    },
    {
      id: '34r',
      name: 'Jane Doe',
      email: 'assdfdf@sdf.no',
      status: 'Active',
      comments:
        'Test ødflsk jdsflk jdsf lkjdfsøl kjdf lkj dflkjsdløkfjasdlfkjsdflk jd fslkj sølkj',
      sessions: [
        { name: 'Lower back training', id: 'h8fa' },
        { name: 'Everyday exercices', id: 'p98uawf' },
      ],
    },
    {
      id: '23rfv',
      name: 'Pia Kekkajarvi',
      email: 'asdf@sdf.no',
      status: 'Active',
      comments:
        'Test ødflsk jdsflk jdsf lkjdfsøl kjdf lkj dflkjsdløkfjasdlfkjsdflk jd fslkj sølkj',
      sessions: [
        { name: 'Lower back training', id: 'h8fa' },
        { name: 'Everyday exercices', id: 'p98uawf' },
      ],
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
        <ClientDetails client={client} />
        <SessionList title="Assigned sessions:" sessions={client.sessions} />
        <br />
        <Link to={`/session/`}>
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
