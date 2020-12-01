import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button/Button';

import axios from '../utils/axios';
import Layout from '../components/Layout/Layout';
import Video from '../components/Video/Video';

const Exercise = props => {
  const { userType } = props;
  const [exercise, setExercise] = useState();
  const videoUrl = exercise?.media && exercise.media; // change later for dynamic vidoes
  const { id } = useParams();

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await axios.get(`exercises/${id}`);
      setExercise(response.data);
    };
    fetchExercise();
  }, [id]);

  const exerciseJsx = exercise && (
    <>
      <Video url={videoUrl} />
      <h2>{exercise.title}</h2>
      <p>{exercise.description}</p>
      <Link to={`/exercise/create?edit=true&exerciseId=${id}`}>
        {userType === 'pro' && <Button actionStyle="edit">Edit</Button>}
      </Link>
    </>
  );

  return <Layout>{exerciseJsx}</Layout>;
};

const mapStateToProps = state => ({
  userType: state.authReducer.user.userType,
});

export default connect(mapStateToProps)(Exercise);
