import React from 'react'
import { Styled } from './CommentButton.styled';

const CommentButton = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing}) => {
  let counter = false;
  const showAddComment = () => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
  };

  // delete comment
  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  // edit comment
  const showEditComment = () => {
    setEditing(true);
  };

  const showReplying = () => {
    setReplying(true);
  }
  return (
    <Styled>
      <div className="comment--btn">
      <button
        className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showAddComment}
      >
      </button>
      <button className='reply-btn' onClick={showReplying}> Reply </button>

      <button
        className={`delete-btn ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showDeleteModal}
      >
        <button className='delete-btn'> Delete </button>
      </button>
      <button
        className={`edit-btn ${commentData.currentUser ? "" : "display--none"}`}
        onClick={showEditComment}
      >
        <button className='edit-btn'> Edit </button>
      </button>
    </div>
    </Styled>
  )
}

export default CommentButton