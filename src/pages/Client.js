import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import ClientDetails from '../components/Pro/Client/ClientDetails';
import SessionList from '../components/SessionList/SessionList';
import { Link } from 'react-router-dom';
import { db } from '../mock/mockDB';

const Client = (props) => {
  let { id } = useParams();
  const { clients } = props;
  const client = clients.find((element) => element._id.toString() === id);
  console.log('Client page = ', client);
  const renderClient = () => {
    if (!client) {
      return <h1>No maching client</h1>;
    }
    return (
      <>
        <ClientDetails client={client} />
        <SessionList
          title="Assigned sessions:"
          sessions={client.sessions}
          clientId={client._id}
        />
        <br />
        <Link to={`/session/create?client=${client._id}`}>
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

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
});

export default connect(mapStateToProps)(Client);
