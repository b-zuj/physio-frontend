import React from 'react';
import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { db } from '../mock/mockDB';
import ExcerciseList from '../components/session/ExerciseList';
import { Link } from 'react-router-dom';

const Session = () => {
  let { id } = useParams();

  const session = db.sessions.find((element) => element.id === id);

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
        <Link to={`/session/${session.id}/edit`}>
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

export default Session;
