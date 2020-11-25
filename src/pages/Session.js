import React from 'react';
import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { db } from '../mock/mockDB';
import ExcerciseList from '../components/session/ExerciseList';

const Session = () => {
  let { id } = useParams();

  const session = db.sessions.find((element) => element.id === id);

  return (
    <div>
      <Layout>
        <h1>Session: {session.title}</h1>
        <ExcerciseList exercises={session.exercises} />
      </Layout>
    </div>
  );
};

export default Session;
