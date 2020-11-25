import React from 'react';
import styles from './ClientList.module.css';

const db = {
  clients: [
    { id: '213', name: 'Adam Kowalsk', status: 'Pending' },
    { id: '34r', name: 'Jane Doe', status: 'Active' },
    { id: '23rfv', name: 'Pia Kekkajarvi', status: 'Active' },
  ],
};

const ClientList = (props) => {
  const { title, status } = props;

  const clients = db.clients.filter((client) => client.status === status);

  const clientEntries = clients.map((client) => (
    <div key={client.key}>{client.name}</div>
  ));

  return (
    <div>
      <h3>{title}</h3>
      <div className={styles.clientList}>{clientEntries}</div>
    </div>
  );
};

export default ClientList;
