import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParam } from 'react-use';

import { SearchResultTitle } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import { LayoutContainer } from '../../styles/layouts';
import { DetailPostDataType } from '../../types/postData';
import { LayoutInner, NoResult } from './styled';

const SearchResult = () => {
  const [postData, setPostData] = useState<DetailPostDataType[]>();
  const params = useSearchParam('title');
  const getSearchList = async () => {
    const response = await axios.get(
      `https://gdsc-dju.com/api/v1/post/search/${params}`,
    );
    const SearchResultPost = response.data.body.data;
    setPostData((prev) => {
      return SearchResultPost.content ?? [];
    });
  };

  useEffect(() => {
    getSearchList();
  }, [params]);

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitle>
          <h2>{params}</h2>
          <h3>를(을) 검색하신 결과입니다.</h3>
        </SearchResultTitle>
        {postData?.length ? (
          <BlogCardGridLayout PostData={postData} />
        ) : (
          <NoResult>
            <span>검색결과가 없습니다.</span>
          </NoResult>
        )}
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
