import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
import ExcerciseList from '../components/ExerciseList/ExerciseList';
import { Link } from 'react-router-dom';

import * as sessionActions from '../redux/actions/session';

const Session = ({ clients, getSession, session }) => {
  const { id } = useParams();
  const query = useQuery();
  const clientId = query.get('client');

  useEffect(() => {
    getSession(id);
  }, [getSession, id]);

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
  session: state.sessionReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSession: (id) => dispatch(sessionActions.getSession(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Session);
