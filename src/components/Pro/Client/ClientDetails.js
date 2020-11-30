import React, { useState } from 'react';
import Button from '../../Button/Button';

import { connect } from 'react-redux';
import * as clientActions from '../../../redux/actions/client';

const ClientDetails = (props) => {
  const { client } = props;
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(client.comment);
  const [textAreaValue, setTextAreaValue] = useState(comment);
  const textAreaRef = React.createRef();

  const onTextAreaChange = (e) => {
    const { value } = e.target;
    setTextAreaValue(value);
  };

  const saveComment = () => {
    setComment(textAreaRef.current.value);
    props.updateClient(client, textAreaRef.current.value);
    setEditMode(false);
  };

  const renderCommentSection = () => {
    if (!editMode) {
      return (
        <>
          <p>{comment ? comment : 'No comment'}</p>
          <Button actionStyle="edit" action={() => setEditMode(true)}>
            Edit
          </Button>
        </>
      );
    }
    return (
      <>
        <textarea
          ref={textAreaRef}
          value={textAreaValue}
          onChange={onTextAreaChange}
        />
        <br />
        <Button action={() => setEditMode(false)} actionStyle="lowPriority">
          Discard
        </Button>
        <Button action={saveComment} actionStyle="create">
          Save
        </Button>
      </>
    );
  };

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
          <b>Comment:</b>
        </p>
        {renderCommentSection()}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateClient: (client, comment) =>
    dispatch(clientActions.updateClient(client, comment)),
});

export default connect(null, mapDispatchToProps)(ClientDetails);
