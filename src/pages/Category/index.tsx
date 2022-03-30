import React, { useEffect, useState } from 'react';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, BlogCardGridLayout } from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';

const Category = () => {
  const arr = Array(100)
    .fill(null)
    .map((v, i) => i + 1);
  const [PostData, setPostData] = useState<ICardData[]>();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gdsc-dju.com/api/v1/post/list?page=0&size=16',
      );
      setPostData(result.data.body.data.content);
    }
    fetchData();
  }, []);

  interface ICardData {
    memberInfo: {
      nickname: string;
    };
    category: {
      categoryName: string; //타입에 대한 수정 필요
      modifiedAt: string;
      uploadDate: string;
    };
    title: string;
    tmpStore: boolean;
    postHashTags: string;
    postId: number;
    likes: [];
    modifiedAt: string;
    uploadDate: string;
    content: string;
  }

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type="frontend" />
      <BlogCardGridLayout>
        {PostData?.map((data, index) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard CardData={data} />
          </BlogCardWrapper>
        ))}
      </BlogCardGridLayout>
    </LayoutContainer>
  );
};

export default Category;
