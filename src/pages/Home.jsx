import React from 'react';
import './Home.css';
import Post from '../components/Post';

const Home = ({ posts, comments }) => {
  return (
    <div className='homePage'>
      <div className='navbar'>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI2kCPHOKXqCaYxvorTcIETh8oDlm11ZplA&usqp=CAU" alt="instagram_logo" />
      </div>
      <div className="postSection">
        {posts.map((post, id) => (
          <Post key={id} post={post} comments={comments} />
        ))}
      </div>
    </div>
  )
}

export default Home