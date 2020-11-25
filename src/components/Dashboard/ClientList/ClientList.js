import React from 'react';
import styles from './ClientList.module.css';
import { Link } from 'react-router-dom';

const ClientList = (props) => {
  const { title, clients } = props;

  const clientEntries = clients.map((client) => (
    <div key={client.id} className={styles.client}>
      <span>{client.name}</span>
      <Link to={`/client/${client.id}`}>
        <button type="button">Details</button>
      </Link>
    </div>
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
