import React, { useState } from 'react';

const ClientDetails = (props) => {
  const { client } = props;
  const [editMode, setEditMode] = useState(false);
  const [comments, setComments] = useState(client.comments);
  const [textAreaValue, setTextAreaValue] = useState(comments);
  const textAreaRef = React.createRef();

  const onTextAreaChange = (e) => {
    const { value } = e.target;
    setTextAreaValue(value);
  };

  const saveComment = () => {
    setComments(textAreaRef.current.value);
    setEditMode(false);
  };

  const renderCommentSection = () => {
    if (!editMode) {
      return (
        <>
          <p>{comments ? comments : 'No comments'}</p>
          <button onClick={() => setEditMode(true)}>Edit comments</button>
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
        <button onClick={() => setEditMode(false)}>Discard</button>{' '}
        <button onClick={saveComment}>Save</button>
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
          <b>Comments:</b>
        </p>
        {renderCommentSection()}
      </div>
    </div>
  );
};

export default ClientDetails;
