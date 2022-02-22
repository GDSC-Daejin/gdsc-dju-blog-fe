import React from 'react';
import { useParams } from 'react-router';

const BlogHome = () => {
  const { user_name } = useParams();
  console.log(user_name);
  return <div>{user_name}</div>;
};

export default BlogHome;
