import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ClientList.module.css';

const Client = ({ client }) => {
  return (
    <div className={styles.client}>
      <span>{client.name}</span>
      <Link to={`/client/${client._id}`}>
        <button type="button">Details</button>
      </Link>
    </div>
  );
};

export default Client;
