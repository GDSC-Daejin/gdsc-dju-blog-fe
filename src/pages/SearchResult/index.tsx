import React from 'react';
import { BlogCardGridLayoutWrapper, SearchResultTitle } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import { LayoutContainer } from '../../styles/layouts';
import { LayoutInner, NoResult } from './styled';
import { useParams } from 'react-router';
import { useGetSearchPosts } from '../../api/hooks/useGetSearchPost';

const SearchResult = () => {
  const { postContent } = useParams();
  const { postListDataLoading, postListData } = useGetSearchPosts(postContent!);

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitle>
          <h2>{postContent}</h2>
          <h3>를(을) 검색하신 결과입니다.</h3>
        </SearchResultTitle>
        <BlogCardGridLayoutWrapper>
          {!postListDataLoading && postListData?.content.length ? (
            <BlogCardGridLayout PostData={postListData.content} />
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
