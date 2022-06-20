import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import './App.css';
import posts from './data/posts';
import comments from './data/comments';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home posts={posts} comments={comments} />} />
      <Route exact path='/comments/:postId' element={<CommentPage posts={posts} comments={comments} />} />
    </Routes>
  )
}

export default App