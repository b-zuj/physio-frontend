import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Layout>
        <h1>PhysIO</h1>
        <p>
          PyshIO is an app for pysiotherapists and their clients. Our aim is to
          make it easier for pysiotherapists to share their services to clients
          in a digital world.
        </p>
        <p>
          Already a user? <Link to="/login">Log in</Link>
        </p>
        <p>
          New user? <Link to="/signup">Sign up</Link>
        </p>
        <p>
          <b>Are you interested in using our services?</b>
        </p>
        <p>
          For physiotherapists: Please <Link to="/about">contact us</Link> and
          request a demo or ask us any questions.
        </p>
        <p>
          For clients: <Link to="/about">Contact us</Link> for any questions or
          tell your physiotherapist about us.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
