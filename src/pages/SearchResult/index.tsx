import React from 'react';
import {
  BlogCardGridLayoutWrapper,
  PageBarWrapper,
  SearchResultTitle,
} from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import { LayoutContainer } from '../../styles/layouts';
import { LayoutInner, NoResult } from './styled';
import { useGetSearchPosts } from '../../api/hooks/useGetSearchPost';
import GoogleLoader from '../../components/common/GoogleLoader';
import PageBar from '../../components/common/PageBar';
import { useParams, useSearchParams } from 'react-router-dom';

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { postContent } = useParams();
  const { postListDataLoading, postListData } = useGetSearchPosts(postContent!);
  const page = parseInt(searchParams.get('page') ?? '1');
  const handleClick = (page: number) => {
    setSearchParams(`page=${page}`);
  };

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitle>
          <div className="searchResultTitle">
            <h2>{postContent}</h2>
            <h3>를(을) 검색하신 결과입니다.</h3>
          </div>
          <div className="searchResultContent">
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

        <PageBarWrapper>
          <PageBar
            page={page}
            totalPage={postListData?.totalPages ?? 0}
            onClick={handleClick}
          />
        </PageBarWrapper>
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
