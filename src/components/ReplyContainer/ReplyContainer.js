import React from 'react'
import Reply from '../Reply/Reply'
import { Styled } from './ReplyContainer.styled'

const ReplyContainer = ({
    commentData,
    updateScore,
    commentPostedTime,
    addReply,
    editComment,
    deleteComment,
    setDeleteModalState,
  }) => {

  return (
    <Styled >
        {commentData.map((data) => (
          <Reply
            key={data.id}
            commentData={data}
            updateScore={updateScore}
            commentPostedTime={commentPostedTime}
            addNewReply={addReply}
            editComment={editComment}
            deleteComment={deleteComment}
            setDeleteModalState={setDeleteModalState}
          />
        ))}
      </Styled>
  )
}

export default ReplyContainer