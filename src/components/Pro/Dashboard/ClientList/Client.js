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
          <span>Details </span>
          <ArrowRight fontSize="inherit" />
        </Button>
      </Link>
    </div>
  );
};

export default Client;
