import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ClientList from './Dashboard/ClientList/ClientList';
import Button from '../Button/Button';
import classes from './ProDashboard.module.css';

const ProDashboard = (props) => {
  const { clients } = props;
  return (
    <>
      <h1 className={classes.heading}>Dashboard</h1>
      <div className={classes.clientsContainer}>
        <ClientList title="Active Clients" clients={clients} />
        <ClientList title="Pending Clients" clients={clients} />
      </div>
      <Link to={`/invite`}>
        <Button actionStyle="create">Invite new clients</Button>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
});

export default connect(mapStateToProps)(ProDashboard);
