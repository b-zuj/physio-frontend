import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SessionsList.module.css';

const SessionList = (props) => {
  const { title, sessions } = props;

  const renderSessions = (sessions) => {
    if (!sessions || sessions.length < 1) {
      return 'No sessions';
    }
    return sessions.map((session) => (
      <div key={session.id} className={styles.session}>
        <span>{session.name}</span>
        <Link to={`/session/${session.id}`}>
          <button type="button">Details</button>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h3>{title}</h3>
      <div className={styles.sessionList}>{renderSessions(sessions)}</div>
    </div>
  );
};

export default SessionList;
