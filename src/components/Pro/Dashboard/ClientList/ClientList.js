import React from 'react';

import styles from './ClientList.module.css';
import Client from './Client';

const ClientList = (props) => {
  const { title, clients } = props;

  const clientEntries = clients.map((client) => (
    <Client key={client._id} className={styles.client} client={client} />
  ));

  return (
    <div>
      <h3>{title}</h3>
      {clients.length > 0 ? (
        <div className={styles.clientList}>{clientEntries}</div>
      ) : (
        `No ${title.toLowerCase()}`
      )}
    </div>
  );
};

export default ClientList;
