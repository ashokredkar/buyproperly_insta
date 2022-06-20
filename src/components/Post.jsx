import React, { useState } from 'react';
import './Post.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import heartIcon from '../screenshots/heartIcon.jpg';

const Post = ({ post, comments }) => {

  const [like, setLike] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postTop">
        <div className="postTopLeft">
          <FaUserCircle className='postProfileImg' />
          <span className="postUsername">
            {post.code}
          </span>
        </div>
        <div className="postTopRight">
          <BsThreeDotsVertical className='icon' />
        </div>
      </div>
      <div className="postCenter">
        <img className="postImg" src={post?.display_src} alt="" />
        <span className="postText">{post?.caption}</span>
      </div>
      <div className="postBottom">
        <div className="postLikes" onClick={likeHandler}>
          <img src={heartIcon} alt='likeIcon' className="likeIcon" />
          <span>{like}</span>
        </div>
        <Link to={`/comments/${post.id}`} className="postComments">
          <BiCommentDetail className='commentIcon' />
          <span>2</span>
        </Link>
      </div>
    </div>
  )
}

export default Post