import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { BlogCardGridLayoutWrapper, SearchResultTitle } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import { LayoutContainer } from '../../styles/layouts';
import { DetailPostDataType } from '../../types/postData';
import { LayoutInner, NoResult } from './styled';
import { useParams } from 'react-router';

const SearchResult = () => {
  const [postData, setPostData] = useState<DetailPostDataType[]>();
  const { title } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://gdsc-dju.kro.kr/api/v1/post/search/${title}`,
      );
      const SearchResultPost = response.data.body.data;
      setPostData((prev) => {
        return SearchResultPost.content ?? [];
      });
    })();
  }, [title]);

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitle>
          <h2>{title}</h2>
          <h3>를(을) 검색하신 결과입니다.</h3>
        </SearchResultTitle>
        <BlogCardGridLayoutWrapper>
          {postData && postData?.length ? (
            <BlogCardGridLayout PostData={postData} />
          ) : (
            <NoResult>
              <span>검색결과가 없습니다.</span>
            </NoResult>
          )}
        </BlogCardGridLayoutWrapper>
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
