import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../components/Button/Button';

import axios from '../utils/axios';
import Layout from '../components/Layout/Layout';

const Exercise = (props) => {
  const { userType } = props;
  const [exercise, setExercise] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await axios.get(`exercises/${id}`);
      console.log(response);
      setExercise(response.data);
    };
    fetchExercise();
  }, []);

  const exerciseJsx = exercise && (
    <>
      <h2>{exercise.title}</h2>
      <p>{exercise.description}</p>
      {userType === "pro" &&  <Button actionStyle="edit">Edit</Button>}
    </>
  );

  return <Layout>{exerciseJsx}</Layout>;
};

const mapStateToProps = (state) => ({
  userType: state.authReducer.user.userType,
});

export default connect(mapStateToProps)(Exercise);
