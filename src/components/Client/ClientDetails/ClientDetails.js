import React from 'react';

const ClientDetails = (props) => {
  const { client } = props;
  return (
    <div>
      <h1>{client.name}</h1>
      <div>
        <h3>Client Details</h3>
        <p>
          <b>Name:</b> {client.name}
        </p>
        <p>
          <b>Email:</b> {client.email}
        </p>
        <p>
          <b>Comments:</b>
        </p>
        <p>{client.comment ? client.comment : 'No comments'}</p>
      </div>
    </div>
  );
};

export default ClientDetails;
