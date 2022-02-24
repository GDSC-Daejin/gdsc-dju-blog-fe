import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogHome from './BlogHome';
import { useSearchParams } from 'react-router-dom';

const MyBlog = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('keyword');
  console.log(detail);
  return (
    <Routes>
      <Route path={'/*'} element={<BlogHome />} />
    </Routes>
  );
};

export default MyBlog;
