import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentParamsType = params.categoryName
    ? params.categoryName.replace('/', '')
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
      : navigate(`/category/${params.categoryName}?page=${nowPage}`);
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
              <h3>해당 페이지에 문제가 발생했습니다..!</h3>
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
