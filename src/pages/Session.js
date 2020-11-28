import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
import ExcerciseList from '../components/ExerciseList/ExerciseList';
import { Link } from 'react-router-dom';

const Session = ({ clients }) => {
  // to verify who owns session we need clientId and sessionId
  const { id } = useParams();
  const query = useQuery();
  const clientId = query.get('client');
  const client = clients.find((c) => c._id === clientId);
  const session = client.sessions.find((s) => s._id === id);
  const renderSession = () => {
    if (!session) {
      return 'No matching session';
    }

    const description = (
      <>
        <h3>Description</h3>
        <p>{session.description}</p>
      </>
    );

    return (
      <>
        <h1>Session: {session.title}</h1>
        {session.description && description}
        <ExcerciseList exercises={session.exercises} />
        <Link
          to={`/session/create?edit=true&sessionId=${session._id}&client=${clientId}`}
        >
          <button type="button">Edit session</button>
        </Link>
      </>
    );
  };

  return (
    <div>
      <Layout>{renderSession()}</Layout>
    </div>
  );
};
const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
});
export default connect(mapStateToProps)(Session);
