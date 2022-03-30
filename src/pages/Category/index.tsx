import React, { useEffect } from 'react';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, BlogCardGridLayout } from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';

const Category = () => {
  const arr = Array(100)
    .fill(null)
    .map((v, i) => i + 1);

  useEffect(() => {
    axios
      .get('https://gdsc-dju.com/api/v1/post/list?page=0&size=16')
      .then(function (res) {
        console.log(res.data);
      });
  }, []);

  const mookdata = {
    memberInfo: {
      nickname: 'Roccccolliiiii',
    },
    category: {
      categoryName: 'Backend',
      modifiedAt: '2022-03-27T15:09:30.366',
      uploadDate: '2022-03-27T15:09:30.444',
    },
    title: '제목33',
    tmpStore: false,
    postHashTags: 'hi,h,h,h,h',
    postId: 51,
    likes: [],
    modifiedAt: '2022-03-27T07:58:13.501+00:00',
    uploadDate: '2022-03-27T07:58:13.501+00:00',
    content: '내용',
  };

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type="frontend" />
      <BlogCardGridLayout>
        {arr.map((data, index) => (
          <BlogCardWrapper key={data}>
            <BlogCard />
          </BlogCardWrapper>
        ))}
      </BlogCardGridLayout>
    </LayoutContainer>
  );
};

export default Category;
