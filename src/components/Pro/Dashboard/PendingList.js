import React from 'react';
import styles from './PendingList.module.css';

const PendingList = (props) => {
  const { invitations } = props;

  const clientEntries = invitations.map((invitation) => (
    <>
      <li key={invitation._id}>
        <a href={`mailto:${invitation.email}`}>{invitation.email}</a>
      </li>
    </>
    // <Client key={client._id} className={styles.client} client={client} />
  ));

  return (
    <div className={styles.pendingList}>
      <h3>Pending clients</h3>
      {invitations.length > 0 ? <ul>{clientEntries}</ul> : 'No pending clients'}
    </div>
  );
};

export default PendingList;
