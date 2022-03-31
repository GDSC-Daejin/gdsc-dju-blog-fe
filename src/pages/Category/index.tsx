import React, { useEffect, useState } from 'react';
import { IBlogCardDataProps } from '../../types/postDataType';
import { LayoutContainer } from '../../styles/layouts';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';

import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';

const Category = () => {
  const [PostData, setPostData] = useState<IBlogCardDataProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gdsc-dju.com/api/v1/post/list?page=0&size=16',
      );
      setPostData(result.data.body.data.content);
    }
    fetchData();
  }, []);
  // axios
  // .get('https://gdsc-dju.com/api/v1/post/list?page=0&size=16')
  // .then((data) => {
  //   setPostData(data);
  // });

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type="frontend" />
      {/* <BlogCardGridLayout PostData={PostData} /> */}
    </LayoutContainer>
  );
};

export default Category;
