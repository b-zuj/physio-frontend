import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from '@material-ui/icons';

import styles from './ClientList.module.css';
import Button from '../../../Button/Button';

const Client = ({ client }) => {
  return (
    <div className={styles.client}>
      <span>{client.name}</span>
      <Link to={`/client/${client._id}`}>
        <Button actionStyle="link">
<<<<<<< HEAD
          <span>Details </span>
          <ArrowRight fontSize="inherit" />
=======
          Details <ArrowRight fontSize="inherit" />
>>>>>>> 8c9e40f2f54cc1d6126e6e9fbbed2b4a66b2dbd0
        </Button>
      </Link>
    </div>
  );
};

export default Client;
