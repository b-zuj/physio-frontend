import React from 'react';
import { connect } from 'react-redux';

import ClientList from './Dashboard/ClientList/ClientList';
import PendingList from './Dashboard/PendingList';
import AsideExercisesList from '../AsideExercisesList/AsideExercisesList';
import classes from './ProDashboard.module.css';

const ProDashboard = props => {
  const { clients, invitations } = props;

  return (
    <>
      <div className={classes.clientsContainer}>
        <ClientList title="Active Clients" clients={clients} />
        <PendingList invitations={invitations} />
      </div>
      <div className={classes.dashboardExercises}>
        <h3>Your Exercises</h3>
        <AsideExercisesList dashboard />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  clients: state.authReducer.user.clients,
  invitations: state.authReducer.user.invitations,
});

export default connect(mapStateToProps)(ProDashboard);
