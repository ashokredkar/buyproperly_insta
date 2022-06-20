import React, { useState } from 'react';
import './CommentPage.css';
import { AiOutlineSend } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import comments from '../data/comments';

const CommentPage = ({ posts }) => {

  const { postId } = useParams();
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [displayComment, setDisplayComment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    setDisplayComment(true);
  }
  console.log(comments);

  return (
    <>
      {posts.filter(post => post.id === postId).map((postItem, id) => (
        <div className="commentPage" key={id}>
          <div className="leftSide">
            <div className="head">
              <FaUserCircle className='postProfileImg' />
              <span className="postUsername">{postItem.code}</span>
            </div>

            <div className="postImage">
              <img src={postItem.display_src} alt="post_image" />
              <span>{postItem.caption}</span>
            </div>
          </div>
          <div className="rightSide">
            <div className="comment">
              <span className='author'>Author</span>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatibus eaque inventore.</p>
            </div>
            <hr />
            <div className="comment">
              <span className='author'>Author</span>
              <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem necessitatibus incidunt nostrum assumenda sint quia a cum, inventore ea repellendus aliquam explicabo dolor odio neque animi, dolorem nulla dicta optio..</p>
            </div>
            <hr />
            {displayComment && (
              <>
                <div className="comment">
                  <span className='author'>{author}</span>
                  <p className='text'>{commentText}</p>
                </div>
                <hr />
              </>
            )}
            <div className="addComment">
              <form onSubmit={handleSubmit}>
                <div className="textFields">
                  <input className='authorInput' type="text" placeholder='Your Name' onChange={e => setAuthor(e.target.value)} />
                  <input className='msgInput' type="text" placeholder='Enter Comment' onChange={e => setCommentText(e.target.value)} />
                </div>
                <button type='submit' className="btn"><AiOutlineSend className='sendIcon' /></button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CommentPage