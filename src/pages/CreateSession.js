import React from 'react';
import { useQuery } from '../hooks/useQuery';
import Layout from '../components/Layout/Layout';

const CreateSession = () => {
  let query = useQuery();
  let sessionId = query.get('sessionId');
  console.log(sessionId);

  return (
    <Layout>
      <div>creating session</div>
    </Layout>
  );
};

export default CreateSession;
