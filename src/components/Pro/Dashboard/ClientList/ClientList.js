import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';

import styles from './ClientList.module.css';
import Client from './Client';
import classes from './ClientList.module.css';

const ClientList = (props) => {
  const { title, clients } = props;

  const clientEntries = clients.map((client) => (
    <Client key={client._id} client={client} />
  ));

  return (
    <div className={classes.activeClientsContainer}>
      <div className={classes.heading}>
        <h3>{title}</h3>
        <Link to={`/invite`}>
          <Button actionStyle="lowPriority">Invite new clients</Button>
        </Link>
      </div>
      {clients.length > 0 ? (
        <div className={styles.clientList}>{clientEntries}</div>
      ) : (
        `No ${title.toLowerCase()}`
      )}
    </div>
  );
};

export default ClientList;
