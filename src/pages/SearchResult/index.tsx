import React from 'react';
import { BlogCardGridLayoutWrapper, SearchResultTitle } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import { LayoutContainer } from '../../styles/layouts';
import { LayoutInner, NoResult } from './styled';
import { useParams } from 'react-router';
import { useGetSearchPosts } from '../../api/hooks/useGetSearchPost';
import GoogleLoader from '../../components/common/GoogleLoader';

const SearchResult = () => {
  const { postContent } = useParams();
  const { postListDataLoading, postListData } = useGetSearchPosts(postContent!);

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitle>
          <div className="searchResultTitle">
            <h2>{postContent}</h2>
            <h3>를(을) 검색하신 결과입니다.</h3>
          </div>
          <div className="searchResult">
            <span>{postListData?.content.length}개의 검색결과가 있습니다</span>
          </div>
        </SearchResultTitle>
        <BlogCardGridLayoutWrapper>
          {!postListDataLoading ? (
            postListData?.content.length ? (
              <BlogCardGridLayout PostData={postListData.content} />
            ) : (
              <NoResult>
                <span>검색결과가 없습니다.</span>
              </NoResult>
            )
          ) : (
            <GoogleLoader />
          )}
        </BlogCardGridLayoutWrapper>
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
