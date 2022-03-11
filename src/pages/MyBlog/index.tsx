import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogHome from './BlogHome';
import ProfileEdit from '../ProfileEdit';

const MyBlog = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<BlogHome />} />
      <Route path={'/edit'} element={<ProfileEdit />} />
    </Routes>
  );
};

export default MyBlog;
