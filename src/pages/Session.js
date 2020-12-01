import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
import ExcerciseList from '../components/ExerciseList/ExerciseList';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

import * as sessionActions from '../redux/actions/session';
import classes from './styles/Session.module.css';

const Session = ({ getSession, session, userType, deleteSession }) => {
  const { id } = useParams();
  const query = useQuery();
  const clientId = query.get('client');
  const exerciseMode = query.get('exerciseMode');
  const history = useHistory();
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

    const handleDeleteSession = id => {
      history.goBack();
      deleteSession(id);
    };

    const proName = (
      <>
        <h3>Session creator</h3>
        <p>{session && session.pro?.name}</p>
      </>
    );

    return (
      <>
        <h1>Session: {session.title}</h1>
        {session.description && description}
        {userType === 'client' && proName}
        <ExcerciseList
          exercises={session.exercises}
          exerciseMode={exerciseMode === 'true' && true}
        />
        <div className={classes.actionsContainer}>
          <Link
            to={`/session/create?edit=true&sessionId=${
              session._id
            }&client=${clientId}${
              exerciseMode === 'true' ? '&exerciseMode=true' : ''
            }`}
          >
            {userType === 'pro' && (
              <Button actionStyle="create">Edit session</Button>
            )}
          </Link>
          {userType === 'pro' && (
            <Button actionStyle="delete" action={() => handleDeleteSession(id)}>
              Delete session
            </Button>
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      <Layout>{renderSession()}</Layout>
    </div>
  );
};

const mapStateToProps = state => ({
  session: state.sessionReducer,
  userType: state.authReducer.user.userType,
});

const mapDispatchToProps = dispatch => ({
  getSession: id => dispatch(sessionActions.getSession(id)),
  deleteSession: id => dispatch(sessionActions.deleteSession(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Session);
