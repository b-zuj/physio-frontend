import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../utils/axios';
import Layout from '../components/Layout/Layout';

const Exercise = () => {
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
      <button>Edit</button>
    </>
  );

  return <Layout>{exerciseJsx}</Layout>;
};

export default Exercise;
