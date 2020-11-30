import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button/Button';

import axios from '../utils/axios';
import Layout from '../components/Layout/Layout';
import Video from '../components/Video/Video';
import classes from './styles/Exercise.module.css';

const Exercise = () => {
  const [exercise, setExercise] = useState();
  const videoId = 'pHPNrrcMobE'; // change later for dynamic vidoes
  const { id } = useParams();

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await axios.get(`exercises/${id}`);
      console.log(response);
      setExercise(response.data);
    };
    fetchExercise();
  }, [id]);

  const exerciseJsx = exercise && (
    <>
      <div className={classes.videoContainer}>
        <Video id={videoId} />
      </div>
      <h2>{exercise.title}</h2>
      <p>{exercise.description}</p>
      <Link to={`/exercise/create?edit=true&exerciseId=${id}`}>
        <Button actionStyle="edit">Edit</Button>
      </Link>
    </>
  );

  return <Layout>{exerciseJsx}</Layout>;
};

export default Exercise;
