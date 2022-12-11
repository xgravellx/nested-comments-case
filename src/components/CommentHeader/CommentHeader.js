import React from 'react'
import { Styled } from './CommentHeader.styled'
import CommentButton from '../CommentButton/CommentButton'

const CommentHeader = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing, time}) => {
  return (
    <Styled>
      <div className='comment--header-left'>
        <div className="username">{commentData.username}</div>
        <div className="comment-posted-time">{`${time} ago`}</div>
      </div>

      <CommentButton
        commentData={commentData}
        setReplying={setReplying}
        setDeleting={setDeleting}
        setDeleteModalState={setDeleteModalState}
        setEditing={setEditing}
      />
    </Styled>
  )
}

export default CommentHeader