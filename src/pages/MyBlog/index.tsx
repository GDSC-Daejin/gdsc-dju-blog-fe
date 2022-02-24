import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogHome from './BlogHome';

const MyBlog = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<BlogHome />} />
    </Routes>
  );
};

export default MyBlog;
