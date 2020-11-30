import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SessionsList.module.css';
import Button from '../Button/Button';

const SessionList = (props) => {
  const { title, sessions, clientId } = props;
  const renderSessions = (sessions) => {
    if (!sessions || sessions.length < 1) {
      return 'No sessions';
    }
    return sessions.map((session) => (
      <div key={session._id} className={styles.session}>
        <span>{session.title}</span>
        <Link to={`/session/${session._id}?client=${clientId}&exerciseMode=true`}>
          <Button actionStyle="link">Exercise!</Button>
        </Link>
        <Link to={`/session/${session._id}?client=${clientId}`}>
          <Button actionStyle="link">Details</Button>
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
