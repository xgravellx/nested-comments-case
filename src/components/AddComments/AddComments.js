import {useState} from 'react'
import { Styled } from './AddComments.styled'

const AddComments = ({buttonValue, addComments, replyingTo}) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: new Date(),
      score: 0,
      username: "xgravellx",
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  }
  return (
    <Styled>
      <div className="add-comment">
        <textarea
          className="comment-input"
          placeholder="Add a comment"
          value={replyingToUser + comment}
          onChange={(e) => {
            setComment(
              e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
            );
          }}
        />
        <div className="send-btn-container">
          <button className="add-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>
            {buttonValue}
          </button>
        </div>
      </div>
    </Styled>
  )
}

export default AddComments