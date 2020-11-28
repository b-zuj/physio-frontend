import React from 'react';
import styles from './PendingList.module.css';

const PendingList = (props) => {
  const { emails } = props;

  const clientEntries = emails.map((email) => (
    <>
      <li>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    </>
    // <Client key={client._id} className={styles.client} client={client} />
  ));

  return (
    <div className={styles.pendingList}>
      <h3>Pending clients</h3>
      {emails.length > 0 ? <ul>{clientEntries}</ul> : 'No pending clients'}
    </div>
  );
};

export default PendingList;
