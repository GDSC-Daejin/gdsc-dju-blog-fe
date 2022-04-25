import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import { NoPosts } from '../MyBlog/BlogHome/styled';

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentParamsType = categoryName
    ? categoryName.replace('/', '')
    : 'all';
  const currentParamsPageNumber = searchParams.get('page');
  const nowParamsPageNumber = () => {
    return currentParamsPageNumber === null
      ? 0
      : parseInt(currentParamsPageNumber);
  };

  const { postListData } = useGetPostListData(
    currentParamsType,
    nowParamsPageNumber(),
  );

  const handleCategoryMenuNavigation = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };
  const handlePageNavigation = (nowPage: number) => {
    nowPage === nowParamsPageNumber()
      ? null
      : navigate(`/category/${categoryName}?page=${nowPage}`);
  };

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={currentParamsType}
          onClick={handleCategoryMenuNavigation}
        />
        {postListData && (
          <>
            <BlogCardGridLayout PostData={postListData.content} />
            {postListData.empty ? (
              <NoPosts>포스팅된 글이 없습니다</NoPosts>
            ) : (
              <PageBarWrapper>
                <PageBar
                  page={nowParamsPageNumber()}
                  totalPage={postListData.totalPages}
                  // onClick={handlePageNavigation}
                />
              </PageBarWrapper>
            )}
          </>
        )}
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
