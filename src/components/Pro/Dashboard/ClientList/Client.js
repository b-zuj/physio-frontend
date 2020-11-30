import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ArrowRight, Cancel } from '@material-ui/icons';

import styles from './ClientList.module.css';
import Button from '../../../Button/Button';

import * as clientActions from '../../../../redux/actions/client';

const Client = ({ client, invitation, cancelInvite }) => {
  return (
    <div className={styles.client}>
      <span>{client.name}</span>
      {invitation ? (
        <Button actionStyle="cancel" action={() => cancelInvite(client._id)}>
          Cancel
        </Button>
      ) : (
        <Link to={`/client/${client._id}`}>
          <Button actionStyle="link">
            <span>Details </span>
            <ArrowRight fontSize="inherit" />
          </Button>
        </Link>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cancelInvite: (id) => dispatch(clientActions.cancelInvite(id)),
});
export default connect(null, mapDispatchToProps)(Client);
