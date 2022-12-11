import {useEffect, useState} from 'react'
import { Styled } from './Comment.styled'
import {commentPostedTime} from '../utils'
import AddComments from '../AddComments/AddComments'
import CommentHeader from '../CommentHeader/CommentHeader'
import DeleteModal from '../DeleteModal/DeleteModal'
import ReplyContainer from '../ReplyContainer/ReplyContainer'

const Comment = ({
    commentData,
    updateScore,
    updateReplies,
    editComment,
    commentDelete,
    setDeleteModalState,
  }) => {

    const [replying, setReplying] = useState(false);
    const [time, setTime] = useState("");
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState(commentData.content);
    const [deleting, setDeleting] = useState(false);

    // get time from comment posted
    const createdAt = new Date(commentData.createdAt);
    const today = new Date();
    const diffInTime = today.getTime() - createdAt.getTime();

    useEffect(() => {
        setTime(commentPostedTime(diffInTime));
    }, [diffInTime]);

    const addReply = (newReply) => {
        const replies = [...commentData.replies, newReply];
        updateReplies(replies, commentData.id);
        setReplying(true);
      };
    
    const updateComment = () => {
        editComment(content, commentData.id, "comment");
        setEditing(false);
    };

    const deleteComment = (id, type) => {
        const finalType = type !== undefined ? type : "comment";
        const finalId = id !== undefined ? id : commentData.id;
        commentDelete(finalId, finalType, commentData.id);
        setDeleting(false);
    };


  return (
    <Styled>
      <div className="comment">
        <div className="comment--body">
          <CommentHeader
            commentData={commentData}
            setReplying={setReplying}
            setDeleting={setDeleting}
            setDeleteModalState={setDeleteModalState}
            setEditing={setEditing}
            time={time}
          />
          {!editing ? (
            <div className="comment-content">{commentData.content}</div>
          ) : (
            <textarea
              className="content-edit-box"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          )}
          {editing && (
            <button className="update-btn" onClick={updateComment}>
              update
            </button>
          )}
        </div>
      </div>
      {replying && (
        <AddComments
          buttonValue={"reply"}
          addComments={addReply}
          replyingTo={commentData.username}
        />
      )}
      {commentData.replies !== [] && (
        <ReplyContainer
          key={commentData.replies.id}
          commentData={commentData.replies}
          updateScore={updateScore}
          commentPostedTime={commentPostedTime}
          addReply={addReply}
          editComment={editComment}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      )}

      {deleting && (
        <DeleteModal
          setDeleting={setDeleting}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      )}
    </Styled>
  )
}

export default Comment