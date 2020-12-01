import React from 'react';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';

const About = ({ isAuth }) => {
  console.log(isAuth);
  const notLoggedInContent = (
    <>
      <p>
        <b>Are you interested in using our services?</b>
      </p>
      <p>
        For physiotherapists: Please contact us and request a demo or ask us any
        questions.
      </p>
      <p>
        For clients: Contact us for any questions or tell your physiotherapist
        about us.
      </p>
    </>
  );

  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>
          PyshIO is an app for pysiotherapists and their clients. Our aim is to
          make it easier for pysiotherapists to share their services to clients
          in a digital world.
        </p>
        <h3>Our mission</h3>
        <p>
          Due to the global pandemic many countries impose restrictions on
          physical contact, functioning of training and medical facilities.This
          makes it difficult for many to keep in shape, but also receive
          necessary treatments such as physiotherapy. Our app attempts to solve
          this issue. It allows personal trainers and physiotherapists to
          continue providing their services and follow up with their customers
          regardless of the local restrictions.
        </p>
        {!isAuth && notLoggedInContent}
        <h3>Contact</h3>
        <p>
          <a href="mailto:contact@phys.io">contact@phys.io</a>
        </p>
        <h3>Work with us</h3>
        <p>
          Introduce yourself -{' '}
          <a href="mailto:career@phys.io">career@phys.io</a>
        </p>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(About);
