import React from 'react';
import CommentList from 'react-comments';

const Comments = ({ comments }) => {
  return (
    <div>
      <h1>Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default Comments;